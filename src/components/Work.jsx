import React, { useState, useEffect } from "react";
import anime from "animejs"; // Import Anime.js
import { getExperienceAccToMonth } from "../utils";
import DurationSlider from "./DurationSlider";

const Work = () => {
  const [XP, setXP] = useState(0);
  const {
    projectName = "",
    projectInfo = "",
    contributions = [],
    month = "",
    year = null,
  } = getExperienceAccToMonth(Number(XP)) ?? {};

  const animateText = () => {
    const textElements = document.querySelectorAll(".animate-text");

    anime({
      targets: textElements,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  };

  const animateTitleText = () => {
    const titleText = document.querySelector(".animate-title-text");

    anime({
      targets: titleText,
      opacity: [0.5, 1],
      translateY: [-25, 0],
      duration: 800,
      easing: "easeOutQuad",
    });
  };

  useEffect(() => {
    if (!(XP % 1 !== 0)) {
      animateTitleText();
      animateText();
    }
  }, [XP]);

  return (
    <section className="relative p-8 flex flex-col-reverse lg:flex-col">
      <h1 className="hidden lg:block text-2xl font-sans font-bold tracking-normal text-inherit antialiased animate-title-text">
        # {projectName}
      </h1>

      <div className="flex flex-col lg:flex-row justify-between w-full pt-4 h-full lg:h-72">
        <div className="w-full lg:w-1/2">
          <h1 className="block lg:hidden text-2xl font-sans font-bold tracking-normal text-inherit antialiased animate-title-text">
            # {projectName}
          </h1>
          <h5 className="block text-2xl font-sans  pt-4 font-bold text-inherit antialiased animate-text">
            About:
          </h5>
          <p className="block text-md pt-4 font-normal text-inherit antialiased animate-text">
            {projectInfo}
          </p>
        </div>

        <div className="w-full pt-8 lg:pt-0 lg:pl-8 lg:w-1/2">
          <h1 className="block text-2xl font-sans font-bold tracking-normal animate-text text-inherit antialiased">
            Contributions :
          </h1>
          <ol className="p-8 list-disc">
            {contributions?.map((workDone, index) => (
              <li key={index} className="animate-text">
                {workDone}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <DurationSlider 
       setXP={setXP}
       month={month} 
       year={year} 
       XP={XP} 
      />
    </section>
  );
};

export default Work;
