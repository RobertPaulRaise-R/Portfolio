function AboutMe() {
  return (
    <div className="grid grid-cols-8 border-b-2 border-black">
      <div className="col-span-2 border-r-2 border-black p-3">
        <h2 className="side-heading">About Me</h2>
      </div>
      <div className="col-span-6 bg-purple-900 p-5 lg:p-7">
        <h1 className="oswald text-5xl uppercase text-white mix-blend-overlay md:text-7xl">
          Turning your thinking into reality
        </h1>
        <p className="mt-3 text-sm font-extralight text-white">
          {`
          Hello! I'm a passionate Front-End Developer from Chennai, Tamil Nadu. With a keen eye for design and a love for creating interactive, user-friendly web applications.
          With a solid foundation in HTML, CSS, JavaScript and React, I bring creative
          concepts to life while ensuring a seamless user experience.`}
        </p>
        <a
          href="#"
          className="mt-5 inline-block rounded-3xl bg-black px-5 py-3 font-bold text-purple-600"
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
