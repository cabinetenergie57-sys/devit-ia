import { useEffect } from 'react';
import { Target, Users, TrendingUp, RefreshCw, Check, BarChart3, ClipboardCheck, TrendingUp as TrendingUpIcon, Users as UsersIcon, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { faqSchema } from '../utils/structuredData';

interface MethodPageProps {
  onLinaClick: () => void;
}

export default function MethodPage({ onLinaClick }: MethodPageProps) {
  useSEO({
    title: 'Méthode DevConnect™ | Externalisation IT Sans Friction',
    description: 'Onboarding en 15 jours, suivi agile, qualité garantie. La méthode exclusive Devit.IA pour l’externalisation IT et Data des entreprises francophones.',
    keywords: 'DevConnect méthode, onboarding développeur, suivi agile, KPI performance, management offshore, intégration rapide, externalisation structurée',
    canonical: 'https://devit-ia.com/methode'
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const faqData = faqSchema([
      { question: "Comment se déroule la sélection des profils avec DevConnect™ ?", answer: "Nous analysons votre besoin technique et culturel, puis sélectionnons les développeurs francophones les plus adaptés selon la stack, le secteur et l'expérience. Chaque profil est testé techniquement et évalué sur son niveau de français." },
      { question: "Qu'est-ce que le mini-management Devit.IA ?", answer: "Un Account Manager dédié suit votre mission en continu : points réguliers, reporting mensuel, ajustements si nécessaire. Ce suivi garantit la performance et la satisfaction tout au long du projet." },
      { question: "Comment mesurez-vous la performance des développeurs ?", answer: "Nous utilisons des KPI techniques (vélocité, qualité code, respect délais) via Jira, GitLab et Power BI, complétés par des questionnaires de satisfaction client pour une vision à 360°." },
      { question: "L'onboarding prend vraiment moins de 15 jours ?", answer: "Oui, grâce à DevConnect™ nous gérons contrats, accès outils, environnement de travail et formation. Le développeur est opérationnel dès le jour 1, sans friction pour votre équipe." },
      { question: "La méthode DevConnect™ est-elle adaptée aux petites structures ?", answer: "Absolument. Nos process sont pensés pour les PME, startups et ETI qui veulent renforcer leurs équipes tech sans la lourdeur du recrutement traditionnel ni sacrifier la qualité." }
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
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
              Qu'apporte la méthode exclusive <span className="gradient-text">DevConnect™</span> à votre externalisation IT ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La méthode propriétaire qui transforme l'externalisation en performance mesurable
            </p>
          </div>
        </div>
      </div>

      {/* Answer Box Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Réponse express</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    DevConnect™ est une méthode propriétaire qui structure l'externalisation IT en 4 étapes : sélection stratégique des profils, intégration fluide en moins de 15 jours, suivi mensuel de performance avec KPI, et optimisation continue. Résultat : économies de 40 à 50%, qualité garantie, et zéro friction.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link to="/avantages" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Voir les avantages <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/securite" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Sécurité & RGPD <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Démarrer une mission <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Comment fonctionne la{' '}
              <span className="gradient-text">méthode DevConnect™</span> en 4 étapes ?
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
                Comment mesurez-vous la performance et la satisfaction client ?
              </h2>
              <p className="text-xl text-blue-200 mb-4 leading-relaxed max-w-3xl mx-auto">
                Nous mesurons, analysons et améliorons chaque mission Devit.IA.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto mb-12">
                Parce qu'une collaboration réussie se mesure, Devit.IA suit en continu la performance technique, la qualité du code et la satisfaction client. Grâce à la méthode DevConnect™, nous combinons des indicateurs précis et des retours humains pour garantir des résultats durables.
              </p>

              <div className="max-w-3xl mx-auto mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <div className="relative">
                      <img
                        src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Analytics Dashboard"
                        className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-video"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-5 shadow-2xl border-4 border-gray-900">
                        <div className="text-white">
                          <div className="text-3xl font-bold mb-1">95%</div>
                          <div className="text-xs text-blue-100">Satisfaction client</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {performanceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  Contactez-nous pour un suivi personnalisé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes sur DevConnect™</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Comment se déroule la sélection des profils avec DevConnect™ ?</h3>
                <p className="text-gray-700">Nous analysons votre besoin technique et culturel, puis sélectionnons les développeurs francophones les plus adaptés selon la stack, le secteur et l'expérience. Chaque profil est testé techniquement et évalué sur son niveau de français.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Qu'est-ce que le mini-management Devit.IA ?</h3>
                <p className="text-gray-700">Un Account Manager dédié suit votre mission en continu : points réguliers, reporting mensuel, ajustements si nécessaire. Ce suivi garantit la performance et la satisfaction tout au long du projet.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Comment mesurez-vous la performance des développeurs ?</h3>
                <p className="text-gray-700">Nous utilisons des KPI techniques (vélocité, qualité code, respect délais) via Jira, GitLab et Power BI, complétés par des questionnaires de satisfaction client pour une vision à 360°.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">L'onboarding prend vraiment moins de 15 jours ?</h3>
                <p className="text-gray-700">Oui, grâce à DevConnect™ nous gérons contrats, accès outils, environnement de travail et formation. Le développeur est opérationnel dès le jour 1, sans friction pour votre équipe.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">La méthode DevConnect™ est-elle adaptée aux petites structures ?</h3>
                <p className="text-gray-700">Absolument. Nos process sont pensés pour les PME, startups et ETI qui veulent renforcer leurs équipes tech sans la lourdeur du recrutement traditionnel ni sacrifier la qualité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
