import { Cpu, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export function FeatureGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden industrial-border">
            {/* 01: Protocol Layer */}
            <div className="p-8 space-y-4 bg-black group hover:bg-primary/[0.02] transition-colors">
                <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-primary font-black tracking-[0.3em]">PNL_01</div>
                    <Cpu className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Access Control</h3>
                <p className="text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-tight">
                    Native verification layer ensuring zero-latency handshake confirmation before data packet exposure.
                </p>
            </div>

            {/* 02: Execution Layer */}
            <div className="p-8 space-y-4 bg-black group hover:bg-primary/[0.02] transition-colors">
                <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-primary font-black tracking-[0.3em]">PNL_02</div>
                    <Zap className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Sub-Second Sync</h3>
                <p className="text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-tight">
                    Optimized RPC synchronization for sub-second confirmation on Solana mainnet and devnet environments.
                </p>
            </div>

            {/* 03: Security Layer */}
            <div className="p-8 space-y-4 bg-black group hover:bg-primary/[0.02] transition-colors">
                <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-primary font-black tracking-[0.3em]">PNL_03</div>
                    <ShieldCheck className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Hardened Hooks</h3>
                <p className="text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-tight">
                    Encrypted event hooks for secure callback execution once protocol handshake is verified as final.
                </p>
            </div>

            {/* 04: Token Ecosystem */}
            <div className="p-8 space-y-4 bg-primary/5 flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="text-[10px] font-mono text-primary font-black tracking-[0.3em]">CORE_ASSET</div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">$VEL Protocol</h3>
                    <p className="text-xs font-mono text-primary/60 leading-relaxed uppercase tracking-tight">
                        Powering high-frequency network access. Holders receive priority throughput and zero-latency tier status.
                    </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-primary/20 pt-4">
                    <div className="text-[9px] font-mono text-primary/40 uppercase">Utility_Status :: Active</div>
                    <ArrowRight className="w-4 h-4 text-primary" />
                </div>
            </div>
        </div>
    );
}
