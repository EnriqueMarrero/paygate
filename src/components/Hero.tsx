import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <div className="relative p-6 md:p-12 border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
                    The first tokenized<br />
                    <span className="text-white/40">snippet on Solana.</span>
                </h1>
                <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-8 font-light">
                    PayGate brings native web payments to any site. Unlocking new possibilities with 402x technology.
                </p>

                <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] font-semibold text-sm"
                >
                    Read documentation <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
