import { useEffect } from 'react';
import { CheckCircle, ArrowRight, MessageSquare, Kanban, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdvantagesSection from '../components/AdvantagesSection';

interface AdvantagesPageProps {
  onLinaClick: () => void;
}

export default function AdvantagesPage({ onLinaClick }: AdvantagesPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onboardingSteps = [
    {
      subtitle: '1. Préparation technique et administrative',
      text: 'Nous gérons toutes les étapes nécessaires avant le démarrage : contrats, conformité RGPD, accès aux outils, configuration des environnements de travail et vérification de la sécurité.',
    },
    {
      subtitle: '2. Accompagnement humain',
      text: 'Un manager Devit.IA accompagne le développeur et le client pendant toute la phase d\'intégration. Il veille à la bonne communication, à l\'adaptation du profil et à la montée en efficacité.',
    },
    {
      subtitle: '3. Mise en route rapide',
      text: 'Grâce à notre méthode DevConnect™, l\'intégration complète se fait en moins de 15 jours. Votre développeur est rapidement opérationnel, sans perte de temps ni de productivité.',
    },
    {
      subtitle: '4. Suivi et mini-management',
      text: 'Nos managers assurent un suivi continu pendant la mission, en réalisant des points réguliers avec le client et le développeur. Ce mini-management garantit la cohérence technique et la satisfaction client.',
    },
  ];

  const toolsMethodology = [
    {
      icon: MessageSquare,
      title: 'Communication',
      text: 'Slack ou Microsoft Teams pour des échanges clairs et rapides entre votre équipe, le manager Devit.IA et le développeur. Notion centralise les informations clés.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Kanban,
      title: 'Pilotage agile',
      text: 'Jira, Trello ou ClickUp pour la gestion des sprints, priorités et roadmaps. Rituels hebdomadaires et indicateurs partagés.',
      image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: GitBranch,
      title: 'Qualité du code',
      text: 'GitLab, GitHub ou Bitbucket pour la CI/CD, les revues de merge et la traçabilité. Mesure de la qualité et du lead time.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Les <span className="gradient-text">Avantages</span> Devit.IA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pourquoi choisir l'externalisation au Maroc avec Devit.IA pour vos projets Data et IT
            </p>
          </div>
        </div>
      </div>
      <AdvantagesSection onLinaClick={onLinaClick} />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Onboarding <span className="gradient-text">Devit.IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre processus d'onboarding assure une intégration fluide, structurée et supervisée par un manager Devit.IA. Chaque étape est pensée pour simplifier la collaboration et maximiser la performance dès les premières semaines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="card-elegant">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.subtitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/methode"
              className="btn-gradient inline-flex items-center justify-center space-x-2"
            >
              <span>Découvrir la Méthode DevConnect™</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section id="outils-methode" className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Outils & méthodologie
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-4">
              Une collaboration fluide, sécurisée et mesurable à chaque étape de votre mission.
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Devit.IA standardise l'onboarding et le suivi grâce à un écosystème d'outils professionnels et des rituels agiles. Résultat : visibilité totale, intégration rapide et performance continue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {toolsMethodology.map((tool, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {tool.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/methode"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span>Découvrir la méthode DevConnect™</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
