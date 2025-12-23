"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ShieldCheck,
  ArrowUpRight,
  ChevronDown,
  Hammer,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  Check,
  Star,
  User,
  Medal,
  Home as HomeIcon,
  Ruler,
  PaintBucket,
  Wrench,
  Grid
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import PromotionalPopup from "@/components/PromotionalPopup";
import ReviewCarousel from "@/components/ReviewCarousel";

// Data for Advantages Section
const advantages = [
  {
    id: "veteran",
    title: "Veteran Owned & Operated",
    icon: <Star className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Construction supervision
    description: "Built on the principles of military discipline and integrity. We bring precision, punctuality, and unwavering dedication to every project.",
  },
  {
    id: "licensed",
    title: "Licensed & Insured",
    icon: <ShieldCheck className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", // Planning/safety
    description: "Your peace of mind is paramount. Crossworks Carpentry is fully licensed in Georgia and carries comprehensive liability insurance.",
  },
  {
    id: "custom",
    title: "Custom Woodworking Logic",
    icon: <Ruler className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=2070&auto=format&fit=crop", // Detailed woodworking / drafting
    description: "No two homes are alike. We specialize in bespoke solutions, from intricate cabinetry to custom deck layouts designed for your specific space.",
  },
  {
    id: "local",
    title: "Marietta Local Business",
    icon: <MapPin className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop", // American Home / Neighborhood
    description: "We are your neighbors. Rooted in Marietta, we are committed to enhancing our local community one home at a time.",
  },
  {
    id: "satisfaction",
    title: "Satisfaction Guaranteed",
    icon: <Medal className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", // Handshake
    description: "We don't leave until you're happy. Our reputation relies on your satisfaction, and we stand behind the quality of our craftsmanship.",
  },
];

// Data for Services Section
const services = [
  {
    id: "cabinetry",
    slug: "custom-cabinetry",
    label: "Custom Cabinetry",
    tag: "01",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", // Reliable kitchen/cabinetry image
    description: "Bespoke kitchen and built-in solutions designed for your space.",
    longDescription: "Transform your storage with cabinetry that fits your lifestyle. From modern flat-panel kitchens to traditional shaker styles, we build and install custom units that maximize space and style.",
  },
  {
    id: "deck",
    slug: "deck-building",
    label: "Deck Building",
    tag: "02",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1470&auto=format&fit=crop",
    description: "Outdoor living spaces built for durability and relaxation.",
    longDescription: "Extend your living area outdoors. We design and construct durable, safe, and beautiful decks using premium pressure-treated lumber or low-maintenance composite materials.",
  },
  {
    id: "trim",
    slug: "trim-work",
    label: "Trim Work",
    tag: "03",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1470&auto=format&fit=crop",
    description: "Crown molding, wainscoting, and baseboards that add character.",
    longDescription: "The difference is in the details. Our precise trim work elevates any room, adding architectural interest and a refined finish to your home.",
  },
  {
    id: "flooring",
    slug: "flooring",
    label: "Flooring",
    tag: "04",
    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
    description: "Expert installation of hardwood, laminate, and luxury vinyl plank.",
    longDescription: "Ground your home with beautiful flooring. We handle everything from subfloor preparation to the flawless installation of solid wood or modern engineered planks.",
  },
  {
    id: "renovations",
    slug: "renovations",
    label: "Renovations",
    tag: "05",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    description: "Full-scale room remodels managing framing to finish.",
    longDescription: "Ready for a change? We manage complex renovation projects, ensuring structural integrity while delivering the fresh, modern aesthetic you envision.",
  },
];

// Data for Projects Section
const projects = [
  {
    id: "estate",
    slug: "big-oaks-estate",
    title: "Big Oaks Estate",
    description: "A full-scale renovation featuring custom coffered ceilings, hardwood flooring, and a wraparound deck.",
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2570&auto=format&fit=crop", // Luxury Modern Villa
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", // Detail
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop", // Pool
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop"  // Living Room
    ]
  },
  {
    id: "kitchen",
    slug: "marietta-kitchen-makeover",
    title: "Marietta Kitchen Makeover",
    description: "Complete kitchen overhaul with custom shaker cabinets, quartz countertops, and a new island layout.",
    mainImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1470&auto=format&fit=crop", // White/Blue Kitchen
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1470&auto=format&fit=crop", // Detail
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"  // New detail (Kitchen Sink/Faucet)
    ]
  },
  {
    id: "library",
    slug: "custom-library-shelving",
    title: "Custom Library Shelving",
    description: "Floor-to-ceiling built-in bookcases with integrated lighting and rolling ladder track.",
    mainImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop", // New Library Main (Modern Shelving)
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop", // Bookshelves
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop" // Old main image as gallery
    ]
  }
];

