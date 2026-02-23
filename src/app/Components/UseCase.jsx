import Image from "next/image";

const UseCase = ({bgImage, text1, text2, btnText}) => {
    return(
    <div className={`text-[#000] relative w-[411px] h-[482px] rounded-[24px] ${bgImage} bg-cover bg-center`}>
            <div className="absolute bottom-0 left-0 w-full h-[240px] bg-[#fff] rounded-[24px] p-[24px]">
                <div className="flex space-x-[12px] items-center">
                    <div className="w-[40px] h-[40px] bg-[#D6F2FF] rounded-[8px] flex items-center justify-center">
                        <div className="relative w-[24px] h-[17px]">
                            <Image src="/img/icon7.png" alt="scamrader icon" fill />
                        </div>
                    </div>

                    <p className="leading-none  w-[227px]">
                        {text1}
                    {/* Someone DM'd me about an investment. */}
                    </p>
                </div>

                <div className="mt-[12px] mb-[28px] bg-[#FCFCFC] py-[8px] px-[12px] rounded-[8px]">
                    {text2}
                    {/* Our advice: Verify the business first  before responding. */}
                </div>

                 <button className="absolute bottom-[24px] left-[24px] w-[calc(100%-48px)] h-[52px] rounded-[16px] text-[#fff] bg-[#0D1117] cursor-pointer">{btnText}</button>

            </div>
        </div>
    )
}

export default UseCase;