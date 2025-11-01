import Hero from '../components/Hero';
import TestimonialsSection from '../components/TestimonialsSection';
import LinaSection from '../components/LinaSection';
import BlogSection from '../components/BlogSection';
import { Database, Shield, TrendingUp, Users, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { useEffect } from 'react';
import { faqSchema } from '../utils/structuredData';

interface HomePageProps {
  onLinaClick: () => void;
}

export default function HomePage({ onLinaClick }: HomePageProps) {
  useSEO({
    title: 'Devit.IA – Externalisation IT Francophone Agile | Nearshore Maroc',
    description: 'Réduisez vos coûts IT de 50% avec la méthode DevConnect™. Développeurs et data analysts francophones au Maroc pour PME en France, Belgique, Suisse, Canada.',
    keywords: 'externalisation IT francophone, nearshore Maroc, développeurs francophones, DevConnect, externalisation agile, TJM développeur, offshore francophone, PME startup, data analysts Maroc',
    canonical: 'https://devit-ia.com/'
  });

  useEffect(() => {
    const faqData = faqSchema([
      { question: "Combien coûte l'externalisation avec Devit.IA ?", answer: "Les tarifs dépendent du profil et de l'expérience. En moyenne, nos clients économisent entre 40% et 50% par rapport aux coûts locaux en France, Belgique ou Suisse." },
      { question: "Quel est le délai pour démarrer une mission ?", answer: "Grâce à la méthode DevConnect™, l'intégration complète se fait en moins de 15 jours : sélection du profil, onboarding technique et démarrage opérationnel." },
      { question: "Vos développeurs sont-ils vraiment francophones ?", answer: "Oui, 100% de nos développeurs et data analysts sont francophones, basés au Maroc, avec un excellent niveau de communication et une expérience de collaboration avec des équipes européennes." },
      { question: "Comment garantissez-vous la qualité et la sécurité ?", answer: "Nous appliquons des NDA stricts, une gestion sécurisée des accès, un suivi KPI mensuel et une conformité RGPD totale." },
      { question: "Devit.IA convient-il aux PME et startups ?", answer: "Absolument. Nos solutions sont conçues pour les PME, startups et ETI francophones qui cherchent à renforcer leurs équipes tech sans les contraintes du recrutement traditionnel." }
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const keyBenefits = [
    {
      icon: TrendingUp,
      title: 'Économies garanties',
      description: 'Jusqu\'à 45% d\'économies sur vos coûts IT et Data',
      link: '/solutions',
    },
    {
      icon: Users,
      title: 'Talents d\'excellence',
      description: 'Accédez aux meilleurs profils Data & IT du Maroc',
      link: '/avantages',
    },
    {
      icon: Shield,
      title: 'Qualité assurée',
      description: 'Méthode DevConnect™ pour une intégration réussie',
      link: '/solutions',
    },
    {
      icon: Database,
      title: 'Support continu',
      description: 'Accompagnement 24/7 par nos équipes expertes',
      link: '/contact',
    },
  ];

  return (
    <>
      <Hero onLinaClick={onLinaClick} />

      {/* Answer Box Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Devit.IA externalise vos développements IT, simplement et sans friction ?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Devit.IA connecte les entreprises francophones aux meilleurs développeurs et data analysts au Maroc via la méthode DevConnect™. Onboarding en 15 jours, suivi agile, mini-management inclus et économies jusqu'à 50% sur vos coûts IT.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link to="/methode" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Découvrir la méthode <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/avantages" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Voir les avantages <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/estimation" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Estimer mes économies <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi <span className="gradient-text">DevConnect™</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La solution complète pour externaliser vos projets Data et IT au Maroc avec succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {keyBenefits.map((benefit, index) => (
              <Link
                key={index}
                to={benefit.link}
                className="card-elegant group hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/solutions" className="btn-gradient inline-block">
              Découvrir nos solutions
            </Link>
          </div>
        </div>
      </section>

      <LinaSection onLinaClick={onLinaClick} />

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à transformer votre stratégie IT ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui ont fait confiance à DevConnect™ pour optimiser leurs
              coûts et accélérer leur croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onLinaClick} className="btn-gradient">
                Parler avec Lina
              </button>
              <Link
                to="/contact"
                className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg inline-block"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection onLinaClick={onLinaClick} />

      <BlogSection onLinaClick={onLinaClick} />

      {/* Mini FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Combien coûte l'externalisation avec Devit.IA ?</h3>
                <p className="text-gray-700">Les tarifs dépendent du profil et de l'expérience. En moyenne, nos clients économisent entre 40% et 50% par rapport aux coûts locaux en France, Belgique ou Suisse. <Link to="/estimation" className="text-blue-600 hover:underline font-semibold">Voir l'estimation</Link></p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quel est le délai pour démarrer une mission ?</h3>
                <p className="text-gray-700">Grâce à la méthode DevConnect™, l'intégration complète se fait en moins de 15 jours : sélection du profil, onboarding technique et démarrage opérationnel.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Vos développeurs sont-ils vraiment francophones ?</h3>
                <p className="text-gray-700">Oui, 100% de nos développeurs et data analysts sont francophones, basés au Maroc, avec un excellent niveau de communication et une expérience de collaboration avec des équipes européennes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Comment garantissez-vous la qualité et la sécurité ?</h3>
                <p className="text-gray-700">Nous appliquons des NDA stricts, une gestion sécurisée des accès, un suivi KPI mensuel et une conformité RGPD totale. <Link to="/securite" className="text-blue-600 hover:underline font-semibold">En savoir plus</Link></p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Devit.IA convient-il aux PME et startups ?</h3>
                <p className="text-gray-700">Absolument. Nos solutions sont conçues pour les PME, startups et ETI francophones qui cherchent à renforcer leurs équipes tech sans les contraintes du recrutement traditionnel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
