"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export default function QuoteForm() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setFormStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <div className="w-full max-w-sm bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-2xl relative overflow-hidden group">
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff4d1c] rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>

            <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-1">Get a Free Quote</h3>
                <p className="text-white/50 text-xs mb-6 font-light">
                    Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium ml-1">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff4d1c]/50 focus:bg-white/10 transition-all font-light"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium ml-1">Phone</label>
                            <input
                                type="tel"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff4d1c]/50 focus:bg-white/10 transition-all font-light"
                                placeholder="(555) 000-0000"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium ml-1">Project</label>
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff4d1c]/50 focus:bg-white/10 transition-all font-light appearance-none"
                                defaultValue=""
                            >
                                <option value="" disabled className="bg-[#1a1a1a]">Type...</option>
                                <option value="deck" className="bg-[#1a1a1a]">Deck</option>
                                <option value="cabinetry" className="bg-[#1a1a1a]">Cabinetry</option>
                                <option value="remodel" className="bg-[#1a1a1a]">Remodel</option>
                                <option value="other" className="bg-[#1a1a1a]">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium ml-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff4d1c]/50 focus:bg-white/10 transition-all font-light"
                            placeholder="name@example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus !== "idle"}
                        className={`w-full group/btn relative overflow-hidden font-medium py-3 rounded-lg uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 mt-2 ${formStatus === "success"
                                ? "bg-green-500/90 text-white"
                                : "bg-[#ff4d1c] hover:bg-[#ff4d1c]/90 text-white"
                            }`}
                    >
                        <div className="relative z-10 flex items-center gap-2">
                            {formStatus === "submitting" ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : formStatus === "success" ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Sent!
                                </>
                            ) : (
                                <>
                                    Get Quote
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </>
                            )}
                        </div>
                        {/* Shine effect */}
                        {formStatus === 'idle' && (
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
