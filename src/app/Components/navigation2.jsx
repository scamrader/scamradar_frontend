"use client"
import { useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
    const closeDropdowns = useRef(null)
    const closeMediaDropdown = useRef(null)
    const {toggleMobileNavbarFunction} = useAllContext();
     const pathname = usePathname();
     const [openEvent, setOpenEvent] = useState(false);
     const [openMedia, setOpenMedia] = useState(false)

       // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (closeDropdowns.current && !closeDropdowns.current.contains(event.target)) {
        setOpenEvent(false);
      }
      if (closeMediaDropdown.current && !closeMediaDropdown.current.contains(event.target)) {
        setOpenMedia(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

       const toggleOpenEventLink = () => {
        setOpenMedia(false)
        setOpenEvent((prev) => !prev)
     }

     const toggleOpenMediaLink = () => {
        setOpenEvent(false)
        setOpenMedia((prev) => !prev)
     }

    return(
        <div className="w-full px-[16px] md:px-[20px] py-[24px]">
        <nav className="max-w-[1280px] mx-auto flex justify-between items-center md:px-[32px] ">
            <Link href="/">
            <div className="relative w-[119px] md:w-[200px] h-[36px] md:h-[51px]">
            <Image 
             src="/img/logo2.png"
             alt="thribe community logo"
             fill
             className="object-center"
             />
             </div>
             </Link>

             <div className="hidden md:flex flex-row justify-between text-[16px] text-[#C2C7D0] items-center space-x-[40px]">
               <Link href="/"  className={`${pathname==="/" ? "text-[#fff] font-[600]" : ""} navLink`}>Home</Link>
                  
                  <Link href="/thribe" className={`${pathname==="/" ? "text-[#fff] font-[600]" : ""} navLink`}>How it works</Link>

                  <Link href="/" className={`${pathname==="/shop" ? "text-[#fff] font-[600]" : ""} navLink`}>FAQ</Link>
             </div>

             <div className="flex space-x-[12px] text-[16px] font-[700] leading-none">
                <button className="w-[169px] h-[52px] rounded-[16px] text-[#fff] border border-[#BABDC1] cursor-pointer">Report a scam</button>
                <button className="w-[169px] h-[52px] rounded-[16px] text-[#000] bg-[#fff] cursor-pointer">Verify account</button>
             </div>

                {/* <div className="flex w-[30px] md:w-[152px] justify-between items-center ">
                  <Link href="/#price">
                <Button name="Join Us" classname="w-[101px] h-[47px] md:w-[141px] bg-[#107269] hidden md:block"/>
                </Link>
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction}>
                <Image src="/img/open_menu_white.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" />
                </div>
                </div> */}
        </nav>
        </div>
    )
}

export default NavigationBar;