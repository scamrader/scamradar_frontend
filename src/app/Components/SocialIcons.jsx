import Image from "next/image";

const SocialIcons = ({cssClass, imgUrl}) => {
    return(
        <div className="w-[40px] h-[40px] bg-[#1C2532] rounded-full flex items-center justify-center">
        <div className={`relative ${cssClass}`}>
            <Image src={imgUrl} fill alt="scamrader socialmedia pages" />
        </div>
        </div>
    )
}

export default SocialIcons;