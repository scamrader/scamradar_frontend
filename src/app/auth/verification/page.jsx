import Image from "next/image";
import Input from "../../Components/Input";
import PasswordInput from "../../Components/PasswordInput";

const InputNumber = () => {
    return(
         <input type="text" className="outline-none cursor-pointer w-[80px] h-[56px] rounded-[12px] border border-[#E9EAEB] text-center" placeholder="-"/>
    )
}

const Verification = () => {
    return(
        <main className="w-full bg-[#F6F8F0] h-[100vh] pt-[40px]">
            <div className="relative w-[200px] h-[51px] mx-auto">
                <Image src="/logo.png" alt="scamrader logo" fill />
            </div>

            <section className="mt-[24px] bg-[#fff] rounded-[24px] p-[40px] max-w-[600px] mx-auto">
                <div className="w-full relative text-center">
                    <Image src="/img/left-arrow.png" width={7} height={15.8} alt="scamrader left arrow" className="absolute top-[5px] left-0" />
                    <h3 className="text-[18px] font-[600]">Verification</h3>
                </div>

                <div className="w-full mt-[24px] space-y-[40px] ">
                    <div className="mx-auto max-w-[200px] h-[200px] rounded-full p-[18px] border border-[#E9EAEB] flex justify-center items-center animate-pulsate">
                            <div className="relative w-[120px] h-[120px]">
                                <Image src="/img/verification.png" fill alt="scamrader verification" />
                            </div>
                    </div>

                    <div className="space-y-[32px]">
                        <div className="text-center">
                            <h4 className="text-[#1F2937] text-[24px] font-[600]">Verification Code</h4>
                            <p className="text-[#4C545F]">Enter the verification code sent to your email.</p>
                        </div>

                        <div className="flex justify-between space-x-[7px]">
                            <InputNumber />
                            <InputNumber />
                            <InputNumber />
                            <InputNumber />
                            <InputNumber />
                            <InputNumber />
                        </div>
                    </div>

                    <div className="space-y-[24px]">
                    <button className="w-full h-[51px] bg-[#0D1117] outline-none border border-[#BABDC1] cursor-pointer text-[#fff] rounded-[16px]">
                        Submit
                    </button>

                    <p className="text-[#4C545F] font-[500] text-center">Resend code</p>
                    </div>
                </div>


                
            </section>
        </main>
    )
}

export default Verification;