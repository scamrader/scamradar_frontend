 const InputDiv = ({label, placeholder, type}) => {
        return (
            <div>
                <label className="text-[#4C545F] text-[14px]">{label}</label>
                <input type={type} placeholder={placeholder} className="cursorr-pointer px-[16px] w-full h-[54px] rounded-[12px] outline-none border border-[#E9EAEB] " />
            </div>
        )
    }

const Step1 = () => {
   
    return(
        <div>
            <div className="flex justify-between items-center">
            <div className="text-[#000]">
            <h3 className="font-[600px] text-[32px]">Account details</h3>
            <p>Give details of the account that scammed you</p>
            </div>

            <div className="text-[#515A6A] w-[60px] h-[60px] rounded-full border-[5px] border-[#D9EAED] flex items-center justify-center">50%</div>
            </div>

            <form className="space-y-[10px] mt-[24px]">
                <InputDiv label="Date of incident" type="date" placeholder="Enter date" />
                <InputDiv label="Amount" type="text" placeholder="How much were you scammed of?" />
                 <div>
                <label className="text-[#4C545F] text-[14px]">Bank</label>
                <select className="cursorr-pointer px-[16px] w-full h-[54px] rounded-[12px] outline-none border border-[#E9EAEB]">
                    <option>Select</option>
                    <option>Opay</option>
                    <option>Palmpay</option>
                </select>
                </div>
                <InputDiv label="Account number" type="text" placeholder="Enter account" />
                <InputDiv label="Account name" type="text" placeholder="Enter name" />
                <div className="mt-[30px]">
                <button className="w-full h-[52px] rounded-[16px] bg-[#BABDC1] text-[#fff]">Continue</button>
                </div>

            </form>
        </div>
    )
}

export default Step1;