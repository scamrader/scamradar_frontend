import NavigationBar from "../Components/Navigation";
import FaqContainer from "../Components/FaqContainer";
import Image from "next/image";
const Faq = () => {
    return(
        <main>
            <NavigationBar />
            <section className="pt-[128px] pb-[80px] max-w-[1280px] mx-auto">
                <h2 className="font-[600] text-[80px] leading-[1.2] tracking-[0.01em] text-center">FAQ</h2>
                <h3 className="leading-[1.2] tracking-[0.01em] text-center text-[32px] font-[600]">Frequently Asked Questions </h3>
                <div className="py-[60px] max-w-[800px] mx-auto">
                    <div className="w-full relative">
                        {/* image icon */}
                        <div className="absolute left-[16px] top-[18px]">
                        <div className="relative w-[20px] h-[20px]">
                        <Image src="/img/search-normal.png" fill alt="scamrader faq" />
                        </div>
                        </div>
                        {/* end of image icon */}
                    <div className="p-[1.2px] rounded-[12px] bg-[linear-gradient(166.11deg,#9FCE31_17.6%,#96D7AE_90.09%)]">
                        <input
                        type="search"
                        placeholder="Search"
                        className="w-full h-[56px] bg-[#FCFDFA] rounded-[11px] pl-[48px] outline-none"
                        />
                    </div>
                    </div>

                    <div className="mt-[40px] space-y-[24px]">
                        <FaqContainer />
                    </div>
                </div>

                <div className="py-[80px]">
                      <section className="w-full mx-auto rounded-[24px] p-[60px] my-[80px] bg-[#1C2532] flex justify-between items-center">
                        <div className="space-y-[16px]">
                        <h3 className="text-[#fff] font-clash font-[600] text-[48px] leading-none">We don't guess. We verify</h3>
                        <div className="text-[#F5F5F5] text-[18px]">
                        <p>Scammers rely on silence. We rely on community.</p>
                        <p>Be part of the system that stops scams.</p>
                        </div>
                        </div>

                        <div className="flex space-x-[12px] text-[16px] font-[700] leading-none">
                                <button className="w-[169px] h-[52px] rounded-[16px] text-[#fff] bg-transparent border border-[#BABDC1] cursor-pointer">Report a scam</button>
                                <button className="w-[169px] h-[52px] rounded-[16px] text-[#0D1117] bg-[#fff] cursor-pointer">Verify account</button>
                            </div>
                      </section>
                </div>

            </section>
           
        </main>
    )
}

export default Faq;