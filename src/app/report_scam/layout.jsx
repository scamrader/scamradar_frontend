import Image from "next/image";

export default function ReportLayout({ children }) {
  return (
    <main className="w-[1280px] mx-auto pt-[40px]">
        <div className="flex justify-between items-center">
        <div className="w-[200px] h-[51px] relative">
        <Image src="/logo.png" alt="scamrader logo" fill />
        </div>

        <div className="flex space-x-[12px] items-center">
            <div className="w-[32px] h-[32px] rounded-full bg-[#D9D9D9]"></div>
            <span className="text-[#000]">Thanau Abbas</span>
             <div className="w-[15px] h-[7px] relative">
            <Image src="/img/arrow_down.png" alt="scamrader logo" fill />
            </div>
        </div>
        </div>
        <div className="p-[40px]">
            <span className="text-[#000] font-[700]">Back</span>
        </div>

        <div className="w-[600px] p-[24px] border border-[#DFDFDF] mx-auto rounded-[24px]">
            {children}
        </div>
        
    </main>
  );
}