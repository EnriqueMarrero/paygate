"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { useState } from "react";
import { ProModal } from "./ProModal";

export function Navbar() {
    const [showProModal, setShowProModal] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between py-4 md:py-6 overflow-x-hidden">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <img src="/paygate.png" alt="PayGate" className="h-10 md:h-12 w-auto rounded-sm" />
                        <span className="font-mono text-sm tracking-wider font-bold text-white hidden md:block">PAYGATE</span>
                    </div>
                    <span className="text-xs text-muted-foreground hidden lg:inline-block">
                        frontend-only micropay unlock
                    </span>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
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

                    {/* PRO Button */}
                    <button
                        onClick={() => setShowProModal(true)}
                        className="group relative px-4 md:px-6 py-2 bg-gradient-to-r from-amber-200/10 via-yellow-400/10 to-amber-200/10 border border-yellow-500/30 hover:border-yellow-400/50 rounded-md transition-all overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent translate-x-[-100%] animate-shimmer" />
                        <span className="relative text-[10px] md:text-xs font-bold tracking-[0.2em] text-yellow-500 group-hover:text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                            PRO
                        </span>
                    </button>

                    <Link
                        href="/docs"
                        className="px-3 md:px-4 py-2 text-xs md:text-sm border border-white/10 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                    >
                        Docs
                    </Link>
                </div>
            </nav>

            <ProModal isOpen={showProModal} onClose={() => setShowProModal(false)} />
        </>
    );
}
