'use client';

import { useState, useEffect } from 'react';
import NavbarV3 from '@/app/v3/Navbar';
import FooterV3 from '@/app/v3/Footer';
import { getStats } from '@/lib/umami';

const periodOptions = [
  { label: '24h', value: '24h' },
  { label: '7d', value: '7d' },
  { label: '30d', value: '30d' },
  { label: '90d', value: '90d' },
];

interface MetricCardProps {
  icon: string;
  label: string;
  value: number;
  color: string;
  index: number;
}

function MetricCard({ icon, label, value, color, index }: MetricCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-white/5 p-6 hover:border-purple-500/30 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full -translate-y-8 translate-x-8`} />
      <div className="relative z-10">
        <span className="text-3xl">{icon}</span>
        <p className="text-3xl font-bold text-white mt-3">{value.toLocaleString()}</p>
        <p className="text-sm text-slate-400 mt-1">{label}</p>
      </div>
    </div>
  );
}

export default function StatsPage() {
  const [period, setPeriod] = useState('30d');
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getStats>>>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStats(period).then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, [period]);

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <NavbarV3 />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-sm text-purple-300">📊 Estadísticas en vivo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Analytics{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                del Portafolio
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Métricas y datos de visitantes en tiempo real
            </p>
          </div>

          {/* Period Selector */}
          <div className="flex justify-center gap-3 mb-12">
            {periodOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setPeriod(opt.value)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  period === opt.value
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/30'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-slate-400 mt-4">Cargando estadísticas...</p>
            </div>
          )}

          {/* Not Configured State */}
          {!loading && !stats && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Estadísticas no configuradas</h3>
              <p className="text-slate-400 max-w-md mx-auto">
                Para activar el monitoreo, configura las variables de entorno de Umami en tu proyecto.
              </p>
              <div className="mt-6 bg-slate-800/50 rounded-xl p-4 max-w-lg mx-auto text-left">
                <code className="text-sm text-purple-300">
                  UMAMI_BASE_URL=https://cloud.umami.is<br />
                  UMAMI_WEBSITE_ID=your-id<br />
                  UMAMI_API_TOKEN=your-token
                </code>
              </div>
            </div>
          )}

          {/* Stats Content */}
          {!loading && stats && (
            <>
              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.metrics.map((metric, i) => (
                  <MetricCard
                    key={metric.label}
                    icon={metric.icon}
                    label={metric.label}
                    value={metric.value}
                    color={metric.color}
                    index={i}
                  />
                ))}
              </div>

              {/* Pageviews Chart */}
              {stats.pageviews.length > 0 && (
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-white mb-6">Vistas de Página</h3>
                  <div className="flex items-end gap-1 h-48">
                    {stats.pageviews.map((item, i) => {
                      const max = Math.max(...stats.pageviews.map((p) => p.count));
                      const height = max > 0 ? (item.count / max) * 100 : 0;
                      return (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity relative group"
                          style={{ height: `${height}%`, minHeight: '2px' }}
                        >
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {item.count}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    <span>{stats.pageviews[0]?.date}</span>
                    <span>{stats.pageviews[stats.pageviews.length - 1]?.date}</span>
                  </div>
                </div>
              )}

              {/* Top Pages */}
              {stats.topPages.length > 0 && (
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-6">Páginas más visitadas</h3>
                  <div className="space-y-3">
                    {stats.topPages.map((page, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300">
                            {i + 1}
                          </span>
                          <span className="text-slate-300 text-sm">{page.x}</span>
                        </div>
                        <span className="text-purple-400 font-semibold">{page.y}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <FooterV3 />
    </main>
  );
}
