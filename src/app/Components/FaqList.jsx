"use client";
import Image from "next/image";

const FaqList = ({ question, ans, isOpen, onClick }) => {
  return (
    <div className={`text-[#4C545F] leading-[1.2] py-[16px] px-[24px] ${isOpen ? "bg-[#FCFCFC] border border-[#DFDFDF] rounded-[16px]": ""}`}>
      <button
        onClick={onClick}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        <span>{question}</span>
        <span>{isOpen ?  <div className="relative w-[15px] h-[7px] cursor-pointer">
                <Image src="/img/arrow_up.png" fill alt="scamrader arrow down" />
             </div> :  <div className="relative w-[15px] h-[7px] cursor-pointer">
                 <Image src="/img/arrow_down.png" fill alt="scamrader arrow down" />
             </div>}</span>
      </button>

      {isOpen && (
        <div className="font-[500] leading-[1.5] rounded-[12px] bg-[#fff] py-[12px] px-[16px] border border-[#FAFAFA]"  dangerouslySetInnerHTML={{ __html: ans }} />
      )}
    </div>
  );
};

export default FaqList;