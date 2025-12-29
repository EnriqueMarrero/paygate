"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { ProModal } from "./ProModal";

export function Navbar() {
    const [showProModal, setShowProModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between py-4 md:py-6 relative z-50 bg-transparent">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <img src="/paygate.png" alt="PayGate" className="h-10 md:h-12 w-auto rounded-sm" />
                        <span className="font-mono text-sm tracking-wider font-bold text-white hidden md:block">PAYGATE</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center gap-3 pr-4 border-r border-white/10">
                        <a href="https://x.com/Paygatetools" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://github.com/paygatetools/Paygatetools" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                    </div>

                    {/* PRO Button (Visible on all) */}
                    <button
                        onClick={() => setShowProModal(true)}
                        className="group relative px-4 md:px-6 py-2 bg-gradient-to-r from-amber-200/10 via-yellow-400/10 to-amber-200/10 border border-yellow-500/30 hover:border-yellow-400/50 rounded-md transition-all overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent translate-x-[-100%] animate-shimmer" />
                        <span className="relative text-[10px] md:text-xs font-bold tracking-[0.2em] text-yellow-500 group-hover:text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                            PRO
                        </span>
                    </button>

                    {/* Desktop Docs Link */}
                    <Link
                        href="/docs"
                        className="hidden md:block px-3 md:px-4 py-2 text-xs md:text-sm border border-white/10 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                    >
                        Docs
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[72px] z-40 bg-black/95 backdrop-blur-3xl md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col p-6 space-y-6">
                        <Link
                            href="/docs"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <span className="text-lg font-medium text-white">Documentation</span>
                            <span className="opacity-50">→</span>
                        </Link>

                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="https://x.com/Paygatetools"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <span>Twitter</span>
                            </a>
                            <a
                                href="https://github.com/paygatetools/Paygatetools"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <ProModal isOpen={showProModal} onClose={() => setShowProModal(false)} />
        </>
    );
}
