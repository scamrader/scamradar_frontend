import Link from "next/link";

const Privacy = () => {
    return(
        <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] pb-[100px] md:pb-[264px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0">
                <div><Link href="/legal/terms-of-use">Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy" className="font-[600] text-[#107269] ">Privacy Policy</Link></div>
                <div><Link href="/legal/reporting-policy">Reporting Policy</Link></div>
                
            </div>
 
            <div className="w-full md:w-[690px] space-y-[24px] sm:space-y-[40px] text-secondaryColor leading-[1.5] tracking-[1%] text-[#354764] md:text-[20px]">
                
                <div>
                   <h2 className="font-[700]">1. Information We Collect</h2>
                   <p>A. Information You Provide</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Name and email address</li>
                    <li>Phone number</li>
                    <li>Scam report submitted</li>
                    <li>Verification searches performed</li>
                    </ul>
                    <p>B. Automatically Collected Data</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Device Information</li>
                    <li>App usage data</li>
                    <li>Notification tokens</li>
                    <li>Technical logs for security purposes</li>
                    </ul>
                    
                </div>

                <div>
                   <h2 className="font-[700]">2. How We Use Your Informatio</h2>
                   <p>We use data to:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>
                    Provide account verification results
                    </li>
                      <li>Detect and analyze scam patterns</li>
                       <li> Improve risk scoring systems</li>
                        <li>Send notifications and alerts</li>
                       <li> Maintain platform security </li>
                    </ul>
                    <p>We do not sell your personal data.</p>
                </div>

                <div>
                   <h2 className="font-[700]">3. How Reports Are Handled</h2>
                   <p> How Reports Are Handled</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>When you submit a scam report:</li>
                    <li>Reports may be reviewed and verified</li>
                    <li>Identifying details may be anonymized</li>
                    <li>Reports contribute to overall risk analysis</li>
                    </ul>
                    <p>We may retain anonymized reports even if an account is deleted.</p>
                </div>

                <div>
                   <h2 className="font-[700]">4. Permissions</h2>
                   <p>If enabled, Scamrader may request:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Notification access (to send alerts)</li>
                    <li>Clipboard access (to detect copied account numbers)</li>
                    <li>Background activity permissions</li>
                    </ul>
                    <p>You can disable permissions at any time in Settings.</p>
                </div>

                <div>
                   <h2 className="font-[700]">5. Data Retention</h2>
                   <p>We retain data:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                       <li> As long as your account is active</li>
                       <li> As needed for fraud prevention and compliance</li>
                       <li> In anonymized form for analytics and safety improvements</li>
                    </ul>
                    <p>You can disable permissions at any time in Settings.</p>
                </div>

                <div>
                   <h2 className="font-[700]">6. Your Rights</h2>
                   <p>You may:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                       <li> Access your data</li>
                        <li>Request deletion of your account</li>
                        <li>Clear your verification history</li>
                        <li>Manage permissions</li>
                    </ul>
                    <p>Requests can be made through the app settings or support contact.</p>
                </div>

                 <div>
                   <h2 className="font-[700]">7. Security</h2>
                   <p>
                    We implement reasonable technical and organizational measures to protect user data. However, no system can guarantee absolute security.
                   </p>        
                </div>

                <div>
                   <h2 className="font-[700]">8. Children's Privacy</h2>
                   <p>
                    Scamrader is not intended for users under 18. We do not knowingly collect data from minors.
                   </p>        
                </div>

                 <div>
                   <h2 className="font-[700]">9. Changes to This Policy</h2>
                   <p>
                    We may update this Privacy Policy from time to time. Updates will be posted in the app.
                   </p>        
                </div>
            </div>
        </section>
    )
}

export default Privacy;