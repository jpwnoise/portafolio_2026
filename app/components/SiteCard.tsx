'use client';

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
        <div
            onClick={() => window.open(url, "_blank")}
            className="cursor-pointer"
        >
            {/* CARD */}
            <div className="card card-3d">

                {/* IMAGE */}
                {metadata?.image ? (
                    <img
                        src={metadata.image}
                        alt={metadata.title || "Preview"}
                        className="
              w-full 
              h-48 
              object-cover 
              rounded-md 
              flex-shrink-0
            "
                        onLoad={() => {
                            setImageLoaded(true);
                            onImageLoad?.();
                        }}
                    />
                ) : (
                    <div className="
            w-full 
            h-48 
            flex items-center justify-center 
            text-gray-500 
            border 
            rounded-md
          ">
                        Sin imagen
                    </div>
                )}

                {/* TEXT CONTENT */}
                <div className="flex flex-col flex-1 overflow-hidden mt-3">

                    {/* TITLE */}
                    <h2 className="
            text-lg 
            font-semibold 
            line-clamp-2
            text-gray-800
          ">
                        {metadata?.title || "Sin título"}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm line-clamp-5 mt-2 max-w-sm w-full"  >
                        {metadata?.description || "Sin descripción disponible"}
                    </p>

                </div>
            </div>

            {/* BUTTON */}
            <button onClick={(e) => { e.stopPropagation(); window.open(url, "_blank"); }}  className="card-button cta-animate"> Visitar Sitio </button>
        </div>
    );
}