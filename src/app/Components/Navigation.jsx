"use client"
import { useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
// import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";
// import { Menu } from "lucide-react";



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

    return(
        <div className="w-full px-[16px] md:px-[40px] py-[24px] md:relative ">
        <nav className="tracking-[0.03] leading-[1.5] md:max-w-[1280px] mx-auto flex justify-between items-center">
           <Link href="/" className="block relative w-[200px] h-[52px]">  
           <Image
            src="/logo.png"
            alt="scamrader logo"
            fill
            className="object-cover"
            priority
            /></Link>

             <div className="hidden md:flex justify-between leading-none space-x-[50px] text-[16px] text-[#4C545F] items-center">

                 <Link href="/#">Home</Link>

                <Link href="/#">How it works</Link>

                <Link href="/#">FAQ</Link>
             </div>

             <div className="flex space-x-[12px] text-[16px] font-[700] leading-none">
                <button className="w-[169px] h-[52px] rounded-[16px] text-[#0D1117] border border-[#BABDC1] cursor-pointer">Report a scam</button>
                <button className="w-[169px] h-[52px] rounded-[16px] text-[#fff] bg-[#0D1117] cursor-pointer">Verify account</button>
             </div>

                <div className="md:hidden flex w-[30px] md:w-[152px] justify-between items-center ">
                  <Link href="/#contact">
                 {/* <Button name="Contact Us" classname="w-[101px] h-[47px] md:w-[141px] bg-[#107269] hidden md:block"/> */}
                  </Link>
                <div className="relative w-[24px] h-[24px] md:hidden" onClick={toggleMobileNavbarFunction} >
                     {/* <Menu size={20} className="text-[#000]"/> */}
                     hello
                </div>
                </div>
        </nav>
        </div>
    )
}

export default NavigationBar;