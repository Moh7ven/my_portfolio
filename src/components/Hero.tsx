import mohamedImage from "../assets/mohamed.webp";

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
      <button className="mt-10 bg-green-500 bg-opacity-30 py-4 px-7 rounded-[20px] text-green-500 font-bold border border-green-500">
        Download CV
      </button>
    </>
  );
}

export default Hero;
