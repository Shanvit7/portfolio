import GitHub from "../icons/Github";
import WebHosted from "../icons/WebHosted";
const ProjectCard = ({
  title = "",
  about = "",
  deployedLink = "",
  githubLink = "",
}) => {
  return (
    <div 
     className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between bg-opacity-95 backdrop-blur-xl backdrop-filter border border-opacity-30 border-white p-6 rounded-lg shadow-lg"
    >
      <div>
      <h2 className="text-3xl font-semibold text-white mb-4">
        {title}
      </h2>
      <p className="text-white">
        {about}
      </p>
      </div>

      <div className="flex gap-16 justify-center items-center lg:justify-start">
        <a href={githubLink}>
          <GitHub />
        </a>
        <a href={deployedLink}>
          <WebHosted />
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;
