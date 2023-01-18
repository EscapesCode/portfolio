import Navbar from "./Navbar";
import React from "react";

function Layout({ children }) {
  return (
    <div className=" font-Poppins  mx-auto lg:container lg:w-10/12 ">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
export default Layout;
