import PageLayout from "../layouts/PageLayout";

import Landing from "../sections/Landing";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import MyStack from "../sections/MyStack";

const Home = () => {
  return (
    <PageLayout>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <MyStack />
    </PageLayout>
  );
};

export default Home;
