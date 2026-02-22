import Image from "next/image";

const WhatYouCanDoList = ({icon, background, title, text}) => {
    return(
        <div className={`w-[410px] h-[377px] rounded-[24px] p-[40px] ${background}`}>
            <div className="border border-[#989DA3] w-[80px] h-[80px] rounded-[40px] flex items-center justify-center">
                <div className="relative w-[40px] h-[40px]">
                     <Image
                        src={icon}
                        alt="what you can do with scamrader"
                        fill
                        className="object-cover"
                        />
                </div>
            </div>

            <div className="mt-[120px] space-y-[24px]">
                    <h3 className="font-[600] font-clash text-[20px] leading-none text-[#1C2532]">{title}</h3>
                    <p className="leading-[1.5]">{text}</p>

                </div>
        </div>
    )
}

export default WhatYouCanDoList;