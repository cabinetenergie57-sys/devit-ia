import { Shield, Lock, Code, Eye, FileCheck, HardDrive, CheckCircle2, Bot, MessageCircle, ShieldCheck, KeyRound, AlertTriangle, Handshake } from 'lucide-react';
import SecurityLogosMarquee from '../components/SecurityLogosMarquee';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import { useEffect } from 'react';

interface SecurityPageProps {
  onLinaClick: () => void;
}

export default function SecurityPage({ onLinaClick }: SecurityPageProps) {
  useSEO({
    title: 'Sécurité & RGPD | Externalisation IT Conforme | Devit.IA',
    description: 'Conformité RGPD, NDA, accès sécurisés, audits réguliers. Devit.IA garantit une externalisation IT et Data sécurisée pour les entreprises francophones.',
    keywords: 'RGPD offshore, sécurité IT, NDA confidentialité, accès sécurisés, audit sécurité, conformité données, externalisation sécurisée',
    canonical: 'https://devit-ia.com/securite'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const conformityFeatures = [
    {
      icon: ShieldCheck,
      title: 'Nos engagements internes',
      text: 'Accords de confidentialité (NDA), gestion des accès, stockage sécurisé, outils conformes RGPD (Microsoft 365, Google Workspace) et traçabilité des activités.'
    },
    {
      icon: KeyRound,
      title: 'Responsabilité client',
      text: 'Chaque client reste responsable de la sécurité de ses environnements, mots de passe et outils internes. Devit.IA respecte et s\'adapte à ces politiques pour une conformité maximale.'
    },
    {
      icon: Lock,
      title: 'Protection des accès',
      text: 'Nos collaborateurs utilisent des comptes nominatifs, avec authentification sécurisée et révocation immédiate des accès à la fin de mission.'
    },
    {
      icon: FileCheck,
      title: 'Conformité RGPD',
      text: 'Les données traitées par Devit.IA respectent les principes du RGPD : finalité limitée, durée de conservation maîtrisée et confidentialité renforcée.'
    },
    {
      icon: AlertTriangle,
      title: 'Surveillance et prévention',
      text: 'Des vérifications régulières sont réalisées pour s\'assurer du respect des engagements de confidentialité et de sécurité. Tout incident est signalé sans délai au client concerné.'
    },
    {
      icon: Handshake,
      title: 'Collaboration sécurisée',
      text: 'Devit.IA accompagne ses clients dans la mise en place de protocoles de sécurité adaptés à leur contexte, afin d\'assurer une collaboration fluide et conforme.'
    }
  ];

  const securityBlocks = [
    {
      icon: Shield,
      title: 'Gestion des identités et des accès',
      description: 'Authentification multi-facteurs (MFA) et gestion centralisée des rôles pour un contrôle strict des accès utilisateurs. Devit IA s\'appuie notamment sur :',
      tools: ['Azure Active Directory (Entra ID)', 'Okta / Auth0', 'Google Workspace IAM'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'Stockage sécurisé des secrets',
      description: 'Toutes les clés API, tokens et identifiants sont stockés dans des coffres-forts chiffrés, inaccessibles depuis le code. Solutions utilisées :',
      tools: ['HashiCorp Vault', 'Azure Key Vault', 'AWS Secrets Manager'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Sécurité du code et des pipelines',
      description: 'Nos pipelines d\'intégration continue incluent des contrôles automatiques de qualité et de sécurité afin de prévenir toute vulnérabilité avant la mise en production. Outils intégrés :',
      tools: ['Snyk', 'SonarQube', 'Dependabot'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Eye,
      title: 'Surveillance et audit en continu',
      description: 'Surveillance proactive des systèmes et détection d\'incidents en temps réel pour garantir la disponibilité et l\'intégrité des environnements. Outils utilisés :',
      tools: ['Datadog / Grafana Loki', 'CrowdStrike Falcon', 'SentinelOne'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileCheck,
      title: 'Conformité et audits réguliers',
      description: 'Devit IA réalise des audits de sécurité réguliers et suit une politique de conformité continue. Référentiels et outils :',
      tools: ['Tenable Nessus, Qualys (scans de vulnérabilité)', 'Drata, Vanta (conformité et audits sécurité)', 'OneTrust (registre RGPD)'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: HardDrive,
      title: 'Chiffrement & sauvegardes',
      description: 'Les données sont protégées par chiffrement AES-256 et les communications sécurisées via TLS 1.3. Sauvegardes automatiques quotidiennes sur environnements hautement sécurisés. Solutions :',
      tools: ['Acronis', 'Veeam', 'BitLocker'],
      color: 'from-red-500 to-red-600'
    }
  ];


  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Outils & Standards de <span className="gradient-text">Sécurité</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Devit IA s'appuie sur les solutions les plus fiables du marché pour assurer la sécurité,
              la confidentialité et la conformité RGPD de ses environnements et de ses projets clients.
              Ces technologies sont reconnues pour leur fiabilité et leur conformité aux standards
              internationaux (RGPD).
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {securityBlocks.map((block, index) => (
                <div
                  key={index}
                  className="card-elegant group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <block.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {block.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {block.description}
                  </p>

                  <div className="space-y-3">
                    {block.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SecurityLogosMarquee />

      <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Sécurité & conformité Devit.IA
              </h2>
              <p className="text-xl text-blue-100 mb-4 leading-relaxed max-w-3xl mx-auto">
                Une approche collaborative pour protéger vos données et vos environnements
              </p>
              <p className="text-lg text-blue-200 leading-relaxed max-w-4xl mx-auto">
                La sécurité est une priorité partagée. Devit.IA applique des standards rigoureux en interne tout en respectant les politiques, outils et règles d'accès de chaque client. Notre rôle est d'accompagner et d'encadrer les bonnes pratiques, tout en laissant au client la maîtrise totale de ses environnements et de sa sécurité opérationnelle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {conformityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
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

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Contactez notre équipe sécurité
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center shadow-xl">
                    <Bot className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Lina répond à toutes vos questions de sécurité
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Notre assistante IA Lina est parfaitement formée sur l'ensemble de nos standards
                    de sécurité, certifications et outils. Elle peut répondre en temps réel à toutes
                    vos questions concernant la conformité RGPD,
                    le chiffrement, les audits de sécurité et bien plus encore.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button
                      onClick={onLinaClick}
                      className="btn-gradient inline-flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Posez vos questions à Lina</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-200">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-gray-600">Disponibilité continue</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-gray-600">Informations à jour</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">&lt;2min</div>
                    <div className="text-gray-600">Temps de réponse moyen</div>
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
