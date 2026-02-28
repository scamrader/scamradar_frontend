import Link from "next/link";

const TermsOfUse = () => {
    return(
        <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] pb-[100px] md:pb-[264px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor text-[20px] font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0">
                <div><Link href="/legal/terms-of-service" className="font-[600] text-[#107269] ">Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
                <div><Link href="/legal/membership">Reporting Policy</Link></div>
                
            </div>
 
            <div className="w-full text-[20px] md:w-[690px] space-y-[24px] sm:space-y-[40px] text-secondaryColor leading-[1.5] tracking-[1%]">
                
                <div>
                   <h2 className="font-[700]">1. Acceptance of Terms</h2>
                    <p>                     
                        By accessing or using Scamrader (“the App”), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.
                        Scamrader provides risk insights based on reported data and analysis tools to help users make safer financial decisions.
                    </p>
                </div>

                <div>
                   <h2 className="font-[700]">2. Description of Service</h2>
                   <p>Scamrader allows users to:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Verify accounts for reported scam activity</li>
                     <li>Submit scam reports</li>
                       <li> Receive risk alerts and notifications</li>
                      <li>  Block flagged accounts within the app</li>
                       <li> Access safety insights and educational content</li>  
                   </ul>
                   <p>Scamrader does not process payments or control external banking systems.</p>
                </div>

                <div>
                   <h2 className="font-[700]">3. No Guarantee of Outcomes</h2>
                    <p>
                     Scamrader provides risk assessments based on user reports and data signals. While we strive for accuracy, we do not guarantee that:  
                    </p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>An account marked “safe” is free from risk</li>
                    <li>An account marked “risky” is definitively fraudulent</li>
                    </ul>
                    <p>
                     Users remain responsible for their own financial decisions. 
                    </p>
                </div>

                <div>
                   <h2 className="font-[700]">4. User Responsibilities</h2>
                    <p>You agree to:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Provide accurate information when submitting reports</li>
                    <li>Not submit false, malicious, or defamatory reports</li>
                    <li>Not misuse the platform for harassment or blacklisting</li>
                    </ul>
                   <p>              
                    False reporting may result in account suspension or removal.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">5. Reporting & Moderation</h2>
                    <p>
                    All reports are subject to review and verification. Scamrader reserves the right to:
                    </p>
                    <div>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Edit or remove reports</li>
                    <li>Flag suspicious reporting behavior</li>
                    <li>Suspend users who violate reporting policies</li>
                   </ul>
                    </div>
                </div>

                 <div>
                   <h2 className="font-[700]">6. Intellectual Property</h2>
                    <p>All content, trademarks, branding, and technology within Scamrader belong to the company unless otherwise stated.</p>                
                   <p> 
                    You may not copy, distribute, reverse engineer, or exploit the platform without written permission.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">7. Subscription & Payments</h2>
                    <p>Some features may require a paid subscription.</p>
                    <p>By subscribing, you agree to:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Pay applicable fees</li>
                    <li>Automatic renewals unless canceled</li>
                    <li>Platform billing terms (App Store / Google Play policies)</li>
                   </ul>
                   <p>Refunds are subject to applicable store policies.</p>      
                </div>

                <div>
                   <h2 className="font-[700]">8. Account Termination</h2>
                    <p>
                    You may delete your account at any time.
                    </p> 
                    <p>Scamrader may suspend or terminate accounts for violations of these Terms.</p>
                </div>

                 <div>
                   <h2 className="font-[700]">9. Limitation of Liability</h2>
                    <p>Scamrader is not liable for:</p>   
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Financial losses resulting from user decisions</li>
                    <li>Automatic renewals unless canceled</li>
                    <li>Platform billing terms (App Store / Google Play policies)</li>
                   </ul>
                    <p>Thank you for being part of THR!BE - a community built with intention, integrity, and the belief that we all grow better together.</p>
                </div>

                 <div>
                   <h2 className="font-[700]">9. Changes to Terms</h2>
                    <p>We may update these Terms periodically. Continued use of the app after updates constitutes acceptance.</p>   
                  </div>


            </div>

        </section>
    )
}

export default TermsOfUse;