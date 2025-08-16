import "../index.css";
import Mail from "../assets/Mail.svg";
import Call from "../assets/Call.svg";
import Location from "../assets/Location.svg";
import Form from "../Components/form";

export default function ContactUs() {
  return (
    <section className="flex justify-center font-lato" id="contactUs">
      <div className="flex-col flex max-w-[1140px] gap-y-[64px] items-center mx-[36px] md:mx-[150px] my-[64px] md:my-[100px]">
        <h3 className="text-[28px] md:text-[37px] font-bold text-white">
          Contact Us
        </h3>
        {/* Form */}
        <div className="flex text-white flex-col md:flex-row">
          {/* Kiri */}
          <div className="bg-[#F60] flex flex-col md:w-[322px] xl:w-[570px] md:h-[600px] rounded-t-[8px] md:rounded-t-[0px] md:rounded-l-[8px] p-[36px] gap-y-[64px] w-fit h-fit">
            <div className="max-w-[371px]">
              <h6 className="font-bold text-[25px]">Get in Touch</h6>
              <span>
                Have questions or want to work with us? Fill out the form and
                we'll get back to you as soon as possible.
              </span>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex gap-x-[16px]">
                <img src={Mail} alt="" />
                <span>contact@company.com</span>
              </div>
              <div className="flex gap-x-[16px]">
                <img src={Call} alt="" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-x-[16px]">
                <img src={Location} alt="" />
                <div className="flex gap-x-[16px] flex-col">
                  <span>123 Business Ave, Suite 400</span>
                  <span>New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="bg-white md:w-[402px] xl:w-[570px] h-[600px] rounded-b-[8px] md:rounded-bl-[0px] md:rounded-r-[8px] text-black px-[36px] md:pb-[40px] md:pt-[64px] w-full p-[36px]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
