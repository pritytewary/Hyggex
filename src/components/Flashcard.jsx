import { MdLightbulbOutline } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdRefresh } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import refreshicon from "../assets/refreshicon.svg";
import scanicon from "../assets/scanicon.svg";

export default function FlashCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex gap-14 mt-5 items-center justify-center font-inter">
        {cardOptions.map((opt, i) => {
          const isActive = i === 0;

          return (
            <button
              key={opt}
              className={clsx("text-xl font-bold pb-2 px-2", {
                "text-[#06286E] border-b-2  border-[#06286E]": isActive,
                "text-[#696671]": !isActive,
              })}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-8 items-center justify-center flex flex-col w-full max-w-[712px]">
        <div className="bg-gradient-to-br to-blue-900 via-blue-700 from-blue-400 w-full h-[400px] rounded-[42px] text-white flex  px-10 py-10 flex-col">
          <div className="flex justify-between">
            <MdLightbulbOutline size={30} />
            <HiSpeakerWave size={25} />
          </div>
          <div className="font-bold font-lato  text-4xl items-center justify-center flex my-28">
            9+6+7x-2x-3
          </div>
        </div>

        <div className="flex justify-between mt-2 items-center py-6 w-full px-8">
          <img src={refreshicon} alt="" />
          <div className="gap-10 flex items-center">
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] w-14 h-14 rounded-full text-white flex items-center justify-center">
              <IoIosArrowBack size={40} />
            </div>
            <p className="font-bold text-2xl font-inter">01/10</p>
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0]  w-14 h-14 rounded-full text-white items-center justify-center flex">
              <IoIosArrowForward size={40} />
            </div>
          </div>

          <img src={scanicon} alt="" />
        </div>
      </div>
    </div>
  );
}

const cardOptions = ["Study", "Quiz", "Test", "Game", "Others"];
