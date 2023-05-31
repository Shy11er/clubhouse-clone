import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar, setStep, stepSelector } from "@/redux/slice/main";

import Avatar from "../Avatar";
import StepButton from "../StepButton";

const CongratStep: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { avatarUrl } = useSelector(stepSelector);
  const [url, setUrl] = React.useState(avatarUrl);

  const { name } = useSelector(stepSelector);
  const dp = useDispatch();

  const onNextStep = () => {
    dp(setStep(4));
  };

  const handleChangeImage = (e: Event): void => {
    if (e.target) {
      const file = (e.target as any).files[0];
      const imageUrl = URL.createObjectURL(file);
      dp(setAvatar(imageUrl));
      setUrl(imageUrl);
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", handleChangeImage);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="text-4xl mb-2">🎉</p>
      <div className="flex flex-col text-center mb-8 items-center mx-4">
        <h1 className="text-xl font-bold">Okay, {name}!</h1>
        <p>How`s this photo?</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <div className="mb-6 flex items-center flex-col mx-12">
          <Avatar fullName={name} imageUrl={url} isUserAvatar={false} />
          <form method="post">
            <label className="relative inline-block">
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                ref={inputRef}
                className="absolute z-[-1] opacity-0 block w-0 h-0"
              />
              <span className="relative inline-block cursor-pointer outline-none text-cyan-700 text-xl hover:text-black">
                Сhoose avatar
              </span>
            </label>
          </form>
        </div>
        <StepButton
          onClick={() => onNextStep()}
          isDisabled={false}
          title="Next"
          img={<FaArrowRight className="mx-2" />}
        />
      </div>
    </div>
  );
};

export default CongratStep;
