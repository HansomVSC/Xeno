import logoFooter from "../assets/logoFooter.svg";
import Facebook from "../assets/Social Icons/facebook.svg";
import Instagram from "../assets/Social Icons/instagram.svg";
import X from "../assets/Social Icons/x.svg";
import Linkedin from "../assets/Social Icons/linkedin.svg";

export default function Footer() {
  return (
    <section className="text-white bg-[#1A1A1A] flex justify-center">
      <div className="w-[1140px] mx-[36px] md:mx-[100px] my-[64px] md:my-[150px] flex justify-between flex-col xl:flex-row gap-y-[36px]">
        {/* Kiri */}
        <div className="flex flex-col gap-y-[16px] max-w-[213px]">
          <div className="flex gap-x-[24px]">
            <img src={logoFooter} alt="" />
            <span className="font-bold text-[37px]">Xeno</span>
          </div>
          <span className="text-white/50">
            Creating innovative solutions for your business needs since 2010.
          </span>
        </div>
        {/* Kanan */}
        <div className="flex justify-between max-w-[727px] w-full flex-wrap gap-y-[36px]">
          {/* Item 1 */}
          <div className="flex flex-col gap-y-[36px]">
            <h6 className="font-semibold text-[25px]">Quick Links</h6>
            <ul className="flex flex-col gap-y-[16px] font-semibold text-white/50">
              <li className="hover:cursor-pointer hover:text-white">Home</li>
              <li className="hover:cursor-pointer hover:text-white">Gallery</li>
              <li className="hover:cursor-pointer hover:text-white">
                About Us
              </li>
              <li className="hover:cursor-pointer hover:text-white">
                Contact Us
              </li>
              <li className="hover:cursor-pointer hover:text-white">FAQs</li>
            </ul>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col gap-y-[36px]">
            <h6 className="font-semibold text-[25px]">Service</h6>
            <ul className="flex flex-col gap-y-[16px] font-semibold text-white/50">
              <li className="hover:cursor-pointer hover:text-white">
                Web Development
              </li>
              <li className="hover:cursor-pointer hover:text-white">
                Mobile Apps
              </li>
              <li className="hover:cursor-pointer hover:text-white">
                UI/UX Design
              </li>
              <li className="hover:cursor-pointer hover:text-white">
                Digital Marketing
              </li>
              <li className="hover:cursor-pointer hover:text-white">
                Consulting
              </li>
            </ul>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col gap-y-[36px]">
            <h6 className="font-semibold text-[25px]">Connect With Us</h6>
            <ul className="flex gap-x-[16px] font-semibold text-white/50">
              <li className="hover:cursor-pointer">
                <img src={Facebook} alt="" />
              </li>
              <li className="hover:cursor-pointer">
                <img src={Instagram} alt="" />
              </li>
              <li className="hover:cursor-pointer">
                <img src={X} alt="" />
              </li>
              <li className="hover:cursor-pointer">
                <img src={Linkedin} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
