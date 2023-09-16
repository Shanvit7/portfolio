import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import skillsAnimation from "../assets/animation_skills.json";
import anime from "animejs";


const MyStack = () => {
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
    <section ref={sectionRef} className="w-screen p-10 lg:p-32 opacity-0">
      <div className="flex items-center">
        <div className="w-32 h-32">
        <Lottie
            animationData={skillsAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block text-4xl three-D-text font-sans font-bold tracking-normal text-inherit antialiased">
          My Stack
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 p-16 gap-16 justify-center">
      <div className="w-32 h-32">
            <img src={'/html.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/css.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/javascript.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/typescript.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/tailwind.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/sass.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/react.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/git.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/nodejs.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/mongo-db.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/npm.png'} alt='React'/>
        </div>
        <div className="w-32 h-32">
            <img src={'/visual-studio-code.png'} alt='React'/>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
