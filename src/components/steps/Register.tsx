import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import StepButton from "../StepButton";

import { setStep, stepSelector, setFullName } from "@/redux/slice/main";
import { UserApi } from "../../../api/UserApi";
import { Axios } from "../../../core/axios";
import Cookies from "js-cookie";

const Register: React.FC = () => {
  const { fullname, withGithub, avatarUrl } = useSelector(stepSelector);
  const [usName, setUsName] = React.useState<string>(fullname || "");

  const dp = useDispatch();

  const nameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUsName(ev.target.value);
  };

  const onNextStep = async () => {
    if (!withGithub) {
      try {
        const data = {
          fullname: usName,
          avatarUrl,
          username: "test",
        };

        const obj = await UserApi(Axios).register(data);
        if (Cookies.get("token"))
          Cookies.remove("token", { path: "/", domain: "localhost" });

        Cookies.set("token", obj.token);
      } catch (error) {
        alert("Failed with registration");
      }
    }
    dp(setStep(3));
    dp(setFullName(usName));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col text-center mb-4 mx-4">
        <p className="text-3xl">💁‍♂️</p>
        <h1 className="text-2xl font-medium">What`s your full name?</h1>
        <p>People use real names on Clubhouse! Thnx:)</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <input
          type="text"
          className="px-4 py-2 border rounded-2xl mb-6"
          placeholder="Enter your name"
          value={usName}
          onChange={(e) => nameChange(e)}
        />
        <StepButton
          isDisabled={usName.length <= 3}
          title="Next"
          img={<FaArrowRight className="mx-2" />}
          onClick={() => onNextStep()}
        />
      </div>
    </div>
  );
};

export default Register;
