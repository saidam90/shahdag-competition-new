import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need a visa to Azerbaijan?",
      answer: (
        <>
          <p className="mb-4">
            You can check whether you need a visa to Azerbaijan based on your country by visiting{" "}
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
          <p className="mb-4">
            If a visa is required, you can obtain an e-visa for 26 USD (22.98 EUR) within 3 days in just three simple steps: application, payment, and download. Urgent visas can be processed in as little as 3 hours for a fee of 60 USD (55.15 EUR). You can apply for an e-visa through the following link:{" "}
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
      )
    },
    {
      question: "How can I book accommodation?",
      answer: (
        <p>
          To book accommodation, simply select one of the options mentioned above and email us at{" "}
          <a 
            href="mailto:reservations@shahdag.az" 
            className="text-primary hover:underline font-medium"
          >
            reservations@shahdag.az
          </a>
          .
        </p>
      )
    },
    {
      question: "I have questions. Who can I contact?",
      answer: (
        <>
          <p className="mb-2">
            If you have any questions about the race, feel free to reach out to us at{" "}
            <a 
              href="mailto:info@wintersports.az" 
              className="text-primary hover:underline font-medium"
            >
              info@wintersports.az
            </a>
          </p>
          <p>
            If you have any questions about the accommodation, you can always contact us at{" "}
            <a 
              href="mailto:reservations@shahdag.az" 
              className="text-primary hover:underline font-medium"
            >
              reservations@shahdag.az
            </a>
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              FAQ
            </h1>
            
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <Card key={idx}>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold mb-4 text-primary">
                      • {faq.question}
                    </h2>
                    <div className="text-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
