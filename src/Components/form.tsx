export default function Form() {
  return (
    <form
      action=""
      className="font-lato text-[#000]/70 flex flex-col gap-y-[100px] items-center"
    >
      <div className="flex flex-col gap-y-[24px] w-full">
        <div className="flex flex-col gap-y-[8px]">
          <label htmlFor="" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            className="block border border-[#000]/30 rounded-[8px] h-[36px] w-full p-2"
          />
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            className="block border border-[#000]/30 rounded-[8px] h-[36px] w-full p-2"
          />
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <label htmlFor="" className="font-semibold">
            Message
          </label>
          <textarea
            name=""
            id=""
            className="h-[140px] border border-[#000]/30 rounded-[8px] p-2"
          ></textarea>
        </div>
      </div>
      <button className="font-semibold py-[8px] px-[24px] bg-[#F60] w-fit rounded-[8px] text-white hover:cursor-pointer hover:bg-orange-400 hover:scale-105 transition-all">
        Send Message
      </button>
    </form>
  );
}
