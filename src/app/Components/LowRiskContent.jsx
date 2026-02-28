import Image from "next/image";

const LowRiskContent = ({setIsOpen}) => {
    return(
            <div className="w-full h-full p-[40px] space-y-[16px] text-[#4C545F]">
                <div className="flex justify-between items-center">
                    <span className="font-[600] leading-none text-[18px] text-[#1F2937]">Search result</span>
                    <div onClick={() => setIsOpen(false)} className="w-[20px] h-[20px] relative cursor-pointer">
                    <Image src="/img/close-square.png" fill alt="close modal" />
                    </div>
                </div>
                
                <div className="p-[16px] rounded-[16px] border border-[#E9EAEB] space-y-[16px]">
                    <div className="flex items-center space-x-[5px]">
                        <div className="relative w-[48px] h-[48px]">
                            <Image src="/img/kuda.png" alt="bank log" fill/>
                        </div>
                        <div>
                            <h4 className="font-[600] text-[#000]">Thanau Abbas</h4>
                            <p className="text-[14px] text-[#4C545F]">Business account</p>
                        </div>
                    </div>
                    <div className="bg-[#E9EAEB] w-full h-[1px]"></div>
 
                    <div className="flex justify-between text-[14px] leading-none">
                        <span>Account number</span>
                        <span>0123456789</span>
                    </div>

                    <div className="flex justify-between text-[14px] leading-none pt-[8px]">
                        <span>Bank</span>
                        <span>Kuda</span>
                    </div>

                    <div className="bg-[#E9EAEB] w-full h-[1px]"></div>

                    <div className="flex justify-between text-[14px] leading-none pt-[8px]">
                        <span>No of community reports:</span>
                        <div className="w-[24px] h-[24px] bg-[#34C759] rounded-full flex items-center justify-center text-[#fff] text-[14px] ">1</div>
                    </div>
                </div>

                <div className="bg-[#F3FFF6] p-[16px] rounded-[16px] border border-[#34C759] ">
                    <div className="flex space-x-[8px] items-center">
                        <div className="relative w-[24px] h-[24px]">
                            <Image src="/img/verify.png" fill alt="verify scamrader"/>
                        </div>
                        <span className="text-[#29A348] font-[600] text-[14px]">Low risk</span>
                    </div>
                    <p className="leading-[1.5] text-[14px]">No community reports found. Always verify the recipient before sending money.</p>
                </div>

                <div className="flex space-x-[12px] pt-[8px]">
                    <button className="cursor-pointer h-[52px] w-[50%] border border-[#BABDC1] outline-none rounded-[16px] text-[#0D1117] font-[700]">Share result</button>
                    <button className="cursor-pointer h-[52px] w-[50%] bg-[#0D1117] outline-none rounded-[16px] text-[#FFFFFF] font-[700]">Report this account </button>
                </div>

                <p className="text-[14px]">
                    <strong>DISCLAIMER</strong>: Scamrader provides risk insights based on reported data. <strong>Learn more</strong>
                </p>
               
            </div>
    )
}

export default LowRiskContent;