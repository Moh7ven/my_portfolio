import imageOffice from "../../assets/office.webp";
import calendar from "../../assets/calendar.webp";
import { EducationInterface } from "../../types/educationType";


function EducationEnum({
  title,
  company,
  date,
  occupation,
}: EducationInterface) {
  return (
    <div className="flex flex-col text-[#666666] h-[75px] mt-10">
      <div className="flex justify-between">
        <p className="text-xl font-normal">{title}</p>
        <div className="flex items-center justify-center text-[12px] text-green-800 font-semibold p-2 bg-green-500 bg-opacity-20 w-[137px] h-6 rounded-[20px]">
          {occupation}
        </div>
      </div>
      <div className="flex justify-between text-[12px] mt-2 w-[93%]">
        <div className="flex justify-center items-center gap-2">
          <img src={imageOffice} alt="" className="w-[25px] h-[20px]" />
          <p className="opacity-50">{company}</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <img src={calendar} className="w-[25px] h-[20px]" alt="" />
          <p className="font-medium opacity-60">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationEnum;
