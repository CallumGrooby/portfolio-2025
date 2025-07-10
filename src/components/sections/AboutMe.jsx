import React from "react";

export const AboutMe = () => {
  return (
    <div className="h-[370px] flex flex-row items-stretch gap-8">
      {/* Left column */}
      <div className="basis-1/4 flex flex-col h-full justify-between  ">
        <h2 className="title-main">
          About <span className="text-[#F6A709]">Me</span>
        </h2>
        <div className="flex flex-col">
          <h2 className="title-main">Callum Grooby</h2>
          <h3 className="title-sub">Website & Game Developer</h3>
        </div>
      </div>

      {/* Right column */}
      <div className="basis-3/4 h-full flex items-center">
        <p className="text-start text-2xl">
          Entry-level React developer with a background in games design and
          customer support. Experienced in resolving customer issues, managing
          logistical requests, and working under pressure to meet tight
          deadlines.
        </p>
      </div>
    </div>
  );
};
