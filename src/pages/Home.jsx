// PAGE LAYOUT
import PageLayout from "../layouts/PageLayout";
// PAGE SECTIONS
import Landing from "../sections/Landing";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import MyStack from "../sections/MyStack";
import Contact from "../sections/Contact";

import StarsLayout from "../layouts/StarsLayout";
const Home = () => {
  return (
    <PageLayout>
      <StarsLayout />
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
