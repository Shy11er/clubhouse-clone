import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PatternFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "../../../core/axios";

import { setPhone, setStep, stepSelector } from "@/redux/slice/main";

import StepButton from "../StepButton";

const PhoneStep: React.FC = () => {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  const { withGithub } = useSelector(stepSelector);
  const dp = useDispatch();

  const onNextStep = async () => {
    try {
      let origPhone: string = "";
      for (let i = 0; i < phoneNum.length; i++) {
        if (/^\d+$/.test(phoneNum[i])) {
          origPhone += phoneNum[i];
        }
      }
      dp(setPhone(origPhone));
      dp(setStep(5));

      if (!withGithub) {
        return await Axios.get(`/auth/sms/nogit?phone=${origPhone}`);
      }
      await Axios.get(`/auth/sms?phone=${origPhone}`);
    } catch (error) {
      return console.warn("Failed in phone step", error);
    }
  };

  const onNumberChange = (inputValue: string) => {
    let s = "";
    for (let i = 0; i < inputValue.length; i++) {
      if (/^\d+$/.test(inputValue[i])) s += inputValue[i];
    }

    if (/^\d+$/.test(s)) setPhoneNum(inputValue);
    if (s.length === 11) setIsDisabled(false);
    else setIsDisabled(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      <p className="text-4xl mb-2">☎️</p>
      <div className="flex flex-col text-center mb-8 items-center mx-4">
        <h1 className="text-xl font-bold">Enter your phone #</h1>
        <p>We will send you a confirmation code</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 py-14 mx-8 p-8 flex flex-col items-center text-center shadow-md">
        <div className="mb-6 flex items-center flex-col mx-12 relative">
          <i className="absolute left-2 top-[9px] ">🇷🇺</i>
          <PatternFormat
            format="+8 (###) ###-##-##"
            value={phoneNum}
            placeholder="+7 (989) 999-44-44"
            onChange={(e) => onNumberChange(e.target.value)}
            mask="_"
            className="px-8 py-2 border rounded-2xl placeholder:text-gray-400 text-xl max-w-[250px] focus:outline-none"
          />
        </div>
        <StepButton
          isDisabled={isDisabled}
          title="Next"
          img={<FaArrowRight className="mx-2" />}
          onClick={() => onNextStep()}
        />
      </div>
    </div>
  );
};

export default PhoneStep;
