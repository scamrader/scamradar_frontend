import Image from "next/image";
import NavigationBar from "./Components/Navigation";
import HowScamraderWorksList from "./Components/HowScamraderWorksList";
import WhatYouCanDoList from "./Components/WhatYouCanDoList";
import UseCase from "./Components/UseCase"

export default function Home() {
  return (
    <main>
      <NavigationBar />
      
      <section className="max-w-[1280px] mx-auto pt-[90px] pb-[40px]">
        <div className="font-clash">
          <h1 className="font-[600] text-[80px] leading-[1.5] tracking-[-0.02em]">Don&rsquo;t get scammed.</h1>
          <h3 className="text-[80px] leading-[1.5] tracking-[-0.02em]">Verify first.</h3>
        </div>

        <div className="mt-[32px] bg-[#E3E2F6] rounded-[24px] p-[40px] relative w-full text-[#000] leading-[1.5] space-y-[40px]">
          <p className="text-[18px] max-w-[432px] font-[400]">
            Check any account before sending money or making payments, report scams, and protect yourself in seconds.
          </p>
          <div className="h-[52px] max-w-[547px] bg-[#ECECF9] rounded-[16px]">

          </div>
          <p className="text-[18px] max-w-[432px] font-[400]">
            Scammers move fast. We move faster.
          </p>

          <div className="absolute bottom-0 right-0">
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
      <section className="max-w-[1280px] mx-auto lg:py-[112px] flex justify-between">
        <div className="w-[780px]">
          <h2 className="font-[600] font-clash text-[48px] leading-[1.3] tracking-[-0.02] text-[#1C2532]">How Scamrader Works</h2>
          <div className="mt-[40px] space-y-[80px]">
            {/* flex1 */}
            <div className="w-full flex justify-between">
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

             <div className="w-full flex justify-between">
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

            <div className="relative w-[449px] h-[472px]">
             <Image
                src="/img/howscamraderworks.svg"
                alt="Banner"
                fill
                className="object-cover"
              />
          </div>

      </section>

      {/* what you can do */}
      <section className="bg-[#F5F5F5]">
      <section className="lg:py-[120px] max-w-[1280px] mx-auto bg-[#F5F5F5] space-y-[40px]">
        <div className="flex space-x-[40px] items-center"> 
          <h2 className="font-[600] font-clash leading-[1.5] tracking-[-0.02] text-[48px] text-[#0D1126]">What you can do.</h2>
          <div className="text-[18px] leading-[1.5] text-[]#1F2937">
            <p>Scammers are winning because people are alone.</p>
            <p>No shared warnings. No real-time protection. No central place to check before sending money.</p>
          </div>
        </div>

        <div className="flex justify-between space-x-[24px]">
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
                <button className="w-[169px] h-[52px] rounded-[16px] text-[#0D1117] border border-[#BABDC1] cursor-pointer">Report a scam</button>
                <button className="w-[169px] h-[52px] rounded-[16px] text-[#fff] bg-[#0D1117] cursor-pointer">Verify account</button>
            </div>
      </section>
      </section>

      {/* real life use case */}
      <section className="bg-[#FBFEFF] py-[120px]">
         <h2 className="font-[600] font-clash leading-[1.5] tracking-[-0.02] text-[48px] text-[#0D1126] text-center">What you can do.</h2>
        <p className="font-[600] font-clash leading-[1.5] tracking-[-0.02] text-[18px] text-[#0D1126] text-center">There are different scenarios</p>
        <section className="max-w-[1280px] mt-[100px] mx-auto flex space-x-[23px]">
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


    </main>
  );
}
