"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, MessageSquarePlus, Quote } from "lucide-react";

const reviews = [
    { name: "Sarah Jenkins", date: "2 months ago", text: "Mike and his team transformed our kitchen. The custom cabinets are stunning and the attention to detail is unmatched.", rating: 5 },
    { name: "David Rodgers", date: "1 month ago", text: "Professional, punctual, and clean. They built a beautiful deck for us that has become our favorite spot in the house.", rating: 5 },
    { name: "Amanda Lee", date: "5 months ago", text: "As a veteran myself, I appreciate the discipline Crossworks brings. The trim work they did was flawless.", rating: 5 },
    { name: "Robert K.", date: "3 weeks ago", text: "Highly recommend! Fair pricing and high quality work. Will definitely use them again for our bathroom remodel.", rating: 4 },
    { name: "Tom Wilson", date: "6 months ago", text: "Exceptional craftsmanship on our library shelving. The rolling ladder installation operates perfectly.", rating: 5 }
];

export default function ReviewCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // buffer
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Approx card width
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section className="bg-[#0f0f0f] py-24 border-t border-white/5">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-medium uppercase leading-tight text-white">
                            What Neighbors Say
                        </h2>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex gap-4 items-center">
                        {/* New Review Button */}
                        <Link
                            href="/review"
                            className="hidden md:flex items-center gap-2 px-6 py-3 mr-4 border border-white/10 hover:border-[#ff4d1c] hover:bg-[#ff4d1c] rounded-full transition-all group"
                        >
                            <span className="text-white text-xs uppercase tracking-widest font-medium">Leave a Review</span>
                            <MessageSquarePlus className="w-4 h-4 text-[#ff4d1c] group-hover:text-white transition-colors" />
                        </Link>

                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:border-[#ff4d1c] hover:text-[#ff4d1c] active:bg-[#ff4d1c] active:text-white text-white"}`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${!canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:border-[#ff4d1c] hover:text-[#ff4d1c] active:bg-[#ff4d1c] active:text-white text-white"}`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel Track */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {/* Review Cards */}
                    {reviews.map((r, i) => (
                        <div key={i} className="min-w-[350px] md:min-w-[450px] bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-white/5 shadow-sm snap-start flex flex-col justify-between group hover:border-[#ff4d1c]/30 transition-colors">
                            <div>
                                <div className="flex gap-1 text-[#ff4d1c] mb-6">
                                    {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <Quote className="w-8 h-8 text-neutral-700 mb-4" />
                                <p className="text-neutral-300 text-lg leading-relaxed font-light italic mb-8">
                                    "{r.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm text-white font-bold uppercase">
                                    {r.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{r.name}</p>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wide">{r.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Review Card - Updated for Dark Theme */}
                    <div className="min-w-[350px] md:min-w-[450px] bg-[#ff4d1c] p-8 md:p-10 rounded-xl shadow-lg snap-start flex flex-col justify-center items-center text-center group relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white">
                                <MessageSquarePlus className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-medium text-white uppercase tracking-tight">Have you worked with us?</h3>
                            <p className="text-white/80 font-light">Share your experience and help your neighbors find quality craftsmanship.</p>
                            <Link href="/review" className="inline-block bg-white text-[#ff4d1c] px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-neutral-100 transition-colors shadow-xl">
                                Leave a Review
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
