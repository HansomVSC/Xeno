import "../index.css";
import Workspace from "../assets/Gallery/workspace.png";
import Team from "../assets/Gallery/Team Meeting.png";
import Dev from "../assets/Gallery/Development.png";
import Design from "../assets/Gallery/Design Process.png";
import Client from "../assets/Gallery/Client Presentation.png";
import Celebration from "../assets/Gallery/Team Celebration.png";

function Gallery() {
  return (
    <section className="flex w-full justify-center" id="gallery">
      <div className="flex flex-col font-lato items-center text-white mx-[24px] my-[64px] lg:m-[100px] gap-y-[24px] lg:gap-y-[64px] xl:w-[1240px]">
        <div className="flex justify-center h-fit">
          <span className="font-bold text-[28px] sm:text-[37px] text-center">
            Our Gallery
          </span>
        </div>
        <div className="flex max-w-full gap-x-[20px] gap-y-[16px] lg:gap-y-[36px] flex-wrap justify-center">
          {/* Image 1 */}
          <div className="relative rounded-[8px] lg:w-[400px] lg:h-[500px] w-[345px] h-[135px]">
            <span className="absolute bottom-0 z-1 m-[36px] gap-y-[6px] w-fit">
              <h6 className="text-[25px] font-bold">Workspace</h6>
              <p className="opacity-[80%]">
                Our creative workspace environment.
              </p>
            </span>
            <img
              src={Workspace}
              alt="WorkSpace"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-100% lg:to-70% rounded-[8px]"></div>
          </div>
          {/* Image 2 */}
          <div className="relative rounded-[8px] lg:w-[400px] lg:h-[500px] w-[345px] h-[135px]">
            <span className="absolute bottom-0 z-1 m-[36px] gap-y-[6px] w-fit">
              <h6 className="text-[25px] font-bold">Team Meeting</h6>
              <p className="opacity-[80%]">
                Collaborative brainstorming session.
              </p>
            </span>
            <img
              src={Team}
              alt="WorkSpace"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-100% lg:to-70% rounded-[8px]"></div>
          </div>
          {/* Image 3 */}
          <div className="relative rounded-[8px] lg:w-[400px] lg:h-[500px] w-[345px] h-[135px]">
            <span className="absolute bottom-0 z-1 m-[36px] gap-y-[6px] w-fit">
              <h6 className="text-[25px] font-bold">Development</h6>
              <p className="opacity-[80%]">Writing clean and efficient code.</p>
            </span>
            <img
              src={Dev}
              alt="WorkSpace"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-100% lg:to-70% rounded-[8px]"></div>
          </div>
          {/* Image 4 */}
          <div className="relative rounded-[8px] lg:w-[400px] lg:h-[500px] w-[345px] h-[135px]">
            <span className="absolute bottom-0 z-1 m-[36px] gap-y-[6px] w-fit">
              <h6 className="text-[25px] font-bold">Design Process</h6>
              <p className="opacity-[80%]">
                Creating beautiful user interfaces.
              </p>
            </span>
            <img
              src={Design}
              alt="WorkSpace"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-100% lg:to-70% rounded-[8px]"></div>
          </div>
          {/* Image 5 */}
          <div className="relative rounded-[8px] lg:w-[400px] lg:h-[500px] w-[345px] h-[135px]">
            <span className="absolute bottom-0 z-1 m-[36px] gap-y-[6px] w-fit">
              <h6 className="text-[25px] font-bold">Client Presentation</h6>
              <p className="opacity-[80%]">
                Sharing project result and insights.
              </p>
            </span>
            <img
              src={Client}
              alt="WorkSpace"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-100% lg:to-70% rounded-[8px]"></div>
          </div>
          {/* Image 6 */}
          <div className="relative rounded-[8px] lg:w-[400px] lg:h-[500px] w-[345px] h-[135px]">
            <span className="absolute bottom-0 z-1 m-[36px] gap-y-[6px] w-fit">
              <h6 className="text-[25px] font-bold">Team Celebration</h6>
              <p className="opacity-[80%]">
                Celebration successful project completion.
              </p>
            </span>
            <img
              src={Celebration}
              alt="WorkSpace"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-100% lg:to-70% rounded-[8px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
