import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github";
import dotenv from "dotenv";
import { User } from "../../models";

dotenv.config({ path: "./server/.env" });

passport.use(
  "github",
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackUrl: "http://localhost:3333/auth/github/callback",
    },
    async (_: unknown, __: unknown, profile, done) => {
      try {
        const obj = {
          fullName: profile.displayName,
          avatarUrl: profile.photos?.[0].value,
          isActive: 0,
          username: profile.username,
          phone: "",
        };

        const findUser = await User.findOne({
          where: {
            username: obj.username,
          },
        });

        if (!findUser) {
          const user = await User.create(obj);

          return done(null, user.toJSON());
        }

        done(null, findUser);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    err ? done(err) : done(null, user);
  });
});
export { passport };
