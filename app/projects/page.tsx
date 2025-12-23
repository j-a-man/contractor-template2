"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

// Data for Projects Section (Copied from Home)
const projects = [
    {
        id: "estate",
        slug: "big-oaks-estate",
        title: "Big Oaks Estate",
        description: "A full-scale renovation featuring custom coffered ceilings, hardwood flooring, and a wraparound deck.",
        mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2570&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: "kitchen",
        slug: "marietta-kitchen-makeover",
        title: "Marietta Kitchen Makeover",
        description: "Complete kitchen overhaul with custom shaker cabinets, quartz countertops, and a new island layout.",
        mainImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: "library",
        slug: "custom-library-shelving",
        title: "Custom Library Shelving",
        description: "Floor-to-ceiling built-in bookcases with integrated lighting and rolling ladder track.",
        mainImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop"
        ]
    }
];

export default function ProjectsPage() {
    const [expandedProjects, setExpandedProjects] = useState<string[]>(["estate"]);

    const toggleProject = (id: string) => {
        setExpandedProjects((prev) =>
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
        );
    };

    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#f5f5f5] min-h-screen text-[#0f0f0f]">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="border-b border-neutral-300 pb-12 mb-24">
                        <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Our Work</span>
                        <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-6">
                            Recent Projects
                        </h1>
                        <p className="text-neutral-600 max-w-2xl text-lg font-light leading-relaxed">
                            Explore our portfolio of custom renovations, cabinetry, and craftsmanship in Marietta.
                        </p>
                    </div>

                    <div className="flex flex-col border-t border-neutral-300">
                        {projects.map((project, idx) => {
                            const isExpanded = expandedProjects.includes(project.id);
                            return (
                                <div
                                    key={project.id}
                                    className={`border-b border-neutral-300 transition-all duration-500 ${isExpanded ? "py-12" : ""}`}
                                >
                                    <div
                                        className={`group py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer transition-all duration-500 ${isExpanded ? "-mx-6 px-6 md:-mx-12 md:px-12" : ""}`}
                                        onClick={() => toggleProject(project.id)}
                                    >
                                        <div className="flex items-center gap-6 flex-1">
                                            <span className={`text-sm font-mono ${isExpanded ? "text-[#ff4d1c]" : "text-neutral-400"}`}>0{idx + 1}</span>
                                            <h3 className={`font-light uppercase transition-all tracking-tight ${isExpanded ? "text-4xl md:text-6xl font-medium text-neutral-900" : "text-2xl md:text-4xl text-neutral-400 group-hover:text-black group-hover:font-normal"}`}>
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-8 self-end md:self-auto">
                                            <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-[#ff4d1c] text-white' : 'hover:bg-neutral-100 text-neutral-400'}`}>
                                                <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <div className={`-mx-6 px-6 md:-mx-12 md:px-12 pb-16`}>
                                            {/* Varied Grid Layouts */}
                                            <div className="pt-8 border-t border-neutral-200 mb-10">
                                                {idx % 3 === 0 && (
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="col-span-2 h-[400px] relative overflow-hidden rounded-lg group/img">
                                                            <img src={project.mainImage} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                                                        </div>
                                                        {project.gallery.slice(0, 2).map((url, i) => (
                                                            <div key={i} className="col-span-1 h-[300px] relative overflow-hidden rounded-lg group/img">
                                                                <img src={url} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {idx % 3 === 1 && (
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[600px] mb-24">
                                                        <div className="md:col-span-2 h-64 md:h-full relative overflow-hidden rounded-lg group/img">
                                                            <img src={project.mainImage} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                                                        </div>
                                                        <div className="flex flex-row md:flex-col gap-4 h-48 md:h-full">
                                                            {project.gallery.slice(0, 2).map((url, i) => (
                                                                <div key={i} className="flex-1 relative overflow-hidden rounded-lg group/img">
                                                                    <img src={url} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {idx % 3 === 2 && (
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="h-[400px] md:h-[500px] relative overflow-hidden rounded-lg group/img">
                                                            <img src={project.mainImage} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                                                        </div>
                                                        {project.gallery.slice(0, 2).map((url, i) => (
                                                            <div key={i} className="h-[400px] md:h-[500px] relative overflow-hidden rounded-lg group/img">
                                                                <img src={url} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Text Section at Bottom */}
                                            <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-12">
                                                <div className="flex-1 md:max-w-2xl space-y-8">
                                                    <p className="text-neutral-600 text-lg md:text-xl font-light leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                    <Link
                                                        href={`/projects/${project.slug}`}
                                                        className="flex items-center gap-4 group/link inline-block"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 group-hover/link:text-[#ff4d1c] transition-colors">See Case Study</span>
                                                        <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center group-hover/link:bg-[#ff4d1c] group-hover/link:border-[#ff4d1c] group-hover/link:text-white transition-all">
                                                            <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover/link:text-white transition-transform duration-300 group-hover/link:rotate-45" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="hidden md:flex flex-col gap-8 md:w-1/3">
                                                    <div className="space-y-4">
                                                        <h4 className="text-xs font-medium uppercase tracking-widest text-[#ff4d1c]">Project Type</h4>
                                                        <p className="text-neutral-600 font-light">Full Renovation, Custom Carpentry</p>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <h4 className="text-xs font-medium uppercase tracking-widest text-[#ff4d1c]">Location</h4>
                                                        <p className="text-neutral-600 font-light">Marietta, GA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
