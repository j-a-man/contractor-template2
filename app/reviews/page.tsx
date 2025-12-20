"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote, ArrowUpRight } from "lucide-react";

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
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#0f0f0f] min-h-screen text-white">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-12 mb-16 gap-8">
                        <div>
                            <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Testimonials</span>
                            <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-6">Client Reviews</h1>
                            <p className="text-neutral-400 max-w-sm text-lg font-light">
                                See what our neighbors in Marietta are saying about Crossworks Carpentry.
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/search?q=Crossworks+Carpentry+marietta+ga+reviews"
                            target="_blank"
                            className="group flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-[#ff4d1c] hover:bg-[#ff4d1c] transition-all duration-300 rounded-full"
                        >
                            <span className="uppercase tracking-widest text-xs font-medium group-hover:text-white">Read on Google</span>
                            <ArrowUpRight className="w-4 h-4 text-[#ff4d1c] group-hover:text-white transition-colors" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {reviews.map((r, i) => (
                            <div key={i} className="bg-[#141414] p-10 border border-white/5 relative group hover:border-[#ff4d1c]/30 transition-colors">
                                <div className="flex gap-1 text-[#ff4d1c] mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light italic">
                                    "{r.text}"
                                </p>
                                <div className="flex justify-between items-center border-t border-white/5 pt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium uppercase">
                                            {r.name.charAt(0)}
                                        </div>
                                        <span className="font-medium text-sm ulppercase tracking-wide text-white">{r.name}</span>
                                    </div>
                                    <span className="text-xs text-neutral-600 uppercase tracking-widest">{r.date}</span>
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
