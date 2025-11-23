"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { usePageTransition } from "@/providers/transitionProvider";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const { startTransition } = usePageTransition();

    const isActive = (route: string) => pathname === route;

    const buttonClasses = (route: string) =>
        `w-28 py-5 rounded-[5px] ${isActive(route)
            ? "bg-[#444] opacity-60 cursor-not-allowed border border-[#d2c26b]"
            : "bg-[#222]"
        }`;

    return (
        <>
            <nav className="w-full py-4">
                <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-medium tracking-wide">
                        Alvy
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* ABOUT */}
                        <Button
                            className={buttonClasses("/about")}
                            disabled={isActive("/about")}
                            onClick={() => !isActive("/about") && startTransition("/about")}
                        >
                            About
                        </Button>

                        {/* SHOP */}
                        <Button
                            className={buttonClasses("/shop")}
                            disabled={isActive("/shop")}
                            onClick={() => !isActive("/shop") && startTransition("/shop")}
                        >
                            Shop
                        </Button>

                        {/* PAGES */}
                        <Button
                            className={buttonClasses("/pages")}
                            disabled={isActive("/pages")}
                            onClick={() => !isActive("/pages") && startTransition("/pages")}
                        >
                            Pages
                        </Button>

                        {/* Login */}
                        {
                            pathname.startsWith("/login") ? null :
                            <Button className="bg-[#d2c26b] rounded-[5px] text-black font-light px-6 py-5 text-base hover:bg-[#e7d988]"
                                onClick={() => startTransition("/login")}
                            >
                                Login/Register
                            </Button>
                        }

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="p-2 bg-[#1b1c1c] rounded-lg hover:bg-[#2a2b2b] transition"
                        >
                            <ShoppingCart size={20} />
                        </Link>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <button className="md:hidden" onClick={() => setOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="fixed top-0 left-0 w-full h-full backdrop-blur-xl z-50 p-6 shadow-2xl"
                    >
                        {/* Close button */}
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex items-center justify-center flex-col gap-5">
                            <Link href="/" className="text-3xl font-medium tracking-wide">
                                Alvy
                            </Link>

                            <div className="flex flex-col gap-6 text-lg">

                                {/* ABOUT */}
                                <Button
                                    className={buttonClasses("/about")}
                                    disabled={isActive("/about")}
                                    onClick={() => {
                                        if (!isActive("/about")) startTransition("/about");
                                        setOpen(false);
                                    }}
                                >
                                    About
                                </Button>

                                {/* SHOP */}
                                <Button
                                    className={buttonClasses("/shop")}
                                    disabled={isActive("/shop")}
                                    onClick={() => {
                                        if (!isActive("/shop")) startTransition("/shop");
                                        setOpen(false);
                                    }}
                                >
                                    Shop
                                </Button>

                                {/* PAGES */}
                                <Button
                                    className={buttonClasses("/pages")}
                                    disabled={isActive("/pages")}
                                    onClick={() => {
                                        if (!isActive("/pages")) startTransition("/pages");
                                        setOpen(false);
                                    }}
                                >
                                    Pages
                                </Button>

                                {/* Login */}
                                <Button className="bg-[#d2c26b] rounded-[5px] text-black font-light px-6 py-5 text-base hover:bg-[#e7d988]">
                                    Login/Register
                                </Button>

                                {/* Cart */}
                                <Link
                                    href="/cart"
                                    onClick={() => setOpen(false)}
                                    className="p-2 bg-[#1b1c1c] rounded-lg hover:bg-[#2a2b2b] transition w-fit"
                                >
                                    <ShoppingCart size={22} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
