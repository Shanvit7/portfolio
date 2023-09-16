import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/animation_about.json";
import anime from "animejs";

const About = () => {
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
    <section ref={sectionRef} className="w-screen about-section-body p-10 lg:p-32 opacity-0">
      <div className="flex items-center">
        <div className="w-32 h-32">
          <Lottie
            animationData={aboutAnimation}
            autoplay={true}
            lottieRef={animationRef}
          />
        </div>
        <h1 className="block three-D-text text-4xl font-sans font-bold tracking-normal text-inherit antialiased">
          About
        </h1>
      </div>
      <p className="block text-xl pt-8 font-light text-inherit antialiased">
        Web development transcends being merely a career path for me – it's a
        captivating creative outlet that empowers me to transform abstract ideas
        into vibrant reality.
      </p>
      <p className="block text-xl pt-4 font-light text-inherit antialiased">
        Embarking on this remarkable journey in&nbsp;
        <span className="font-bold">2021</span>, I embarked on a quest to
        unravel the intricacies of web development.&nbsp;
        <span className="font-bold">
          It was in 2022, while actively pursuing my undergraduate degree in
          Information Technology, that I took a transformative step forward by
          joining a forward-thinking company.
        </span>{" "}
        &nbsp;This hands-on experience has been instrumental in honing my skills
        and understanding the practical nuances of crafting exceptional digital
        experiences.
      </p>
      <p className="block text-xl pt-4 font-light text-inherit antialiased">
        At the heart of my skill set lies a mastery of crafting web applications
        through the utilization of cutting-edge technologies. My specialization
        revolves around the{" "}
        <span className="font-bold">
          art of creating dynamic and responsive user interfaces{" "}
        </span>
        that not only exude visual excellence but also ensure effortlessly
        smooth interactions.
      </p>
    </section>
  );
};

export default About;
