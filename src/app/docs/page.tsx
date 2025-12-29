"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import {
    ArrowLeft,
    Download,
    Terminal,
    Shield,
    Zap,
    Cpu,
    FileCode,
    ChevronRight,
    Hash,
    Layers,
    Activity,
    Lock
} from "lucide-react";
import { useState } from "react";

const CHAPTERS = [
    { id: "01", title: "ENVIRONMENT_HANDSHAKE", icon: Shield },
    { id: "02", title: "RUNTIME_INTEGRATION", icon: Terminal },
    { id: "03", title: "CONTAINER_MOUNTING", icon: Layers },
    { id: "04", title: "AUTH_VERIFICATION", icon: Lock },
];

export default function Docs() {
    const [activeChapter, setActiveChapter] = useState("01");

    return (
        <main className="min-h-screen bg-black text-neutral-400 font-mono selection:bg-primary selection:text-black flex flex-col">
            <Navbar />

            {/* 3-Pane Workstation Layout */}
            <div className="flex-1 flex flex-col lg:flex-row pt-24 pb-12 px-6 max-w-[1600px] mx-auto w-full gap-px bg-white/5 border-x border-white/5">

                {/* Pane 01: System Navigation (Left) */}
                <aside className="w-full lg:w-72 bg-black/50 p-6 flex flex-col gap-8 order-2 lg:order-1">
                    <div className="space-y-2">
                        <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">System_Directory</div>
                        <div className="h-px bg-white/10 w-full" />
                    </div>

                    <nav className="space-y-4">
                        {CHAPTERS.map((chap) => (
                            <button
                                key={chap.id}
                                onClick={() => setActiveChapter(chap.id)}
                                className={`w-full flex items-center gap-3 p-3 text-[10px] uppercase tracking-widest transition-all industrial-border ${activeChapter === chap.id
                                        ? "bg-primary/10 text-primary border-primary/20"
                                        : "bg-transparent text-neutral-600 border-transparent hover:text-neutral-300"
                                    }`}
                            >
                                <span className="font-black opacity-40">{chap.id}</span>
                                <chap.icon className="w-3.5 h-3.5" />
                                <span className="flex-1 text-left">{chap.title}</span>
                                {activeChapter === chap.id && <ChevronRight className="w-3 h-3" />}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-white/5 space-y-4 opacity-30 pointer-events-none">
                        <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-emerald-500" />
                            <span className="text-[8px] uppercase tracking-widest">Link_Established</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[8px] uppercase tracking-widest">V2.0.4_STABLE</span>
                        </div>
                    </div>
                </aside>

                {/* Pane 02: Content Buffer (Center) */}
                <section className="flex-1 bg-black p-8 lg:p-12 overflow-y-auto order-1 lg:order-2">
                    <div className="max-w-3xl space-y-12">
                        {/* Dynamic Breadcrumb */}
                        <div className="flex items-center gap-2 text-[9px] text-neutral-600 uppercase tracking-widest">
                            <Link href="/" className="hover:text-primary transition-colors">ROOT</Link>
                            <ChevronRight className="w-2.5 h-2.5" />
                            <span className="text-primary/60">SRC</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                            <span>{CHAPTERS.find(c => c.id === activeChapter)?.title}</span>
                        </div>

                        {activeChapter === "01" && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                                    Environment_<span className="text-primary">Handshake</span>
                                </h1>
                                <p className="text-sm leading-relaxed uppercase opacity-80">
                                    Before initializing the VELOCITY protocol, the execution environment must meet specific security and connectivity benchmarks.
                                </p>
                                <div className="space-y-6">
                                    <div className="p-6 border border-white/5 bg-white/[0.02]">
                                        <div className="text-[10px] text-primary font-bold mb-4 flex items-center gap-2">
                                            <Hash className="w-3 h-3" /> REQ_BLOCK_01
                                        </div>
                                        <p className="text-xs uppercase leading-loose">
                                            Handshake occurs strictly over <span className="text-white underline">SSL/TLS</span> secure context. Local development requires local-cert verification for high-frequency testing.
                                        </p>
                                    </div>
                                    <div className="p-6 border border-white/5 bg-white/[0.02]">
                                        <div className="text-[10px] text-primary font-bold mb-4 flex items-center gap-2">
                                            <Hash className="w-3 h-3" /> REQ_BLOCK_02
                                        </div>
                                        <p className="text-xs uppercase leading-loose">
                                            Target browser must support <span className="text-white underline">EIP-1193</span> or <span className="text-white underline">SVM-Injection</span>. Currently verified on Phantom, Solflare, and Backpack clusters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeChapter === "02" && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                                    Runtime_<span className="text-primary">Integration</span>
                                </h1>
                                <p className="text-sm leading-relaxed uppercase opacity-80">
                                    VELOCITY is delivered as a lightweight runtime engine designed for sub-second latency.
                                </p>
                                <div className="space-y-6">
                                    <div className="p-6 border border-white/5 bg-black">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-[10px] text-primary font-bold flex items-center gap-2">
                                                <FileCode className="w-3 h-3" /> system_init.js
                                            </div>
                                        </div>
                                        <pre className="text-[11px] text-neutral-500 leading-relaxed overflow-x-auto">
                                            {`<script type="module">
  import { initVelocity } from "./velocity-engine.js";

  initVelocity({
    targetId: "access-trigger",
    vaultId: "secure-payload",
    to: "YOUR_SOL_ADDRESS",
    sol: 0.01
  });
</script>`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* More Chapters would follow the same pattern */}
                        {["03", "04"].includes(activeChapter) && (
                            <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                <Activity className="w-12 h-12 text-primary animate-pulse" />
                                <div className="text-[10px] uppercase tracking-[0.4em]">Section_Under_Development</div>
                                <div className="text-[8px] text-neutral-600">SEQ_ERR_404 :: DATA_BUFFER_EMPTY</div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Pane 03: Execution Preview (Right) */}
                <aside className="w-full lg:w-96 bg-black/30 p-8 flex flex-col gap-10 border-l border-white/5 order-3">
                    <div className="space-y-6">
                        <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">Protocol_Binaries</div>
                        <div className="p-6 industrial-border bg-primary/5 space-y-4">
                            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                <Download className="w-3.5 h-3.5" /> Stable_Build_V2
                            </h3>
                            <p className="text-[9px] text-neutral-500 uppercase leading-relaxed">
                                Core execution engine. Includes sub-second sync and automated handshake verification.
                            </p>
                            <a
                                href="/velocity-engine.js"
                                download
                                className="block w-full text-center py-3 bg-primary text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors"
                            >
                                Fetch_Binary
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">Network_Stats</div>
                        <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
                            <div className="bg-black p-4 space-y-1">
                                <div className="text-[8px] text-neutral-600 uppercase">Avg_Latency</div>
                                <div className="text-xs text-primary font-black uppercase tracking-tighter">401ms</div>
                            </div>
                            <div className="bg-black p-4 space-y-1">
                                <div className="text-[8px] text-neutral-600 uppercase">Hndsk_Succ</div>
                                <div className="text-xs text-primary font-black uppercase tracking-tighter">99.98%</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto space-y-4">
                        <div className="p-4 bg-primary/20 border border-primary/20 text-[9px] uppercase leading-relaxed text-primary">
                            <Zap className="w-3 h-3 mb-2 animate-pulse" />
                            Velocity Access is optimized for the SVM execution layer.
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </main>
    );
}
