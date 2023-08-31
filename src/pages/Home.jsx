import PageLayout from "../layouts/PageLayout";

import Landing from "../sections/Landing";
import About from "../sections/About";
import Experience from "../sections/Experience";

const Home = () => {
  return (
    <PageLayout>
      <Landing />
      <About />
      <Experience />
    </PageLayout>
  );
};

export default Home;
