import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { TrendingUp, Users, DollarSign, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

Chart.register(...registerables);

interface MarketData {
  country: string;
  tjm: number;
  equivalent20: string;
  equivalent21: string;
  remarks: string;
}

const marketData: MarketData[] = [
  {
    country: 'France',
    tjm: 500,
    equivalent20: '10 000 €',
    equivalent21: '10 500 €',
    remarks: '—'
  },
  {
    country: 'Belgique',
    tjm: 500,
    equivalent20: '10 000 €',
    equivalent21: '10 500 €',
    remarks: '—'
  },
  {
    country: 'Suisse',
    tjm: 780,
    equivalent20: '15 600 €',
    equivalent21: '16 380 €',
    remarks: '≈ 750 CHF/j'
  },
  {
    country: 'Québec (Canada)',
    tjm: 525,
    equivalent20: '10 500 €',
    equivalent21: '11 025 €',
    remarks: '≈ 750 CAD/j'
  }
];

export default function EstimationPage() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: marketData.map(d => d.country),
        datasets: [{
          label: 'TJM (€/jour)',
          data: marketData.map(d => d.tjm),
          backgroundColor: 'rgba(102, 126, 234, 0.8)',
          borderColor: 'rgba(102, 126, 234, 1)',
          borderWidth: 2,
          borderRadius: 8,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#1f2937',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#1f2937',
            bodyColor: '#1f2937',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `${context.parsed.y} €/jour`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#6b7280',
              font: {
                size: 12
              },
              callback: function(value) {
                return value + ' €';
              }
            },
            grid: {
              color: '#e5e7eb'
            }
          },
          x: {
            ticks: {
              color: '#6b7280',
              font: {
                size: 12
              }
            },
            grid: {
              display: false
            }
          }
        }
      }
    };

    chartInstanceRef.current = new Chart(ctx, config);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  const advantages = [
    {
      icon: TrendingUp,
      title: 'Économies jusqu\'à 45%',
      description: 'Réduisez vos coûts IT tout en maintenant un niveau de qualité premium'
    },
    {
      icon: Users,
      title: 'Talents d\'excellence',
      description: 'Accédez aux meilleurs profils Data & IT du Maroc'
    },
    {
      icon: Award,
      title: 'Qualité garantie',
      description: 'Processus rigoureux et accompagnement personnalisé'
    },
    {
      icon: DollarSign,
      title: 'Transparence totale',
      description: 'Tarification claire et prévisible sans frais cachés'
    }
  ];

  const keyStats = [
    { value: '40-45%', label: 'Économies moyennes' },
    { value: '98%', label: 'Satisfaction client' },
    { value: '<5%', label: 'Turn-over' },
    { value: '24/7', label: 'Support continu' }
  ];

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estimations et <span className="gradient-text">Tarifs du Marché</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez les tarifs du marché francophone et comprenez comment Devit.IA vous permet de réaliser des économies significatives
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {keyStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir l'externalisation avec <span className="gradient-text">Devit.IA</span> ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des économies substantielles sans compromis sur la qualité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {advantages.map((advantage, index) => (
                <div key={index} className="card-elegant text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-lg mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Comparatif du marché francophone
              </h3>
              <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Tarifs journaliers moyens observés pour des développeurs full-stack confirmés (3 à 5 ans d'expérience)
                dans les pays francophones. Ces chiffres sont indicatifs et servent de base de réflexion.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-md mb-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-900 font-semibold">Pays</th>
                      <th className="text-left py-4 px-4 text-gray-900 font-semibold">TJM moyen (€/jour)</th>
                      <th className="text-left py-4 px-4 text-gray-900 font-semibold">Mensuel (20j)</th>
                      <th className="text-left py-4 px-4 text-gray-900 font-semibold">Mensuel (21j)</th>
                      <th className="text-left py-4 px-4 text-gray-900 font-semibold">Remarques</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData.map((row, index) => (
                      <tr
                        key={row.country}
                        className={`border-b border-gray-100 ${
                          index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="py-4 px-4 text-gray-900 font-medium">{row.country}</td>
                        <td className="py-4 px-4 text-gray-700 font-semibold">{row.tjm} €</td>
                        <td className="py-4 px-4 text-gray-700">{row.equivalent20}</td>
                        <td className="py-4 px-4 text-gray-700">{row.equivalent21}</td>
                        <td className="py-4 px-4 text-gray-500 italic">{row.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Visualisation comparative des tarifs
                </h4>
                <div className="relative h-80">
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    L'avantage Devit.IA
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Avec notre modèle d'externalisation au Maroc, bénéficiez de tarifs compétitifs tout en maintenant
                    une qualité de service exceptionnelle.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Réduction des coûts de 40 à 45% par rapport aux tarifs locaux</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Même fuseau horaire et culture francophone</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Équipes dédiées et intégration fluide</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Support et accompagnement continu</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-300 mb-2">Exemple de calcul mensuel</div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">€5,500</div>
                    <div className="text-sm text-gray-400">au lieu de €10,000/mois</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-t border-white/20">
                      <span className="text-gray-300">Profil</span>
                      <span className="font-semibold">Dev Full-stack Confirmé</span>
                    </div>
                    <div className="flex justify-between py-3 border-t border-white/20">
                      <span className="text-gray-300">Durée</span>
                      <span className="font-semibold">12 mois</span>
                    </div>
                    <div className="flex justify-between py-3 border-t border-white/20">
                      <span className="text-gray-300">Économies annuelles</span>
                      <span className="font-semibold text-green-400">€54,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-16">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-blue-900">Note importante :</strong> Ces montants sont indicatifs et peuvent
                varier selon le profil, la technologie, la durée et le contexte du projet. Ils constituent une base de connaissance
                du marché et ne représentent pas les tarifs définitifs de Devit.IA. Une estimation précise et personnalisée
                est fournie sur demande après analyse de vos besoins.
              </p>
            </div>

            <div className="glass-card-gradient rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                Prêt à optimiser vos coûts IT ?
              </h3>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-sm">
                Obtenez une estimation personnalisée et découvrez comment Devit.IA peut transformer
                votre stratégie d'externalisation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/solutions"
                  className="bg-white/20 text-white font-semibold py-4 px-8 rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  Découvrir nos solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
