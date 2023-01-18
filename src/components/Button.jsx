import React from "react";

const Button = ({text}) => {
  return (
    <button className="bg-gradient-to-r duration-300 from-red-500 to-purple-500 px-5 py-3 rounded-full text-gray-200 font-bold hover:scale-105 hover:bg-gradient-to-l hover:outline hover:bg-clip-text hover:from-red-500 hover:to-purple-500 hover:text-transparent hover:to hover:outline-purple-500 hover:font-extrabold  ">
      {text}
    </button>
  );
};

export default Button;
