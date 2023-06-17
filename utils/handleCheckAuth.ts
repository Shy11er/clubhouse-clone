import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const handleCheckAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization.replace("Bearer", "").trim();

  if (token) {
    jwt.verify(token, "asfasfdssd", function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token.",
        });
      }
      req.user = { data: decoded?.data };
      console.log(req);
      next();
    });
  }
};

export default handleCheckAuth;
