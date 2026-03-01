const Input = ({type, css, placeholder}) => {
    return(
        <input type={type} placeholder={placeholder} className={`${css} outline-none px-[16px] h-[56px] w-full rounded-[12px] border border-[#E9EAEB]`} />
    )
}

export default Input;