import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";
import { PatternFormat } from "react-number-format";

const PhoneStep: React.FC = () => {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

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
          <i className="absolute left-2 top-2">🇷🇺</i>
          <PatternFormat
            format="+8 (###) ###-##-##"
            allowEmptyFormatting
            value={phoneNum}
            onChange={(e) => onNumberChange(e.target.value)}
            mask="_"
            className="px-8 py-2 border rounded-2xl placeholder:text-gray-400 max-w-[250px]"
          />
        </div>
        <Button
          isDisabled={isDisabled}
          title="Next"
          img={<FaArrowRight className="mx-2" />}
          onClick={() => console.log("first")}
        />
      </div>
    </div>
  );
};

export default PhoneStep;
