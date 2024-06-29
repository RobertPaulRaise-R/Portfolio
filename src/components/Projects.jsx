import ProjectTab from "./ProjectTab";

function Projects() {
  return (
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
  );
}

export default Projects;
