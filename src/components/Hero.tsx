import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/5 bg-black rounded-sm overflow-hidden industrial-border h-full">
            {/* Left: System Log / Data */}
            <div className="lg:col-span-8 p-6 md:p-12 space-y-8 border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-primary/50 uppercase tracking-[0.3em]">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        System Initialization :: Active
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                        Instant<br />
                        <span className="text-primary font-black uppercase">Access.</span>
                    </h1>
                </div>

                <div className="max-w-md space-y-6">
                    <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed font-mono uppercase tracking-tight">
                        VELOCITY: High-throughput access layer. <br />
                        Optimized for sub-second handshake verification on the Solana network.
                    </p>

                    <div className="p-4 bg-primary/5 border-l-2 border-primary space-y-2">
                        <div className="text-[9px] font-mono text-primary font-black tracking-widest uppercase">Value_Prop :: Instant_Income</div>
                        <p className="text-[11px] text-neutral-400 font-mono uppercase leading-relaxed tracking-tight">
                            Stop losing sales to slow checkouts. Velocity is the world&apos;s fastest way to sell digital access. No credit cards, no long forms—just one click and your customer is in.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="/docs"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-black hover:bg-white transition-all font-black text-[10px] uppercase tracking-[0.2em]"
                        >
                            Initialize System_
                        </Link>
                        <div className="px-6 py-3 border border-white/10 text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] hidden sm:block">
                            Ver: 2.0.4-Stable
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Abstract Visual / Branding */}
            <div className="lg:col-span-4 bg-primary/5 p-8 flex flex-col justify-between items-center relative overflow-hidden min-h-[200px] lg:min-h-0">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10" />
                </div>

                <div className="lg:writing-vertical-rl text-5xl md:text-7xl lg:text-9xl font-black text-white/[0.03] lg:text-white/5 select-none tracking-widest mt-auto mb-auto uppercase">
                    VELOCITY
                </div>

                <div className="mt-auto w-full space-y-1">
                    <div className="h-0.5 w-full bg-primary/20" />
                    <div className="h-0.5 w-2/3 bg-primary/40" />
                    <div className="h-0.5 w-1/3 bg-primary/60" />
                </div>
            </div>
        </div>
    );
}
