import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/animation_experience.json";

import { getExperienceAccToMonth } from "../utils";

import Work from "../components/Work";
import DurationSlider from "../components/DurationSlider";

const Experience = () => {
  const animationRef = useRef(null);
  const [XP,setXP] = useState(0);
  const {
    projectName = '',
    projectInfo = '',
    contributions = [],
    month = '',
    year = null
   } = getExperienceAccToMonth(Number(XP)) ?? {};
  useEffect(() => {
    const animation = animationRef.current;
    animation?.play();
    return () => {
      animation?.destroy();
    };
  }, []);
  return (
    <section className="w-screen p-10">
      <div className="flex items-center">
        <div className="w-32 h-32">
          <Lottie
            animationData={aboutAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
          Experience
        </h1>
      </div>
      <div className="border-2 border-white rounded-3xl pt-8 w-full">
        <Work 
         projectInfo={projectInfo}
         projectName={projectName}
         contributions={contributions}
        />
        <div className="p-4">
          <DurationSlider
           setXP={setXP}
           month={month}
           year={year}
           />
        </div>
      </div>
    </section>
  );
};

export default Experience;
