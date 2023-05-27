import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/test", (req: Request, res: Response) => {
  res.send("Done");
});

app.listen(3333, () => {
  console.log("object");
});
