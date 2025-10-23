import { DollarSign, Medal, Star } from "lucide-react";

const Prizes = () => {
  return (
    <section id="prizes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-event-accent/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 text-event-accent" />
            <span className="text-sm font-semibold text-event-accent">REWARDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Compete and Win Rewards!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participate for glory and substantial money prizes for the winners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-8 shadow-xl border-2 border-yellow-200 dark:border-yellow-800 text-center transform hover:scale-105 transition-transform">
            <div className="bg-yellow-400 dark:bg-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Medal className="w-10 h-10 text-yellow-900 dark:text-yellow-100" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-2">
              1st Place
            </h3>
            <p className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              Gold
            </p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Champion's Prize
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 rounded-2xl p-8 shadow-xl border-2 border-gray-300 dark:border-gray-700 text-center transform hover:scale-105 transition-transform">
            <div className="bg-gray-400 dark:bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Medal className="w-10 h-10 text-gray-900 dark:text-gray-100" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              2nd Place
            </h3>
            <p className="text-4xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              Silver
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Runner-up Prize
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 shadow-xl border-2 border-orange-200 dark:border-orange-800 text-center transform hover:scale-105 transition-transform">
            <div className="bg-orange-400 dark:bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Medal className="w-10 h-10 text-orange-900 dark:text-orange-100" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">
              3rd Place
            </h3>
            <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              Bronze
            </p>
            <p className="text-sm text-orange-700 dark:text-orange-300">
              Third Place Prize
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
            <DollarSign className="w-6 h-6 text-primary" />
            <p className="text-lg font-semibold text-primary">
              Substantial cash prizes for top performers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
