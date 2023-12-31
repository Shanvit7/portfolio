import { useRef, useEffect } from "react";
// COMPONENTS
import Work from "../components/Work";
// ANIMATIONS
import Lottie from "lottie-react";
import experienceLottie from "../assets/animation_experience.json";
import anime from "animejs";

const Experience = () => {
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
    <section ref={sectionRef} className="w-screen p-10 lg:p-32 opacity-0 experience-section-body">
      <div className="flex items-center">
        <div className="w-32 h-32">
          <Lottie
            animationData={experienceLottie}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block three-D-text text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
          Experience
        </h1>
      </div>
      <div className="border-2 border-white rounded-3xl pt-8 w-full h-1/4">
        <Work />
      </div>
    </section>
  );
};

export default Experience;
