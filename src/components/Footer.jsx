const Footer = () => {
  return (
    <footer id="footer" className=" bg-dark pt-24 pb-12 ">
      <div className="container lg:w-10/12  ">
        <div className=" flex flex-col md:flex md:flex-row">
          <div className="px-4 lg:flex lg:justify-center lg:items-center w-full mb-12 font-medium text-white md:w-full">
            <h2 className="font-bold text-4xl mb-5 ">Escape Code~</h2>
          </div>
          <div className="w-full px-4 mb-12">
            <div className="text-white   md:w-2/10">
              <h3 className="font-bold text-2xl mb-3">Contact Me</h3>
              <a href="#">fikronajiah123@gmail.com</a>
              <p>Dusun Kemang-Kuning</p>
              <p>Kec.LOPOK , Kab.SUMBAWA</p>
            </div>
          </div>
          <div className="w-full  text-white mb-12 px-4 md:w-2/10">
            <h3 className="font-bold text-2xl mb-3">Category</h3>

            <ul>
              <li>
                <a href="#home" className="inline-block text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#contact " className="inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full   text-white mb-12 px-4 md:w-2/10">
            <h3 className="font-bold text-2xl mb-3">Lorem Ipsum</h3>

            <ul>
              <li>
                <a href="#home" className="inline-block text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#contact " className="inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mb-5 md:w-full rounded-full w-10/12 mx-auto">
		</div>
		<div className="mx-auto flex justify-center">
			<p className="text-white">Made With ❤️ by <a href="" className="text-primary font-bold">Fiqro Najiah</a></p>
		</div>
      </div>
    </footer>
  );
};

export default Footer;
