import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <header
        id="navbar"
        className={`bg-transparent  backdrop-blur-md bg-opacity-70 fixed flex items-center ease-in-out lg:justify-center lg h-24 left-0 top-0 w-full z-10`}
      >
        <div className="container lg:w-10/12">
          <div className="flex items-center justify-between relative lg:container lg:flex lg:mx-auto">
            <div className="px-4">
              <a
                href="#home"
                className="font-extrabold text-xl lg:text-3xl text-primary block py-6"
              >
                Escape Code~
              </a>
            </div>

            <div className="px-4 items-center flex">
              <button
                id="btn"
                name="btn-hamburger "
                type="button"
                className={` block lg:hidden absolute right-4
                  ${isActive ? " " : "active "}`}
                onClick={() => setIsActive(!isActive)}
              >
                <Hamburger />
                <Hamburger />
                <Hamburger />
              </button>

              <nav
                id="nav-menu"
                className={`w-full right-4 lg:flex  top-full lg:max-w-full lg:static lg:bg-primary lg:shadow-none lg:rounded-3xl  absolute
                  ${
                    isActive
                      ? " hidden "
                      : "absolute   bg-primary mt-2 left-1  right-1 shadow-2xl rounded-lg  w-full top-full  duration-500 ease-in-out transition-all"
                  }`}
              >
                <NavMenu href={"#banner"} list={"Home"} />
                <NavMenu href={"#about"} list={"About"} />
                <NavMenu href={"#skills"} list={"Skills"} />
                <NavMenu href={"#projects"} list={"Projects"} />
                <NavMenu href={"#contact"} list={"Contact Me"} />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
