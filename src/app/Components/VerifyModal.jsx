"use client"
import { useEffect, useState } from "react"
import LowRiskContent from "./LowRiskContent";
import HighRiskContent from "./HighRiskContent";
import MediumRiskContent from "./MediumRiskContent";

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
            loading ? <div className="w-full h-[600px] flex items-center justify-center">
                <div>
                    <div className="w-[40px] h-[40px] mx-auto rounded-full bg-gradient-to-b from-[#9FCE31] to-[#003D60] p-[1px] animate-spin">
                    <div className="w-full h-full rounded-full bg-[#fff]"></div>
                    </div>
                    <p>Checking scamrader database...</p>
                </div>
            </div> 
            
            :
            // <LowRiskContent setIsOpen={setIsOpen} />
            // <HighRiskContent setIsOpen={setIsOpen} />
            <MediumRiskContent setIsOpen={setIsOpen} />
        }
      
      </div>
    </div>
  )
}

export default VerifyAccountModal;