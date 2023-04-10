import React from "react";

function PhoneStep() {
  return (
    <div className="w-full h-full flex justify-center items-center text-center">
      <h1 className="text-2xl font-medium mb-6">
        <i className="hand text-2xl">👋</i> Welcome to Clubhouse!
      </h1>
      <div className="bg-white rounded-xl max-w-xl py-20 md:mx-auto mx-8 p-8 flex flex-col items-center text-center">
        <button className="rounded-xl bg-[#6666e4] px-4 py-2 text-gray-100 font-bold text-lg flex items-center hover:drop-shadow-md hover:shadow-indigo-700">
          Get your username!
        </button>
      </div>
    </div>
  );
}

export default PhoneStep;
