import { Shield, Lock, Code, Eye, FileCheck, HardDrive, CheckCircle2, Bot, MessageCircle } from 'lucide-react';
import SecurityLogosMarquee from '../components/SecurityLogosMarquee';

interface SecurityPageProps {
  onLinaClick: () => void;
}

export default function SecurityPage({ onLinaClick }: SecurityPageProps) {
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
      tools: ['Tenable Nessus, Qualys (scans de vulnérabilité)', 'Drata, Vanta (conformité ISO 27001 / SOC2)', 'OneTrust (registre RGPD)'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: HardDrive,
      title: 'Chiffrement & sauvegardes',
      description: 'Les données sont protégées par chiffrement AES-256 et les communications sécurisées via TLS 1.3. Sauvegardes automatiques quotidiennes sur environnements conformes ISO 27001. Solutions :',
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
              internationaux (ISO 27001, SOC 2, RGPD).
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
                    vos questions concernant la conformité RGPD, les certifications ISO 27001/SOC2,
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

      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-gradient rounded-3xl p-6 md:p-8 text-center text-white">
              <Shield className="w-12 h-12 mx-auto mb-4 drop-shadow-md" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">
                Votre sécurité, notre priorité
              </h3>
              <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto drop-shadow-sm">
                Découvrez comment nos standards de sécurité peuvent protéger vos projets IT,
                Data et IA tout en garantissant une conformité RGPD totale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onLinaClick}
                  className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <span>Parlez à Lina</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
