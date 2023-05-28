import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "/server/.env",
});

import "./cors/db";
import { passport } from "./cors/passport";

const PORT = process.env.PORT;
const app: Express = express();

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req: Request, res: Response) => {
    res.send();
  }
);

app.listen(PORT || 3333, async () => {
  console.log("runned");
});
