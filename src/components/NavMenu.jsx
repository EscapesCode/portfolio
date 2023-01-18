import React from 'react'

export default function NavMenu({href,list}) {
  return (
    <ul className="flex justify-center duration-500 ease-in-out  transition-all ">
      <li className="group text-white py-2 cursor-pointer">
        <a
          href={href}
          className="text-base mx-8 flex hover:font-bold hover:text-dark hover:bg-white group-hover:rounded-3xl hover:scale-y-110 hover:scale-x-105 "
        >
          {list}
        </a>
      </li>
    </ul>
  );
}
