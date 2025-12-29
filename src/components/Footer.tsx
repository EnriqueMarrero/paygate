"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="mt-20 py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl text-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white mb-2">
                    <span>$PG</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/60 font-light">PayGate</span>
                </div>

                <p className="text-xs text-neutral-600 font-mono">
                    PayGate &copy; 2025-2026
                </p>
            </div>
        </footer>
    );
}
