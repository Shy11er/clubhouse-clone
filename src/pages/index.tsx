import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import Welcome from "../components/steps/Welcome";
import PhoneStep from "@/components/steps/PhoneStep";
import Register from "@/components/steps/Register";
import GitHubStep from "@/components/steps/GitHubStep";
import CongratStep from "@/components/steps/CongratStep";
import PhoneActivate from "@/components/steps/PhoneActivate";

import { setData, setStep, stepSelector } from "@/redux/slice/main";
import { Axios } from "../../core/axios";
import { CheckAuth } from "../../utils/checkAuth";
interface Dict<T> {
  [Key: number]: T;
}

const steps: Dict<React.FC> = {
  0: Welcome,
  1: GitHubStep,
  2: Register,
  3: CongratStep,
  4: PhoneStep,
  5: PhoneActivate,
};

export default function Home() {
  const { step } = useSelector(stepSelector);
  // const dp = useDispatch();
  // const token = Cookies.get("token");
  // React.useEffect(() => {
  //   if (token) {
  //     (async () => {
  //       const data = await Axios.get("/auth/me");
  //       console.log(data.data.data);
  //     })();
  //   }
  // }, []);
  const Step = steps[step];

  return (
    <div>
      <Step />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const user = await CheckAuth(ctx);

    if (user) {
      return {
        redirect: {
          destination: "/rooms",
          permanent: false,
        },
        props: {},
      };
    }
  } catch (error) {}

  return {
    props: {},
  };
};
