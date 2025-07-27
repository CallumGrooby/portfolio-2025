import React from "react";
import projects from "../../data/webDevProjects.json";

export const WebdevProjects = () => {
  console.log(projects);
  return (
    <div>
      <h2 className="title-main my-4">
        <span className="text-[#F6A709]"> Website</span> Development
      </h2>

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
    <div className="card flex flex-col gap-1 bg-[#0C2354] z-10 rounded">
      <img src={projectInfo.image} alt={projectInfo.title} />

      <div className="flex flex-col gap-1 h-full px-2 md:px-4   ">
        <h2 className="title-main !text-lg !text-[#f6a709]">
          {projectInfo.title}
        </h2>
        <p>{projectInfo.description}</p>

        <div className="flex flex-row flex-wrap gap-2 mt-4">
          {projectInfo.techStack.map((stackItem, i) => (
            <div key={i} className="rounded px-4 py-2 text-xs bg-[#16213E]">
              <h2>{stackItem}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-row mt-auto pt-4 rounded">
          <a href={`${projectInfo.code}`} className="button">
            Code
          </a>

          {projectInfo.siteDisabled ? (
            <span className="button cursor-not-allowed opacity-50 pointer-events-none">
              Demo
            </span>
          ) : (
            <a href={projectInfo.site} className="button" target="_blank">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
