import mohamedImage from "../assets/mohamed.webp";
import downloadLogo from "../assets/download.webp";

function Hero() {
  return (
    <>
      <div className="sm:flex block items-center justify-between">
        <h1 className=" md:text-[48px] font-bold text-left text-[#42446E]">
          <p>Hi👋,</p>
          <p>My Name is</p>
          <p className="text-green-500">Mohamed SANGARE</p>
          <p>i love building things and</p>
          <p>helping people.</p>
        </h1>
        <div className="flex items-center justify-center">
          <img
            src={mohamedImage}
            className="w-[300px] h-[300px] rounded-full"
            alt=""
          />
        </div>
      </div>
      <button className="mt-10 text-[24px] h-[75px] px-2 bg-green-500 bg-opacity-30  rounded-[20px] text-green-500 font-bold border border-green-500 ">
        <div className="flex items-center gap-2">
          Download CV
          <img src={downloadLogo} alt="" />
        </div>
      </button>
    </>
  );
}

export default Hero;
