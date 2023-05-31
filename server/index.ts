import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import session from "express-session";
import multer from "multer";
import cors from "cors";

dotenv.config({
  path: "/server/.env",
});

import "./cors/db";
import { passport } from "./cors/passport";

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
  res.json(req.file);
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
