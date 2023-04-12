import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";
import { stepContext } from "@/pages";

const Welcome: React.FC = () => {
  const setStep = React.useContext(stepContext);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white rounded-xl max-w-xl py-20 md:mx-auto mx-8 p-8 flex flex-col items-center text-center shadow-md">
        <h1 className="text-2xl font-medium mb-6">
          <i className="hand text-2xl">👋</i> Welcome to Clubhouse!
        </h1>
        <p className="w-full mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolor
          deserunt nemo, delectus quisquam, omnis eius dolore quibusdam, dolores
          rerum ratione nulla voluptatibus dignissimos tenetur perferendis!
          Porro nulla quam inventore cupiditate ipsa.
        </p>
        <Button
          isDisabled={false}
          title="Get your username!"
          img={<FaArrowRight className="mx-2" />}
          onClick={() => setStep(1)}
        />
      </div>
    </div>
  );
};

export default Welcome;
