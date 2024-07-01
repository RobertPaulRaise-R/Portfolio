import { BsArrowUpRightCircleFill } from "react-icons/bs";
import ProjectTab from "./ProjectTab";

function Projects() {
  return (
    <>
      <div className="grid grid-cols-8 border-b-2 border-black">
        <div className="col-span-2 border-r-2 border-black p-3">
          <div>
            <h3 className="side-heading">My</h3>
            <h3 className="side-heading">Projects</h3>
          </div>
          <div>
            <a
              href="#"
              className="mt-10 inline-block bg-yellow-200 p-2 text-sm md:ml-5"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-span-6">
          <ProjectTab />
        </div>
      </div>
      <div className="grid h-24 grid-cols-2 border-b-2 border-black text-sm font-semibold uppercase md:text-lg lg:h-28">
        <div className="col-span-1 flex items-center justify-center border-r-2 border-black">
          <a
            href="#"
            className="flex items-center gap-2 border-2 border-black px-5 py-2"
          >
            See all projects
            <BsArrowUpRightCircleFill />
          </a>
        </div>
        <div className="col-span-1 flex items-center justify-center bg-amber-200">
          <a
            href="#"
            className="flex items-center gap-2 bg-purple-500 px-5 py-2"
          >
            Hire Me
            <BsArrowUpRightCircleFill />
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
