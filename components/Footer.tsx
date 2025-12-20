import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 text-white">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="max-w-sm">
                    <p className="font-medium tracking-[0.2em] text-sm uppercase mb-6">
                        Strong Construction Services
                    </p>
                    <h3 className="text-2xl font-normal uppercase text-neutral-400 leading-tight">
                        Expert HVAC <br /> <span className="text-white">Solutions</span>
                    </h3>
                </div>

                <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-neutral-500">
                    <a href="/services" className="hover:text-white transition-colors">
                        Services
                    </a>
                    <a href="/gallery" className="hover:text-white transition-colors">
                        Gallery
                    </a>
                    <a
                        href="/reviews"
                        className="hover:text-white transition-colors"
                    >
                        Reviews
                    </a>
                    <a href="/contact" className="hover:text-white transition-colors">
                        Contact
                    </a>
                </div>

                <div className="flex gap-4">
                    {/* Local Business/Veteran Badges could go here */}
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/5 text-center md:text-right">
                <p className="text-[10px] text-neutral-600 uppercase tracking-wider">
                    © 2025 Strong Construction Services. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
