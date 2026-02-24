import Image from "next/image";

const FaqBlock = ({questions}) => {
    return(
        <div className="w-full py-[16px] px-[24px] flex justify-between items-center">
            <p className="leading-[1.2]">{questions}</p>
            <div className="relative w-[15px] h-[7px] cursor-pointer">
                <Image src="/img/arrow_down.png" fill alt="scamrader arrow down" />
            </div>
        </div>
    )
}

export default FaqBlock;