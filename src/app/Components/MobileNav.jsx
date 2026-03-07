"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";


const MobileNavigationBar = () => {
    const {toggleNavbar, toggleMobileNavbarFunction} = useAllContext();
    const pathname = usePathname();
    
    return(
        <div className={`z-50 w-full px-[16px] md:px-[20px] py-[24px] fixed top-0 left-0 w-full h-[100vh] bg-[#fff] ${!toggleNavbar ? "hidden" : ''}`}>
        <nav className="tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center md:px-[32px]  border border-l-0 md:border-l-[6px] border-t-0 border-r-[0] border-b-[0] border-l-[#E36A02]">
            <div className="relative w-[99px] md:w-[119px] h-[30px] md:h-[36px]">
            <Image 
             src="/logo.png"
             alt="scamrader logo"
             fill
             className="object-center"
             />
             </div>
            
                <X size={24} className="text-black cursor-pointer lg:hidden" onClick={toggleMobileNavbarFunction} />

        </nav>

            <ul className="text-[15px] text-[#354764] tracking-[2%] space-y-[40px] py-[40px] w-full ">
                <li><Link onClick={toggleMobileNavbarFunction} href="/" className={pathname==="/" ? "text-[#087C72] font-[600]" : ""}>Home</Link></li>
                <li><Link onClick={toggleMobileNavbarFunction} href="/Faq" className={pathname==="/" ? "text-[#087C72] font-[600]" : ""}>FAQ</Link></li>
                {/* <li> <Link onClick={toggleMobileNavbarFunction} href="/thribe" className={pathname==="/thribe" ? "text-[#087C72] font-[600]" : ""}>About</Link></li> */}

                <li className="flex space-x-[12px] text-[16px] font-[700] leading-none w-full">
               <Link href="/auth/signup" className="w-[50%]">  
                <button className="w-full h-[52px] rounded-[16px] text-[#0D1117] border border-[#BABDC1] cursor-pointer">Report a scam</button>
                </Link>
                <button className="w-[50%] h-[52px] rounded-[16px] text-[#fff] bg-[#0D1117] cursor-pointer">Verify account</button>
             </li>

                {/* <Link href="/#price" onClick={toggleMobileNavbarFunction}>
                <Button name="Join Us" classname="w-[141px] h-[56px] bg-[#107269]"/>
                </Link> */}
            </ul>
    
       
        </div>
    )
}

export default MobileNavigationBar;