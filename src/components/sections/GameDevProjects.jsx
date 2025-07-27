import React from "react";
import project from "../../data/gameDevProjects.json";

export const GameDevProjects = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl md:text-3xl my-6 font-bold w-fit py-4 z-40 rounded-full">
        Game <span className="text-[#F6A709]">Development Projects</span>
      </h2>

      <div className="z-50 flex flex-col gap-6">
        {project.map((projectInfo, i) => (
          <GameDevProject key={i} projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  );
};

const GameDevProject = ({ projectInfo }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 bg-[#0C2354] z-10 rounded p-4">
      {/* Video */}
      <div className="w-full md:w-1/3 aspect-video">
        <iframe
          src={projectInfo.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded"
        ></iframe>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2 md:gap-3 w-full md:w-2/3 px-0">
        <h2 className="title-main !text-lg !text-[#f6a709]">
          {projectInfo.title}
        </h2>
        <p className="text-sm md:text-base">{projectInfo.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {projectInfo.techStack.map((stackItem, i) => (
            <div
              key={i}
              className="rounded px-3 py-1 text-xs bg-[#16213E] whitespace-nowrap"
            >
              {stackItem}
            </div>
          ))}
        </div>

        {/* Code Button */}
        {!projectInfo.codeDisabled && (
          <div className="flex justify-end mt-2">
            <a className="button" href={projectInfo.code}>
              Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
