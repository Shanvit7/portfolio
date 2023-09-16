import React, { useState, useEffect,useRef } from "react";
import anime from "animejs";
import { getExperienceAccToMonth, experienceMap } from "../utils";

const Work = () => {
  const [XP, setXP] = useState(0);
  const {
    projectName = '',
    projectInfo = '',
    contributions = []
  } = getExperienceAccToMonth(Number(XP)) ?? {};
  const prevProjectNameRef = useRef(projectName);
  const prevProjectInfoRef = useRef(projectInfo);

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

  const animateContributionText = () => {
    const contributionText = document.querySelectorAll(".animate-contribution-text");
    anime({
      targets: contributionText,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  };

  useEffect(() => {
    if (prevProjectNameRef.current !== projectName || prevProjectInfoRef.current !== projectInfo) {
      animateTitleText();
      animateText();
      prevProjectNameRef.current = projectName;
      prevProjectInfoRef.current = projectInfo;
    }
  }, [projectName, projectInfo]);

  useEffect(() => {
    animateContributionText();
  }, [XP]);


  const handleNext=()=>{
    setXP(XP + 1);
  };

  const handlePrev=()=>{
    setXP(XP - 1);
  };
  const initialWork = XP === 0; 
  const finalWork = (XP + 1) === experienceMap.size;
  return (
    <section className="relative p-8 flex flex-col-reverse lg:flex-col">
      <h1 className="hidden lg:block text-3xl font-sans font-bold tracking-normal text-inherit antialiased animate-title-text">
         {projectName}
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
              <li key={index} className="animate-contribution-text">
                {workDone}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex gap-8 w-full">
      <button 
       className={`${initialWork && 'hidden' } hover:animate-pulse  w-24 h-12  bg-white text-black font-bold p-2 rounded-lg shadow-md`}
       onClick={handlePrev}
      >
        Prev
      </button>
      <button 
       className={`${finalWork && 'hidden'} hover:animate-pulse w-24 h-12  bg-white text-black font-bold p-2 rounded-lg shadow-md`}
       onClick={handleNext}
      >
        Next
      </button>
      </div>
    </section>
  );
};

export default Work;
