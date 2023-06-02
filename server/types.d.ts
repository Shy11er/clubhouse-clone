import { UserData } from "@/redux/slice/main";

declare global {
  namespace Express {
    interface User extends UserData {}
  }
}
