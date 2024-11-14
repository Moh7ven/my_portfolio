import WorkExperienceEnum from "./WorkExperienceEnum";
import { WorkExperienceInterface } from "../types/workEperienceType";

function WorkExperience() {
  const workExperiences = [
    {
      title: "Bookbinder",
      company: "JD Edition",
      date: "Jul 2018 - Aug 2018",
      city: "Abidjan",
      occupation: "Full time",
    },
    {
      title: "Trainer In Web Programming And Office Software",
      company: "SAMOU HIGH TECH",
      date: "Mar 2022 - Apr 2022",
      city: "Abidjan",
      occupation: "Full time",
    },
    {
      title: "Professional Internship",
      company: "NaN Digital Academy",
      date: "Jun 2023 - Today",
      city: "Abidjan",
      occupation: "Full time",
    },
  ];
  return (
    <div className="mt-[6%]">
      <h2 className="text-[42px] font-bold text-left text-[#42446E]">
        Work Experience
      </h2>
      <div className="mt-8">
        {workExperiences.map((workExperience: WorkExperienceInterface) => (
          <div className="md:gap-5 mt-5 flex flex-col gap-5 ">
            <WorkExperienceEnum
              key={workExperience.title}
              title={workExperience.title}
              company={workExperience.company}
              date={workExperience.date}
              city={workExperience.city}
              occupation={workExperience.occupation}
            />
            <hr className="bg-gray-300 h-[2px] opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
