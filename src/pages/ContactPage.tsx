import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import { Phone, Mail, MapPin, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { Link } from 'react-router-dom';
import { faqSchema } from '../utils/structuredData';

interface ContactPageProps {
  onLinaClick: () => void;
}

export default function ContactPage({ onLinaClick }: ContactPageProps) {
  useSEO({
    title: 'Contact | Devit.IA – Parlons de Votre Projet IT',
    description: 'Contactez Devit.IA pour externaliser vos projets IT et Data. Devis gratuit, support 24/7, expertise francophone. Maroc, France, Belgique, Suisse, Canada.',
    keywords: 'contact Devit.IA, devis IT, support francophone, externalisation Maroc, projet IT Data, assistance technique, compte dédié',
    canonical: 'https://devit-ia.com/contact'
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const faqData = faqSchema([
      { question: "Quel est le délai pour démarrer une mission avec Devit.IA ?", answer: "Grâce à la méthode DevConnect™, le démarrage complet (sélection, onboarding, démarrage opérationnel) se fait en moins de 15 jours. Pour une urgence, nous pouvons accélérer le process selon les disponibilités." },
      { question: "Quelles informations sont nécessaires pour un devis ?", answer: "Nous avons besoin du profil recherché (développeur, data analyst), de la stack technique, de la durée estimée, du niveau d'expérience souhaité et de vos contraintes spécifiques (fuseau horaire, certifications, etc.)." },
      { question: "Comment vérifier la disponibilité des profils ?", answer: "Contactez-nous via le formulaire ou parlez avec Lina pour connaître en temps réel les profils disponibles. Nous mettons à jour nos disponibilités quotidiennement selon les missions en cours." },
      { question: "Peut-on planifier un appel ou un audit avec Lina ?", answer: "Oui, Lina peut planifier un appel découverte avec nos experts ou organiser un audit technique de votre besoin. Discutez avec elle 24/7 via le chat, ou contactez-nous directement pour fixer un rendez-vous selon vos disponibilités." }
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 7 63 26 26 09'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@devitia.ma', 'lina@devitia.ma'],
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['58 rue Monceau', '75008 Paris'],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 9h - 18h', 'Support 24/7 disponible'],
    },
  ];

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment démarrer votre mission développeur avec <span className="gradient-text">Devit.IA</span> ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contactez-nous pour renforcer vos équipes IT et Data avec des talents francophones certifiés
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-elegant text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Réponse express</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Contactez-nous par téléphone (+33 7 63 26 26 09), email (contact@devitia.ma) ou formulaire. Discutez avec Lina 24/7 pour des réponses immédiates. Démarrage possible en moins de 15 jours avec DevConnect™. Devis gratuit et personnalisé.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link to="/methode" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                      Découvrir DevConnect™ <ArrowRight className="w-4 h-4" />
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

      <ContactSection onLinaClick={onLinaClick} />

      {/* Mini FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes - Contact & Démarrage</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quel est le délai pour démarrer une mission avec Devit.IA ?</h3>
                <p className="text-gray-700">Grâce à la méthode DevConnect™, le démarrage complet (sélection, onboarding, démarrage opérationnel) se fait en moins de 15 jours. Pour une urgence, nous pouvons accélérer le process selon les disponibilités.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quelles informations sont nécessaires pour un devis ?</h3>
                <p className="text-gray-700">Nous avons besoin du profil recherché (développeur, data analyst), de la stack technique, de la durée estimée, du niveau d'expérience souhaité et de vos contraintes spécifiques (fuseau horaire, certifications, etc.).</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Comment vérifier la disponibilité des profils ?</h3>
                <p className="text-gray-700">Contactez-nous via le formulaire ou parlez avec Lina pour connaître en temps réel les profils disponibles. Nous mettons à jour nos disponibilités quotidiennement selon les missions en cours.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Peut-on planifier un appel ou un audit avec Lina ?</h3>
                <p className="text-gray-700">Oui, Lina peut planifier un appel découverte avec nos experts ou organiser un audit technique de votre besoin. Discutez avec elle 24/7 via le chat, ou contactez-nous directement pour fixer un rendez-vous selon vos disponibilités.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Besoin d'une réponse immédiate ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discutez avec Lina, notre assistante virtuelle, pour obtenir des réponses instantanées
              à vos questions sur Devit.IA
            </p>
            <button onClick={onLinaClick} className="btn-gradient text-lg">
              Parler avec Lina maintenant
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
