import { Check, AlertCircle } from "lucide-react";

export function FeatureGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors">
                <div className="mb-8">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Functionality</h3>
                    <p className="text-2xl font-light text-neutral-200">
                        Shows a “Pay” button. User pays SOL. Content unlocks instantly.
                    </p>
                </div>

                <div className="mt-auto">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">Use cases</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Creators", "Tools", "Dashboards", "Paid Content"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-neutral-400">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-2xl backdrop-blur-sm flex flex-col hover:border-white/20 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Powered by 402x Tech</h3>

                <div className="space-y-5">
                    <p className="text-neutral-300 font-light leading-relaxed">
                        <span className="text-white font-medium">HTTP 402: Payment Required.</span> We are finally realizing the missing standard of the web.
                        PayGate tokenizes access, allowing any digital interaction to be gated by a native Solana transaction.
                    </p>

                    <div className="pt-5 mt-auto border-t border-white/5 space-y-3">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-white">Programmable Access</span>
                                <span className="text-xs text-neutral-500">Code executes only when value transfers.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-white">Zero Intermediaries</span>
                                <span className="text-xs text-neutral-500">Peer-to-peer digital commerce.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Token Utility Card */}
            <div className="md:col-span-2 p-8 border border-white/10 bg-neutral-900/50 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4 max-w-xl">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2">$PG Token Utility</h3>
                        <h4 className="text-xl font-medium text-white">Powering the Protocol</h4>
                        <p className="text-neutral-300 font-light leading-relaxed">
                            $PG isn't just a token—it's your license to the PayGate infrastructure.
                            Holders get exclusive access to <strong>PayGate Pro</strong> features, priority support, and will be able to waive future platform fees.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Access</span>
                            <span className="text-sm font-medium text-white">Unlock Pro Features</span>
                        </div>
                        <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Fees</span>
                            <span className="text-sm font-medium text-white">0% Fee Model</span>
                        </div>
                        <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Status</span>
                            <span className="text-sm font-medium text-white">Verified Merchant</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
