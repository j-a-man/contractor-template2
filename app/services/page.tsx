"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowDownRight } from "lucide-react";

const services = [
    {
        title: "Custom Cabinetry & Built-ins",
        description: "Tailored storage solutions that maximize space and style. We build bespoke kitchen cabinets, entertainment centers, and closet systems.",
        image: "https://images.unsplash.com/photo-1556911220-e7188661858a?q=80&w=1600&auto=format&fit=crop",
        features: ["Kitchen & Bath Cabinetry", "Walk-in Closet Systems", "Mudroom Lockers", "Entertainment Centers"]
    },
    {
        title: "Deck Design & Construction",
        description: "Expand your living space outdoors with high-quality pressure-treated or composite decking tailored to your backyard.",
        image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1470&auto=format&fit=crop",
        features: ["Composite & Wood Decking", "Multi-level Decks", "Pergolas & Covered Porches", "Railings & Stairs"]
    },
    {
        title: "Finish Carpentry & Trim",
        description: "The details matter. We specialize in crown molding, wainscoting, and baseboards that add sophistication to any room.",
        image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1470&auto=format&fit=crop",
        features: ["Crown Molding", "Wainscoting & Beadboard", "Coffered Ceilings", "Window & Door Casings"]
    },
    {
        title: "Flooring Installation",
        description: "From subfloor repair to the final plank, we ensure your floors are solid, level, and beautiful.",
        image: "https://images.unsplash.com/photo-1581858726768-758a030e9048?q=80&w=1470&auto=format&fit=crop",
        features: ["Hardwood Installation", "LVP (Luxury Vinyl Plank)", "Laminate Flooring", "Subfloor Repair"]
    }
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#0f0f0f] min-h-screen text-white">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="border-b border-white/10 pb-12 mb-24">
                        <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-6">
                            Services
                        </h1>
                        <p className="text-neutral-400 max-w-2xl text-lg font-light leading-relaxed">
                            We bring veteran discipline and master craftsmanship to every aspect of residential carpentry.
                            From framing to fine finish work, we execute with precision.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {services.map((service, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}>
                                <div className="flex-1 w-full h-[400px] lg:h-[600px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#ff4d1c]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                                </div>
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#ff4d1c] font-mono text-xl">0{idx + 1}</span>
                                        <div className="h-[1px] w-12 bg-white/20"></div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-normal uppercase leading-tight">{service.title}</h2>
                                    <p className="text-neutral-400 text-lg leading-relaxed font-light">{service.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        {service.features.map(f => (
                                            <li key={f} className="flex items-center gap-3 text-neutral-300 font-light text-sm tracking-wide">
                                                <div className="w-1.5 h-1.5 bg-[#ff4d1c] rounded-full"></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
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
