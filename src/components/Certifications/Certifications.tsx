import { CertificationsInterface } from "../../types/certificationsType";
import CerticationsEnum from "./CerticationsEnum";

function Certifications() {
  const certifications = [
    {
      title: "GETCONNECT2020-certificate",
      company: "CISCO",
      date: "2020",
    },
    {
      title: "CYBERS-certificate",
      company: "CISCO",
      date: "2022",
    },
    {
      title: "Certificat React Native Expo",
      company: "KALE TECH",
      date: "2023",
    },
    {
      title: "Certificat Développeur JavaScript",
      company: "NaN Digital Academy",
      date: "2024",
    },
  ];

  return (
    <div className="mt-[6%]">
      <h2 className="text-[42px] font-bold text-left text-[#42446E]">
        Certications
      </h2>
      <div className="mt-5">
        {certifications.map((certification: CertificationsInterface) => (
          <div className="md:gap-5 flex flex-col gap-5 ">
            <CerticationsEnum
              key={certification.title}
              title={certification.title}
              company={certification.company}
              date={certification.date}
            />
            <hr className="bg-gray-300 h-[2px] opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
