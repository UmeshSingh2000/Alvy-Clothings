"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="max-w-[1800px] mx-auto w-full px-4 mt-6">
            {/* Set fixed height here */}
            <div className="relative w-full h-[600px] rounded-md overflow-hidden">

                {/* Background Image (fills container height) */}
                <Image
                    src="/bohemian-8722478_1920.png"
                    alt="Fashion Branding"
                    fill          // ← THIS MAKES IMAGE FIT THE HEIGHT
                    priority
                    className="object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-14 text-white">

                    <h1 className="text-5xl md:text-8xl font-medium mb-4 leading-tight">
                        FASHION <br /> & BRANDING
                    </h1>

                    <p className="text-lg md:text-xl max-w-2xl mb-6">
                        Shop the latest trends in apparel, accessories, and statement pieces tailored for every occasion.
                    </p>

                    {/* Explore Button */}
                    <button
                        className="flex cursor-pointer items-center gap-2 bg-black/70 text-white px-5 py-2 rounded-full w-fit"
                    >
                        <ChevronDown size={20} />
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}
