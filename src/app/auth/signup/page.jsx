import Image from "next/image";
import Input from "../../Components/Input";
import PasswordInput from "../../Components/PasswordInput";

const Signup = () => {
    return(
        <main className="w-full bg-[#F6F8F0] h-[100vh] pt-[40px]">
            <div className="relative w-[200px] h-[51px] mx-auto">
                <Image src="/logo.png" alt="scamrader logo" fill />
            </div>

            <section className="mt-[24px] bg-[#fff] rounded-[24px] p-[40px] max-w-[600px] mx-auto">
                <div>
                    <h4 className="font-[600] text-[28px] text-[#1F2937]">Sign Up</h4>
                    <span className="text-[14px] text-[#697079]">Welcome, Let's get you started</span>
                </div>

                <form className="mt-[40px] space-y-[24px] text-[#4C545F]">
                    <div className="flex space-x-[24px]">
                    <div className="w-[50%]">
                        <label>First name</label>
                        <Input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="w-[50%]">
                        <label>Last name</label>
                        <Input type="text" placeholder="Enter your name" />
                    </div>
                    </div>

                    {/* email */}
                    <div className="w-full">
                        <label>Email</label>
                        <Input type="email" placeholder="Enter your email address" />
                    </div>

                    {/* password */}
                    <div className="w-full">
                        <label>Password</label>
                        <PasswordInput  placeholder="Choose a strong password" />
                    </div>

                    <div className="flex space-x-[10px] items-center">
                        <Image
                        src="/img/info-circle.png"
                        width={24}
                        height={24}
                        alt="scamrader"
                        className=""
                    />
                    <p className="text-[14px] text-[#0D1117]">Creating an account means you agree with out <span className="text-[#017189]">Terms of Service</span></p>
                    </div>

                    <button className="w-full h-[60px] bg-[#0D1117] border border-[#BABDC1] text-[#fff] rounded-[16px]">Continue</button>

                    <div className="relative max-w-[302px] mx-auto h-[1px] border border-[#E9EAEB]">
                        <div className="absolute absoute -top-[25px] left-[1px] w-full flex items-cente justify-center">
                            <div className="p-[10px] bg-[#fff]">
                                Or
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between items-center">
                        <button className="cursor-pointer block w-[165px] h-[60px] border border-[#E9EAEB] bg-[#fff] rounded-[10px] flex items-center justify-center">
                            <Image src="/img/facebook.png" width={8} height={18} alt="scamrader facebook" />
                        </button>
                        <button className="cursor-pointer block w-[165px] h-[60px] border border-[#E9EAEB] bg-[#fff] rounded-[10px] flex items-center justify-center">
                            <Image src="/img/apple.png" width={16} height={19} alt="scamrader facebook" />
                        </button>
                        <button className="cursor-pointer block w-[165px] h-[60px] border border-[#E9EAEB] bg-[#fff] rounded-[10px] flex items-center justify-center">
                            <Image src="/img/google.png" width={18} height={19} alt="scamrader facebook" />
                        </button>

                    </div>


                </form>

            </section>
        </main>
    )
}

export default Signup;