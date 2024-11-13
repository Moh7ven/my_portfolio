interface WorkExperienceInterface {
  title: string;
  company: string;
  date: string;
  city: string;
  occupation: string;
}
function WorkExperienceEnum({
  title,
  company,
  date,
  city,
  occupation,
}: WorkExperienceInterface) {
  return (
    <div className="flex flex-col text-[#666666] h-[75px]">
      <div className="flex justify-between">
        <p className="text-xl">{title}</p>
        <div className="flex items-center justify-center text-[12px] text-green-800 font-bold p-5 bg-green-400 bg-opacity-30 w-[137px] h-6 rounded-[20px]">
          {occupation}
        </div>
      </div>
      <div className="flex justify-between text-[10px]">
        <p className="text-xl">{company}</p>
        <p className="text-xl">{city}</p>
        <p className="text-xl">{date}</p>
      </div>
    </div>
  );
}

export default WorkExperienceEnum;
