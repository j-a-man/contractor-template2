"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowUpRight, ArrowDownRight } from "lucide-react";

const services = [
    {
        title: "Custom Cabinetry",
        slug: "custom-cabinetry",
        description: "Transform your storage with cabinetry that fits your lifestyle. From modern flat-panel kitchens to traditional shaker styles, we build and install custom units that maximize space and style.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        features: ["Kitchen & Bath Cabinetry", "Walk-in Closet Systems", "Mudroom Lockers", "Entertainment Centers"]
    },
    {
        title: "Deck Building",
        slug: "deck-building",
        description: "Extend your living area outdoors. We design and construct durable, safe, and beautiful decks using premium pressure-treated lumber or low-maintenance composite materials.",
        image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1470&auto=format&fit=crop",
        features: ["Composite & Wood Decking", "Multi-level Decks", "Pergolas & Covered Porches", "Railings & Stairs"]
    },
    {
        title: "Trim Work",
        slug: "trim-work",
        description: "The difference is in the details. Our precise trim work elevates any room, adding architectural interest and a refined finish to your home.",
        image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1470&auto=format&fit=crop",
        features: ["Crown Molding", "Wainscoting & Beadboard", "Coffered Ceilings", "Window & Door Casings"]
    },
    {
        title: "Flooring",
        slug: "flooring",
        description: "Ground your home with beautiful flooring. We handle everything from subfloor preparation to the flawless installation of solid wood or modern engineered planks.",
        image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
        features: ["Hardwood Installation", "LVP (Luxury Vinyl Plank)", "Laminate Flooring", "Subfloor Repair"]
    },
    {
        title: "Renovations",
        slug: "renovations",
        description: "Ready for a change? We manage complex renovation projects, ensuring structural integrity while delivering the fresh, modern aesthetic you envision.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        features: ["Full Home Remodels", "Basement Finishing", "Structural Modifications", "Project Management"]
    }
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#f5f5f5] min-h-screen text-[#0f0f0f]">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="border-b border-neutral-300 pb-12 mb-24">
                        <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-6">
                            Services
                        </h1>
                        <p className="text-neutral-600 max-w-2xl text-lg font-light leading-relaxed">
                            We bring veteran discipline and master craftsmanship to every aspect of residential carpentry.
                            From framing to fine finish work, we execute with precision.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {services.map((service, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}>
                                <div className="flex-1 w-full h-[400px] lg:h-[600px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#ff4d1c]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />
                                </div>
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#ff4d1c] font-mono text-xl">0{idx + 1}</span>
                                        <div className="h-[1px] w-12 bg-neutral-300"></div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-normal uppercase leading-tight">{service.title}</h2>
                                    <p className="text-neutral-600 text-lg leading-relaxed font-light">{service.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        {service.features.map(f => (
                                            <li key={f} className="flex items-center gap-3 text-neutral-600 font-light text-sm tracking-wide">
                                                <div className="w-1.5 h-1.5 bg-[#ff4d1c] rounded-full"></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6">
                                        <a href={`/services/${service.slug}`} className="inline-flex items-center gap-4 group/btn cursor-pointer">
                                            <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center group-hover/btn:bg-[#ff4d1c] group-hover/btn:border-[#ff4d1c] transition-all duration-300">
                                                <ArrowUpRight className="w-5 h-5 text-neutral-900 group-hover/btn:text-white transition-all duration-500 group-hover/btn:rotate-45" />
                                            </div>
                                            <span className="text-xs font-medium uppercase tracking-widest text-neutral-900 group-hover/btn:text-[#ff4d1c] transition-colors">Learn More</span>
                                        </a>
                                    </div>
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
