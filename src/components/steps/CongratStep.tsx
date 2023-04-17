import React, { ChangeEvent } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setStep } from "@/redux/slice/main";

type Props = {
  fullName: string;
};

const defaultProps = {
  fullName: "Daniel Brekker",
};

const CongratStep: React.FC<Props> = ({ fullName }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [url, setUrl] = React.useState("");

  const dp = useDispatch();

  const onNextStep = () => {
    dp(setStep());
  };

  const handleChangeImage = (e: Event): void => {
    if (e.target) {
      const file = (e.target as any).files[0];
      setUrl(URL.createObjectURL(file));
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
        <h1 className="text-xl font-bold">Okay, {fullName}!</h1>
        <p>How's this photo?</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <div className="mb-6 flex items-center flex-col mx-12">
          <Avatar fullName={fullName} imageUrl={url} />
          <form method="post">
            <label className="relative inline-block">
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                ref={inputRef}
                className="absolute z-[-1] opacity-0 block w-0 h-0"
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeImage(e)}
              />
              <span className="relative inline-block cursor-pointer outline-none text-cyan-700 text-xl hover:text-black">
                Сhoose avatar
              </span>
            </label>
          </form>
        </div>
        <Button
          onClick={() => onNextStep()}
          isDisabled={false}
          title="Next"
          img={<FaArrowRight className="mx-2" />}
        />
      </div>
    </div>
  );
};

CongratStep.defaultProps = defaultProps;

export default CongratStep;
