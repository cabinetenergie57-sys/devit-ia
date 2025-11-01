import { useEffect } from 'react';
import SolutionsSection from '../components/SolutionsSection';
import MethodSection from '../components/MethodSection';
import { useSEO } from '../utils/seo';

interface SolutionsPageProps {
  onLinaClick: () => void;
}

export default function SolutionsPage({ onLinaClick }: SolutionsPageProps) {
  useSEO({
    title: 'Solutions Nearshore IT & Data | Devit.IA Francophone',
    description: 'Externalisation IT et Data sur-mesure pour PME francophones. Développement web, mobile, data engineering et IA. Méthode DevConnect™ éprouvée.',
    keywords: 'développement web mobile, data engineering, IA machine learning, externalisation agile, équipe dédiée, React Angular Vue, Python Java, nearshore Maroc',
    canonical: 'https://devit-ia.com/solutions'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Devit.IA transforme votre stratégie IT et Data avec des solutions sur-mesure
            </p>
          </div>
        </div>
      </div>
      <SolutionsSection onLinaClick={onLinaClick} />
      <MethodSection onLinaClick={onLinaClick} />
    </>
  );
}
