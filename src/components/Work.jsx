import SkillSet from "./SkillSet";
const Work = ({ 
    projectName = '',
    projectInfo = '',
    contributions = [],
    skills = new Map([])
}) => {
    return (
    <section className="relative p-8 grid lg:grid-cols-3">
      <div>
        <h1 className="block text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
          # {projectName}
        </h1>
        <div className="pt-8">
          <h5 className="block text-xl pt-4 font-medium text-inherit antialiased">
            About:
          </h5>
          <p className="block text-md pt-4 font-normal text-inherit antialiased">
            {projectInfo}
          </p>
        </div>
      </div>

      <div className="w-px absolute left-1/3 bg-white h-full hidden lg:block"/>

      <div className="lg:pl-8 lg:pt-0 pt-4">
        <h1 className="block text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
          Contributions :
        </h1>
        <ol className="p-8 list-disc">
            {
                contributions?.map((workDone,index)=>(
                    <li key={index}>
                        {workDone}
                    </li>
                ))
            }
        </ol>
      </div>

      <div className="w-px absolute left-2/3 bg-white h-full hidden lg:block" />

      <div className="lg:pl-8 lg:pt-0 pt-4">
        <h1 className="block text-2xl font-sans font-bold tracking-normal text-inherit antialiased">
          Skills:
        </h1>
        <SkillSet skills={skills}/>
      </div>
    </section>
  );
};

export default Work;
