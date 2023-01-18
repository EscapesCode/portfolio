const ContactMe = () => {
  return (
    <section id="contact" className="mt-20 lg:mt-40 pb-32">
      <div className="container">
        <div className="w-full px-4 mb-8">
          <div className="max-w-xl mx-auto text-center ">
            <h4 className="text-primary font-bold lg:mb-5 lg:text-2xl">
              CONTACT ME
            </h4>
            <h2 className="font-semibold lg:text-5xl text-2xl text-dark mb-4  ">
              Contact Me Via Email :
            </h2>
            <p className="text-slate-400 font-medium md:text-lg ">
              Setiap komentar dan masukan dari anda adalah pelajaran berharga
              bagi saya :)
            </p>
          </div>
        </div>

        <form action="#">
          <div className="lg:w-2/3 w-full mx-auto">
          	<div className="w-full mb-4 px-4">
          	  <label htmlFor="name" className="text-base text-primary font-bold ">
          	    Nama :
          	  </label>
          	  <input
          	    type="text"
          	    id="name"
          	    className="w-full bg-slate-300 text-dark rounded-md px-2 py-1 focus:outline-none focus:border-primary focus:ring-primary focus:ring-2 font-semibold lg:mt-2"
          	  />
          	</div>
          	<div className="w-full mb-4 px-4">
          	  <label htmlFor="email" className="text-base text-primary font-bold">
          	    E-Mail :
          	  </label>
          	  <input
          	    type="email"
          	    id="email"
          	    className="w-full bg-slate-300 text-dark rounded-md px-2 py-1 focus:outline-none focus:border-primary focus:ring-primary focus:ring-2 font-semibold
          				  lg:mt-2"
          	  />
          	</div>
          	<div className="w-full mb-4 px-4">
          	  <label
          	    htmlFor="message"
          	    className="text-base text-primary font-bold"
          	  >
          	    Anything :)
          	  </label>
          	  <textarea
          	    name="message"
          	    id="message"
          	    cols="20"
          	    rows="10"
          	    className="w-full bg-slate-300 text-dark rounded-md px-2 py-1 focus:outline-none focus:border-primary focus:ring-primary focus:ring-2 h-40 lg:h-52 font-semibold lg:mt-2"
          	  ></textarea>
          	</div>
          	<div className="w-full lg:flex lg:justify-center  px-4">
          	  <button
          	    className="bg-primary font-bold py-3 px-8 text-base w-full rounded-full text-white "
          	    type="submit"
          	  >
          	    Kirim
          	  </button>
          	</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
