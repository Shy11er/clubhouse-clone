import { setStep, UserData, setData } from "@/redux/slice/main";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import Avatar from "../Avatar";
import StepButton from "../StepButton";

const GitHubStep: React.FC = () => {
  const dp = useDispatch();

  const onClickAuth = () => {
    const win = window.open(
      "http://localhost:3333/auth/github/",
      "Auth",
      "toolbar=no,location=no,status=no,menubar=no,resizable=yes,width=500,height=500"
    );

    const timer = setInterval(() => {
      if (win.closed) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const onNextStep = (data) => {
    dp(setStep(data));
  };

  React.useEffect(() => {
    window.addEventListener("message", (data) => {
      const obj: UserData = JSON.parse(data.data);
      console.log(obj);
      if (Cookies.get("token"))
        Cookies.remove("token", { path: "/", domain: "localhost" });

      Cookies.set("token", obj.token);
      // dp(setUserName(obj.username));
      // dp(setAvatar(obj.avatarUrl));
      dp(setData(obj));
      onNextStep(2);
    });
  }, []);

  return (
    <>
      <div className="w-full h-full inline-flex flex-col justify-center items-center">
        <div className="flex flex-col text-center mb-8 items-center mx-4">
          <AiFillGithub className="w-14 h-14 fill-[#160d0d]" />
          <h1 className="text-xl font-bold">
            Do you want import info from GitHub?
          </h1>
        </div>
        <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
          <div className="mb-12 flex items-center flex-col mx-12">
            <Avatar fullName={"Daniel Brekker"} isUserAvatar={false} />
            <h1 className="text-2xl font-medium">{"Daniel Brekker"}</h1>
          </div>
          <StepButton
            isDisabled={false}
            onClick={onClickAuth}
            title="Import from GitHub"
            img={
              <AiFillGithub
                style={{ fill: "white", marginRight: "4px", fontSize: "20px" }}
              />
            }
          />
          <p
            onClick={() => onNextStep(2)}
            className="mt-1 text-cyan-800 hover:text-cyan-600 cursor-pointer"
          >
            Continue without github
          </p>
        </div>
      </div>
    </>
  );
};

export default GitHubStep;
