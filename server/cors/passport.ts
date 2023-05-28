import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github";
import dotenv from "dotenv";

dotenv.config({ path: "./server/.env" });
passport.use(
  "github",
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackUrl: "http://localhost:3333/auth/github/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      const user = {
        fullName: profile.displayName,
        avatarUrl: profile.photos?.[0].value,
      };
      cb();
    }
  )
);

export { passport };
