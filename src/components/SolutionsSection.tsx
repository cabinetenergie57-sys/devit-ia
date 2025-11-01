import { Users, UserCheck, Briefcase, ArrowRight, CheckCircle, Shield, Zap, Users as UsersIcon, Repeat2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionsSectionProps {
  onLinaClick: () => void;
}

export default function SolutionsSection({ onLinaClick }: SolutionsSectionProps) {
  const solutions = [
    {
      id: 'regie',
      icon: Users,
      title: 'Régie nouvelle génération',
      description:
        'Renfort d\'équipe, flexibilité totale, intégration express. Augmentez votre capacité avec des talents Data/IT sélectionnés et opérationnels en quelques jours.',
      features: [
        'Intégration en moins de 2 semaines',
        'Flexibilité totale sur la durée',
        'Talents trilingues et expérimentés',
        'Suivi quotidien et rapports réguliers',
      ],
      cta: 'Construisez votre équipe sur mesure',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1260&h=840&fit=crop&q=80',
    },
    {
      id: 'expert',
      icon: UserCheck,
      title: 'Expert à la carte',
      description:
        'Consulting, audit, mission courte, réactivité maximale. Accédez à des experts seniors pour des interventions ciblées et à fort impact.',
      features: [
        'Experts seniors disponibles sous 48h',
        'Missions courtes ou ponctuelles',
        'Audit et conseil stratégique',
        'ROI mesurable et immédiat',
      ],
      cta: 'Demandez un expert',
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1260&h=840&fit=crop&q=80',
    },
    {
      id: 'recrutement-optimise-securise',
      icon: CheckCircle,
      title: 'Recrutement optimisé et sécurisé',
      subtitle: 'Nous avons le développeur — pour un recrutement plus rapide, qualitatif et sûr pour votre équipe.',
      description:
        'Avec Devit.IA, vous accédez à des développeurs francophones pré-qualifiés via la méthode DevConnect™. Notre process couvre l\'évaluation technique, la conformité et l\'intégration < 15 jours, avec mini-management et suivi de performance.',
      features: [
        'Pré-qualification complète : Tests techniques, entretien en français, soft-skills et adéquation au contexte PME',
        'Confiance & conformité : NDA, gestion des accès selon vos règles, pratiques alignées RGPD, traçabilité',
        'Onboarding < 15 jours : Immersion rapide dans vos outils (Jira, GitLab, Slack, M365…) et vos rituels',
        'Mini-management inclus : Manager Devit.IA dédié, points réguliers, KPI partagés, plans d\'amélioration',
        'Remplacement garanti : En cas d\'inadéquation, remplacement accéléré pour assurer la continuité',
      ],
      cta: 'Obtenir 3 profils qualifiés',
      cta2: 'Découvrir la méthode DevConnect™',
      cta2Link: '/methode',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isRecrutement: true,
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Externalisation <span className="gradient-text">Data & IT au Maroc</span>
            <br />
            <span className="text-3xl md:text-4xl">Choisissez votre formule d'excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nearshore agile, talents qualifiés et solutions sur mesure pour accélérer votre transformation digitale
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              id={solution.id}
              className={`card-elegant grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                {!solution.isRecrutement ? (
                  <>
                    <div className="w-16 h-16 mb-6 rounded-2xl gradient-bg flex items-center justify-center">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={onLinaClick}
                      className="btn-gradient inline-flex items-center justify-center space-x-2"
                    >
                      <span>{solution.cta}</span>
                      <ArrowRight size={20} />
                    </button>
                  </>
                ) : (
                  <div style={{ maxWidth: '640px' }}>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1220' }}>
                      {solution.title}
                    </h3>
                    <p className="text-xl mb-6" style={{ color: '#334155', lineHeight: '1.7' }}>
                      {solution.subtitle}
                    </p>
                    <p className="text-lg mb-8" style={{ color: '#334155', lineHeight: '1.7' }}>
                      {solution.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      {solution.features.map((feature, idx) => {
                        const icons = [CheckCircle, Shield, Zap, UsersIcon, Repeat2];
                        const FeatureIcon = icons[idx] || CheckCircle;
                        return (
                          <div key={idx} className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                 style={{ background: 'linear-gradient(135deg, rgba(37,99,235,.12), rgba(109,40,217,.12))' }}>
                              <FeatureIcon className="w-6 h-6" style={{ color: '#2563EB' }} />
                            </div>
                            <div>
                              <p className="text-gray-700">{feature}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-xl"
                        style={{
                          background: 'linear-gradient(90deg,#2563EB,#6D28D9)',
                          borderRadius: '999px'
                        }}
                      >
                        {solution.cta}
                      </Link>
                      <Link
                        to={solution.cta2Link}
                        className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full border-2 transition-all hover:bg-gray-50"
                        style={{
                          color: '#2563EB',
                          borderColor: '#2563EB'
                        }}
                      >
                        {solution.cta2}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className={`relative overflow-hidden shadow-xl ${solution.isRecrutement ? 'rounded-3xl' : 'rounded-2xl'}`}
                     style={solution.isRecrutement ? { aspectRatio: '4/5' } : {}}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
