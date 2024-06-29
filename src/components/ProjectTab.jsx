const projects = [
  {
    name: "Task Manager",
    img: "https://s3-alpha.figma.com/hub/file/2079260836/bb2492af-c1dd-43b7-9702-41ef03ef2682-cover.png",
  },
  {
    name: "Comic Creator",
    img: "https://s3-alpha.figma.com/hub/file/2079260836/bb2492af-c1dd-43b7-9702-41ef03ef2682-cover.png",
  },
];

function ProjectTab() {
  return (
    <div className="grid grid-cols-6">
      {projects.map((p) => {
        <div key={p.name}>
          <div className="oswald col-span-3 flex h-28 w-full items-center justify-center border-b-2 border-black bg-pink-300 text-2xl md:text-4xl lg:text-5xl">
            {p.name}
          </div>
          <div className="col-span-3">
            <img src={p.img} alt={p.name} />
          </div>
          ;
        </div>;
      })}
    </div>
  );
}

export default ProjectTab;

// "oswald col-span-3 flex h-28 w-full items-center justify-center border-b-2 border-black bg-pink-300 text-2xl md:text-4xl lg:text-5xl"
