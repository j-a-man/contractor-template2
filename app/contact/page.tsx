"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="pt-32 pb-24 px-6 md:px-12 bg-[#0f0f0f] min-h-screen text-white">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="text-[#ff4d1c] text-xs font-medium tracking-widest uppercase mb-4 block">Get In Touch</span>
                            <h1 className="text-5xl md:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-8">
                                Ready to <br /> Start?
                            </h1>
                            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
                                We are currently accepting new projects for the upcoming season. Reach out to schedule your consultation.
                            </p>
                        </div>

                        <div className="space-y-12 mt-16">
                            <div className="group">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-[#ff4d1c] transition-colors">Location</p>
                                <p className="text-2xl font-light">2555 Big Oaks Dr,<br /> Marietta, GA 30064</p>
                            </div>
                            <div className="group">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-[#ff4d1c] transition-colors">Contact</p>
                                <a href="tel:+17707140275" className="text-2xl font-light block hover:text-white transition-colors">+1 (770) 714-0275</a>
                                <a href="mailto:info@crossworks.com" className="text-2xl font-light block hover:text-white transition-colors">info@crossworkscarpentry.com</a>
                            </div>
                            <div className="group">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2 group-hover:text-[#ff4d1c] transition-colors">Hours</p>
                                <p className="text-xl font-light text-neutral-300">Mon-Fri: 8AM - 5PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#141414] p-8 md:p-12 border border-white/5 relative">
                        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#ff4d1c] -mt-2 -mr-2 hidden lg:block"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#ff4d1c] -mb-2 -ml-2 hidden lg:block"></div>

                        <h2 className="text-2xl font-light uppercase tracking-wide mb-8">Send us a message</h2>
                        <form className="space-y-8">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Name</label>
                                        <input type="text" className="w-full bg-[#0f0f0f] border-b border-white/10 px-0 py-3 text-white focus:border-[#ff4d1c] focus:outline-none transition-colors rounded-none placeholder:text-neutral-700" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Email</label>
                                        <input type="email" className="w-full bg-[#0f0f0f] border-b border-white/10 px-0 py-3 text-white focus:border-[#ff4d1c] focus:outline-none transition-colors rounded-none placeholder:text-neutral-700" placeholder="john@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Project Details</label>
                                <textarea rows={4} className="w-full bg-[#0f0f0f] border-b border-white/10 px-0 py-3 text-white focus:border-[#ff4d1c] focus:outline-none transition-colors rounded-none placeholder:text-neutral-700 resize-none" placeholder="Tell us about your vision..."></textarea>
                            </div>
                            <button className="group w-full bg-white text-black py-5 uppercase tracking-widest text-xs font-bold hover:bg-[#ff4d1c] hover:text-white transition-all flex items-center justify-center gap-2">
                                Send Request
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
