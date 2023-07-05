import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Page from "@/components/Page";
import HeroBody from "@/components/HeroBody";

const inter = Inter({ subsets: ["latin"] });

type FAQ = {
  question: string;
  answer: string | JSX.Element;
};
type FAQs = [...FAQ[]];

const FAQS: FAQs = [
  {
    question: "Are You Guys Open-Source?",
    answer: "Yes! Our project is licensed under GPL3.",
  },
  {
    question: "What Does This Mean For Victoria 2 Mods?",
    answer:
      "We will create our own system of modding that is leagues more powerful and intuitive than PDX's current modding system for Victoria 2. However, we also plan to include full backwards compatibility for mods for Victoia 2. This means you will be able to drag your Mod files straight into OpenVic2, and they will work perfectly.",
  },
  {
    question: "Will OpenVic Be Free?",
    answer: "OpenVic will be free for anyone to play, forever.",
  },
  {
    question: "How Much Will You Guys Change?",
    answer:
      "We plan to emulate Victoria 2 as close as possible, even the quirks, although after 1.0, we will make improvements to the game that can be disabled.",
  },
  {
    question: "Doesn't This Violate Copyright?",
    answer:
      "No, everything included in OpenVic is entirely created by the team or open-source.",
  },
  {
    question: "Won't Paradox Sue You Anyway?",
    answer:
      "No, we have communicated with Paradox and recieved their sanction to go ahead without the threat of undeserved legal action.",
  },
  {
    question: "What Can I Do To Help?",
    answer: (
      <>
        See <Link href="/contribute">here</Link>
      </>
    ),
  },
  {
    question: "How Long Will It Take To Finish?",
    answer:
      "Awhile. Quality development takes time, and for something the scope of this project that means likely in the neighbourhood of 2 years.",
  },
];

export default function Home() {
  const [questionAnswer, setQuestionAnswer] = useState<FAQ["answer"]>("");

  const createFAQs = (FAQs: FAQs) =>
    FAQs.map((faq, index) => (
      <button
        key={`FAQ-${index}`}
        onClick={() => setQuestionAnswer(faq.answer)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
      >
        {faq.question}
      </button>
    ));

  const allFAQs = createFAQs(FAQS);

  return (
    <Page>
      <HeroBody>
        <div className="w-full">
          <div className="flex h-20">
            <text className="text-center">{questionAnswer}</text>
          </div>
          <div className="flex flex-col justify-center">
            <>{allFAQs}</>
          </div>
        </div>
      </HeroBody>
    </Page>
  );
}
