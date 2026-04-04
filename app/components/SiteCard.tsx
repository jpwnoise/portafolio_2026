'use client';

import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

interface Metadata {
    title: string | null;
    description: string | null;
    image: string | null;
    url: string | null;
}

interface SiteCardProps {
    url: string;
    view?: "preview" | "opengraph";
    onImageLoad?: () => void;

}

export default function SiteCard({ url, view = "opengraph", onImageLoad }: SiteCardProps) {
    const [metadata, setMetadata] = useState<Metadata | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);


    useEffect(() => {
        const fetchMeta = async () => {
            try {
                const res = await fetch(`/api/og?url=${encodeURIComponent(url)}`);
                const data = await res.json();
                setMetadata(data);
            } catch (error) {
                console.error("Error fetching OG metadata:", error);
                setMetadata({
                    title: null,
                    description: null,
                    image: null,
                    url: null
                });
            }
        };

        if (view === "opengraph") {
            fetchMeta();
        }
    }, [url, view]);

    return (
        <div onClick={() => window.open(url, "_blank")} className="">
            <div className="bg-white shadow-md rounded-lg p-4 max-w-4xl w-full m-6 border border-gray-300 card-3d bg-gradient-to-r from-white to-gray-100" >
                {view === "preview" && (
                    <iframe src={url} className="w-full h-128 rounded-md" />
                )}

                {view === "opengraph" && metadata && (
                    <div className="flex flex-col gap-4 ">
                        {metadata.title && <h2 className="text-xl font-semibold truncate">{metadata.title}</h2>}
                        {metadata.image ? (
                            <img
                                src={metadata.image}
                                alt={metadata.title || "Preview"}
                                className="w-full h-64 object-cover rounded-md no-3d"
                                onLoad={() => {
                                    setImageLoaded(true);
                                    onImageLoad?.();
                                }

                                }
                            />
                        ) : (
                            <div className="w-full h-64 flex flex-col-3 items-center justify-center text-gray-500 border rounded-md">
                                No se encontró imagen OpenGraph
                            </div>
                        )}
                        {metadata.description && <p className="text-gray-600">{metadata.description}</p>}

                    </div>
                )}
            </div>
            <button className="shadow-lg hover:scale-105 transition hover:shadow-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded -translate-y-8 translate-x-6 z-103 relative" onClick={() => window.open(url, "_blank")}>
                Visitar Sitio
            </button>
        </div>
    );
}