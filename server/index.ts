import express, { Express } from "express";
import dotenv from "dotenv";
import session from "express-session";
import multer from "multer";
import cors from "cors";
import "./cors/db";
import { passport } from "./cors/passport";
import bodyParser from "body-parser";

import AuthController from "./controllers/AuthController";
import RoomController from "./controllers/RoomController";
import { storage } from "./controllers/Uploader";

dotenv.config({
  path: "/server/.env",
});

const PORT = process.env.PORT;
const app: Express = express();
const uploader = multer({ storage });

app.use(cors());
app.use(
  session({
    secret: "keyboard key",
    resave: false,
    cookie: { secure: true },
  })
);
app.use("/upload", express.static("uploads"));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/upload", uploader.single("photo"), (req, res) => {
  res.json({ url: `/avatars/${req.file.filename}` });
});
app.get(
  "/auth/sms",
  passport.authenticate("jwt", { session: false }),
  AuthController.sendSMS
);

app.get(
  "/auth/sms/activate",
  passport.authenticate("jwt", { session: false }),
  AuthController.activate
);
app.get(
  "/auth/me",
  passport.authenticate("jwt", { session: false }),
  AuthController.getMe
);
app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  AuthController.authCallback
);

//! POSTS
app.get(
  "/rooms",
  passport.authenticate("jwt", { session: false }),
  RoomController.getRooms
);
app.post(
  "/rooms",
  passport.authenticate("jwt", { session: false }),
  RoomController.create
);
app.get(
  `/rooms/:id`,
  passport.authenticate("jwt", { session: false }),
  RoomController.show
);
app.delete(
  "/rooms/:id",
  passport.authenticate("jwt", { session: false }),
  RoomController.delete
);

app.listen(PORT || 3333, () => {
  console.log(`server runned in port: ${PORT}`);
});
