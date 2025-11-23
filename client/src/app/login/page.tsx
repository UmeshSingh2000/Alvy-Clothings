"use client"
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 max-w-[1800px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-[#111] rounded-2xl p-8 shadow-lg border border-[#1f1f1f]"
            >
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white tracking-wide">Welcome Back</h1>
                    <p className="text-gray-400 text-sm mt-2">Login to continue exploring Alvy Fashion</p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="text-gray-300 text-sm">Email</label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">Password</label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                    </div>

                    <Button
                        className="w-full bg-[#b9a44c] hover:bg-[#d3be63] text-black font-semibold rounded-xl py-5 mt-4"
                    >
                        Login
                    </Button>
                </form>

                {/* Extras */}
                <div className="text-center mt-6">
                    <p className="text-gray-400 text-sm">
                        Don't have an account? {" "}
                        <Link href="/register" className="text-[#d3be63] hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}