import { ArrowRight, Sparkles, Target } from 'lucide-react';

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
    <section id="hero" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full px-5 py-2.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-900">
                Externalisation nouvelle génération
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              La nouvelle génération du{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                nearshore francophone
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Devit.IA associe expertise humaine et intelligence artificielle pour offrir aux entreprises francophones un modèle d'externalisation plus fluide, plus rapide et plus intelligent.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('method')}
                className="group bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Découvrir la méthode</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onLinaClick}
                className="group bg-gray-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Target size={20} className="group-hover:rotate-90 transition-transform" />
                <span>Audit gratuit avec Lina</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact rapide
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Satisfaction client</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">40%</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Plus rapide</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">&lt;5%</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Turn-over</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Équipe professionnelle B2B en collaboration"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 max-w-xs backdrop-blur-sm bg-white/95">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Lina</div>
                  <div className="text-sm text-gray-600">Votre assistante IA disponible 24/7</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-4 border border-indigo-400">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-xs font-medium opacity-90 mt-1">Support continu</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
}
