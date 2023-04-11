import React, { ChangeEvent } from "react";
import Avatar from "../Avatar";

type Props = {
  fullName: string;
};

const defaultProps = {
  fullName: "Daniel Brekker",
};

export default function CongratStep({ fullName }: Props) {
  const [file, setFile] = React.useState<File>();

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  console.log(file);
  const handleUpload = () => {
    if (!file) return;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="text-4xl mb-2">🎉</p>
      <div className="flex flex-col text-center mb-8 items-center mx-4">
        <h1 className="text-xl font-bold">Okay, {fullName}!</h1>
        <p>How's this photo?</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 sm:w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <div className="mb-12 flex items-center flex-col mx-12">
          <Avatar fullName={fullName} />
          <form method="post">
            <label className="relative inline-block">
              <input
                type="file"
                name="file"
                className="absolute z-[-1] opacity-0 block w-0 h-0"
                onChange={handleChangeFile}
              />
              <span className="relative inline-block cursor-pointer outline-none text-cyan-700 text-xl hover:text-black">
                Set avatar
              </span>
            </label>
          </form>
        </div>
        <button className="rounded-xl bg-[#1DA1F2] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700">
          Next
        </button>
      </div>
    </div>
  );
}

CongratStep.defaultProps = defaultProps;
