import vector from "../assets/vector.svg";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex px-32 justify-between items-center h-28 ">
      <div className="flex items-center ">
        <div className="relative">
          <img src={logo} alt="" className="w-28 h-28 filter backdrop-invert" />
          <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            H
          </p>
        </div>

        <div className="flex items-center">
          ygge <img src={vector} alt="" />
        </div>
      </div>

      <div className="gap-10 flex items-center">
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
