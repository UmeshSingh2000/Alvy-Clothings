"use client";

import { ShieldCheck, Truck, Undo2, Lock } from "lucide-react";

export default function BoxesSection() {
    return (
        <section className="max-w-[1800px] mx-auto w-full px-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1 */}
                <div className="bg-[#1c1c1c] h-52 flex flex-col justify-center text-white p-6 rounded-xl shadow-lg">
                    <ShieldCheck className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-semibold mb-2">PREMIUM QUALITY</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Experience high-grade fabrics, superior stitching, and long-lasting comfort.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1c1c1c] h-52 flex flex-col justify-center text-white p-6 rounded-xl shadow-lg">
                    <Truck className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-semibold mb-2">FAST SHIPPING</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Get your favorite outfits delivered quickly and safely to your doorstep.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1c1c1c] h-52 flex flex-col justify-center text-white p-6 rounded-xl shadow-lg">
                    <Undo2 className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-semibold mb-2">EASY RETURNS</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Shop confidently with hassle-free return and exchange policies.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#1c1c1c] h-52 flex flex-col justify-center text-white p-6 rounded-xl shadow-lg">
                    <Lock className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-xl font-semibold mb-2">SECURE PAYMENTS</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Your transactions are encrypted to ensure safe and smooth checkout.
                    </p>
                </div>

            </div>
        </section>
    );
}
