const HowScamraderWorksList = ({header, text, numbering}) => {
    return(
        <div className="w-[330px] p-[24px] flex space-x-[12px]">
        <div className="text-[#fff] p-[10px] w-[24px] h-[24px] bg-[#017189] flex items-center justify-center rounded-full " >{numbering}</div>
        <div>
            <h3 className="font-clash font-[600] text-[20px]">{header}</h3>
            <p className="text-[#4C545F] leading-[1.5]">{text}</p>
        </div>
        </div>
    )
}

export default HowScamraderWorksList;