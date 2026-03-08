"use client"
import { useState } from "react";
import Image from "next/image";
import NavigationBar from "./Components/Navigation";
import MobileNav from "./components/MobileNav";
import HowScamraderWorksList from "./Components/HowScamraderWorksList";
import WhatYouCanDoList from "./Components/WhatYouCanDoList";
import UseCase from "./Components/UseCase"
import FaqContainer from "./Components/FaqContainer";
import VerifyAccountModal from "./Components/VerifyModal";
import Footer from "./Components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      <NavigationBar />
      <MobileNav />
      <section className="max-w-[1280px] mx-auto pt-[34px] lg:pt-[90px] pb-[40px] px-[16px] lg:px-0">
        <div className="font-clash">
          <h1 className="font-[600] text-[48px] lg:text-[80px] leading-[1.3] lg:leading-[1.5] tracking-[-0.02em]">Don&rsquo;t get scammed.</h1>
          <h3 className="text-[38px] lg:text-[80px] leading-[1.5] tracking-[-0.02em]">Verify first.</h3>
        </div>

          <div className="mt-[20px] relative w-[282px] lg:w-[469px] h-[380px] lg:h-[629px] mx-auto block lg:hidden">
              <Image
                  src="/img/banner_mobile.png"
                  alt="Banner"
                  fill
                  className="object-cover"
                />
            </div>

        <div className="mt-[10px] lg:mt-[32px] bg-[#E3E2F6] rounded-[24px] p-[16px] lg:p-[40px] relative w-full text-[#000] leading-[1.5] space-y-[16px] lg:space-y-[40px]">
          <p className="text-[18px] max-w-[432px] font-[400]">
            Check any account before sending money or making payments, report scams, and protect yourself in seconds.
          </p>
          <div className="p-[12px] lg:p-0 min-h-[52px] max-w-[432px] bg-[#ECECF9] rounded-[16px] relative">
            <input type="text" placeholder="Enter account number" className="pl-[10px] pr-[112px] w-full h-[52px] rounded-[16px] outline-none bg-[#ECECF9]" />
          <button onClick={() => setIsOpen(true)} className="font-[700] leading-none text-[#FFFFFF] rounded-[16px] w-full md:w-[110px] h-[52px] outline-none relative lg:absolute top-0 right-0 bg-[#0D1117] border border-[#BABDC1] cursor-pointer">
            Verify
          </button>
          </div>
          <VerifyAccountModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <p className="text-[18px] max-w-[432px] font-[400]">
            Scammers move fast. We move faster.
          </p>

            {/* desktop banner image */}
          <div className="hidden lg:block absolute bottom-0 right-0">
          <div className="relative w-[469px] h-[629px]">
             <Image
                src="/img/scamrader_banner.png"
                alt="Banner"
                fill
                className="object-cover"
              />
          </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E9ECD9] w-full h-[84px]">
      </section>

      {/* how scammers works */}
      <section className="max-w-[1280px] mx-auto py-[32px] lg:py-[112px] px-[16px] px-0 flex flex-col  lg:flex-row justify-between">
        <div className="lg:w-[780px]">
          <h2 className="font-[600] font-clash text-[32px] lg:text-[48px] leading-[1.3] tracking-[-0.02] text-[#1C2532]">How Scamrader Works</h2>
          <div className="mt-0 lg:mt-[40px] lg:space-y-[80px]"> 
            {/* flex1 */}
            <div className="w-full flex flex-col md:flex-row justify-between">
              <HowScamraderWorksList
                numbering="1"
                text="Paste an account number before sending money."
                header="Enter an account"
              />
               <HowScamraderWorksList
                numbering="2"
                text="Scamrader instantly scans verified reports and data signals."
                header="We check for risk"
              />
            </div>

             <div className="w-full flex flex-col md:flex-row justify-between">
              <HowScamraderWorksList
                numbering="4"
                text="Block risky accounts, report scams, or proceed with confidence."
                header="Take action"
              />
               <HowScamraderWorksList
                numbering="3"
                text="See the account name, bank, risk level, and warnings in seconds."
                header="Get a clear result"
              />
            </div>

          </div>
        </div>

            <div className="relative w-[310px] sm:w-[358px] lg:w-[449px] mx-auto h-[320px] sm:h-[368px] lg:h-[472px]">
             <Image
                src="/img/howscamraderworks.svg"
                alt="Banner"
                fill
                className="object-cover"
              />
          </div>

      </section> 

      {/* what you can do*/} 
      <section className="bg-[#F5F5F5]">
      <section className="py-[40px] px-[16] lg:px-0 lg:py-[120px] max-w-[1280px] mx-auto bg-[#F5F5F5] space-y-[24px] lg:space-y-[40px]">
        <div className="flex flex-col lg:flex-row lg:space-x-[40px] lg:items-center"> 
          <h2 className="font-[600] font-clash leading-[1.5] tracking-[-0.02] text-[32px] lg:text-[48px] text-[#0D1126] text-left">What you can do.</h2>
          <div className="text-[16px] lg:text-[18px] leading-[1.5] text-[]#1F2937">
            <p>Scammers are winning because people are alone.</p>
            <p>No shared warnings. No real-time protection. No central place to check before sending money.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-between space-y-[24px] space-x-[24px]">
          <WhatYouCanDoList
          icon="/img/icon3.png"
          background="bg-[#E3E7CF]"
          text="Check any account number before you send money."
          title="Verify"
          />

           <WhatYouCanDoList
          icon="/img/icon2.png"
          background="bg-[#fff]"
          text="Got scammed? Report it with evidence so others don&rsquo;t fall victim."
          title="Report"
          />

           <WhatYouCanDoList
          icon="/img/icon1.png"
          background="bg-[#E3E2F6]"
          text="Get alerts, warnings, and recommendations in real time."
          title="Protect"
          />

        </div>

           <div className="flex space-x-[12px] text-[16px] font-[700] leading-none">
                <button className="w-full lg:w-[169px] h-[52px] rounded-[16px] text-[#0D1117] border border-[#BABDC1] cursor-pointer">Report a scam</button>
                <button className="w-full lg:w-[169px] h-[52px] rounded-[16px] text-[#fff] bg-[#0D1117] cursor-pointer">Verify account</button>
            </div>
      </section>
      </section>

      {/* real life use case */}
        <section className="bg-[#FBFEFF] py-[40px] lg:py-[120px] px-[16px] xl:px-0">
         <h2 className="font-[600] font-clash leading-[1.5] tracking-[-0.02] text-[32px] lg:text-[48px] text-[#0D1126] text-center">Real life Use Cases</h2>
        <p className="font-[600] font-clash leading-[1.5] tracking-[-0.02] text-[16px] lg:text-[18px] text-[#0D1126] text-center">There are different scenarios</p>
        <section className="max-w-[1280px] mt-[24px] lg:mt-[100px] mx-auto flex flex-col lg:flex-row space-y-[16px] lg:space-x-[23px]">
          <UseCase
            bgImage="bg-[url('/img/usecase1.png')]"
            text1="Someone DM'd me about an investment."
            text2="Our advice: Verify the business first  before responding."
            btnText="Verify business"
          />

          <UseCase
            bgImage="bg-[url('/img/usecase2.png')]"
            text1="I just got scammed/I already got scammed."
            text2="Our advice: Report it to protect the next person"
            btnText="Report a scam"
          />

          <UseCase
            bgImage="bg-[url('/img/usecase3.png')]"
            text1="I made an online purchase and I'm about to pay a vendor."
            text2="Our advice: Verify the account first - personal or business."
            btnText="Verify account"
          />

        </section>
      </section>

      {/* frequently asked questions */}
      <section className="py-[60px] lg:py-[120px] px-[16px] xl:px-0 space-y-[40px] max-w-[800px] mx-auto">
        <h2 className=" text-left md:text-center font-clash font-[600] leading-none text-[32px] lg:text-[40px] text-[#0D1126]">Frequently Asked Questions (FAQ)</h2>
       
        {/* {
          faqList.map((list, i) => <div key={i}> <FaqBlock questions={list.question}  /></div>)
        } */}
        <FaqContainer />
        <div className="text-center">
        <button className="w-[143px] h-[52px] rounded-[16px] text-[#0D1117] border border-[#BABDC1] cursor-pointer mx-auto">View more</button>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto rounded-[24px] p-[24px] lg:p-[60px] my-[40px] lg:my-[80px] bg-[#1C2532] flex flex-col lg:flex-row space-y-[40px] justify-between items-center">
        <div className="space-y-[16px]">
          <h3 className="text-[#fff] font-clash font-[600] text-[32px] lg:text-[48px] leading-none">We don't guess. We verify</h3>
          <div className="text-[#F5F5F5] text-[16px] lg:ext-[18px]">
          <p>Scammers rely on silence. We rely on community.</p>
           <p>Be part of the system that stops scams.</p>
           </div>
        </div>

              <div className="w-full flex space-x-[12px] justify-end text-[16px] font-[700] leading-none">    
                <button className="block w-[50%] lg:w-[169px] h-[52px] rounded-[16px] text-[#fff] bg-transparent border border-[#BABDC1] cursor-pointer">Report a scam</button>
              
                <button className="w-[50%] lg:w-[169px] h-[52px] rounded-[16px] text-[#0D1117] bg-[#fff] cursor-pointer">Verify account</button>
             </div>
      </section> 
        <Footer />
    </main>
  );
}
