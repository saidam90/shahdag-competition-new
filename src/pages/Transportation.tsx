import transportationImage from "@/assets/transportation.webp";

const Transportation = () => {
  return (
    <section
      id="transportation"
      className="md:py-16 px-4 bg-background scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          Travel & Transportation
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={transportationImage}
              alt="Winter transportation with snow tires"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Flight to Baku
              </h2>
              <p className="text-lg mb-2">
                Book with{" "}
                <a
                  href="https://www.azal.az"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  AZAL
                </a>{" "}
                and enjoy a <span className="font-semibold">30% discount</span>{" "}
                using the promo code{" "}
                <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded font-mono font-bold">
                  AZALWINTER2026
                </span>
                .
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-2xl font-bold text-primary mb-3">
                Shuttle Bus
              </h2>
              <p className="text-lg mb-2">
                For your convenience,{" "}
                <span className="font-semibold">
                  a shuttle bus between Baku and Shahdag is available at a
                  special rate.
                </span>
              </p>
              <p className="text-lg mb-2">
                To reserve a seat, please contact us in advance at{" "}
                <a
                  href="mailto:info@wintersports.az"
                  className="text-primary hover:underline font-medium"
                >
                  info@wintersports.az
                </a>
                .
              </p>
              <p className="text-lg">
                Enjoy a comfortable journey, allowing you to focus on the
                upcoming adventure. The schedule will be shared a week prior to
                the race.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
