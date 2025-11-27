// components/BrandOffers.jsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * BrandOffers
 * - Shows a vertical stack of brand/category cards
 * - Text (title & subtitle) is placed above each image area
 * - When a card comes into view it animates its background image from bottom -> top
 *
 * Note: replace image paths /mnt/data/... with your real hosted URLs when deploying.
 */

interface itemProps {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    height: number;
}

const categories = [
    {
        id: 1,
        title: "Streetwear Drop",
        subtitle: "Limited edition — summer collection",
        // local file (developer instruction). Replace with external URL in prod.
        image: "/shalom-ejiofor-t_prchAm4ag-unsplash.jpg",
        height: 320,
    },
    {
        id: 2,
        title: "Graphic Hoodies",
        subtitle: "Bold prints, cozy fit",
        image: "/waldemar-brandt-GbveIG8YKMk-unsplash.jpg",
        height: 320,
    },
    {
        id: 3,
        title: "Formal Wear",
        subtitle: "Sharp suits & blazers",
        image: "/waldemar-brandt-Db4d6MRIXJc-unsplash.jpg",
        height: 320,
    },
    {
        id: 4,
        title: "Denim Selection",
        subtitle: "Rugged, reliable, timeless",
        image: "/chichi-onyekanne-YeJUohMQfQ8-unsplash.jpg",
        height: 360,
    },
];

export default function BrandOffers({ list = categories }) {
    return (
        <section className="max-w-[1300px] mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                Selected Brands & Offers
            </h2>

            <div className="grid gap-6">
                {list.map((item) => (
                    <OfferCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

function OfferCard({ item }: { item: itemProps }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.4 }); // softer trigger

    /**
     * Subtle parallax animation:
     * Instead of 100% → 0%, we only move the background by 15%.
     */
    const initialStyle = { ["--bg-pos"]: "15%" };
    const animateStyle = inView ? { ["--bg-pos"]: "0%" } : { ["--bg-pos"]: "15%" };

    return (
        <div ref={ref} className="group">
            {/* Text above the image */}
            <div className="mb-2">
                <h3 className="text-lg sm:text-xl font-medium text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.subtitle}</p>
            </div>

            <motion.div
                initial={initialStyle}
                animate={animateStyle}
                transition={{ duration: 2, ease: "easeOut" }}  // slow + subtle
                style={{
                    backgroundImage: `url("${item.image}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center var(--bg-pos)", // subtle vertical shift
                }}
                className="rounded-lg overflow-hidden shadow-lg relative flex items-end"
            >
                <div
                    style={{ height: item.height }}
                    className="w-full"
                >
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute left-4 bottom-4 z-10">
                        <button className="px-3 py-1 text-sm bg-white/10 border border-white/20 backdrop-blur-sm text-white rounded-md hover:bg-white/20 transition">
                            Explore
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

