import { useState } from "react";
import "../index.css";
import Logonav from "../assets/logonav.svg";
import mobileMenu from "../assets/mobileMenu.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex py-4 text-white items-center justify-center md:px-[100px] px-[36px] bg-[#1C1A23]/50 backdrop-blur-[25px] w-full flex-col gap-y-[36px] transition-all">
      <div className="flex items-center justify-between w-full max-w-[1240px]">
        <div className="flex space-x-6 items-center hover:cursor-pointer">
          <img src={Logonav} alt="home" />
          <span className="font-lato font-bold text-[28px] leading-[130%]">
            Xeno
          </span>
        </div>
        <ul className="lg:flex justify-end space-x-16 font-lato font-semibold hidden">
          <li className="hover:cursor-pointer hover:text-[#F60]">
            <a href="#" onClick={() => setOpen(!open)}>
              Home
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-[#F60]">
            <a href="#gallery" onClick={() => setOpen(!open)}>
              Gallery
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-[#F60]">
            <a href="#aboutUs" onClick={() => setOpen(!open)}>
              About Us
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-[#F60]">
            <a href="#contactUs" onClick={() => setOpen(!open)}>
              Contact Us
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-[#F60]">
            <a href="#FAQs" onClick={() => setOpen(!open)}>
              FAQs
            </a>
          </li>
        </ul>

        {/* Menu Mobile */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <img
            src={mobileMenu}
            alt=""
            className={`transition-transform ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>
      {open && (
        <ul className="flex flex-col text-[24px] gap-y-[8px] w-full align-baseline lg:hidden">
          <li>
            <a href="#" onClick={() => setOpen(!open)}>
              Home
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setOpen(!open)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#aboutUs" onClick={() => setOpen(!open)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contactUs" onClick={() => setOpen(!open)}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#FAQs" onClick={() => setOpen(!open)}>
              FAQs
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
