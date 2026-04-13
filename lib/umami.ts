// Umami API client
// You need to set up Umami first:
// 1. Go to https://cloud.umami.is or self-host it
// 2. Create a website and get your website ID
// 3. Generate an API token from Settings > API
// 4. Add environment variables:
//    UMAMI_WEBSITE_ID=your-website-id
//    UMAMI_API_TOKEN=your-api-token
//    UMAMI_BASE_URL=https://your-umami-instance.com

const UMAMI_BASE_URL = process.env.UMAMI_BASE_URL || 'https://cloud.umami.is';
const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID || '';
const UMAMI_API_TOKEN = process.env.UMAMI_API_TOKEN || '';

export interface UmamiStats {
  pageviews: { value: number }[];
  sessions: { value: number }[];
  visitors: { value: number }[];
  events: { value: number }[];
  bounces: { value: number }[];
}

export interface UmamiPageStats {
  x: string;
  y: number;
}

export interface UmamiMetric {
  label: string;
  value: number;
  change?: number;
  icon: string;
  color: string;
}

async function umamiFetch(path: string, params?: Record<string, string>, overrideWebsiteId?: string) {
  if (!UMAMI_API_TOKEN) {
    console.warn('Umami API not configured. Set UMAMI_API_TOKEN.');
    return null;
  }

  const targetId = overrideWebsiteId || UMAMI_WEBSITE_ID;
  if (!targetId) {
    console.warn('No website ID configured.');
    return null;
  }

  const url = new URL(`/api/websites/${targetId}${path}`, UMAMI_BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  try {
    const res = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${UMAMI_API_TOKEN}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Umami API error:', res.status, res.statusText);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Failed to fetch Umami data:', error);
    return null;
  }
}

export async function getPageviews(period: string = '30d') {
  const endAt = Date.now();
  const startAt = getStartTimestamp(period);

  const data = await umamiFetch('/pageviews', {
    startAt: startAt.toString(),
    endAt: endAt.toString(),
    unit: getUnitForPeriod(period),
  });

  return data;
}

export async function getMetrics(period: string = '30d') {
  const endAt = Date.now();
  const startAt = getStartTimestamp(period);

  const data = await umamiFetch('/metrics', {
    startAt: startAt.toString(),
    endAt: endAt.toString(),
    type: 'url',
  });

  return data;
}

export async function getStats(period: string = '30d', websiteId?: string): Promise<{
  metrics: UmamiMetric[];
  pageviews: { date: string; count: number }[];
  topPages: UmamiPageStats[];
  countries: UmamiPageStats[];
  browsers: UmamiPageStats[];
  devices: UmamiPageStats[];
} | null> {
  const endAt = Date.now();
  const startAt = getStartTimestamp(period);
  const unit = getUnitForPeriod(period);
  const targetWebsiteId = websiteId || UMAMI_WEBSITE_ID;

  const [pageviewsData, metricsData] = await Promise.all([
    umamiFetch('/pageviews', { startAt: startAt.toString(), endAt: endAt.toString(), unit }, targetWebsiteId),
    umamiFetch('/metrics', { startAt: startAt.toString(), endAt: endAt.toString() }, targetWebsiteId),
  ]);

  if (!pageviewsData) {
    return null;
  }

  // Parse pageviews over time
  const pageviews = (pageviewsData.pageviews || []).map((item: { t: string; y: number }) => ({
    date: item.t,
    count: item.y,
  }));

  // Calculate totals
  const totalPageviews = pageviewsData.pageviews?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;
  const totalSessions = pageviewsData.sessions?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;
  const totalBounces = pageviewsData.bounces?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;
  const totalVisitors = pageviewsData.visitors?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;

  // Top pages from metrics
  const topPages = (metricsData?.urls || []).slice(0, 10).map((item: { x: string; y: { pageviews: number } }) => ({
    x: item.x,
    y: item.y.pageviews || 0,
  }));

  const metrics: UmamiMetric[] = [
    { label: 'Vistas de Página', value: totalPageviews, icon: '👁️', color: 'from-purple-500 to-pink-500' },
    { label: 'Sesiones', value: totalSessions, icon: '🖱️', color: 'from-blue-500 to-cyan-500' },
    { label: 'Visitantes', value: totalVisitors, icon: '👥', color: 'from-emerald-500 to-green-500' },
    { label: 'Tasa de Rebote', value: totalSessions > 0 ? Math.round((totalBounces / totalSessions) * 100) : 0, icon: '📉', color: 'from-orange-500 to-red-500' },
  ];

  return {
    metrics,
    pageviews,
    topPages,
    countries: [],
    browsers: [],
    devices: [],
  };
}

function getStartTimestamp(period: string): number {
  const now = Date.now();
  const days = parsePeriod(period);
  return now - (days * 24 * 60 * 60 * 1000);
}

function parsePeriod(period: string): number {
  const match = period.match(/^(\d+)([dhmy])$/);
  if (!match) return 30;

  const value = parseInt(match[1]);
  const unit = match[2];

  switch (unit) {
    case 'h': return value / 24;
    case 'd': return value;
    case 'm': return value * 30;
    case 'y': return value * 365;
    default: return value;
  }
}

function getUnitForPeriod(period: string): string {
  const days = parsePeriod(period);
  if (days <= 1) return 'hour';
  if (days <= 7) return 'day';
  if (days <= 60) return 'day';
  if (days <= 365) return 'month';
  return 'year';
}
