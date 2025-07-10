import React from "react";
import projects from "../../data/webDevProjects.json";
import placeholder from "../../assets/placeholder.png";
export const WebdevProjects = () => {
  console.log(projects);
  return (
    <div>
      <h2>Website Development Projects</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {projects.map((projectInfo, i) => (
          <Project key={i} projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  );
};

const Project = ({ projectInfo }) => {
  return (
    <div className="flex flex-col gap-1 bg-[#0C2354]">
      <img src={placeholder} alt={`${projectInfo.title} preview`} />

      <div className="flex flex-col gap-1 h-full px-2 md:px-4   ">
        <h2 className="title-main !text-lg !text-[#f6a709]">{projectInfo.title}</h2>
        <p>{projectInfo.description}</p>

        <div className="flex flex-row flex-wrap gap-2">
          {projectInfo.techStack.map((stackItem, i) => (
            <div key={i} className="rounded px-4 py-2 text-xs bg-[#16213E]">
              <h2>{stackItem}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-auto">
          <button className="basis-1/2 py-2 hover:text-[#F6A709]">Code</button>
          <button className="basis-1/2 py-2  hover:text-[#F6A709]">Demo</button>
        </div>
      </div>
    </div>
  );
};
