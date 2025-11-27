export default function ContactCTA() {
    return (
        <section className="w-full max-w-[1500px] mx-auto px-4 py-10">
            <div className="bg-[#c8b65a] rounded-xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">

                {/* Left Text */}
                <div>
                    <p className="text-sm opacity-70 mb-1 text-black">Contact</p>
                    <h2 className="text-2xl sm:text-3xl text-black font-medium leading-snug">
                        Let’s make your fashion <br /> brand shine
                    </h2>
                </div>

                {/* Button */}
                <button className="mt-4 sm:mt-0 px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-[#1a1a1a] transition">
                    Get In Touch
                </button>

            </div>
        </section>
    );
}
