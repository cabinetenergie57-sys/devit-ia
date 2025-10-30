import { useEffect } from 'react';
import { Target, Users, TrendingUp, RefreshCw, Check, BarChart3, ClipboardCheck, TrendingUp as TrendingUpIcon, Users as UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MethodPageProps {
  onLinaClick: () => void;
}

export default function MethodPage({ onLinaClick }: MethodPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Target,
      number: '1',
      title: 'Sélection stratégique',
      description:
        'Chaque mission commence par une analyse approfondie du besoin client. Nous sélectionnons les développeurs et data analysts francophones les plus pertinents selon la stack technique, la culture d\'entreprise et le secteur d\'activité. Chaque profil est évalué techniquement et humainement, avec un niveau de français professionnel.',
    },
    {
      icon: Users,
      number: '2',
      title: 'Intégration fluide',
      description:
        'Une fois le profil validé, Devit.IA gère tout le processus d\'intégration : contrats, outils, environnement de travail, conformité RGPD et onboarding. Le client démarre sa mission sans friction, avec un développeur prêt à produire dès le jour 1.',
    },
    {
      icon: TrendingUp,
      number: '3',
      title: 'Suivi & Performance continue',
      description:
        'Chaque mission est accompagnée d\'un suivi mensuel via nos outils internes. Nous mesurons les résultats, la satisfaction, la productivité et la qualité des livrables. Un Account Manager Devit.IA reste dédié au client tout au long du projet, garantissant une relation de confiance et une performance durable.',
    },
    {
      icon: RefreshCw,
      number: '4',
      title: 'Optimisation & Fidélisation',
      description:
        'La méthode DevConnect™ inclut une boucle d\'amélioration continue. Nous analysons les missions terminées pour améliorer le matching, la rapidité d\'intégration et la stabilité des équipes. Notre objectif : créer une relation long terme, où chaque mission devient un partenariat gagnant-gagnant.',
    },
  ];

  const performanceFeatures = [
    {
      icon: BarChart3,
      title: 'Indicateurs de performance (KPI)',
      text: 'Nous suivons la vélocité, la qualité du code, le respect des délais et la stabilité technique via des outils tels que Jira, GitLab et Power BI.',
    },
    {
      icon: ClipboardCheck,
      title: 'Questionnaires de satisfaction client',
      text: 'Nos clients reçoivent régulièrement un questionnaire simple et rapide afin d\'évaluer la communication, la réactivité et la qualité du livrable.',
    },
    {
      icon: TrendingUpIcon,
      title: 'Amélioration continue',
      text: 'Les retours sont analysés par nos managers pour ajuster les process, renforcer la cohésion d\'équipe et améliorer l\'efficacité collective.',
    },
    {
      icon: UsersIcon,
      title: 'Suivi humain & technique',
      text: 'Chaque mission est encadrée par un manager Devit.IA qui assure le reporting, les feedbacks bilatéraux et la relation de confiance avec le client.',
    },
  ];

  const benefits = [
    'gagnent jusqu\'à 70 % d\'économies sur leurs coûts IT',
    'accèdent à des talents certifiés et disponibles',
    'conservent un contrôle total sur leurs projets',
  ];

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              La Méthode <span className="gradient-text">DevConnect™</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La méthode exclusive qui transforme l'externalisation en performance
            </p>
          </div>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi DevConnect™ est une{' '}
              <span className="gradient-text">méthode exclusive</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed text-left">
              <p>
                La méthode DevConnect™ est le fruit de plusieurs années d'expérience en recrutement tech, gestion de mission et transformation digitale.
                Nous avons constaté que la majorité des prestataires d'externalisation se limitent à fournir des profils — sans accompagnement réel, sans suivi, et sans engagement de performance.
              </p>
              <p>
                <strong>DevConnect™ change complètement cette logique.</strong><br />
                C'est une méthode propriétaire, développée par Devit.IA, qui garantit un processus rigoureux et mesurable sur chaque mission.
              </p>
              <p>
                En la gardant exclusive, nous protégeons notre savoir-faire, nos standards de qualité, et la cohérence de l'expérience que nous offrons à nos clients.
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Les 4 piliers de la{' '}
              <span className="gradient-text">méthode DevConnect™</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="card-elegant group hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl gradient-bg flex items-center justify-center group-hover:shadow-lg transition-all">
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text">{pillar.number}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                L'excellence Devit.IA
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une approche radicalement différente de l'externalisation
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 border-2 border-blue-200 shadow-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                  <Check size={32} className="text-blue-600" />
                  Notre engagement qualité
                </h4>
                <ul className="grid md:grid-cols-2 gap-6">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Sélection d'experts adaptés à votre culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Intégration fluide et accompagnement complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Suivi mensuel de performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Dashboard clair et reporting continu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Partenariat durable avec garantie qualité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Conformité RGPD et sécurité des données</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-md">
              <h4 className="text-3xl font-bold text-gray-900 mb-5 text-center">
                Une approche centrée sur la valeur
              </h4>
              <p className="text-gray-700 mb-5 text-center text-lg leading-relaxed max-w-3xl mx-auto">
                DevConnect™ ne se limite pas à la mise à disposition de ressources :
                c'est une méthode d'accompagnement stratégique qui aligne vos objectifs business et vos ressources techniques.
              </p>
              <p className="text-gray-900 font-bold text-xl mb-5 text-center">
                Grâce à cette approche, les entreprises francophones :
              </p>
              <ul className="space-y-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={28} />
                    <span className="text-gray-800 text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-8 pt-8 border-t-2 border-gray-200">
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre signature</h4>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                DevConnect™ est bien plus qu'un processus :<br />
                c'est notre <strong className="gradient-text">signature d'excellence francophone</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elle incarne la vision de Devit.IA :<br />
                rendre l'externalisation <strong>simple, humaine et performante</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  Découvrir nos développeurs certifiés DevConnect™
                </Link>
                <button
                  onClick={onLinaClick}
                  className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Parler à Lina
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="suivi-performance" className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Suivi & Performance continue
              </h2>
              <p className="text-xl text-blue-200 mb-4 leading-relaxed max-w-3xl mx-auto">
                Nous mesurons, analysons et améliorons chaque mission Devit.IA.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Parce qu'une collaboration réussie se mesure, Devit.IA suit en continu la performance technique, la qualité du code et la satisfaction client. Grâce à la méthode DevConnect™, nous combinons des indicateurs précis et des retours humains pour garantir des résultats durables.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">

                <div className="space-y-6">
                  {performanceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:translate-x-2"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-blue-100 leading-relaxed">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    Contactez-nous pour un suivi personnalisé
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Analytics Dashboard"
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl border-4 border-gray-900">
                      <div className="text-white">
                        <div className="text-4xl font-bold mb-1">95%</div>
                        <div className="text-sm text-blue-100">Satisfaction client</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
