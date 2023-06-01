import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import session from "express-session";
import multer from "multer";
import cors from "cors";
import axios from "axios";

dotenv.config({
  path: "/server/.env",
});

import Code from "../models/code";
import "./cors/db";
import { passport } from "./cors/passport";
import { UserData } from "@/redux/slice/main";
import { Axios } from "../core/axios";

declare global {
  namespace Express {
    interface User extends UserData {}
  }
}

const app: Express = express();
app.use(cors());

const PORT = process.env.PORT;
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "public/avatars");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage });

app.use(
  session({
    secret: "keyboard key",
    resave: false,
    cookie: { secure: true },
  })
);
app.use("/upload", express.static("uploads"));
app.use(passport.initialize());

app.post("/upload", uploader.single("photo"), (req, res) => {
  res.json({ url: `/avatars/${req.file.filename}` });
});
app.post("/auth/sms", passport.authenticate("jwt", { session: false}), async (req, res) => {
  const phone = req.body.phone;
  const userId = req.user.id;

  const axios = require("axios");

  if (!phone) {
    return res.status(400).json({
      message: "Phone number is not defined!",
    });
  }

  const options = {
    method: "GET",
    url: "https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp",
    params: {
      // number: `+${phone}`,
      number: `+79871169415`,
      country: "RU",
    },
    headers: {
      "X-RapidAPI-Key": "fbca8a04f8msh354fe5934e12c41p1345bdjsndfb2375ea4c9",
      "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com",
    },
  };

  try {
    await axios.request(options);

    await Code.create({
      code: Math.floor(Math.random() * (9999 - 1001)) - 1000,
      user_id: userId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to send SMS-code",
    });
  }
});

app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req: Request, res: Response) => {
    res.send(
      `"<script>window.opener.postMessage('${JSON.stringify(
        req.user
      )}', '*');window.close();</script>"`
    );
  }
);

app.listen(PORT || 3333, () => {
  console.log(`server runned in port: ${PORT}`);
});
