import React from "react";

const FloatingDivKiri = ({ image, text1, text2 }) => {
  return (
    <div className="flex flex-row w-full z-10  font-bold ">
      <div className="floating-div bg-gradient-to-r from-red-500 to-purple-500 shadow-xl shadow-gray-700  flex z-10 items-center  justify-center  h-16 w-40 px-3 rounded-3xl ">
        <img src={image} alt="" className="h-16" />
        <span className="text-white ">
          {text1} <br /> {text2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDivKiri;
