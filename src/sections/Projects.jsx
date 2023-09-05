import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import projectsAnimation from "../assets/animation_projects.json";
import ProjectCard from "../components/ProjectCard";
import { projectsArray } from "../utils";

const Projects = () => {
  const animationRef = useRef(null);
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
            animationData={projectsAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
          Projects
        </h1>
      </div>
      <div className="flex flex-col gap-8 items-center">
      {
      projectsArray?.map((project,index)=>(
        <ProjectCard
        key={index}
        {...project}
        />
      ))
    }
      </div>
    </section>
  );
};

export default Projects;
