import Image from "next/image";
import Link from "next/link";

export default function ReportLayout() {
  return (
    <main className="max-w-[1280px] mx-auto pt-[20px] md:pt-[40px] pb-[20px] md:pb-[90px] px-[16px] xl:px-0">
        <div className="flex justify-between items-center">
        <Link href="/">
        <div className="w-[140px] md:w-[200px] h-[34px] md:h-[51px] relative">
        <Image src="/logo.png" alt="scamrader logo" fill />
        </div>
        </Link>

        <div className="flex space-x-[6px] md:space-x-[12px] items-center">
            <div className="w-[20px] md:w-[32px] h-[20px] md:h-[32px] rounded-full bg-[#D9D9D9]"></div>
            <span className="text-[#000] text-[12px] md:text-[16px]">Thanau Abbas</span>
            <div className="w-[15px] h-[7px] relative">
            <Image src="/img/arrow_down.png" alt="scamrader logo" fill />
            </div>
        </div>
        </div>
    
        <div className="max-w-[600px] mt-[160px] p-[24px] border border-[#DFDFDF] mx-auto rounded-[24px] flex items-center justify-center">
            <div className="">
            <div className="relative w-[120px] h-[120px] mx-auto">
            <Image src="/img/successfull.png" fill alt="successfull page" />
            </div>

            <div className="text-center mt-[40px]">
                <h6 className="text-[#1F2937] font-[500]">Report submitted successfully!</h6>
                <p className="text-[#4C545F] leading-[1.5] text-[14px]">Thank you for reporting a scam case. This will help protect others.</p>
                <div className="mt-[24px]">
                <button className="h-[44px] w-full text-[13px] text-[#fff] text-[#FFFFFF] rounded-[16px] bg-[#0D1117]">Report another account</button>
                </div>
            </div> 
            <Link href="/">
            <p className="text-[#0D1117] font-[600] text-[13px] text-center py-[22px]">Back home</p>
            </Link>
            </div>
        </div>
        
    </main>
  );
}