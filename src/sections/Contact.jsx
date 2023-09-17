import { useRef, useEffect } from "react";
// ANIMATIONS
import Lottie from "lottie-react";
import LinkedInLottie from "../assets/animation_linkedin.json";
import gMailLottie from "../assets/animation_gmail.json";
import gitHubLottie from "../assets/animation_github.json";
import anime from "animejs";

const Contact = () => {
  const sectionRef = useRef(null);
  const linkedInRef = useRef(null);
  const gitHubRef = useRef(null);
  const gMailRef = useRef(null);
  useEffect(() => {
    const linkedInanimation = linkedInRef.current;
    const gitHubanimation = gitHubRef.current;
    const gMailanimation = gMailRef.current;
    linkedInanimation?.play();
    gitHubanimation?.play();
    gMailanimation?.play();
    return () => {
      linkedInanimation?.destroy();
      gitHubanimation?.destroy();
      gMailanimation?.destroy();
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
            delay: 600,
          });
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="w-screen p-10 lg:p-32 opacity-0 bg-transparent"
    >
      <div className="border-2 border-white p-8 flex flex-col gap-12 justify-center items-center rounded drop-shadow-lg">
        <h1 className="lg:text-5xl three-D-text text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
          Like what you see ?
        </h1>
        <p className="text-center text-lg font-sans font-bold leading-tight tracking-normal text-inherit antialiased">  
          Connect with me: 
        </p>
        <div className="flex gap-4 lg:gap-8">
          <a href={import.meta.env.VITE_PROVIDED_GITHUB} className="lg:w-32 lg:h-32 w-20 h-20">
            <Lottie
              animationData={gitHubLottie}
              autoplay={true}
              lottieRef={gitHubRef}
            />
          </a>
          <a href={"mailto:"+ import.meta.env.VITE_PROVIDED_EMAIL} className="lg:w-32 lg:h-32 w-20 h-20">
            <Lottie
              animationData={gMailLottie}
              autoplay={true}
              lottieRef={gMailRef}
            />
          </a>
          <a href={import.meta.env.VITE_PROVIDED_LINKEDIN} className="lg:w-32 lg:h-32 w-20 h-20">
            <Lottie
              animationData={LinkedInLottie}
              autoplay={true}
              lottieRef={linkedInRef}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
