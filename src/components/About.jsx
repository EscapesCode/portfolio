import React from 'react'
// import Avatar2 from "../assets/Avatar2.png";
// import Title from "./Title";
// import Button from './Button';
import Medsos from './Medsos';

export default function About() {
  return (
    <>
      <section id="about" className="mt-20 lg:mt-40 bg-slate-300 rounded-xl py-20 mx-4">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full px-4 mb-10  lg:w-1/2 md:w-1/2">
              <h4 className="text-primary uppercase font-bold text-center mb-2 text-lg lg:text-2xl  ">
                About Me
              </h4>
              <h2 className="font-semibold text-dark text-2xl mb-5 lg:text-4xl md:text-3xl ">
                Iam a Professional Web developer :)
              </h2>
              <p className="text-slate-500 font-medium text-base max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sapiente qui earum architecto voluptate repudiandae.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 md:w-1/2">
              <h3 className="font-bold text-xl mb-2 max-w-xl lg:text-3xl lg:pt-10 md:pt-10 md:text-2xl ">
                Text Me Anything ;)
              </h3>
              <p className="text-slate-400 mb-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque reiciendis tempora cumque unde esse beatae?
              </p>
              <Medsos/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
