"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Check, MapPin, Calendar, User } from "lucide-react";

// Mock Data (Shared source of truth ideal later)
const projectData: Record<string, {
    title: string;
    location: string;
    year: string;
    role: string;
    description: string;
    mainImage: string;
    gallery: string[];
    challenge: string;
    solution: string;
}> = {
    "big-oaks-estate": {
        title: "Big Oaks Estate",
        location: "Marietta, GA",
        year: "2024",
        role: "Full Renovation",
        description: "A complete transformation of a historic Marietta estate. We restored the original charm while infusing modern luxury through custom millwork and structural updates.",
        mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2570&auto=format&fit=crop", // Corrected Main Image
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", // Added
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop", // Added
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop"  // Added
        ],
        challenge: "The property had suffered from years of neglect and inconsistent updates. The layout was closed off, and the original woodwork had been painted over multiple times.",
        solution: "We opened up the floor plan to create a flow suitable for modern living. We stripped and restored key architectural details and fabricated custom coffered ceilings to match the home's grandeur."
    },
    "marietta-kitchen-makeover": {
        title: "Marietta Kitchen Makeover",
        location: "East Cobb, GA",
        year: "2023",
        role: "Kitchen Remodel",
        description: "A chef's dream realized. We gutted the existing dated kitchen to build a functional, airy culinary space with custom cabinetry and professional-grade appliances.",
        mainImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1470&auto=format&fit=crop", // Added valid kitchen image
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1470&auto=format&fit=crop", // Added
            "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop"  // Added
        ],
        challenge: "The original kitchen was cramped with limited counter space and poor lighting, making it difficult for the homeowners to entertain.",
        solution: "We reconfigured the layout, removing a non-load-bearing wall to add a massive central island. Custom shaker cabinets provided ample storage, and under-cabinet lighting illuminated the new quartz countertops."
    },
    "custom-library-shelving": {
        title: "Custom Library Shelving",
        location: "Smyrna, GA",
        year: "2023",
        role: "Custom Joinery",
        description: "A scholar's sanctuary. We designed and built floor-to-ceiling walnut bookcases complete with a rolling ladder and integrated reading nooks.",
        mainImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop", // Added
            "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1470&auto=format&fit=crop", // Added
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1470&auto=format&fit=crop"  // Added
        ],
        challenge: "The client needed extensive storage for a growing book collection but wanted the room to feel warm and inviting, not cluttered.",
        solution: "We used rich walnut wood to create a warm atmosphere. The design included a mix of open shelving for books and closed cabinetry for files. A custom rolling ladder track was the functional centerpiece."
    }
};

export default function ProjectDetail() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projectData[slug];

    if (!project) {
        return (
            <div className="min-h-screen bg-[#f5f5f5] text-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/projects" className="text-[#ff4d1c] hover:underline">Return to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="bg-[#f5f5f5] min-h-screen text-neutral-900 pt-32 pb-24">

                {/* Header */}
                <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-12">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#ff4d1c] transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                    </Link>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase leading-none tracking-tighter mb-6">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-sm text-neutral-600 border-t border-neutral-300 pt-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#ff4d1c]" /> {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#ff4d1c]" /> {project.year}
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#ff4d1c]" /> {project.role}
                        </div>
                    </div>
                </div>

                {/* Main Image */}
                <div className="w-full h-[50vh] md:h-[70vh] relative mb-24 overflow-hidden">
                    <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content */}
                <div className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h3 className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4">The Challenge</h3>
                            <p className="text-neutral-600 text-lg leading-relaxed font-light">{project.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4">The Solution</h3>
                            <p className="text-neutral-600 text-lg leading-relaxed font-light">{project.solution}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="text-xl font-medium mb-4 text-[#0f0f0f]">Project Overview</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <Link href="/contact" className="inline-block w-full text-center bg-[#ff4d1c] hover:bg-[#c2410c] text-white py-3 rounded-lg uppercase tracking-widest text-xs font-medium transition-colors">
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mt-24">
                    <h3 className="text-2xl font-medium uppercase mb-8 text-[#0f0f0f]">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.gallery.map((img, i) => (
                            <div key={i} className="aspect-square relative overflow-hidden rounded-lg group shadow-sm">
                                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
