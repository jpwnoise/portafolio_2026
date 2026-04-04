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
            <div className="
        bg-white 
        rounded-xl 
        p-4 
        w-full 
        h-[420px] 
        flex flex-col 
        border border-gray-300 
        shadow-md 
        hover:shadow-xl 
        hover:scale-[1.02]
        transition-all duration-300
        card-3d
        bg-gradient-to-r from-white to-gray-100
      ">

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
                    <p className="
            text-gray-600 
            text-sm 
            line-clamp-3 
            mt-2
          ">
                        {metadata?.description || "Sin descripción disponible"}
                    </p>

                </div>
            </div>

            {/* BUTTON */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // evita doble click
                    window.open(url, "_blank");
                }}
                className="
  relative
  -translate-y-8
  mx-auto
  block
  bg-blue-500 
  hover:bg-blue-700 
  text-white 
  font-bold 
  py-2 px-4 
  rounded-lg 
  shadow-lg 
  hover:shadow-xl 
  hover:scale-105 
  transition-all duration-300
  z-102
"
            >
                Visitar Sitio
            </button>
        </div>
    );
}