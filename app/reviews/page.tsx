"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote, ArrowUpRight, MessageSquarePlus } from "lucide-react";

// ... existing code ...



// Mock reviews for now, can be replaced by real ones
const reviews = [
    { name: "Sarah jenkins", date: "2 months ago", text: "Mike and his team transformed our kitchen. The custom cabinets are stunning and the attention to detail is unmatched." },
    { name: "David Rodgers", date: "1 month ago", text: "Professional, punctual, and clean. They built a beautiful deck for us that has become our favorite spot in the house." },
    { name: "Amanda Lee", date: "5 months ago", text: "As a veteran myself, I appreciate the discipline Crossworks brings. The trim work they did was flawless." },
    { name: "Robert K.", date: "3 weeks ago", text: "Highly recommend! Fair pricing and high quality work. Will definitely use them again for our bathroom remodel." }
];

export default function ReviewsPage() {
    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#f5f5f5] min-h-screen text-[#0f0f0f]">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-300 pb-12 mb-16 gap-8">
                        <div>
                            <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Testimonials</span>
                            <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-6">Client Reviews</h1>
                            <p className="text-neutral-600 max-w-sm text-lg font-light">
                                See what our neighbors in Marietta are saying about Crossworks Carpentry.
                            </p>
                        </div>

                        <Link
                            href="/review"
                            className="group flex items-center gap-3 px-8 py-4 border border-neutral-300 hover:border-[#ff4d1c] hover:bg-[#ff4d1c] transition-all duration-300 rounded-full"
                        >
                            <span className="uppercase tracking-widest text-xs font-medium text-neutral-900 group-hover:text-white">Leave a Review</span>
                            <MessageSquarePlus className="w-4 h-4 text-[#ff4d1c] group-hover:text-white transition-colors" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {reviews.map((r, i) => (
                            <div key={i} className="bg-white p-10 border border-neutral-200 relative group hover:border-[#ff4d1c] transition-colors shadow-sm">
                                <div className="flex gap-1 text-[#ff4d1c] mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-light italic">
                                    "{r.text}"
                                </p>
                                <div className="flex justify-between items-center border-t border-neutral-100 pt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs text-neutral-900 font-medium uppercase">
                                            {r.name.charAt(0)}
                                        </div>
                                        <span className="font-medium text-sm ulppercase tracking-wide text-neutral-900">{r.name}</span>
                                    </div>
                                    <span className="text-xs text-neutral-400 uppercase tracking-widest">{r.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
