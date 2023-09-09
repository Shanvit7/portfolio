import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/animation_experience.json";
import Work from "../components/Work";

const Experience = () => {
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
            animationData={aboutAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
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
