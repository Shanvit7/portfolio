import { useRef, useEffect } from "react";
import anime from "animejs";

const Contact = ()=>{
  const sectionRef = useRef(null);
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
    return(
        <section ref={sectionRef} className="w-screen p-10 lg:p-32 opacity-0">
                <div className="border-2 border-white h-64 flex flex-col gap-12 justify-center items-center">
                    <h1 className="lg:text-5xl text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
                        Like what you see ?
                    </h1>
                    <div className="text-center">
                    <p className="font-sans font-semibold tracking-normal text-inherit antialiased">
                        Connect with me: 
                    </p>
                    <a 
                    href={`mailto:${import.meta.env.VITE_PROVIDED_EMAIL}`}
                    className="font-sans font-bold tracking-normal text-inherit antialiased"
                    >
                       {import.meta.env.VITE_PROVIDED_EMAIL}
                    </a>
                    </div>
                </div>
        </section>
    );
};

export default Contact;