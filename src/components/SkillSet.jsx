const SkillSet = ({ skills = new Map([]) }) => {
  return (
    <section>
      {Array.from(skills.entries()).map(([skill, value]) => (
        <section key={skill} className="flex items-center justify-between lg:p-4">
          <h3>{skill}</h3>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-md ${index < value ? 'bg-green-400' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default SkillSet;
