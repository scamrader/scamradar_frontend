import Link from "next/link";

const ReportingPolicy = () => {
    return(
        <section className="pb-[100px] md:pb-[264px] max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0 leading-[100%]">
                <div><Link href="/legal/terms-of-service" >Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
                <div><Link href="/legal/membership" className="font-[600] text-[#107269]">Reporting Policy</Link></div>         
            </div>
 
            <div className="w-full md:w-[690px] space-y-[24px] sm:space-y-[40px] md:text-[20px] text-[#354764] leading-[1.5] tracking-[1%]">
               
                <div>
                   <h2 className="font-[700]">1. Purpose of Reporting</h2>
                    <p>               
                    Scamrader allows users to submit reports about suspected fraudulent or deceptive financial activity. Reports help protect others by identifying potential risk patterns.
                    All reports are treated as allegations until reviewed.
                    </p>
                </div>

                 <div>
                   <h2 className="font-[700]">2. Accuracy & Good Faith Requirement</h2>
                    <p>By submitting a report, you confirm that:</p>
                    <div className="space-y-[24px] sm:space-y-[40px]">
                     <div>
                         <ul className="list-disc list-outside pl-[30px]">
                       <li>The information you provide is true to the best of your knowledge</li> 
                       <li> The report is based on a real experience or reasonable suspicion</li>
                        <li>You are not submitting the report to harass, defame, or damage someone's reputation</li>
                            </ul>
                             <p>Submitting knowingly false or malicious reports is strictly prohibited.</p>
                    </div> 
                    </div>
                </div>

                <div>
                   <h2 className="font-[700]">3. Prohibited Reporting Behavior</h2>
                    <p>You may not use Scamrader to::</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Target individuals out of personal disputes.</li>
                    <li>Submit fabricated claims.</li>
                    <li>Spread misinformation.</li>
                    <li>Harass or threaten others</li>
                    <li>Post private or sensitive personal data (e.g., ID numbers, addresses)</li>
                   </ul>
                   <p>Violations may result in account suspension or permanent removal.</p>
                </div>

                <div>
                   <h2 className="font-[700]">4.  Report Review & Verification</h2>
                   <p>All reports may be:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Reviewed by automated systems</li>
                    <li>Flagged for manual review</li>
                    <li>Verified based on supporting evidence</li>
                   </ul>
                   <p>Scamrader reserves the right to:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Edit reports for clarity</li>
                    <li>Remove reports that violate policy</li>
                    <li>Mark reports as “Under Review,” “Verified,” or “Unverified”</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">5. Risk Scoring & Display</h2>
                   <p>Risk levels shown in the app are based on:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Number of reports.</li>
                    <li>Pattern analysis.</li>
                    <li>Supporting evidence.</li>
                    <li>Historical activity signals</li>
                   </ul>
                   <p>Risk levels reflect data-driven insights, not legal determinations of guilt.</p>
                </div>

                <div>
                   <h2 className="font-[700]">6. Anonymity & Privacy</h2>
                   <p>Reporter identities are kept confidential.</p>
                    <p>We may anonymize or aggregate report data to protect user privacy while preserving safety insights.</p>
                </div>

                <div>
                   <h2 className="font-[700]">7. Dispute & Appeal Process</h2>
                   <p>If an account holder believes a report is inaccurate, they may:</p>
                   <ul className="list-disc list-outside pl-[30px]">
                    <li>Submit a dispute request</li>
                    <li>Provide supporting documentation</li>
                    <li>Request review of the risk classification</li>
                   </ul>
                   <p> Scamrader will evaluate disputes in good faith but reserves final discretion on content moderation. </p>
                </div>


                <div>
                   <h2 className="font-[700]">8. Retention of Reports</h2>
                   <p>
                    Even if a reporting user deletes their account:
                   </p>
                   <ul className="list-disc list-outside pl-[30px]">
                    <li>Reports may be retained in anonymized form</li>
                    <li>Risk insights derived from reports may remain active</li>
                   </ul>
                   <p>
                    This ensures continued protection for the community.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">9. Data & Privacy</h2>
                   <p>
                    Your data will be processed in accordance with our Privacy Policy. By subscribing, 
                    you consent to our data handling practices for communication, billing, and service delivery.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">10.  No Legal Determination</h2>
                   <p>Reports and risk scores do not constitute: </p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Criminal findings</li>
                    <li>Legal judgments</li>
                    <li>Official fraud determinations</li>
                   </ul>
                   <p>They are informational tools designed to support safer decisions.</p>
                </div>
            </div>

        </section>
    )
}

export default ReportingPolicy;