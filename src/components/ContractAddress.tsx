"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContractAddress() {
    const [copied, setCopied] = useState(false);
    const CA = "00000000000000000000000000000000"; // REPLACE WITH ACTUAL CA

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="group relative inline-flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all active:scale-[0.98]"
        >
            <div className="flex items-center gap-2 text-sm font-bold text-white tracking-wide">
                <span className="text-emerald-400">$PG</span>
                <span className="text-white/20">|</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span>CA: {CA.slice(0, 4)}...{CA.slice(-4)}</span>
            </div>

            <div className="pl-2 border-l border-white/10 text-neutral-500 group-hover:text-white">
                {copied ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                    <Copy className="w-3 h-3" />
                )}
            </div>
        </button>
    );
}
