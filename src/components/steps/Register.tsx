import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Register() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col text-center mb-4 mx-4">
        <p className="text-3xl">💁‍♂️</p>
        <h1 className="text-2xl font-medium">What's your full name?</h1>
        <p>People use real names on Clubhouse! Thnx:)</p>
      </div>
      <div className="bg-white rounded-xl max-w-96 py-14 mx-8 px-8 flex flex-col items-center text-center shadow-md">
        <input
          type="text"
          className="px-4 py-2 border rounded-2xl mb-6"
          placeholder="Enter your name"
        />
        <button className="rounded-xl bg-[#1DA1F2] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700">
          Next
          <FaArrowRight className="mx-2" />
        </button>
      </div>
    </div>
  );
}

export default Register;
