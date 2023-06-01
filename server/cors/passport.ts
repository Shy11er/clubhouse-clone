import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import { User } from "../../models";
import { UserData } from "@/redux/slice/main";
import { createJwtToken } from "../utils/createJwtToken";

dotenv.config({ path: "./server/.env" });

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY_JWT,
};

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    done(null, jwt_payload);
  })
);

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
        let userData: UserData;

        const obj: Omit<UserData, "id"> = {
          fullname: profile.displayName,
          avatarUrl: profile.photos?.[0].value,
          isActive: 0,
          username: profile.username,
          phone: "",
        };

        obj.token = createJwtToken(obj);

        const findUser = await User.findOne({
          where: {
            username: obj.username,
          },
        });

        if (!findUser) {
          const user = await User.create(obj);
          userData = user.toJSON();
        } else {
          userData = await findUser.toJSON();
        }

        console.log({
          ...userData,
          token: createJwtToken(userData),
        });

        done(null, { ...userData, token: createJwtToken(userData) });
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
