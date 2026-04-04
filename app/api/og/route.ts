export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({ title: null, description: null, image: null, url: null });
  }

  try {
    const res = await fetch(url);
    const html = await res.text();

    // Función auxiliar para extraer meta tags
    const getMeta = (property: string) => {
      const regex = new RegExp(`<meta (?:property|name)=["']${property}["'] content=["'](.*?)["']`, "i");
      const match = html.match(regex);
      return match ? match[1] : null;
    };

    const metadata = {
      title: getMeta("og:title") || getMeta("title") || null,
      description: getMeta("og:description") || getMeta("description") || null,
      image: getMeta("og:image") || null,
      url: getMeta("og:url") || url
    };

    return Response.json(metadata);
  } catch (error) {
    console.error("Error fetching metadata for:", url, error);
    return Response.json({ title: null, description: null, image: null, url: null });
  }
}