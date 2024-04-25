import { MdLightbulbOutline } from "react-icons/md";

import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdRefresh } from "react-icons/md";

import { IoMdQrScanner } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="mt-6 px-32 gap-2 flex flex-col h-screen w-full   ">
        <div className="flex items-center">
          <GoHome size={25} className="text-[#696671]" />
          <FaAngleRight size={15} className="text-[#06286E]" />
          <a href="" className="text-lg text-[#696671] font-medium">
            FlashCard
          </a>
          <FaAngleRight size={15} className="text-[#06286E]" />
          <a href="" className="text-lg text-[#696671] font-medium">
            Mathematics
          </a>
          <FaAngleRight size={15} className="text-[#06286E]" />
          <a href="" className="text-[#06286E] text-lg font-semibold">
            Relation and Fumction
          </a>
        </div>

        <div className="mt-14   mb-8 font-bold bg-gradient-to-b from-[#06286E]  to-[#164EC0]  text-4xl text-transparent bg-clip-text inline-block items-center ">
          Relations and Functions (Mathematics)
        </div>
        <div className="flex gap-10 mt-5 items-center  justify-center">
          <a
            href=""
            className="text-[#06286E] text-xl font-bold border-b-2  border-[#06286E] pb-2 px-2"
          >
            {" "}
            Study
          </a>
          <a href="" className="text-[#696671] font-medium text-xl">
            Quiz
          </a>
          <a href="" className="text-[#696671] font-medium text-xl">
            Test
          </a>
          <a href="" className="text-[#696671] font-medium text-xl">
            Game
          </a>
          <a href="" className="text-[#696671] font-medium text-xl">
            Others
          </a>
        </div>

        <div className=" mt-8 items-center justify-center flex flex-col">
          <div className="bg-gradient-to-br to-blue-900 via-blue-700 from-blue-400  w-[712px] h-[400px] rounded-[42px] text-white flex  px-10 py-10 flex-col">
            <div className="flex justify-between">
              <MdLightbulbOutline size={30} />
              <HiSpeakerWave size={25} />
            </div>
            <div className="font-bold text-4xl items-center justify-center flex my-28">
              9+6+7x-2x-3
            </div>
          </div>

          <div className="flex gap-36 mt-8 mx-10">
            <MdRefresh
              size={40}
              className="text-transparent bg-gradient-to-br bg-clip-text inline-block from-[#06286E] to-[#164EC0]"
            />
            <div className="gap-10 flex">
              <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] w-14 h-14 rounded-full text-white flex items-center justify-center">
                <IoIosArrowBack size={40} />
              </div>
              <p className="font-bold text-2xl">01/10</p>
              <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0]  w-14 h-14 rounded-full text-white items-center justify-center flex">
                <IoIosArrowForward size={40} />
              </div>
            </div>
            <IoMdQrScanner size={40} />
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </>
  );
}
