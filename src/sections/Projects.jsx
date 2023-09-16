import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import projectsAnimation from "../assets/animation_projects.json";
import ProjectCard from "../components/ProjectCard";
import { projectsArray } from "../utils";
import anime from "animejs";


const Projects = () => {
  const animationRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const animation = animationRef.current;
    animation?.play();
    return () => {
      animation?.destroy();
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: sectionRef.current,
            opacity: [0, 1],
            duration: 1000,
            delay: 600
          });
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
  }, []);
  return (
    <section ref={sectionRef} className="w-screen p-10 lg:p-32 opacity-0 projects-section-body">
      <div className="flex items-center">
        <div className="w-32 h-32">
          <Lottie
            animationData={projectsAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block three-D-text text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
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
