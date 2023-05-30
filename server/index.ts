import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import session from "express-session";

dotenv.config({
  path: "/server/.env",
});

import "./cors/db";
import { passport } from "./cors/passport";

const PORT = process.env.PORT;
const app: Express = express();

app.use(
  session({
    secret: "keyboard key",
    resave: false,
    saveUnitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req: Request, res: Response) => {
    res.send(
      `<script>window.opener.postMessage("${JSON.stringify(
        req.user
      )}", "*");window.close();</script>`
    );
  }
);

app.listen(PORT || 3333, async () => {
  console.log("runned");
});
