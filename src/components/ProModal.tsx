"use client";

import { X, ShieldCheck, Zap, Globe, Cpu, LayoutGrid } from "lucide-react";

interface ProModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProModal({ isOpen, onClose }: ProModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-black border border-primary/20 industrial-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header Decor */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-primary transition-colors z-10"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12 space-y-10">
                    <div className="space-y-2">
                        <div className="text-[10px] font-mono text-primary font-black tracking-[0.4em] uppercase">Enterprise_Tier</div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            Velocity<span className="text-primary">+</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="p-3 border border-white/10 bg-white/5 h-fit group-hover:border-primary transition-colors">
                                    <Cpu className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Protocol_Nodes</h3>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase">Dedicated execution environment for high-frequency access layers.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="p-3 border border-white/10 bg-white/5 h-fit group-hover:border-primary transition-colors">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Zero_Knowledge_Auth</h3>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase">Cryptographically secure content gating via SPP-verified handshakes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="p-3 border border-white/10 bg-white/5 h-fit group-hover:border-primary transition-colors">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Sub_Block_Sync</h3>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase">Prioritized transaction propagation on Solana mainnet clusters.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="p-3 border border-white/10 bg-white/5 h-fit group-hover:border-primary transition-colors">
                                    <LayoutGrid className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Multi_Chain_Relay</h3>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase">Future-proof expansion to the broader SVM ecosystem.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                            Available_for_Deployment :: Q2_2025
                        </div>
                        <button
                            disabled
                            className="bg-white/5 border border-white/10 px-8 py-4 text-neutral-500 font-black text-[10px] uppercase tracking-[0.3em] cursor-not-allowed w-full md:w-auto"
                        >
                            ENLIST_IN_BETA_
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
