import React from "react";

const FloatingDivKanan = ({ image, text1, text2 }) => {
  return (
    <div className="flex flex-row font-bold w-full z-50 justify-end ">
      <div className="floating-div bg-gradient-to-r from-red-500 to bg-purple-500 shadow-xl shadow-gray-700  flex z-40 items-center justify-center  h-16  mx-2 px-4 rounded-3xl ">
        <img src={image} alt="" className="h-16" />
        <span className="text-white ">
          {text1} <br /> {text2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDivKanan;
