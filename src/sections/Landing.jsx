import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import anime from "animejs";
import landingAnimation from "../assets/animation_landing.json";

const Landing = () => {
    const animationRef = useRef(null);
    const animateTextScale = () => {
      anime({
        targets: "#nameText",
        duration: 1000,
        opacity: [0, 1],
        scale: [0.8, 1.5],
        easing: "easeInOutQuad",
        complete: () => {
          anime({
            targets: "#introText",
            duration: 1200,
            opacity: [0, 1],
            scale: [0.9, 1],
            easing: "easeInOutQuad",
          });
        },
      });
    };
    useEffect(() => {
      const animation = animationRef.current;
      animation?.play();
      animateTextScale();
      return () => {
        animation?.destroy();
      };
    }, []);
  return (
    <section className="w-screen flex flex-col  items-center space-around p-10 xl:flex-row">
      <div className="w-screen xl:w-1/2">
        <div className="w-10/12">
          <Lottie
            animationData={landingAnimation}
            loop={true}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
      </div>

      <div className="w-screen xl:w-1/2">
        <section id="nameText" className="opacity-0">
          <h1 className="block text-center text-2xl font-sans font-bold leading-tight tracking-normal text-inherit antialiased">
            Shanvit S Shetty
          </h1>
          <h3 className="block text-center text-md font-sans font-semibold leading-relaxed tracking-normal text-inherit antialiased">
            Frontend DEV @ IOTric
          </h3>
        </section>
        <p
          id="introText"
          className="block p-10 leading-relaxed opacity-0 text-center text-xl font-sans font-semibold leading-tight tracking-normal text-inherit antialiased"
        >
          I specialize in creating modern, user-friendly web interfaces that
          bridge the gap between design and functionality.
        </p>
      </div>
    </section>
  );
};

export default Landing;
