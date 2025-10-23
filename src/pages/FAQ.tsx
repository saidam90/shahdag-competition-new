import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      question: "Do I need a visa to Azerbaijan?",
      answer: (
        <>
          <p className="mb-4">
            You can check whether you need a visa to Azerbaijan based on your
            country by visiting{" "}
            <a
              href="https://www.evisa.gov.az/en/check-visa-requirement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              this link
            </a>
            .
          </p>
          <p>
            If a visa is required, you can obtain an e-visa for 26 USD (22.98
            EUR) within 3 days. Urgent visas can be processed in as little as 3
            hours for a fee of 60 USD (55.15 EUR). Apply here:{" "}
            <a
              href="https://evisa.gov.az/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              https://evisa.gov.az/en/
            </a>
          </p>
        </>
      ),
    },
    {
      question: "How can I book accommodation?",
      answer: (
        <p>
          To book accommodation, simply select one of the options mentioned
          above and email us at{" "}
          <a
            href="mailto:reservations@shahdag.az"
            className="text-primary hover:underline font-medium"
          >
            reservations@shahdag.az
          </a>
          .
        </p>
      ),
    },
    {
      question: "I have questions. Who can I contact?",
      answer: (
        <>
          <p className="mb-2">
            For race questions:{" "}
            <a
              href="mailto:info@wintersports.az"
              className="text-primary hover:underline font-medium"
            >
              info@wintersports.az
            </a>
          </p>
          <p>
            For accommodation:{" "}
            <a
              href="mailto:reservations@shahdag.az"
              className="text-primary hover:underline font-medium"
            >
              reservations@shahdag.az
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="faq mb-16 md:py-24 px-4 bg-background scroll-mt-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleQuestion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
