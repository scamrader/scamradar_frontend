import Image from "next/image";

export default function ReportLayout({ children }) {
  return (
    <main className="max-w-[1280px] mx-auto pt-[20px] md:pt-[40px] pb-[40px] md:pb-[90px] px-[16px] xl:px-0">
        <div className="flex justify-between items-center">
        <div className="w-[140px] md:w-[200px] h-[36px] md:h-[51px] relative">
        <Image src="/logo.png" alt="scamrader logo" fill />
        </div>

        <div className="flex space-x-[6px] md:space-x-[12px] items-center">
            <div className="w-[20px] md:w-[32px] h-[20px] md:h-[32px] rounded-full bg-[#D9D9D9]"></div>
            <span className="text-[#000] text-[12px] md:text-[16px]">Thanau Abbas</span>
             <div className="w-[15px] h-[7px] relative">
            <Image src="/img/arrow_down.png" alt="scamrader logo" fill />
            </div>
        </div>
        </div>
        <div className="p-[20px] md:p-[40px]">
            <span className="text-[#000] font-[700] cursor-pointer hidden md:block">Back</span>
        </div>

        <div className="max-w-[600px] md:p-[24px] md:border border-[#DFDFDF] mx-auto rounded-[24px]">
            {children}
        </div>
        
    </main>
  );
}