import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const handleCheckAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(req.headers);
  if (token) {
    return jwt.verify(token, "asfasfdssd", function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token.",
        });
      }
      req.user = decoded;
      return next();
    });
  }
  return res.json({
    unauthorized: true,
  });
  if (token) {
    try {
      const decoded = jwt.verify(token, "asfasfdssd");

      next();
    } catch (err) {
      console.log(err);
      return res.status(404).json({ message: "Can't get the user token" });
    }
  } else {
    return res.status(403).json({
      message: "No access",
    });
  }
};

export default handleCheckAuth;
