"use client"
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { z } from "zod";
import { useRouter } from "next/navigation";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})


export default function RegisterPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()
    const [userData, setUserData] = useState({
        email: "",
        email_errorMessage: "",
        password: "",
        password_errorMessage: "",
        confirmPassword: "",
        confirmPassword_errorMessage: "",
    })

    const clearErrorMessages = () => {
        setUserData((prev) => {
            return {
                ...prev,
                email_errorMessage: "",
                password_errorMessage: "",
                confirmPassword_errorMessage: "",
            }
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            setLoading(true);
            e.preventDefault();
            clearErrorMessages();
            const parsed = registerSchema.safeParse(userData);
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
                        confirmPassword_errorMessage: IssueMap["confirmPassword"] || "",
                    }
                })
                return toast.error("Invalid input data. Please check the form for errors.");
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/auth/register`, {
                email: userData.email,
                password: userData.password
            })
            if (response.status === 201) {
                toast.success("Registration successful! You can now log in.");
                router.push("/login");
                setUserData({
                    email: "",
                    email_errorMessage: "",
                    password: "",
                    password_errorMessage: "",
                    confirmPassword: "",
                    confirmPassword_errorMessage: "",
                });
            }
        }
        catch (error: any) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }



    return (
        <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-[#111] rounded-2xl p-8 shadow-lg border border-[#1f1f1f]"
            >
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white tracking-wide">Create Account</h1>
                    <p className="text-gray-400 text-sm mt-2">Join Alvy and start your fashion journey</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-gray-300 text-sm">Email</label>
                        <Input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                        <span className="text-red-600">{userData.email_errorMessage}</span>
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">Password</label>
                        <Input
                            name="password"
                            type="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                        <span className="text-red-600">{userData.password_errorMessage}</span>
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">Confirm Password</label>
                        <Input
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            className="mt-1 bg-[#1a1a1a] border-[#333] text-gray-200"
                        />
                        <span className="text-red-600">{userData.confirmPassword_errorMessage}</span>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#b9a44c] hover:bg-[#d3be63] text-black font-semibold rounded-xl py-5 mt-4"
                    >
                        {loading ? "Registering..." : "Register"}
                    </Button>
                </form>

                {/* Extras */}
                <div className="text-center mt-6">
                    <p className="text-gray-400 text-sm">
                        Already have an account? {" "}
                        <Link href="/login" className="text-[#d3be63] hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}