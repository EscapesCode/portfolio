import React from 'react'

export default function Title({primary,secondary}) {
  return (
    <div className="title flex justify-center  mb-10 items-center flex-col">
      <h3 className="font-bold text-3xl text-slate-200 mb-4">
			{primary} <span className="text-red-500 ">{secondary}</span>
      </h3>
      <div className="hr bottom-6 bg-white w-[30vh] h-1" />
    </div>
  );
}
