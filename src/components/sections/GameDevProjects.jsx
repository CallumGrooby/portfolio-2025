import React from "react";
import project from "../../data/gameDevProjects.json";
export const GameDevProjects = () => {
  return (
    <div>
      <h2>Game Development Projects</h2>

      <div>
        {project.map((projectInfo, i) => (
          <GameDevProject key={i} projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  );
};

const GameDevProject = ({ projectInfo }) => {
  return (
    <div>
      <img src={projectInfo.image} alt={`${projectInfo.title} preview`} />
      <iframe
        width="560"
        height="315"
        src={projectInfo.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div>
        <h2>{projectInfo.title}</h2>
        <p>{projectInfo.description}</p>

        {projectInfo.techStack.map((stackItem, i) => (
          <div key={i}>
            <h2>{stackItem}</h2>
          </div>
        ))}

        <div>
          <button>Code</button>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
};
