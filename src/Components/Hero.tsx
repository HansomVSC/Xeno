import "../index.css";
import Heroimg from "../assets/hero.png";

function Hero() {
  return (
    <section className="flex font-lato justify-center my-[64px] mt-[100px] mx-[24px] lg:m-[100px] lg:mt-[136px] lg:justify-center">
      <div className="lg:flex-row justify-between w-full items-center flex flex-col-reverse gap-y-[36px] xl:w-[1240px]">
        <div className="space-y-[64px] text-center lg:text-left flex-col flex items-center lg:items-baseline">
          <div className="space-y-[8px] flex flex-col items-center lg:items-baseline">
            <div className="xl:text-[96px] text-[48px] sm:text-[64px] text-white  w-full max-w-[530px] leading-[110%] font-bold tracking-[-1.92px] flex-col sm:flex-row flex sm:block">
              <span className="">Welcome to Our </span>
              <span className="text-[#F60]">Website</span>
            </div>
            <div className="text-[16px] leading-[150%] w-[348px] text-white">
              <span>
                Discover amazing features and services tailored just for you.
              </span>
            </div>
          </div>
          <button className="bg-[#F60] w-fit py-[8px] px-[24px] rounded-[8px] text-white font-semibold hover:bg-orange-400 hover:scale-105 transition-all hover:cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="xl:w-[400px] xl:h-[400px] lg:h-[300px] lg:w-[300px] h-[350px] w-[350px]">
          <img src={Heroimg} alt="image" className="rounded-[8px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
