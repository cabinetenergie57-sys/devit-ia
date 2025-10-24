import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onLinaClick: () => void;
}

export default function TestimonialsSection({ onLinaClick }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'CTO',
      company: 'NFTECH',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&q=80',
      quote:
        'Devit.IA a transformé notre approche de l\'externalisation. L\'équipe marocaine s\'est intégrée en quelques jours et la qualité de livraison dépasse nos attentes. Un vrai partenariat stratégique.',
      rating: 5,
    },
    {
      name: 'Marc Dubois',
      role: 'Directeur Data',
      company: 'Cablex',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
      quote:
        'Nous avons économisé 45% sur nos coûts Data tout en augmentant la vélocité de nos projets. L\'accompagnement de Lina et l\'équipe Devit.IA est exceptionnel.',
      rating: 5,
    },
    {
      name: 'Émilie Rousseau',
      role: 'CEO',
      company: 'InnovateLab',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80',
      quote:
        'La méthode DevConnect™ est unique. Du recrutement au suivi quotidien, tout est pensé pour la réussite. Notre turn-over est proche de zéro et la satisfaction des équipes est maximale.',
      rating: 5,
    },
  ];

  const successMetrics = [
    { value: '98%', label: 'Clients recommandent Devit.IA' },
    { value: '45%', label: 'Économies constatées sur projets Data' },
    { value: '40%', label: 'Gain de temps d\'intégration' },
    { value: '< 5%', label: 'Turn-over équipes externalisées' },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos clients transforment leur performance avec l'externalisation
            au Maroc
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm gradient-text font-semibold">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Partners Section */}
        <div className="mt-24 relative overflow-hidden rounded-3xl" style={{
          background: 'linear-gradient(135deg, #0a0f1f 0%, #141b36 50%, #1b1440 100%)',
          boxShadow: 'inset 0 30px 60px rgba(0,0,0,0.3)',
          borderTop: '1px solid rgba(168, 85, 247, 0.25)'
        }}>
          {/* Violet Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3/4 h-48 bg-purple-600/20 blur-3xl rounded-full"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/5 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/8 rounded-full animate-pulse delay-75"></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400/6 rounded-full animate-pulse delay-150"></div>
            <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400/4 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/7 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative py-16 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              Ils sécurisent nos livraisons
            </h3>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll hover:pause">
                {[
                  { name: 'Azure', icon: '☁️' },
                  { name: 'Okta', icon: '🔐' },
                  { name: 'HashiCorp Vault', icon: '🔑' },
                  { name: 'SonarQube', icon: '🔍' },
                  { name: 'Snyk', icon: '🛡️' },
                  { name: 'Datadog', icon: '📊' },
                  { name: 'Drata', icon: '✅' },
                  { name: 'OneTrust', icon: '🔒' },
                  { name: 'Veeam', icon: '💾' },
                  { name: 'Qualys', icon: '🔬' },
                  { name: 'Nessus', icon: '🎯' },
                  { name: 'BitLocker', icon: '🔐' },
                  { name: 'Azure', icon: '☁️' },
                  { name: 'Okta', icon: '🔐' },
                  { name: 'HashiCorp Vault', icon: '🔑' },
                  { name: 'SonarQube', icon: '🔍' },
                  { name: 'Snyk', icon: '🛡️' },
                  { name: 'Datadog', icon: '📊' },
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-8 transition-all duration-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-5xl text-white opacity-90 filter grayscale hover:grayscale-0 transition-all">
                        {tool.icon}
                      </div>
                      <span className="text-sm font-light text-[#C8CBD4] whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#1b1440] pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
