import DurationSlider from "../components/DurationSlider";
import { getExperienceAccToMonth } from "../utils";
import { useState } from "react";

const Work = () => {
  const [XP, setXP] = useState(0);
  const {
    projectName = "",
    projectInfo = "",
    contributions = [],
    month = "",
    year = null,
  } = getExperienceAccToMonth(Number(XP)) ?? {};
  return (
    <section className="relative p-8">
      <h1 className="block text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
        # {projectName}
      </h1>

      <div className="flex justify-between w-full pt-4 h-72">
        <div className="w-1/2">
          <h5 className="block text-xl pt-4 font-medium text-inherit antialiased">
            About:
          </h5>
          <p className="block text-md pt-4 font-normal text-inherit antialiased">
            {projectInfo}
          </p>

        </div>

        <div className="lg:pl-8 w-1/2">
          <h1 className="block text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
            Contributions :
          </h1>
          <ol className="p-8 list-disc">
            {contributions?.map((workDone, index) => (
              <li key={index}>{workDone}</li>
            ))}
          </ol>
        </div>
      </div>
      <DurationSlider setXP={setXP} month={month} year={year} />
    </section>
  );
};

export default Work;
