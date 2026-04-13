import Advertisement from "@/app/components/Advertisement";
import AdNovillero from "@/app/components/AdNovillero";

export const sites = [
  'https://sushirestaurant-psi.vercel.app/',
  'https://escenciaequilibrio.vercel.app',
  'https://folletoshop.vercel.app/',
  'https://musicproducer-vercel.vercel.app/',
  'https://wingsandbites.vercel.app/',
  'https://catalina-teal.vercel.app/',
  'https://smalle.vercel.app/',
];

interface SiteContent {
  type: "site";
  url: string;
}

interface AdContent {
  type: "ad";
  component: React.ReactElement<{ onComplete?: () => void }>;
}

type SliderContent = SiteContent | AdContent;

export const sliderContent: SliderContent[] = [];


sliderContent.push({ type: "ad", component: <AdNovillero /> });
sliderContent.push({ type: "site", url: 'https://folletoshop.vercel.app/' });

sliderContent.push({ type: "ad", component: <Advertisement /> });
sliderContent.push({ type: "site", url: 'https://escenciaequilibrio.vercel.app/' });

sliderContent.push({ type:'ad', component: <Advertisement /> });
sliderContent.push({ type: "site", url: 'https://musicproducer-vercel.vercel.app/' });  

sliderContent.push({ type:'ad', component: <Advertisement /> });
sliderContent.push({ type: "site", url: 'https://wingsandbites.vercel.app/' });

sliderContent.push({ type:'ad', component: <Advertisement /> });
sliderContent.push({ type: "site", url: 'https://catalina-teal.vercel.app/' });

sliderContent.push({ type:'ad', component: <Advertisement /> });
sliderContent.push({ type: "site", url: 'https://smalle.vercel.app/' });

sliderContent.push({ type:'ad', component: <Advertisement /> });
sliderContent.push({ type: "site", url: 'https://sushirestaurant-psi.vercel.app/' });