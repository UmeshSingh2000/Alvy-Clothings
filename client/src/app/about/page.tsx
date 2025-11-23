"use client";
import Image from "next/image";

const AboutPage = () => {
    return (
        <section className="w-full max-w-[1800px] min-h-screen text-white px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-14 mx-auto">

            {/* LEFT IMAGE */}
            <div className="w-full lg:w-1/2">
                <Image
                    src="/justin-buisson-JU5_bUxr5Rg-unsplash.jpg"
                    alt="About Image"
                    width={800}
                    height={1000}
                    className="rounded-xl object-cover w-full h-full"
                />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-1/2 space-y-6">

                <p className="uppercase tracking-widest text-gray-400">About</p>

                <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                    Designed for the Bold. <br /> Built for the Modern Era.
                </h1>

                <p className="text-gray-300 leading-relaxed text-lg">
                    Alvy represents a new wave of fashion — bold silhouettes, refined details, and styles that speak for themselves.
                    Our collections are crafted for individuals who value uniqueness, quality, and expression.
                    Each piece is thoughtfully designed using premium materials and precise tailoring to ensure comfort, durability, and elevated aesthetics.
                    <br />
                    At Alvy, fashion isn’t just worn — <span className="bg-amber-300 text-black px-2">it’s lived.</span>
                </p>
            </div>

        </section>
    );
};

export default AboutPage;
