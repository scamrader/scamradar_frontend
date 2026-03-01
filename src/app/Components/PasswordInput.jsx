import Image from "next/image";

const PasswordInput = ({css, placeholder}) => {
    return(
        <div className="w-full relative">
             <Image
                src="/img/eye.png"
                width={24}
                height={24}
                alt="scamrader password"
                className="absolute bottom-[18px] right-[18px] cursor-pointer"
            />

        <input type="password" placeholder={placeholder} className={`${css} outline-none px-[16px] h-[56px] w-full rounded-[12px] border border-[#E9EAEB]`} />
        </div>
     )
}

export default PasswordInput;