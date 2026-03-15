"use client"
import { useEffect, useState } from "react"
import LowRiskContent from "./LowRiskContent";
import HighRiskContent from "./HighRiskContent";
import MediumRiskContent from "./MediumRiskContent";
import {Turnstile} from "@marsidev/react-turnstile";

const VerifyAccountModal = ({ isOpen, setIsOpen, accountNumber }) => {
    const [loading, setLoading] = useState(true);
    // const [token, setToken] = useState(null);



    const verifyAccountNumber = async (token) => {
      // setToken(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/lookup?identifier=${encodeURIComponent(accountNumber)}&type=${encodeURIComponent('bank_account')}`, {
      method: "POST",
      headers: {
        "X-Turnstile-Token": token
      }
    });

    const data = await res.json();

    if(data){
      setLoading(false)
    }

    console.log(data)

    }

    //   useEffect(() => {
    //     verifyAccountNumber()

    // }, [accountNumber])


    const closeModal = () => {
       setIsOpen(false)
       setLoading(false)
    }

  //    useEffect(() => {
  //     const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 7000) 

  //   return () => clearTimeout(timer)
  // }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        setLoading(false)
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
        className="absolute inset-0 bg-black/50 min-h-[100vh]"
        // onClick={() => setIsOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-[24px] w-[600px] min-h-[600px] shadow-xl">
           
        {
            loading ? <div className="w-full h-[600px] flex items-center justify-center">
                        <div>
                        {/* TURNSTILE KEY   */}
                          <div><Turnstile
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                         onSuccess={(token) => verifyAccountNumber(token)}
                      />
                    <div className="w-[40px] h-[40px] mx-auto rounded-full bg-gradient-to-b from-[#9FCE31] to-[#003D60] p-[1px] animate-spin">
                    <div className="w-full h-full rounded-full bg-[#fff]"></div>
                    </div>
                    <p className="text-center">Checking scamrader database...</p>
                </div>
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