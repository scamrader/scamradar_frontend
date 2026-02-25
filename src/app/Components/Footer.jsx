import Image from "next/image";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="w-full font-outfit">
        <section className="w-[1280px] mx-auto flex space-x-[40px]">
            <div className="w-[620px]"> 
                <div className="relative w-[168px] h-[43px]">
                    <Image src="/logo.png" fill alt="scamrader logo" />
                </div>
                <p className="leading-[1.4] w-[420px] mt-[32px] mb-[16px] text-[#4C545F]">
                Scamrader is the first real-time scam intelligence
                platform that helps people verify accounts before sending money and prevent financial fraud.
                </p>

                <div className="flex space-x-[12px] items-center">
                    <span className="text-[#1C2532] text-[12px] leading-[1.5]">Learn about scamrader</span>
                    <div className="bg-[#1C2532] w-[10px] h-[10px] rounded-full"></div>
                </div>

                <div className="mt-[120px] flex space-x-[10px]">
                    <SocialIcons
                        cssClass="w-[11px] h-[18px]"
                        imgUrl="/img/social1.png"
                    />
                    <SocialIcons
                        cssClass="w-[20px] h-[12px]"
                        imgUrl="/img/social2.png"
                    />
                    <SocialIcons
                        cssClass="w-[18px] h-[15px]"
                        imgUrl="/img/social3.png"
                    />
                    <SocialIcons
                        cssClass="w-[18px] h-[18px]"
                        imgUrl="/img/social4.png"
                    />
                    <SocialIcons
                        cssClass="w-[18px] h-[18px]"
                        imgUrl="/img/social5.png"
                    />


                </div>
            </div>

            <div className="w-[620px] space-y-[205px]">
                {/* links */}
                <div className="flex space-x-[41px] text-[#4C545F] leading-[1.4]">
                    <Link href="#">About</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">how it works</Link>
                    <Link href="#">Legal</Link>
                </div>

                <div className="flex space-x-[170px]">
                    <div>
                        <h3 className="leading-[1.1] font-[500] text-[18px] text-[#1C2532]">Contact Us</h3>
                        <div className="text-[#4C545F] leading-[1.6] mt-[16px]">
                        <p>+234 (810) 1075-795</p>
                        <p>hello@scamrader.com</p>
                        </div>
                    </div>
                     <div>
                        <h3 className="leading-[1.1] font-[500] text-[18px] text-[#1C2532]">Location</h3>
                        <div className="text-[#4C545F] leading-[1.6] mt-[16px]">
                        <p>Lagos, Nigeria</p>
                        <p>Office 4, Sabo, Yaba. 22/2/5, </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
         <div className="mt-[64px] max-w-[1280px] mx-auto text-[#4C545F] leading-[1.4] text-[12px] border border-x-0 border-t-[#DFDFDF] border-b-0 py-[64px] text-center">
            © 2025 - Copyright All Rights reserved
            </div>
        </footer>
    )
}

export default Footer;