import Image from "next/image";

export default function FeaturesSection() {
    return (
        <section className="w-full max-w-[1800px] mx-auto px-4 py-20">

            {/* Grid wrapper with equal column height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                {/* Left Side (auto match full height) */}
                <div className="flex flex-col gap-6 h-full">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="bg-[#0f0f0f] rounded-2xl border border-[#1c1c1c] shadow-md p-6 flex-1 flex flex-col justify-center"
                        >
                            <h3 className="text-lg font-semibold mb-1">
                                {i === 1 && "Authentic Streetwear"}
                                {i === 2 && "Minimal. Bold. Timeless."}
                                {i === 3 && "Designed for Comfort"}
                                {i === 4 && "Made for Real People"}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                {i === 1 &&
                                    "Discover clothing that reflects raw individuality and modern culture with every piece."}
                                {i === 2 &&
                                    "Clean silhouettes, bold presence — crafted to elevate your everyday style effortlessly."}
                                {i === 3 &&
                                    "Soft fabrics, premium cuts, and all-day comfort tailored for real-world wear."}
                                {i === 4 &&
                                    "Our designs adapt to your lifestyle — versatile, durable, and made to move with you."}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right side (image fills entire height) */}
                <div className="rounded-2xl overflow-hidden h-full">
                    <Image
                        src="/coppertist-wu-OC98xGf89QA-unsplash.jpg"
                        alt="Product showcase"
                        width={1200}
                        height={1500}
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>

            </div>

        </section>
    );
}
