"use client";

import Link from "next/link";
import { Menu, X, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { ProModal } from "./ProModal";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showProModal, setShowProModal] = useState(false);
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
                    <button
                        onClick={() => setShowProModal(true)}
                        className="text-[10px] font-mono text-neutral-400 hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                        <span className="text-primary/40">02_</span> Velocity+
                    </button>

                    <div className="h-4 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                        <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-[60px] bg-black z-40 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300">
                    <Link href="/docs" className="text-xl font-mono text-white uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-primary">01</span> Docs_
                    </Link>
                    <button
                        onClick={() => {
                            setShowProModal(true);
                            setMobileMenuOpen(false);
                        }}
                        className="text-xl font-mono text-white text-left uppercase tracking-widest"
                    >
                        <span className="text-primary">02</span> Velocity+
                    </button>
                    <div className="mt-auto flex gap-6">
                        <Twitter className="text-primary" />
                    </div>
                </div>
            )}

            <ProModal isOpen={showProModal} onClose={() => setShowProModal(false)} />
        </nav>
    );
}
