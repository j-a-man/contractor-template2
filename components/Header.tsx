"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu as MenuIcon, Instagram, Facebook, Mail, MessageSquare } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300">
                {/* Gradual Blur Background */}
                <div className="absolute top-0 left-0 right-0 h-32 z-[-1] bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"></div>

                {/* Left */}
                <button
                    onClick={toggleMenu}
                    className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#ff4d1c] transition-colors cursor-pointer text-white"
                >
                    <span className="block w-6 h-[1.5px] bg-white group-hover:bg-[#ff4d1c] transition-colors"></span>
                    Menu
                </button>

                {/* Center */}
                <div className="absolute left-1/2 -translate-x-1/2 font-medium tracking-[0.2em] text-sm uppercase select-none text-white">
                    <Link href="/">Crossworks</Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex flex-col items-end text-right">
                        <a href="tel:+17707140275" className="text-white text-sm font-medium hover:text-[#ff4d1c] transition-colors tracking-wide">
                            (770) 714-0275
                        </a>
                        <span className="text-white/50 text-[10px] uppercase tracking-widest">
                            Mon - Fri: 8am - 6pm
                        </span>
                    </div>
                    <Link
                        href="/contact"
                        className="bg-[#ff4d1c] hover:bg-[#c2410c] text-white text-xs font-medium px-4 py-2 md:px-6 md:py-3 rounded-full uppercase tracking-wider transition-transform hover:scale-105"
                        aria-label="Get a Quote"
                    >
                        <span className="md:hidden">Quote</span>
                        <span className="hidden md:inline">Get a Quote</span>
                    </Link>
                </div>
            </header>

            {/* Overlay Background */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={toggleMenu}
            />

            {/* Left Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-80 bg-[#0f0f0f] border-r border-white/10 z-[70] transform transition-transform duration-500 cubic-bezier(0.85, 0, 0.15, 1) flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-8 flex justify-between items-center border-b border-white/5">
                    <span className="text-white text-sm font-medium tracking-[0.2em] uppercase">Navigation</span>
                    <button
                        onClick={toggleMenu}
                        className="group p-2 hover:bg-white/5 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-white group-hover:text-[#ff4d1c] transition-colors" />
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-center px-8 gap-8">
                    <Link href="/" onClick={toggleMenu} className="text-3xl font-light uppercase hover:text-[#ff4d1c] hover:translate-x-2 transition-all text-white">Home</Link>
                    <Link href="/services" onClick={toggleMenu} className="text-3xl font-light uppercase hover:text-[#ff4d1c] hover:translate-x-2 transition-all text-white">Services</Link>
                    <Link href="/projects" onClick={toggleMenu} className="text-3xl font-light uppercase hover:text-[#ff4d1c] hover:translate-x-2 transition-all text-white">Projects</Link>
                    <Link href="/gallery" onClick={toggleMenu} className="text-3xl font-light uppercase hover:text-[#ff4d1c] hover:translate-x-2 transition-all text-white">Gallery</Link>
                    <Link href="/reviews" onClick={toggleMenu} className="text-3xl font-light uppercase hover:text-[#ff4d1c] hover:translate-x-2 transition-all text-white">Reviews</Link>
                    <Link href="/contact" onClick={toggleMenu} className="text-3xl font-light uppercase hover:text-[#ff4d1c] hover:translate-x-2 transition-all text-white">Contact</Link>
                </div>

                <div className="p-8 border-t border-white/5">
                    <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Follow Us</p>
                    <div className="flex gap-4 text-white">
                        <a href="#" className="hover:text-[#ff4d1c] transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-[#ff4d1c] transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="/contact" className="hover:text-[#ff4d1c] transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}
