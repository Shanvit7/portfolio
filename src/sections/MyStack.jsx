import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import skillsAnimation from "../assets/animation_skills.json";

const MyStack = () => {
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
            animationData={skillsAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
          My Stack
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 p-16 gap-16 justify-center">
        <div className="w-32 h-32">
            <img src={'/javascript.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/react.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/nodejs.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/npm.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/typescript.png'} alt='React'/>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
