import Avatar from "../assets/Avatarfix.png";
import FloatingDivKanan from "./FloatingDivKanan";
import FloatingDivKiri from "./FloatingDivKiri";
import Mahkota from "../assets/instagram.svg";
import Button from "./Button";
// import Blob from "../assets/blob.svg"
export default function Banner() {
  return (
    <section id="banner" className="pt-32">
      <div className="flex flex-wrap lg:flex-row mx-auto container  ">
        <div className="w-full  md:w-1/2 lg:mt-24 self-center px-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-center ">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Hi There , Iam
            <span className="block  font-extrabold text-dark text-4xl lg:text-5xl">
              Fiqro Najiah
            </span>
          </h1>
          <h2 className="text-slate-500 text-lg mb-3 lg:2xl">
            Fullstack Developer And Ui/UX Designer
          </h2>
          <p className="font-medium leading-relaxed text-slate-400 mb-2 lg:mb-6 ">
            "Iam here to help you to make your dream come true"
          </p>
          <div className="flex mt-0 pt-0 lg:justify-start justify-center ">
            <a
              href="#contact"
              className="font-semibold text-base bg-primary text-white px-8 py-3 rounded-full hover:shadow-xl hover:opacity-90 transition-all ease-in-out duration-300  w-full text-center md:w-2/4  "
            >
              Contact Me
            </a>
          </div>

        </div>

        <div className="w-full self-end px-4 lg:w-1/2  lg:block md:w-1/2  ">
          <div className=" avatar lg:mt-0 lg:right-0  ">
            <img src={Avatar} alt="" className=" lg:mx-10 h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
