import "../index.css";
import CheckCircle from "../assets/CheckCircle.svg";
import AboutUsIMG from "../assets/AboutUs.png";

function AboutUs() {
  return (
    <section
      className="bg-[#222028] text-white justify-center flex font-lato"
      id="aboutUs"
    >
      {/* Container */}
      <div className="flex flex-col justify-center w-[1140px] my-[64px] md:my-[100px] mx-[36px] md:mx-[150px] gap-y-[64px]">
        <h3 className="flex text-[28px] md:text-[37px] font-bold justify-center w-full">
          About Us
        </h3>
        {/* Contents */}
        <div className="flex justify-between items-center flex-col-reverse xl:flex-row gap-y-[36px]">
          {/* Kiri */}
          <div className="flex-col flex gap-y-[64px] w-fit">
            {/* Our Story */}
            <div className="flex flex-col max-w-[479px] gap-y-[16px]">
              <h6 className="text-[25px] font-bold">Our Story</h6>
              <div className="text-white/80 flex-col flex gap-y-[8px]">
                <span className="tracking-[0.08px] leading-[150%]">
                  Founded in 2010, we started as a small team with big dreams.
                  Over the years, we've grown into a company that serves clients
                  worldwide with top-notch solutions.
                </span>
                <span className="tracking-[0.08px] leading-[150%]">
                  Our mission is to deliver exceptional value to our customers
                  through innovation, creativity, and dedication.
                </span>
              </div>
            </div>
            {/* Our Values */}
            <div className="bg-[#F60] rounded-[8px] px-[24px] py-[16px] gap-y-[16px] flex-col flex">
              <span className="text-[25px] font-bold">Our Values</span>
              <div className="flex-col flex gap-y-[8px]">
                <div className="flex gap-x-[8px]">
                  <img src={CheckCircle} alt="" />
                  <span>Costumer first approach</span>
                </div>
                <div className="flex gap-x-[8px]">
                  <img src={CheckCircle} alt="" />
                  <span>Innovation and creativity</span>
                </div>
                <div className="flex gap-x-[8px]">
                  <img src={CheckCircle} alt="" />
                  <span>Transparency and integrity</span>
                </div>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px]">
            <img src={AboutUsIMG} alt="" className="rounded-[8px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
