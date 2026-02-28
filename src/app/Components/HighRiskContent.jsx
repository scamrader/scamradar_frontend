import Image from "next/image";

const HighRiskContent = () => {
    return(
            <div className="w-full h-full p-[40px] space-y-[16px] text-[#4C545F]">
                <div className="flex justify-between items-center">
                    <span className="font-[600] leading-none text-[18px] text-[#1F2937]">Search result</span>
                    <div className="w-[20px] h-[20px] relative cursor-pointer">
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

                    <div className="flex justify-between items-center text-[14px] leading-none pt-[8px]">
                        <span>No of community reports:</span>
                        <div className="w-[24px] h-[24px] bg-[#FF5A5A] rounded-full flex items-center justify-center text-[#fff] text-[14px] ">6</div>
                    </div>

                     <div className="flex justify-between items-center text-[14px] leading-none pt-[8px]">
                        <span>Reported for:</span>
                        <div className="flex space-x-[11px]">
                            <div className="py-[4px] px-[8px] flex items-center space-x-[7px] text-[14px] rounded-[8px] border-[0.5px] border-[#FF5A5A]">
                                <span className="text-[#000]">Fake goods</span>
                                <span className="text-[#FF5A5A]">3</span>
                            </div>
                            <div className="py-[4px] px-[8px] flex items-center space-x-[7px] text-[14px] rounded-[8px] border-[0.5px] border-[#FF5A5A]">
                                <span className="text-[#000]">Investment scam</span>
                                <span className="text-[#FF5A5A]">3</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#E9EAEB] w-full h-[1px]"></div>

                    <div className="flex justify-between items-center text-[14px] leading-none pt-[8px]">
                        <span>Last reported date:</span>
                        <span>3 days ago</span>
                    </div>
                </div>

                <div className="bg-[#FFFAFB] p-[16px] rounded-[16px] border border-[#FF5A5A]">
                    <div className="flex space-x-[8px] items-center">
                        <div className="relative w-[24px] h-[24px]">
                            <Image src="/img/forbidden.png" fill alt="verify scamrader"/>
                        </div>
                        <span className="text-[#FF5A5A] font-[600] text-[14px]">Do not send money</span>
                    </div>
                    <p className="leading-[1.5] text-[14px]">This account has received multiple reports and is considered high risk. Do not send money.</p>
                </div>

                <div className="flex space-x-[12px] pt-[8px]">
                    <button className="cursor-pointer h-[52px] w-[50%] border border-[#BABDC1] outline-none rounded-[16px] text-[#0D1117] font-[700]">Report this account</button>
                    <button className="cursor-pointer h-[52px] w-[50%] bg-[#0D1117] outline-none rounded-[16px] text-[#FFFFFF] font-[700]">Share warning</button>
                </div>

                <p className="text-[14px]">
                    <strong>DISCLAIMER</strong>: Scamrader provides risk insights based on reported data. <strong>Learn more</strong>
                </p>
               
            </div>
    )
}

export default HighRiskContent;