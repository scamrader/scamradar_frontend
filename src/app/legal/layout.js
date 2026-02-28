
import NavigationBar from "../Components/navigation2";
import MobileNavigationBar from "../Components/MobileNav";
import Image from "next/image";

export const metadata = {
  title: "Thribe Community Legal documents - Tech Community in Africa",
  description: "Thribe community Terms and Conditions",
};

export default function RootLayout({ children }) {
  return (
        <main className="overflow-x-none">
            <section className="bg-[#017189]">
                <NavigationBar />
                <MobileNavigationBar />
                <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[80px] sm:pt-[148px] pb-[106px] sm:pb-[136px] text-center space-y-[40px]">
                    <h1 className="font-clash text-[#fff] font-[600] text-[32px] sm:text-[66px] leading-[100%] tracking-[1%]">Legal</h1>
                    <div className="leading-[150%] tracking-[1%] text-[#DFE2E6] flex flex-wrap items-center justify-center gap-y-[24px] gap-x-[40px]">
                        <span>Effective Date: July 10, 2025</span>
                        <span>Last Updated: July 10, 2025</span>
                    </div>
                </div>
            </section>

        {children}
        {/* <Footer /> */}
      </main>
  );
}
