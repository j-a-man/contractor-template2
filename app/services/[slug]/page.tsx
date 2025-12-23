"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

// Data Source (Shared-ish)
const serviceData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    details: string;
}> = {
    "custom-cabinetry": {
        title: "Custom Cabinetry",
        subtitle: "Bespoke storage solutions",
        description: "Hand-crafted cabinetry designed to fit your space perfectly.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        features: ["Kitchen Cabinets", "Built-in Shelving", "Bathroom Vanities", "Mudroom Lockers"],
        details: "Our custom cabinetry service combines traditional joinery with modern design. We work with you to create functional, beautiful storage that enhances your home's value and your daily life."
    },
    "deck-building": {
        title: "Deck Building",
        subtitle: "Outdoor living excellence",
        description: "Durable, beautiful decks built for relaxation and entertainment.",
        image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1470&auto=format&fit=crop",
        features: ["Pressure Treated Wood", "Composite Decking", "Multi-level Designs", "Pergolas"],
        details: "Extend your living space into the outdoors. We build safe, code-compliant, and stunning decks that serve as the perfect backdrop for family gatherings and quiet mornings."
    },
    "trim-work": {
        title: "Trim Work",
        subtitle: "The finishing touch",
        description: "Exquisite molding and trim that adds character to any room.",
        image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1470&auto=format&fit=crop",
        features: ["Crown Molding", "Wainscoting", "Baseboards", "Coffered Ceilings"],
        details: "Trim work is what separates a house from a home. Our precision installation of crown molding, wainscoting, and casings adds a layer of sophistication and finished elegance."
    },
    "flooring": {
        title: "Flooring",
        subtitle: "Foundation of design",
        description: "Expert installation of hardwood, laminate, and vinyl flooring.",
        image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
        features: ["Solid Hardwood", "Engineered Wood", "Luxury Vinyl Plank", "Subfloor Repair"],
        details: "A beautiful floor sets the tone for the entire room. We prioritize proper subfloor preparation and precise installation techniques to ensure your new floors look great and last for years."
    },
    "renovations": {
        title: "Renovations",
        subtitle: "Transform your space",
        description: "Comprehensive remodeling services from concept to completion.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        features: ["Kitchen Remodels", "Bathroom Updates", "Basement Finishing", "Structural Changes"],
        details: "Whether it's a single room update or a whole-home renovation, we manage the entire process. We handle the framing, drywall, carpentry, and finishing touches to bring your vision to life."
    }
};

export default function ServiceDetail() {
    const params = useParams();
    const slug = params?.slug as string;
    const service = serviceData[slug];

    if (!service) {
        return (
            <div className="min-h-screen bg-[#f5f5f5] text-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/" className="text-[#ff4d1c] hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="bg-[#f5f5f5] min-h-screen text-neutral-900 pt-32 pb-24">
                {/* Hero-ish Header */}
                <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-16">
                    <Link href="/services" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#ff4d1c] transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
                    </Link>
                    <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase block mb-4">{service.subtitle}</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-none tracking-tighter mb-8 text-[#0f0f0f]">
                        {service.title}
                    </h1>
                </div>

                {/* Content Section */}
                <div className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                    </div>

                    {/* details */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-light mb-6 text-neutral-800">Overview</h2>
                            <p className="text-neutral-600 text-lg leading-relaxed font-light">
                                {service.details}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium uppercase tracking-wide mb-6">What We Offer</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-700 border border-neutral-200 p-4 rounded-lg hover:border-[#ff4d1c] transition-colors bg-white">
                                        <Check className="w-5 h-5 text-[#ff4d1c]" />
                                        <span className="text-sm font-light uppercase tracking-wider">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 border border-neutral-200 rounded-xl shadow-sm">
                            <h3 className="text-[#0f0f0f] text-xl font-medium mb-2">Ready to start?</h3>
                            <p className="text-neutral-500 text-sm mb-6">Let's discuss your {service.title.toLowerCase()} project today.</p>
                            <Link href="/contact" className="inline-block w-full text-center bg-[#ff4d1c] hover:bg-[#c2410c] text-white py-4 rounded-lg uppercase tracking-widest text-xs font-medium transition-colors">
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
