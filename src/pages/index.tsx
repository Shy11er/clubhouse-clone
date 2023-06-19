import React from "react";
import { useSelector } from "react-redux";

import Welcome from "../components/steps/Welcome";
import PhoneStep from "@/components/steps/PhoneStep";
import Register from "@/components/steps/Register";
import GitHubStep from "@/components/steps/GitHubStep";
import CongratStep from "@/components/steps/CongratStep";
import PhoneActivate from "@/components/steps/PhoneActivate";

import { stepSelector } from "@/redux/slice/main";
import { CheckAuth } from "../../utils/checkAuth";
import { Api } from "../../api/";
import { GetServerSidePropsContext } from "next";

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
  // let temporaryStep: number = 0;
  // let temporaryStep = null;
  // if (typeof window !== "undefined") {
  //   temporaryStep = parseInt(window.localStorage.getItem("step"));
  // }

  const Step = steps[step];

  return (
    <div>
      <Step />
    </div>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
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
