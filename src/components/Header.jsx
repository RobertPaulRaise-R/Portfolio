import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

function Header() {
  return (
    <div className="flex items-center border-b-2 border-black py-24 lg:py-16">
      <div className="showText pl-7 lg:pl-20">
        <h1 className="oswald header-text">Changing the way</h1>

        <h1 className="oswald header-text">products are</h1>

        <div className="flex items-center">
          <h1 className="oswald header-text">built</h1>
          <a className="ml-5 mt-4 flex items-center gap-2 bg-yellow-200 px-3 py-2">
            <button className="">Contact Me</button>
            <BsArrowUpRightCircleFill />
          </a>
        </div>
      </div>
      <div className="absolute -left-10 flex -rotate-90 items-center">
        <HiOutlineArrowLongLeft color="#000" size={30} />
        <p className="text-[10px]">Scroll to explore</p>
      </div>
    </div>
  );
}

export default Header;
