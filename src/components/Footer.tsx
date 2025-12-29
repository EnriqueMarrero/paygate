"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="mt-32 py-8 border-t border-white/5 bg-black text-center">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
                    <span>© VELOCITY_PROTOCOL // 2025</span>
                    <span className="h-2 w-px bg-white/10" />
                    <span>SOLANA_MAINNET_READY</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[9px] font-mono text-primary uppercase tracking-widest">System_Nominal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