export default function Home() {
  // Fix types by avoiding implicit any
  const [activeAdvantage, setActiveAdvantage] = useState<typeof advantages[0]>(advantages[0]);
  const [activeService, setActiveService] = useState<typeof services[0]>(services[0]);
  const [expandedProjects, setExpandedProjects] = useState<string[]>(["estate"]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const activeAdvantageIndex = advantages.findIndex(a => a.id === activeAdvantage.id);

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      const form = e.target as HTMLFormElement;
      form.reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <>
      <Header />

      {/* 2. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
            alt="Woodworking Workshop"
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent"></div>
        </div>


        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12 pb-12">
          <div className="max-w-4xl pb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.9] tracking-tighter text-white mb-6">
              Mastering <br />
              The Craft<span className="text-[#ff4d1c]">.</span>
            </h1>
            <p className="text-neutral-300 text-sm md:text-base max-w-md font-light leading-relaxed">
              Precision carpentry and custom woodworking. Veteran-owned excellence bringing your home projects to life in Marietta, GA.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* 3. Vision / Quote Section */}
      <section id="vision" className="bg-[#f5f5f5] text-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-8 block">
            Our Promise
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-12">
            “At Crossworks Carpentry, we don't just build; we create lasting value through integrity, precision, and veteran discipline.”
          </h2>
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=200&h=200&auto=format&fit=crop" // New profile placeholder
              alt="Mike Gervais"
              className="w-16 h-16 rounded-full object-cover transition-all duration-500"
            />
            <div className="text-center">
              <p className="text-sm font-medium text-[#0f0f0f]">Mike Gervais</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">
                Owner & Master Carpenter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Advantages Section (Interactive) */}
      <section className="bg-[#f5f5f5] text-[#0f0f0f] pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left: List */}
          <div className="lg:col-span-4 flex flex-col pt-12">
            <p className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-8">
              Why Choose Crossworks
            </p>
            <div className="flex flex-col border-t border-neutral-300">
              {advantages.map((adv) => (
                <div
                  key={adv.id}
                  onClick={() => setActiveAdvantage(adv)}
                  className={`group py-6 border-b border-neutral-300 flex justify-between items-center cursor-pointer transition-all duration-300 ${activeAdvantage.id === adv.id ? "bg-neutral-100 -mx-4 px-4 shadow-sm" : "hover:pl-4"
                    }`}
                >
                  <span className={`text-xs md:text-sm uppercase ${activeAdvantage.id === adv.id ? "font-medium text-black" : "font-normal text-neutral-400 group-hover:text-black"}`}>
                    {adv.title}
                  </span>
                  <div className={`${activeAdvantage.id === adv.id ? "text-[#ff4d1c]" : "text-neutral-300 group-hover:text-black"}`}>
                    {adv.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image (Interactive) */}
          <div className="lg:col-span-8 relative group overflow-hidden h-[600px]">
            {advantages.map((adv) => (
              <img
                key={adv.id}
                src={adv.image}
                alt={adv.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeAdvantage.id === adv.id ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              />
            ))}
            {/* Added stronger gradient text overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-20"></div>

            <div className="absolute bottom-12 right-12 z-30 max-w-lg text-right">
              <h3 className="text-white text-3xl md:text-5xl font-medium uppercase leading-none tracking-tight mb-4 transition-all duration-500 key={activeAdvantage.id}">
                {activeAdvantage.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                {activeAdvantage.description}
              </p>
            </div>

            <div className="absolute top-12 left-12 w-auto h-16 px-6 border border-white/30 flex items-center justify-center backdrop-blur-md z-30">
              <span className="text-white text-xs font-mono tracking-widest uppercase">Est. Marietta, GA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Interactive) */}
      <section id="services" className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-12 block">
            Our Services
          </span>

          <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-0 border-t border-b border-white/10">
            {/* Active Panel (Takes up space) */}
            <div className="flex-1 border-r border-white/10 p-8 md:p-12 flex flex-col justify-between relative group overflow-hidden">
              <div className="z-20 relative flex justify-between items-start">
                <h3 className="text-3xl md:text-5xl font-medium uppercase leading-none tracking-tight mb-4 text-white">
                  {activeService.label}
                </h3>

                {/* Rotating Arrow Button */}
                <Link
                  href={`/services/${(activeService as any).slug}`}
                  className="flex items-center gap-4 group/btn"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-white/60 group-hover/btn:text-[#ff4d1c] transition-colors">
                    Learn More
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#ff4d1c] group-hover/btn:border-[#ff4d1c] group-hover/btn:text-white text-white/50 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-45" />
                  </div>
                </Link>
              </div>

              <div className="relative w-full h-64 mt-8 overflow-hidden z-10">
                {/* Image Transition Logic */}
                {services.map(s => (
                  <img
                    key={s.id}
                    src={s.image}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeService.id === s.id ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
                    alt={s.label}
                  />
                ))}
              </div>

              <div className="flex justify-between items-end mt-8 z-20 relative">
                <span className="text-white/40 text-sm font-mono">{activeService.tag}</span>
                <p className="text-xs text-white/60 max-w-[300px] text-right">
                  {activeService.longDescription}
                </p>
              </div>
            </div>

            {/* Selection Strips */}
            {services.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveService(item)}
                className={`w-full lg:w-20 ${index !== services.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                  } border-white/10 relative hover:bg-white/5 transition-colors cursor-pointer group flex lg:block justify-between items-center p-6 lg:p-0 ${activeService.id === item.id ? "bg-white/10" : ""}`}
              >
                <span className={`lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 font-mono text-sm ${activeService.id === item.id ? "text-[#ff4d1c]" : "text-white/40"}`}>
                  {item.tag}
                </span>
                <span className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap text-xs font-medium uppercase tracking-widest transition-colors ${activeService.id === item.id ? "text-white" : "text-neutral-500 group-hover:text-white"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Projects Section (Expandable) */}
      <section className="bg-[#f5f5f5] text-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-12 block">
            Recent Projects
          </span>

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
                        <div className="max-w-2xl">
                          <p className="text-neutral-600 text-lg md:text-xl font-light leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex items-center gap-4 group/link shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-xs font-medium uppercase tracking-widest text-neutral-900 group-hover/link:text-[#ff4d1c] transition-colors">See Case Study</span>
                          <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover/link:bg-[#ff4d1c] group-hover/link:border-[#ff4d1c] group-hover/link:text-white transition-all">
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/link:rotate-45" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ReviewCarousel />

      {/* 7. FAQ Section */}
      <section className="bg-[#f5f5f5] text-[#0f0f0f] pt-24 pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Reuse existing FAQ HTML structure but maybe extract later */}
          <div className="text-center mb-16">
            <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-tight">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {["Do you offer free estimates?", "What areas do you serve?", "Are you licensed and insured?"].map((q, i) => (
              <div key={i} className="border-b border-neutral-300">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className={`text-lg md:text-xl font-light transition-colors duration-300 ${openFaqIndex === i ? "text-[#ff4d1c]" : "text-[#0f0f0f] group-hover:text-[#ff4d1c]"}`}>
                    {q}
                  </span>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${openFaqIndex === i ? "bg-[#ff4d1c] text-white" : "bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200"}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ease-in-out ${openFaqIndex === i ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaqIndex === i ? "max-h-[200px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                    {i === 0 && "Yes, we provide free preliminary estimates for all residential projects in the Marietta area."}
                    {i === 1 && "We are based in Marietta, GA (30064) and serve the surrounding communities."}
                    {i === 2 && "Yes, Crossworks Carpentry is fully licensed and insured, ensuring peace of mind for every project."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Form Section */}
      <section id="contact" className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase leading-[0.9] tracking-tighter text-white mb-8">
                Let's Build <br /> Something <br /><span className="text-[#ff4d1c]">Great.</span>
              </h2>
              <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md">
                Ready to transform your home? Reach out to Mike and the team at Crossworks Carpentry today.
              </p>
            </div>
            <div className="space-y-6 mt-12 lg:mt-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c]"><MapPin className="w-4 h-4" /></div>
                <div><p className="text-xs text-neutral-500 uppercase tracking-widest">Address</p><span className="text-white">2555 Big Oaks Dr, Marietta, GA 30064</span></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c]"><Phone className="w-4 h-4" /></div>
                <div><p className="text-xs text-neutral-500 uppercase tracking-widest">Phone</p><span className="text-white">+1 (770) 714-0275</span></div>
              </div>
            </div>
          </div>

          {/* Simple Form container to keep layout */}
          <div className="bg-[#1a1a1a] p-8 md:p-10 border border-white/5 rounded-2xl shadow-2xl">
            <form onSubmit={handleForm} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Full Name</label>
                <input type="text" required className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all" placeholder="Mike Smith" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Email</label>
                <input type="email" required className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all" placeholder="mike@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Message</label>
                <textarea required rows={4} className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" disabled={formStatus !== 'idle'} className={`w-full font-medium py-4 rounded-lg uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 mt-4 ${formStatus === 'success' ? 'bg-green-600' : 'bg-[#ff4d1c] hover:bg-[#c2410c]'}`}>
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent' : 'Get Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <PromotionalPopup />
    </>
  );
}
