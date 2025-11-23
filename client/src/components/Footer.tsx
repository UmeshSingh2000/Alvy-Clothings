export default function Footer() {
    return (
        <footer className="bg-[#0d0d0d] border-t border-[#1f1f1f] mt-16 py-12 px-6 max-w-[1800px] mx-auto">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
                {/* Brand Section */}
                <div>
                    <h2 className="text-xl font-semibold text-white tracking-wide">Alvy</h2>
                    <p className="mt-3 text-sm text-gray-400 max-w-xs">
                        Elevating fashion & branding with premium design, strategy, and digital experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-[#d3be63] cursor-pointer">About Us</li>
                        <li className="hover:text-[#d3be63] cursor-pointer">Shop</li>
                        <li className="hover:text-[#d3be63] cursor-pointer">Pages</li>
                        <li className="hover:text-[#d3be63] cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-[#d3be63] cursor-pointer">FAQ</li>
                        <li className="hover:text-[#d3be63] cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-[#d3be63] cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-[#d3be63] cursor-pointer">Returns & Refunds</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-3">Newsletter</h3>
                    <p className="text-sm text-gray-400">Stay updated with the latest trends & offers.</p>
                    <div className="mt-4 flex items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-[#1a1a1a] border border-[#333] text-sm text-gray-200 px-3 py-2 rounded-lg focus:outline-none"
                        />
                        <button className="bg-[#b9a44c] hover:bg-[#d3be63] text-black font-semibold px-4 py-2 rounded-lg text-sm">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#1f1f1f] mt-10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Alvy. All rights reserved.
            </div>
        </footer>
    );
}
