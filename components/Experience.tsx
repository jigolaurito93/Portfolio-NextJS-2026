import { experiences } from "@/lib/experienceData";

const Experience = () => {
  return (
    <div
      className="px-12 lg:px-32 xl:px-56 my-32 flex flex-col gap-10 scroll-mt-24"
      id="experience"
    >
      <h1 className="text-4xl font-semibold text-center text-primary">
        Experience
      </h1>
      {experiences.map((experience, i) => {
        return (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-primary-light text-lg md:text-2xl font-semibold">
                {experience.company}
                {' - '}
                {experience.role}
              </h2>
              <h3 className="text-primary text-lg">{experience.date}</h3>
            </div>
            <ol>
              {experience.acc.map((ac, i) => {
                return (
                  <li key={i} className="list-disc text-secondary">
                    {ac}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
