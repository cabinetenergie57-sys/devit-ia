import { ArrowRight, Target } from 'lucide-react';

interface HeroProps {
  onLinaClick: () => void;
}

export default function Hero({ onLinaClick }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/IMG_8626.JPG"
          alt="Experte data et technologie dans un environnement professionnel moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-800/60 to-slate-900/75"></div>
      </div>

      <div className="absolute top-24 right-8 z-20 gradient-bg rounded-2xl shadow-2xl p-4 border border-white/20 backdrop-blur-sm animate-fade-in">
        <div className="text-white text-center">
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-xs font-medium opacity-90 mt-1">Support continu</div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-white/20 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              La nouvelle génération du{' '}
              <span className="block mt-2 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
                nearshore francophone
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              Devit.IA associe expertise humaine et intelligence artificielle pour offrir aux entreprises francophones un modèle d'externalisation plus fluide, plus rapide et plus intelligent.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('method')}
                className="group gradient-bg text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Découvrir la méthode</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onLinaClick}
                className="group bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Target size={20} className="group-hover:rotate-90 transition-transform" />
                <span>Audit gratuit avec Lina</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">40%</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">Plus rapide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">&lt;5%</div>
                <div className="text-xs md:text-sm text-white/80 font-medium">Turn-over</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
