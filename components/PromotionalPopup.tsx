"use client";

import { useState, useEffect, useRef } from "react";
import { X, Loader2, ArrowRight } from "lucide-react";

export default function PromotionalPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
    const hasTriggered = useRef(false);

    useEffect(() => {
        // Show popup when mouse leaves the window (exit intent)
        const handleMouseLeave = (e: MouseEvent) => {
            if (!hasTriggered.current) {
                setIsOpen(true);
                hasTriggered.current = true;
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
            // Close modal after success message
            setTimeout(() => {
                setFormStatus("idle");
                handleClose();
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-700"
                onClick={handleClose}
            ></div>

            {/* Modal Card */}
            <div className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-700 ease-in-out">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-2">
                        Wait! Don't <span className="text-[#ff4d1c]">Miss Out!</span>
                    </h2>
                    <p className="text-neutral-400 text-sm font-light">
                        Get a <span className="text-white font-medium">FREE Estimate</span> for your custom wood-work before you go.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium ml-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff4d1c]/50 focus:ring-1 focus:ring-[#ff4d1c]/50 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium ml-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff4d1c]/50 focus:ring-1 focus:ring-[#ff4d1c]/50 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium ml-1">Project Details</label>
                        <textarea
                            required
                            rows={3}
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#ff4d1c]/50 focus:ring-1 focus:ring-[#ff4d1c]/50 transition-all resize-none"
                            placeholder="I'm interested in..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus !== "idle"}
                        className={`w-full font-medium py-3.5 rounded-lg uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 mt-4 ${formStatus === "success"
                            ? "bg-green-600 text-white"
                            : "bg-[#ff4d1c] hover:bg-[#ff4d1c]/90 text-white shadow-lg shadow-[#ff4d1c]/20"
                            }`}
                    >
                        {formStatus === "submitting" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Sending...
                            </>
                        ) : formStatus === "success" ? (
                            "Message Sent!"
                        ) : (
                            <>
                                Get My Free Quote
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
