import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b-2 border-black lg:h-20">
      <div className="flex h-full items-center gap-1 border-r-2 border-black p-5">
        <a target="_blank" href="https://www.instagram.com/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <PiInstagramLogoFill />
        </a>
      </div>
      <div>
        <h3 className="text-sm font-medium uppercase md:text-lg lg:text-xl">
          Robert Paul Raise
        </h3>
      </div>
      <div className="flex h-full items-center gap-2 border-l-2 border-black p-5">
        <p className="text-xs md:text-sm lg:text-base">Menu</p>
        <div className="rounded-full bg-purple-600 p-1">
          <CgMenuGridO />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
