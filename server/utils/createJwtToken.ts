import jwt from "jsonwebtoken";
import { reduce } from "lodash";
import dotenv from "dotenv";
import { UserData } from "@/redux/slice/main";

dotenv.config({ path: "/server/.env" });

export const createJwtToken = (user: UserData): string => {
  const token = jwt.sign(
    {
      data: user,
    },
    process.env.SECRET_KEY_JWT || "",
    { expiresIn: "30d", algorithm: "HS256" }
  );

  return token;
};
