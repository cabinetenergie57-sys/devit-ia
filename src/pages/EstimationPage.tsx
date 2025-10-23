import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
          backgroundColor: '#4F46E5',
          borderColor: '#4338CA',
          borderWidth: 1,
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
              color: '#e2e8f0',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#e2e8f0',
            bodyColor: '#e2e8f0',
            borderColor: '#475569',
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
              color: '#94a3b8',
              font: {
                size: 12
              },
              callback: function(value) {
                return value + ' €';
              }
            },
            grid: {
              color: '#334155'
            }
          },
          x: {
            ticks: {
              color: '#94a3b8',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comparatif du marché francophone — Développeur full-stack confirmé
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Tarifs journaliers moyens observés pour des développeurs full-stack confirmés (3 à 5 ans d'expérience)
              dans les pays francophones. Ces chiffres sont indicatifs et peuvent varier selon la durée, la technologie
              et le projet. Ils servent de base de réflexion pour évaluer le coût du marché.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-4 px-4 text-slate-200 font-semibold">Pays</th>
                    <th className="text-left py-4 px-4 text-slate-200 font-semibold">TJM moyen (€ / jour)</th>
                    <th className="text-left py-4 px-4 text-slate-200 font-semibold">Équivalent mensuel (20 jours)</th>
                    <th className="text-left py-4 px-4 text-slate-200 font-semibold">Équivalent mensuel (21 jours)</th>
                    <th className="text-left py-4 px-4 text-slate-200 font-semibold">Remarques</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((row, index) => (
                    <tr
                      key={row.country}
                      className={`border-b border-slate-700/50 ${
                        index % 2 === 0 ? 'bg-slate-900/20' : 'bg-transparent'
                      } hover:bg-slate-700/30 transition-colors`}
                    >
                      <td className="py-4 px-4 text-white font-medium">{row.country}</td>
                      <td className="py-4 px-4 text-slate-300">{row.tjm} €</td>
                      <td className="py-4 px-4 text-slate-300">{row.equivalent20}</td>
                      <td className="py-4 px-4 text-slate-300">{row.equivalent21}</td>
                      <td className="py-4 px-4 text-slate-400 italic">{row.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Visualisation comparative
              </h3>
              <div className="relative h-80">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-blue-300">Note importante :</strong> Ces montants sont indicatifs et peuvent
                varier selon le profil, la technologie, la durée et le contexte. Ils constituent une base de connaissance
                du marché et ne représentent pas les tarifs Devit IA. Une estimation précise est fournie sur demande.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
