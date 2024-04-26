import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { BiSolidPlusCircle } from "react-icons/bi";
import FlashCard from "./Flashcard";
import { PublishedBy } from "./Logo";
import plusicon from "../assets/plusicon.svg";

export default function Home() {
  return (
    <>
      <div className="mt-6 px-32 gap-2 flex flex-col h-screen w-full   ">
        <div className="flex items-center font-inter">
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

        <div className="mt-14 font-Mons  mb-8 font-bold bg-gradient-to-b from-[#06286E]  to-[#164EC0]  text-4xl text-transparent bg-clip-text inline-block items-center ">
          Relations and Functions (Mathematics)
        </div>

        <FlashCard />

        <div className="flex justify-between items-center mt-8">
          <div>
            <PublishedBy />
          </div>
          <div className="flex gap-2 items-center">
            <img src={plusicon} alt="" />

            <p className="from-[#06286E] to-[#164EC0] bg-gradient-to-br font-inter bg-clip-text text-transparent  font-semibold text-3xl">
              Create FlashCard
            </p>
          </div>
        </div>

        <div className="flex flex-col font-inter py-36 px-8">
          <div className="font-bold  bg-gradient-to-br from-[#06286E] to-[#164EC0] text-5xl bg-clip-text text-transparent inline-block">
            FAQ
          </div>
          <div className="flex flex-col gap-8 mt-10">
            <div className="max-w-4xl h-14 border border-[#217EEC] rounded-xl font-semibold text-base text-[#28262C] flex justify-between items-center px-6 ">
              Can education flashcards be used for all age groups?
              <SlArrowDown size={20} />
            </div>
            <div className="max-w-4xl h-14 border border-[#217EEC] rounded-xl font-semibold text-base text-[#28262C] flex justify-between items-center px-6">
              How do education flashcards work?
              <SlArrowDown size={20} />
            </div>
            <div className="max-w-4xl h-14 border border-[#217EEC] rounded-xl font-semibold text-base text-[#28262C] flex justify-between items-center px-6">
              Can education flashcards be used for test preparation?
              <SlArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
