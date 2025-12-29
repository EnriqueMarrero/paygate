"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-primary/20 py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* Brand / Status */}
                <Link href="/" className="flex items-center gap-6 group">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary flex items-center justify-center font-mono font-black text-black text-[10px] industrial-border">
                            V
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.4em] font-black text-white uppercase group-hover:text-primary transition-colors">
                            VELOCITY_SYS
                        </span>
                    </div>
                    <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Network_Online</span>
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/docs" className="text-[10px] font-mono text-neutral-400 hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-2">
                        <span className="text-primary/40">01_</span> System_Docs
                    </Link>

                    <div className="h-4 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                        <a
                            href="https://x.com/VelocitySystem"
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors native-touch"
                        >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 native-touch"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-0 bg-black/95 backdrop-blur-xl z-50 p-8 flex flex-col animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary flex items-center justify-center font-mono font-black text-black text-[10px] industrial-border">
                                V
                            </div>
                            <span className="font-mono text-[10px] tracking-[0.4em] font-black text-white uppercase">VELOCITY_SYS</span>
                        </div>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 native-touch">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-8">
                        <Link
                            href="/"
                            className="text-2xl font-black font-mono text-white uppercase tracking-widest native-touch flex justify-between items-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span>00_ Home</span>
                            <span className="text-primary/20">{">>"}</span>
                        </Link>
                        <Link
                            href="/docs"
                            className="text-2xl font-black font-mono text-white uppercase tracking-widest native-touch flex justify-between items-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span>01_ Docs</span>
                            <span className="text-primary/20">{">>"}</span>
                        </Link>
                    </div>

                    <div className="mt-auto border-t border-white/10 pt-8 flex items-center justify-between">
                        <div className="flex gap-6">
                            <a
                                href="https://x.com/VelocitySystem"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:text-white transition-colors native-touch"
                            >
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                            Release_V2.0.4
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
