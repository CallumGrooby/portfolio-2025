import React from "react";

export const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 py-4 md:h-[248px]">
      {/* Left column */}
      <div className="md:basis-1/4 flex flex-col justify-between">
        <h2 className="title-main">
          About <span className="text-[#F6A709]">Me</span>
        </h2>
        <div className="flex flex-col">
          <h2 className="title-main text-xl md:text-2xl">Callum Grooby</h2>
          <h3 className="title-sub text-md md:text-lg">
            Website & Game Developer
          </h3>
        </div>
      </div>

      {/* Right column */}
      <div className="md:basis-3/4">
        <p className="text-start text-lg md:text-2xl">
          Entry-level React developer with a background in games design and
          customer support. Experienced in resolving customer issues, managing
          logistical requests, and working under pressure to meet tight
          deadlines.
        </p>
      </div>
    </div>
  );
};
