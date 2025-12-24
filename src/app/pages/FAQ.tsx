import { Layout } from '../components/Layout';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Cora work?",
      answer: "Cora sends you daily text reminders to check in on your workout progress. You respond with your status, and our community holds you accountable while celebrating your wins."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 7-day free trial so you can experience the full Cora accountability system before committing."
    },
    {
      question: "What if I miss a day?",
      answer: "Life happens! We understand that not every day will be perfect. What matters is getting back on track. Our community is here to support you, not judge you."
    },
    {
      question: "Can I customize my goals?",
      answer: "Absolutely! You can set custom fitness goals, workout frequencies, and even specify what types of accountability work best for you."
    },
    {
      question: "How much does it cost?",
      answer: "After your free trial, Cora is $9.99/month or $89.99/year. Cancel anytime, no questions asked."
    }
  ];

  return (
    <Layout>
      <div className="flex items-center justify-center px-8 py-16 flex-1">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl">FAQ</h1>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
