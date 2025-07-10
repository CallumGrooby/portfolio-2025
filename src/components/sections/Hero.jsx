import React from "react";
import titleImage from "../../assets/Title.png";
export const Hero = () => {
  return (
    <div className="w-fit">
      <img src={titleImage} />

      <div className="flex flex-col  justify-start items-start  sm:flex-row  sm:justify-between lg:px-8 px-2">
        <div className="flex flex-col justify-start items-start ">
          <h2 className="title-main">Callum Grooby</h2>
          <h3 className="title-sub">
            Website & Games Developer
          </h3>
        </div>

        <div>
          <h3 className="title-location">Linconshire</h3>
        </div>
      </div>
    </div>
  );
};
