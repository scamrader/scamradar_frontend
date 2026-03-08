import Image from "next/image";
import Link from "next/link";

const Step2 = () => {
   
    return(
        <div className="">
            <div className="flex justify-between items-center">
            <div className="text-[#000]">
            <h3 className="font-[600] text-[24px] lg:text-[32px]">Evidence</h3> 
        </div>

            <div className="text-[#515A6A] w-[60px] h-[60px] rounded-full border-[5px] border-[#015B6A] flex items-center justify-center">100%</div>
            </div>

            <form className="space-y-[10px] mt-[24px]">
                 <div>
                <label className="text-[#4C545F] text-[14px]">Type of scam</label>
                <select className="cursor-pointer px-[16px] w-full h-[54px] rounded-[12px] outline-none border border-[#E9EAEB]">
                    <option>Select</option>
                    <option>Opay</option>
                    <option>Palmpay</option>
                </select>
                </div>

                <div>
                <div className="text-[14px]">
                    <span className="text-[#4C545F] block">Evidence upload </span>
                    <span className="text-[#697079]">Upload up to 6 screenshots, transaction references, chat messages, emails or other evidence. </span>
                </div>
                <label htmlFor="inputImages" className="cursor-pointer h-[114px] rounded-[16px] bg-[#FAFAFA] border border-dashed border-[#DFDFDF] flex items-center justify-center">
                        <div>
                            <Image src="/img/pixel.png" width={29} height={27} alt="scamrader evidence upload" className="mx-auto" />
                        <input type="file" className="hidden" id="inputImages" />
                       <div className="text-[14px] mt-[12px]">
                        <span className="leading-[18px] text-[#017189]">Click to upload</span><span> or drag and drop</span>
                        <span className="text-[#697079] text-[12px] text-center block">JPG, JPEG, PNG less than 100MB</span>
                       </div>
                        </div>
                </label>
                </div>

                <div>
                <label className="text-[#4C545F] text-[14px]">Details</label>
                <textarea className="p-[12px] leading-[1.5] text-[14px] font-[300] w-full h-[161px] rounded-[12px] border border-[#E9EAEB]" placeholder="Give a short description of what happened - date, phone number, amount lost. etc">
                </textarea>
                </div>

                {/* checkbox 1 */}
                <div className="flex space-x-[10px]">
                    <input type="checkbox" className="w-[24px] h-[24px] border border-[1.5px] border-[#989DA3]" />
                    <div className="text-[14px] text-[#0D1117]">I confirm this report is truthful to the best of my knowledge.</div>
                </div>

                {/* checkbox 2 */}
                <div className="flex space-x-[10px]">
                    <input type="checkbox" className="w-[24px] h-[24px] border border-[1.5px] border-[#989DA3]" />
                    <div className="text-[14px] text-[#0D1117]">I understand that these details are only used for education and scam prevention purposes.</div>
                </div>

                <div className="mt-[30px]">
                <Link href="/successful">
                <button className="cursor-pointer w-full h-[52px] rounded-[16px] bg-[#BABDC1] hover:bg-[#000] text-[#fff]">Report account</button>
                </Link>
                </div>

            </form>
        </div>
    )
}

export default Step2;