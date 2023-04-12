import React from "react";
import Welcome from "../components/steps/Welcome";
import PhoneStep from "@/components/steps/PhoneStep";
import Register from "@/components/steps/Register";
import TwitterStep from "@/components/steps/TwitterStep";
import CongratStep from "@/components/steps/CongratStep";
import PhoneActivate from "@/components/steps/PhoneActivate";

//! STEPS TYPE != any
interface Dict<T> {
  [Key: number]: T;
}

type MainContextType = {
  onNextStep: () => void;
  step: number;
};

const steps: Dict<React.FC<any>> = {
  0: Welcome,
  1: Register,
  2: TwitterStep,
  3: CongratStep,
  4: PhoneStep,
  5: PhoneActivate,
};

export const stepContext = React.createContext<MainContextType>({});

export default function Home() {
  const [step, setStep] = React.useState<number>(0);

  const Step = steps[step];

  return (
    <div>
      <stepContext.Provider value={{ step, setStep }}>
        <Step onNextStep={(step: number) => step++} />

        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
      </stepContext.Provider>
    </div>
  );
}
