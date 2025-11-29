"use client"
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export default function LoginPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()
    const [userData, setUserData] = useState({
        email: "",
        email_errorMessage: "",
        password: "",
        password_errorMessage: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    const clearErrorMessages = () => {
        setUserData((prev) => {
            return {
                ...prev,
                email_errorMessage: "",
                password_errorMessage: "",
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            setLoading(true);
            e.preventDefault();
            clearErrorMessages();
            const parsed = loginSchema.safeParse(userData);
            if (!parsed.success) {
                const IssueMap: Record<string, string> = {};
                parsed.error.issues.forEach((issue) => {
                    const fieldName = issue.path[0] as string;
                    IssueMap[fieldName] = issue.message;
                })
                setUserData((prev) => {
                    return {
                        ...prev,
                        email_errorMessage: IssueMap["email"] || "",
                        password_errorMessage: IssueMap["password"] || "",
                    }
                })
                return toast.error("Invalid input data. Please check the form for errors.");
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/auth/login`, {
                email: userData.email,
                password: userData.password
            })

            if (response.status === 200) {
                toast.success("Login successful! Welcome back.");
                setUserData({
                    email: "",
                    email_errorMessage: "",
                    password: "",
                    password_errorMessage: "",
                });
                router.push("/");
            }
        }
        catch (error:any) {
            console.error("Error during login:", error);
            const errorMessage = error.response?.data.message
            toast.error(errorMessage || "Login failed. Please try again.");
        }
        finally {
            setLoading(false);
        }
    }
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
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-gray-300 text-sm">Email</label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                    </div>
                    <span className="text-red-600">{userData.email_errorMessage}</span>

                    <div>
                        <label className="text-gray-300 text-sm">Password</label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                        <span className="text-red-600">{userData.password_errorMessage}</span>
                    </div>

                    <Button
                        className="w-full bg-[#b9a44c] hover:bg-[#d3be63] text-black font-semibold rounded-xl py-5 mt-4"
                    >
                        {loading ? "Logging in..." : "Login"}
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