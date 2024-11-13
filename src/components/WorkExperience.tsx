import WorkExperienceEnum from "./WorkExperienceEnum";

function WorkExperience() {
  return (
    <div className="mt-[6%]">
      <h2 className="text-[42px] font-bold text-left text-[#42446E]">
        Work Experience
      </h2>
      <div className="mt-8">
        <WorkExperienceEnum title="Bookbinder" company="JD Edition" date="2023" city="Abidjan" occupation="Full time" />
      </div>
    </div>
  );
}

export default WorkExperience;
