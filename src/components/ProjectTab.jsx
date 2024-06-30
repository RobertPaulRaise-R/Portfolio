import { useState } from "react";

const projects = [
  {
    name: "Task Manager",
    img: "https://s3-alpha.figma.com/hub/file/2079260836/bb2492af-c1dd-43b7-9702-41ef03ef2682-cover.png",
  },
  {
    name: "Comic Creator",
    img: "https://i.pinimg.com/236x/82/f5/97/82f5970eae8da8666c49d0de5e0bcc13.jpg",
  },
  {
    name: "Receipe Finder",
    img: "https://cdn.dribbble.com/userupload/12760700/file/original-ad1edc29f60c7d25700fc5b225cb21ab.png?resize=400x0",
  },
  {
    name: "Monopoly",
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
          className="col-span-3 col-start-1 row-span-1 flex h-24 items-center justify-center border-b-2 border-black bg-pink-200 py-5 last:border-b-0"
        >
          <p className="oswald text-xl">{p.name}</p>
        </div>
      ))}
      <div className="col-span-3 col-start-4 row-span-4 row-start-1 flex items-center justify-center border-l-2 border-black bg-cover">
        <img src={projects[current].img} />
      </div>
    </div>
  );
}

export default ProjectTab;
