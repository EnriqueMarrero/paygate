"use client";

import { X, ShieldCheck, Zap, Globe } from "lucide-react";

interface ProModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProModal({ isOpen, onClose }: ProModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose} />

            <div className="relative w-full max-w-lg bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-6 md:p-10">

                    <h2 className="text-3xl font-bold text-white mb-2">PayGate <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">PRO</span></h2>
                    <p className="text-lg text-neutral-400 font-light mb-8">
                        The infrastructure for the next generation of Web3 businesses.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 bg-white/5 rounded-xl h-fit">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Bank-Grade Security</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    Full backend verification and enterprise-level auditing.
                                    Move beyond frontend-only checks to secure high-value transactions.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="p-3 bg-white/5 rounded-xl h-fit">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Instant Fiat Settlement</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    Accept crypto, get paid in USD. Seamless on-ramps and off-ramps built directly into the flow.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="p-3 bg-white/5 rounded-xl h-fit">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Global Compliance</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    Automated tax handling and regulatory compliance.
                                    Stay compliant without compromising user privacy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/5">
                        <button
                            disabled
                            className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-neutral-400 font-medium cursor-not-allowed text-sm"
                        >
                            Coming Q1 2026
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
