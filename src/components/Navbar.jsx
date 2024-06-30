import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b-2 border-black">
      <div className="flex h-full gap-1 border-r-2 border-black p-5">
        <a target="_blank" href="https://www.instagram.com/">
          <FaLinkedin />
        </a>
        <PiInstagramLogoFill />
      </div>
      <div>
        <h3 className="text-sm font-medium">Robert Paul Raise</h3>
      </div>
      <div className="flex h-full items-center gap-2 border-l-2 border-black p-5">
        <p className="text-xs">Menu</p>
        <CgMenuGridO className="rounded-full bg-purple-600" />
      </div>
    </nav>
  );
}

export default Navbar;
