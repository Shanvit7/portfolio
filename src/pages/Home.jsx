import PageLayout from "../layouts/PageLayout";

import Landing from "../sections/Landing";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import MyStack from "../sections/MyStack";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <PageLayout>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <MyStack />
      <Contact />
    </PageLayout>
  );
};

export default Home;
