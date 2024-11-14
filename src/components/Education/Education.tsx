import { EducationInterface } from "../../types/educationType";
import EducationEnum from "./EducationEnum";

function Education() {
  const educations = [
    {
      title:
        "Bachelor's degree in Computer Science with a focus on Application Development.",
      company: "Université Internationale de Côte D’Ivoire ",
      date: "Dec 2019 - Sep 2022",
      occupation: "Full time",
    },
    {
      title:
        "First year of Master's degree in Information Systems and Software Engineering.",
      company: "SAMOU HIGH TECH",
      date: "Dec 2022 - Sep 2023",

      occupation: "Full time",
    },
    {
      title:
        "Second year of Master's degree in Information Systems and Software Engineering.",
      company: "Université Internationale de Côte D’Ivoire",
      date: "Dec 2023 - Today",

      occupation: "Full time",
    },
  ];

  return (
    <div className="mt-[6%]">
      <h2 className="text-[42px] font-bold text-left text-[#42446E]">
        Education
      </h2>
      <div className="mt-5">
        {educations.map((education: EducationInterface) => (
          <div className="md:gap-5 flex flex-col gap-5 ">
            <EducationEnum
              key={education.title}
              title={education.title}
              company={education.company}
              date={education.date}
              occupation={education.occupation}
            />
            <hr className="bg-gray-300 h-[2px] opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
