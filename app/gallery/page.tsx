"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample images
const images = [
    "https://images.unsplash.com/photo-1600607687920-4e2b5f082d28?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556912173-3db9963f6bee?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
];

export default function GalleryPage() {
    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#0f0f0f] min-h-screen text-white">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="border-b border-white/10 pb-12 mb-16">
                        <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Selected Works</span>
                        <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-6">Project Gallery</h1>
                        <p className="text-neutral-400 max-w-2xl text-lg font-light">
                            A collection of our finest work in Marietta and beyond.
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((src, i) => (
                            <div key={i} className="break-inside-avoid relative group overflow-hidden">
                                <img src={src} className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt="Gallery Item" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>

                                {/* Hover info (Optional) */}
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[#ff4d1c] text-xs tracking-widest uppercase">Project 0{i + 1}</span>
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
