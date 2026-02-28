"use client"
import { useEffect, useState } from "react"
import Image from "next/image";

const VerifyAccountModal = ({ isOpen, setIsOpen }) => {
    const [loading, setLoading] = useState(true);

     useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-[24px] w-[600px] min-h-[600px] shadow-xl">
        {
            loading ? <div className="w-full h-full flex items-center justify-center">
                <div>
                    <div className="w-[40px] h-[40px] mx-auto rounded-full bg-gradient-to-b from-[#9FCE31] to-[#003D60] p-[1px] animate-spin">
                    <div className="w-full h-full rounded-full bg-[#fff]"></div>
                    </div>
                    <p>Checking scamrader database...</p>
                </div>
            </div> 
            
            :
            
            <div className="w-full h-full p-[40px] space-y-[16px] text-[#4C545F]">
                <div className="flex justify-between items-center">
                    <span className="font-[600] leading-none text-[18px] text-[#1F2937]">Search result</span>
                    <div className="w-[20px] h-[20px] relative cursor-pointer">
                    <Image src="/img/close-square.png" fill alt="close modal" />
                    </div>
                </div>
                
                <div className="p-[16px] rounded-[16px] border border-[#E9EAEB] space-y-[16px]">
                    <div className="flex items-center space-x-[5px]">
                        <div className="relative w-[48px] h-[48px]">
                            <Image src="/img/kuda.png" alt="bank log" fill/>
                        </div>
                        <div>
                            <h4 className="font-[600] text-[#000]">Thanau Abbas</h4>
                            <p className="text-[14px] text-[#4C545F]">Business account</p>
                        </div>
                    </div>
                    <div className="bg-[#E9EAEB] w-full h-[1px]"></div>
 
                    <div className="flex justify-between text-[14px] leading-none">
                        <span>Account number</span>
                        <span>0123456789</span>
                    </div>

                    <div className="flex justify-between text-[14px] leading-none pt-[8px]">
                        <span>Bank</span>
                        <span>Kuda</span>
                    </div>

                    <div className="bg-[#E9EAEB] w-full h-[1px]"></div>

                    <div className="flex justify-between text-[14px] leading-none pt-[8px]">
                        <span>No of community reports:</span>
                        <div className="w-[24px] h-[24px] bg-[#34C759] rounded-full flex items-center justify-center text-[#fff] text-[14px] ">1</div>
                    </div>
                </div>

                <div className="bg-[#F3FFF6] p-[16px] rounded-[16px] border border-[#34C759] ">

                </div>
               

            </div>

        }
      
      </div>
    </div>
  )
}

export default VerifyAccountModal;