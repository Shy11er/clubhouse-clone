import jwt from "jsonwebtoken";
import { UserData } from "./types";

export const createJwtToken = (user: UserData): string => {
  const token = jwt.sign(
    {
      data: user,
    },
    "asfasfdssd",
    { expiresIn: "30d", algorithm: "HS256" }
  );

  return token;
};
