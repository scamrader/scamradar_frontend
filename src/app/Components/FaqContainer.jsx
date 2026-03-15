"use client";
import { useState } from "react";
import FaqList from "./FaqList";

const FaqContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqLists = [
    {
      question: "How does Scamrader determine risk levels?",
      ans: `<p>Risk levels are based on:</p>
                <ul class="list-disc list-outside pl-[30px]">
                <li>Number of reports submitted</li>
                <li>Verification status of reports</li>
                <li>Pattern analysis</li>
                <li>Historical risk signals</li>
                </ul>
                <p>Each account is assessed using a structured scoring system.</p>`
    },
    {
      question: "Does “No reports found” mean the account is safe?",
           ans: `<p>
                  Not necessarily.
                  <p>It means no one has reported the account yet. Always use caution and verify independently before sending money.</p>
                </p>
                `
    },
    {
      question: "Can I trust the reports on Scamrader?",
            ans: `<p>Reports go through review processes to reduce false or malicious submissions. Risk scores are based on patterns and multiple signals - not a single complaint.</p>`
    },
    {
      question: "What happens when I report an account?",
            ans: `
                <p>Your report is reviewed and may be verified. Verified reports contribute to the account's risk score and help protect other users.
                    Your identity is kept confidential.</p>`
    },
    {
      question: "Can someone falsely report my account?",
            ans: `
                <p>Malicious or false reporting is prohibited. Scamrader monitors suspicious reporting behavior and reviews disputes. Account holders can file disputes for review.</p>`
    },
    {
      question: "Does Scamrader guarantee I won't be scammed?",
            ans: `
                <p>No system can guarantee outcomes. Scamrader provides risk insights to support safer decisions - but users remain responsible for their financial choices.</p>`
    },
    {
      question: "Does Scamrader access my bank account?",
            ans: `
                <p>No. Scamrader does not access or control your bank account. It only analyzes account identifiers you choose to verify or permissions you grant.</p>`
    },
    {
      question: "Why would I need Scamrader if my bank already protects me?",
            ans: `
                <p>Banks protect against unauthorized transactions. Scamrader helps you avoid voluntarily sending money to a scammer. That's a completely different problem.</p>`
    },
    {
      question: "What types of accounts can I verify?",
            ans: `
                <p>You can verify bank account number (Depending on availability.)</p>`
    },
    {
      question: "Is my data safe?",
            ans: `
                <p>We use security measures to protect your data and do not sell personal information. You can manage permissions, clear history, or delete your account at any time.</p>`
    },
    {
      question: "Is Scamrader free?",
            ans: `
                <p>Basic verification may be free. Advanced protection features may require a subscription plan.</p>`
    }
  ];

  return (
    <div className="space-y-4">
      {faqLists.map((list, i) => (
        <FaqList
          key={i}
          question={list.question}
          ans={list.ans}
          isOpen={activeIndex === i}
          onClick={() =>
            setActiveIndex(activeIndex === i ? null : i)
          }
        />
      ))}
    </div>
  );
};

export default FaqContainer;