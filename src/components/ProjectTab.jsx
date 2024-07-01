import { useState } from "react";

const projects = [
  {
    name: "Task Manager",
    color: "bg-blue-200",
    img: "https://s3-alpha.figma.com/hub/file/2079260836/bb2492af-c1dd-43b7-9702-41ef03ef2682-cover.png",
  },
  {
    name: "Comic Creator",
    color: "bg-pink-200",
    img: "https://i.pinimg.com/236x/82/f5/97/82f5970eae8da8666c49d0de5e0bcc13.jpg",
  },
  {
    name: "Receipe Finder",
    color: "bg-stone-200",
    img: "https://cdn.dribbble.com/userupload/12760700/file/original-ad1edc29f60c7d25700fc5b225cb21ab.png?resize=400x0",
  },
  {
    name: "Monopoly",
    color: "bg-amber-200",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*iN_5Cjh7oTC63P2TImkbXQ.jpeg",
  },
];

function ProjectTab() {
  const [current, setCurrent] = useState(3);

  return (
    <div className="grid grid-cols-6 grid-rows-4">
      {projects.map((p, i) => (
        <div
          onClick={() => setCurrent(i)}
          key={p.name}
          className={`col-span-3 ${p.color} col-start-1 row-span-1 flex h-24 items-center justify-center border-black py-5 last:border-none [&:not(:nth-last-child(-n+2))]:border-b-2`}
        >
          <p className="oswald text-xl md:text-2xl lg:text-3xl">{p.name}</p>
        </div>
      ))}
      <div className="col-span-3 col-start-4 row-span-4 row-start-1 flex items-center justify-center border-l-2 border-black">
        <img
          src={projects[current].img}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export default ProjectTab;
