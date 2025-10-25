export default function SecurityLogosMarquee() {
  const securityTools = [
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
  ];

  const duplicatedTools = [...securityTools, ...securityTools];

  return (
    <section className="py-12 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0f1f 0%, #141b36 50%, #1b1440 100%)',
      boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.3)',
      borderTop: '1px solid rgba(168, 85, 247, 0.25)'
    }}>
      {/* Violet Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3/4 h-32 bg-purple-600/20 blur-3xl rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/8 rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400/6 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400/4 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/7 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          Ils sécurisent nos livraisons
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll hover:pause">
            {duplicatedTools.map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] group"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-4xl opacity-90 filter grayscale group-hover:grayscale-0 transition-all">
                    {tool.icon}
                  </div>
                  <span className="text-xs font-light text-[#C8CBD4] whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-[#1b1440] pointer-events-none"></div>

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
