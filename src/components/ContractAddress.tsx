"use client";

import { useState } from "react";
import { Copy, Check, Hash } from "lucide-react";

export function ContractAddress() {
    const [copied, setCopied] = useState(false);
    const CA = "GZvtCuPeMcYRaBMBm6wcxBPabV8tmj4TpduJBU3spump";

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[8px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
                <span>Asset_Type :: SPL_Token</span>
                <span className="text-primary/40">Status :: Verified</span>
            </div>

            <button
                onClick={handleCopy}
                className="group relative flex items-center justify-between gap-4 p-3 bg-black border border-white/5 hover:border-primary/30 transition-all rounded-sm industrial-border native-touch"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center industrial-border border-primary/20">
                        <span className="text-[10px] font-black text-primary">$V</span>
                    </div>
                    <div className="text-left">
                        <div className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest">Protocol_Asset</div>
                        <div className="text-[10px] font-mono font-bold text-white tracking-tighter">
                            {CA.slice(0, 8)}...{CA.slice(-8)}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 pl-4 border-l border-white/5">
                    {copied ? (
                        <div className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-[7px] font-mono text-emerald-400 uppercase tracking-tighter">Copied</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                            <Copy className="w-3 h-3 text-white" />
                            <span className="text-[7px] font-mono text-white uppercase tracking-tighter">Copy_ID</span>
                        </div>
                    )}
                </div>
            </button>
        </div>
    );
}
