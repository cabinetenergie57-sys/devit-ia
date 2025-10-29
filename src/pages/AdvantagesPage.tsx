import { useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
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
    </>
  );
}
