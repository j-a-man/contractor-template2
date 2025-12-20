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
  Grid,
  Thermometer,
  Wind,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewFunnel from "@/components/ReviewFunnel";

// Data for Advantages Section
const advantages = [
  {
    id: "veteran",
    title: "Expert Technicians",
    icon: <Medal className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", // HVAC technicians / vent work
    description: "Our certified HVAC specialists are trained to handle any heating or cooling challenge with precision and care.",
  },
  {
    id: "precision",
    title: "Energy Efficient",
    icon: <Zap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop", // Smart home/AC unit
    description: "We install and maintain high-efficiency systems that lower your utility bills and keep your home comfortable.",
  },
  {
    id: "local",
    title: "Local Texas Business",
    icon: <MapPin className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1600596542815-bfad4c1539a9?q=80&w=2000&auto=format&fit=crop", // Beautiful Texas estate/house
    description: "Proudly serving our Texas community. We're your neighbors, and we stand behind our work with a satisfaction guarantee.",
  },
  {
    id: "satisfaction",
    title: "Satisfaction Guaranteed",
    icon: <Medal className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop", // Beautiful home exterior
    description: "We don't leave until you're happy. Our reputation relies on your satisfaction, and we stand behind the quality of our craftsmanship.",
  },
];

// Data for Services Section
const services = [
  {
    id: "ac",
    label: "AC Installation",
    tag: "01",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
    description: "Professional installation of high-performance air conditioning systems.",
    longDescription: "Beat the Texas heat with our top-tier AC installation services. We ensure your system is perfectly sized and installed for maximum efficiency.",
  },
  {
    id: "heating",
    label: "Heating Repair",
    tag: "02",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Heater/Furnace
    description: "Reliable heating repairs to keep you warm when it counts.",
    longDescription: "From furnace malfunctions to heat pump issues, our experts diagnose and fix problems quickly to restore your home's comfort.",
  },
  {
    id: "maintenance",
    label: "System Maintenance",
    tag: "03",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", // Technician inspecting
    description: "Regular maintenance plans to extend the life of your HVAC unit.",
    longDescription: "Prevent costly breakdowns with our comprehensive maintenance checks. We clean, inspect, and tune up your system for peak performance.",
  },
  {
    id: "commercial",
    label: "Commercial HVAC",
    tag: "04",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", // Commercial building/vents
    description: "Scalable HVAC solutions for businesses and office buildings.",
    longDescription: "We understand commercial needs. Our team delivers robust HVAC solutions that ensure a comfortable environment for your employees and customers.",
  },
];

// Data for Projects Section
const projects = [
  {
    id: "residential",
    title: "Residential AC Upgrade",
    description: "Complete system replacement for a 2,500 sq ft home, improving energy efficiency by 30%.",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop", // Beautiful modern house exterior
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop", // Modern interior
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop" // AC unit
    ]
  },
  {
    id: "commercial_install",
    title: "Commercial Office HVAC",
    description: "Installation of a multi-zone HVAC system for a new office complex in Dallas.",
    mainImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c54be3855091?q=80&w=1470&auto=format&fit=crop"
    ]
  },
  {
    id: "emergency",
    title: "Emergency Repair",
    description: "Rapid response repair for a failed heating system during a winter freeze.",
    mainImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export default function Home() {
  const [activeAdvantage, setActiveAdvantage] = useState(advantages[0]);
  const [activeService, setActiveService] = useState(services[0]);
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);
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
        <div className="relative z-10 px-6 md:px-12 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-4xl">
            <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              Strong Construction Services
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal uppercase leading-[0.9] tracking-tighter mb-8 text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Expert <br />
              <span className="text-neutral-500">HVAC Solutions</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              Reliable heating and cooling for Texas homes and businesses. Quality service, every time.
            </p>
          </div>

          <a
            href="#vision"
            className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-[#ff4d1c] rounded-full transition-transform hover:scale-110 hover:rotate-45"
          >
            <ArrowDownRight className="w-8 h-8 text-white stroke-[1.5]" />
          </a>
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
              className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
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
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

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
      <section className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-12 block">
            Our Services
          </span>

          <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-0 border-t border-b border-white/10">
            {/* Active Panel (Takes up space) */}
            <div className="flex-1 border-r border-white/10 p-8 md:p-12 flex flex-col justify-between relative group overflow-hidden">
              <div className="z-20 relative">
                <h3 className="text-3xl md:text-5xl font-medium uppercase leading-none tracking-tight mb-4 text-white">
                  {activeService.label}
                </h3>
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

          {/* Main Showcase (Big Oaks Estate) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-300 pb-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-normal uppercase tracking-tight">
              {projects[0].title}
            </h2>
            <div className="mt-6 md:mt-0 flex gap-6 items-center">
              <p className="text-xs md:text-sm text-neutral-500 max-w-xs text-right">
                {projects[0].description}
              </p>
              <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-[#ff4d1c] hover:border-[#ff4d1c] hover:text-white transition-all cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Static Grid for Big Oaks */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
            <div className="md:col-span-3 h-64 md:h-96 relative overflow-hidden group">
              <img src={projects[0].gallery[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:col-span-4 h-64 md:h-96 relative overflow-hidden mt-0 md:mt-12 group">
              <img src={projects[0].mainImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" />
            </div>
            <div className="md:col-span-5 h-64 md:h-96 relative overflow-hidden group">
              <img src={projects[0].gallery[1]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>


          {/* Expandable Project List */}
          <div className="flex flex-col border-t border-neutral-300">
            {projects.slice(1).map((project, idx) => {
              const isExpanded = expandedProjects.includes(project.id);
              return (
                <div key={project.id} className="border-b border-neutral-300">
                  <div
                    onClick={() => toggleProject(project.id)}
                    className="group py-10 flex justify-between items-center cursor-pointer"
                  >
                    <h3 className={`text-2xl md:text-4xl font-light uppercase transition-all tracking-tight ${isExpanded ? "text-black font-normal" : "text-neutral-400 group-hover:text-black group-hover:font-normal"}`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono text-neutral-400">0{idx + 2}</span>
                      <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#ff4d1c]" : ""}`} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[800px] pb-10" : "max-h-0"}`}>
                    <p className="text-neutral-500 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img src={project.mainImage} className="w-full h-64 object-cover rounded-sm" />
                      {project.gallery.map((url, i) => (
                        <img key={i} src={url} className="w-full h-64 object-cover rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="bg-[#f5f5f5] text-[#0f0f0f] pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Reuse existing FAQ HTML structure but maybe extract later */}
          <div className="text-center mb-16">
            <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-tight">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {["Do you offer free estimates?", "What areas do you serve?", "Are you licensed and insured?"].map((q, i) => (
              <details key={i} className="group border-b border-neutral-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer py-4 list-none">
                  <span className="text-lg md:text-xl font-light group-hover:text-[#ff4d1c] transition-colors">{q}</span>
                  <ChevronDown className="w-5 h-5 text-neutral-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="text-neutral-500 text-sm md:text-base leading-relaxed mt-2">
                  {i === 0 && "Yes, we provide free preliminary estimates for all residential projects in the Marietta area."}
                  {i === 1 && "We are based in Marietta, GA (30064) and serve the surrounding communities."}
                  {i === 2 && "Yes, Crossworks Carpentry is fully licensed and insured, ensuring peace of mind for every project."}
                </div>
              </details>
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

      <ReviewFunnel />
      <Footer />
    </>
  );
}
