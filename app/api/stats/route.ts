export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get('period') || '30d';
  const websiteId = searchParams.get('websiteId') || process.env.UMAMI_WEBSITE_ID;

  if (!process.env.UMAMI_API_TOKEN) {
    return Response.json({ error: 'UMAMI_API_TOKEN not configured' }, { status: 500 });
  }

  if (!websiteId) {
    return Response.json({ error: 'No website ID configured' }, { status: 500 });
  }

  const baseUrl = process.env.UMAMI_BASE_URL || 'https://cloud.umami.is';
  const token = process.env.UMAMI_API_TOKEN;

  // Calculate time range
  const now = Date.now();
  let days = 30;
  const periodMatch = period.match(/^(\d+)([dhmy])$/);
  if (periodMatch) {
    const value = parseInt(periodMatch[1]);
    const unit = periodMatch[2];
    if (unit === 'h') days = value / 24;
    else if (unit === 'd') days = value;
    else if (unit === 'm') days = value * 30;
    else if (unit === 'y') days = value * 365;
  }
  const startAt = now - (days * 24 * 60 * 60 * 1000);
  let unit = 'day';
  if (days <= 1) unit = 'hour';
  else if (days > 60 && days <= 365) unit = 'month';
  else if (days > 365) unit = 'year';

  try {
    const [pageviewsRes, metricsRes] = await Promise.all([
      fetch(`${baseUrl}/api/websites/${websiteId}/pageviews?startAt=${startAt}&endAt=${now}&unit=${unit}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetch(`${baseUrl}/api/websites/${websiteId}/metrics?startAt=${startAt}&endAt=${now}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    if (!pageviewsRes.ok) {
      console.error('Umami pageviews error:', pageviewsRes.status, await pageviewsRes.text());
      return Response.json({ error: 'Failed to fetch pageviews' }, { status: 500 });
    }
    if (!metricsRes.ok) {
      console.error('Umami metrics error:', metricsRes.status, await metricsRes.text());
      return Response.json({ error: 'Failed to fetch metrics' }, { status: 500 });
    }

    const pageviewsData = await pageviewsRes.json();
    const metricsData = await metricsRes.json();

    // Parse pageviews
    const pageviews = (pageviewsData.pageviews || []).map((item: { t: string; y: number }) => ({
      date: item.t,
      count: item.y,
    }));

    // Calculate totals
    const totalPageviews = pageviewsData.pageviews?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;
    const totalSessions = pageviewsData.sessions?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;
    const totalBounces = pageviewsData.bounces?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;
    const totalVisitors = pageviewsData.visitors?.reduce((sum: number, item: { y: number }) => sum + item.y, 0) || 0;

    // Top pages
    const topPages = (metricsData?.urls || []).slice(0, 10).map((item: { x: string; y: { pageviews: number } }) => ({
      x: item.x,
      y: item.y.pageviews || 0,
    }));

    const metrics = [
      { label: 'Vistas de Página', value: totalPageviews, icon: '👁️', color: 'from-purple-500 to-pink-500' },
      { label: 'Sesiones', value: totalSessions, icon: '🖱️', color: 'from-blue-500 to-cyan-500' },
      { label: 'Visitantes', value: totalVisitors, icon: '👥', color: 'from-emerald-500 to-green-500' },
      { label: 'Tasa de Rebote', value: totalSessions > 0 ? Math.round((totalBounces / totalSessions) * 100) : 0, icon: '📉', color: 'from-orange-500 to-red-500' },
    ];

    return Response.json({ metrics, pageviews, topPages });
  } catch (error) {
    console.error('Failed to fetch Umami stats:', error);
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
