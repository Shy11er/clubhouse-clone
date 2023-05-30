import React from "react";
import { useSelector } from "react-redux";

import Welcome from "../components/steps/Welcome";
import PhoneStep from "@/components/steps/PhoneStep";
import Register from "@/components/steps/Register";
import GitHubStep from "@/components/steps/GitHubStep";
import CongratStep from "@/components/steps/CongratStep";
import PhoneActivate from "@/components/steps/PhoneActivate";

import { stepSelector } from "@/redux/slice/main";
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
  const Step = steps[step];

  return (
    <div>
      <Step />
    </div>
  );
}
