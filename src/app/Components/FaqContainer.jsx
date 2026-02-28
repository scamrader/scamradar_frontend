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
      question: "Can I trust the reports on Scamrader?",
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
      question: "What happens when I report an account?",
            ans: `<p>Risk levels are based on:</p>
                <ul class="list-disc list-outside pl-[30px]">
                <li>Number of reports submitted</li>
                <li>Verification status of reports</li>
                <li>Pattern analysis</li>
                <li>Historical risk signals</li>
                </ul>
                <p>Each account is assessed using a structured scoring system.</p>`
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