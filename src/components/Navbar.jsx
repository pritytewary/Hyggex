import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <div className="flex  justify-between items-center h-28 px-32 ">
      <div className=" ">
        <Logo />
      </div>

      <div className="gap-10 flex items-center font-in">
        <div className="flex gap-10">
          <a href="" className="text-[#3A3740] text-lg ">
            Home
          </a>
          <a href="" className="text-[#3A3740] text-lg ">
            FlashBoard
          </a>
          <a href="" className="text-[#3A3740] text-lg ">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-10">
          <a href="" className="text-[#3A3740] text-lg ">
            FAQ
          </a>
          <button className="text-white rounded-[32px] text-lg px-10 py-3 flex items-center justify-center bg-gradient-to-b from-[#06286E] to-[#164EC0] ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
