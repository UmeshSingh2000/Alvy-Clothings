"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const TransitionContext = createContext<any>(null);
export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({ children }: any) {
    const router = useRouter();
    const pathname = usePathname();

    const [exitAnimation, setExitAnimation] = useState(false);
    const [enterAnimation, setEnterAnimation] = useState(true);

    const startTransition = (url: string) => {
        setExitAnimation(true);

        setTimeout(() => {
            router.push(url);
        }, 800);
    };

    useEffect(() => {
        setExitAnimation(false);
        setEnterAnimation(true);

        const timeout = setTimeout(() => {
            setEnterAnimation(false);
        }, 800);

        return () => clearTimeout(timeout);
    }, [pathname]);

    const layerTransition = {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    };

    return (
        <TransitionContext.Provider value={{ startTransition }}>


            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>

            {/* EXIT Transition (Click navigation) */}
            <AnimatePresence>
                {exitAnimation && (
                    <>
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={layerTransition}
                            className="fixed top-0 left-0 w-full h-full bg-[#0e0e0e] z-9999"
                        />

                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{
                                ...layerTransition,
                                delay: 0.15,
                            }}
                            className="fixed top-0 left-0 w-full h-full bg-[#d2c26b] z-9998"
                        />
                    </>
                )}
            </AnimatePresence>

            {/* ENTER Transition (Back/Forward) */}
            <AnimatePresence>
                {enterAnimation && (
                    <>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: "100%" }}
                            transition={layerTransition}
                            className="fixed top-0 left-0 w-full h-full bg-[#0e0e0e] z-9999"
                        />

                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: "100%" }}
                            transition={{
                                ...layerTransition,
                                delay: 0.15,
                            }}
                            className="fixed top-0 left-0 w-full h-full bg-[#d2c26b] z-9998"
                        />
                    </>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
}
