'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import FeaturedCard from "./FeaturedCard";

// --- MAIN COMPONENT ---
const FeaturedCarousel = forwardRef(({ className, features }, ref) => {
    const scrollContainerRef = useRef(null);

    const [isScrollable, setIsScrollable] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    // Function to handle scrolling
    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Check scroll state on mount and resize
    const checkScrollState = useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const scrollable = el.scrollWidth > el.clientWidth;
        setIsScrollable(scrollable);
        setIsAtStart(el.scrollLeft === 0);
        setIsAtEnd(Math.abs(el.scrollWidth - el.scrollLeft - el.clientWidth) < 1);
    }, []);

    useEffect(() => {
        checkScrollState();
        const el = scrollContainerRef.current;
        el?.addEventListener("scroll", checkScrollState);
        window.addEventListener("resize", checkScrollState);

        return () => {
            el?.removeEventListener("scroll", checkScrollState);
            window.removeEventListener("resize", checkScrollState);
        };
    }, [checkScrollState]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className={cn("relative w-full space-y-4 py-8", className)} ref={ref}>
            <div className="relative">
                {/* Product List */}
                <motion.div
                    ref={scrollContainerRef}
                    className="scrollbar-hide flex space-x-4 overflow-x-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {
                        features.map((destination) => (
                            <FeaturedCard key={destination._id} destination={destination} />
                        ))
                    }
                </motion.div>

                {/* Navigation Controls */}
                {isScrollable && (
                    <>
                        {/* Left Button */}
                        <button
                            onClick={() => handleScroll("left")}
                            disabled={isAtStart}
                            aria-label="Scroll left"
                            className={cn(
                                "absolute left-0 top-1/3 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-md transition-opacity duration-300 disabled:opacity-0",
                                "hover:bg-accent focus:outline-none cursor-pointer"
                            )}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        {/* Right Button */}
                        <button
                            onClick={() => handleScroll("right")}
                            disabled={isAtEnd}
                            aria-label="Scroll right"
                            className={cn(
                                "absolute right-0 top-1/3 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-md transition-opacity duration-300 disabled:opacity-0",
                                "hover:bg-accent focus:outline-none cursor-pointer"
                            )}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}
);


export default FeaturedCarousel;