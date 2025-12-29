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
import { Check } from "lucide-react";

const CHAPTERS = [
    { id: "00", title: "SYSTEM_OVERVIEW", icon: Activity },
    { id: "01", title: "ENVIRONMENT_HANDSHAKE", icon: Shield },
    { id: "02", title: "RUNTIME_INTEGRATION", icon: Terminal },
    { id: "03", title: "CONTAINER_MOUNTING", icon: Layers },
    { id: "04", title: "AUTH_VERIFICATION", icon: Lock },
];

function CodeFrame({ filename, code, language = "js" }: { filename: string, code: string, language?: string }) {
    const [copied, setCopied] = useState(false);
    const lines = code.trim().split("\n");

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(copied);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group flex flex-col industrial-border border-white/5 bg-black overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>
                    <div className="h-3 w-px bg-white/10 mx-1" />
                    <div className="flex items-center gap-2">
                        <FileCode className="w-3 h-3 text-primary/60" />
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">{filename}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 border border-primary/20">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <span className="text-[7px] font-mono text-primary uppercase font-black tracking-tighter">Handshake_Verified</span>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="text-neutral-500 hover:text-white transition-colors"
                    >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Download className="w-3 h-3" />}
                    </button>
                </div>
            </div>

            {/* Code Body */}
            <div className="flex overflow-x-auto selection:bg-primary/20">
                {/* Gutter */}
                <div className="flex flex-col py-4 px-3 bg-white/[0.01] border-r border-white/5 text-right select-none min-w-[40px]">
                    {lines.map((_, i) => (
                        <span key={i} className="text-[9px] font-mono text-neutral-700 leading-relaxed tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                    ))}
                </div>
                {/* Lines */}
                <pre className="flex-1 py-4 px-4 text-[10px] md:text-[11px] leading-relaxed text-neutral-400 font-mono">
                    {code.trim()}
                </pre>
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-1.5 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
                <div className="text-[7px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
                    Encoding :: UTF-8 // Port :: 443
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-primary/40 w-1/2 animate-shimmer" />
                    </div>
                    <span className="text-[7px] font-mono text-primary/40 uppercase">Ready</span>
                </div>
            </div>
        </div>
    );
}


export default function Docs() {
    const [activeChapter, setActiveChapter] = useState("00");

    return (
        <main className="min-h-screen bg-black text-neutral-400 font-mono selection:bg-primary selection:text-black flex flex-col">
            <Navbar />

            {/* 3-Pane Workstation Layout */}
            <div className="flex-1 flex flex-col lg:flex-row pt-24 lg:pt-24 pb-12 px-4 md:px-6 max-w-[1600px] mx-auto w-full gap-px bg-white/5 lg:border-x border-white/5">

                {/* Pane 01: System Navigation (Left) */}
                <aside className="w-full lg:w-72 bg-black/50 p-4 md:p-6 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 border-t lg:border-t-0 border-white/10">
                    <div className="space-y-2 hidden lg:block">
                        <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">System_Directory</div>
                        <div className="h-px bg-white/10 w-full" />
                    </div>

                    <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 md:gap-4 pb-4 lg:pb-0 scrollbar-hide">
                        {CHAPTERS.map((chap) => (
                            <button
                                key={chap.id}
                                onClick={() => setActiveChapter(chap.id)}
                                className={`flex-shrink-0 flex items-center gap-3 p-3 text-[10px] uppercase tracking-widest transition-all industrial-border ${activeChapter === chap.id
                                    ? "bg-primary/10 text-primary border-primary/20"
                                    : "bg-transparent text-neutral-600 border-transparent hover:text-neutral-300"
                                    }`}
                            >
                                <span className="font-black opacity-40">{chap.id}</span>
                                <chap.icon className="w-3.5 h-3.5" />
                                <span className="text-left whitespace-nowrap">{chap.title}</span>
                                {activeChapter === chap.id && <ChevronRight className="w-3 h-3 hidden lg:block" />}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-white/5 space-y-4 opacity-30 pointer-events-none hidden lg:block">
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
                <section className="flex-1 bg-black p-6 md:p-12 overflow-y-auto order-1 lg:order-2">
                    <div className="max-w-3xl space-y-8 md:space-y-12">
                        {/* Dynamic Breadcrumb */}
                        <div className="flex items-center gap-2 text-[9px] text-neutral-600 uppercase tracking-widest">
                            <Link href="/" className="hover:text-primary transition-colors">ROOT</Link>
                            <ChevronRight className="w-2.5 h-2.5" />
                            <span className="text-primary/60">SRC</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                            <span className="truncate">{CHAPTERS.find(c => c.id === activeChapter)?.title}</span>
                        </div>

                        {activeChapter === "00" && (
                            <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-6">
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                        System_<span className="text-primary">Overview</span>
                                    </h1>
                                    <p className="text-[10px] md:text-sm leading-relaxed uppercase opacity-80 border-l-2 border-primary/30 pl-4">
                                        Velocity is a sub-second access protocol designed to bridge digital assets and software permissions instantly.
                                        Think of it as a <span className="text-white">programmable key</span> that unlocks digital doors the moment a handshake is verified.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 industrial-border bg-white/[0.02] space-y-4">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Zap className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Core_Function</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">Software Unlocking</h3>
                                        <p className="text-[10px] text-neutral-500 uppercase leading-relaxed">
                                            Replace archaic login forms with sub-second handshakes. Users pay a micro-fee and instantly gain access to your SaaS, Premium Features, or Digital Content.
                                        </p>
                                    </div>

                                    <div className="p-6 industrial-border bg-white/[0.02] space-y-4">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Activity className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Protocol_Use</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">Gated Infrastructure</h3>
                                        <p className="text-[10px] text-neutral-500 uppercase leading-relaxed">
                                            Secure your APIs or Private Servers behind a Velocity layer. Only verified protocol participants can establish a connection, preventing bot spam and unauthorized usage.
                                        </p>
                                    </div>

                                    <div className="p-6 industrial-border bg-white/[0.02] space-y-4">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Layers className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Digital_Logistics</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">Dynamic Paywalls</h3>
                                        <p className="text-[10px] text-neutral-500 uppercase leading-relaxed">
                                            Implement pay-per-view or pay-per-buffer models with zero friction. Users unlock content one packet at a time without ever seeing a credit card form.
                                        </p>
                                    </div>

                                    <div className="p-6 industrial-border bg-primary/5 space-y-4 border-primary/20">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Shield className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Security_Standard</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">Handshake Verified</h3>
                                        <p className="text-[10px] text-primary/60 uppercase leading-relaxed font-black">
                                            Every transaction results in a cryptographically signed session key that your backend can verify in milliseconds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeChapter === "01" && (
                            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                    Environment_<span className="text-primary">Handshake</span>
                                </h1>
                                <p className="text-[10px] md:text-sm leading-relaxed uppercase opacity-80">
                                    Before initializing the VELOCITY protocol, the execution environment must meet specific security and connectivity benchmarks.
                                </p>
                                <div className="space-y-4 md:space-y-6">
                                    <div className="p-4 md:p-6 border border-white/5 bg-white/[0.02]">
                                        <div className="text-[10px] text-primary font-bold mb-3 md:mb-4 flex items-center gap-2">
                                            <Hash className="w-3 h-3" /> REQ_BLOCK_01
                                        </div>
                                        <p className="text-[10px] md:text-xs uppercase leading-loose">
                                            Handshake occurs strictly over <span className="text-white underline">SSL/TLS</span> secure context. Local development requires local-cert verification for high-frequency testing.
                                        </p>
                                    </div>
                                    <div className="p-4 md:p-6 border border-white/5 bg-white/[0.02]">
                                        <div className="text-[10px] text-primary font-bold mb-3 md:mb-4 flex items-center gap-2">
                                            <Hash className="w-3 h-3" /> REQ_BLOCK_02
                                        </div>
                                        <p className="text-[10px] md:text-xs uppercase leading-loose">
                                            Target browser must support <span className="text-white underline">EIP-1193</span> or <span className="text-white underline">SVM-Injection</span>. Currently verified on Phantom, Solflare, and Backpack clusters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeChapter === "02" && (
                            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                    Runtime_<span className="text-primary">Integration</span>
                                </h1>
                                <p className="text-[10px] md:text-sm leading-relaxed uppercase opacity-80">
                                    VELOCITY is delivered as a lightweight runtime engine designed for sub-second latency.
                                </p>
                                <div className="space-y-4 md:space-y-6">
                                    <CodeFrame
                                        filename="system_init.js"
                                        code={`<script type="module">
  import { initVelocity } from "./velocity-engine.js";

  initVelocity({
    targetId: "access-trigger",
    vaultId: "secure-payload",
    to: "YOUR_SOL_ADDRESS",
    sol: 0.01
  });
</script>`}
                                    />
                                </div>
                            </div>
                        )}

                        {/* More Chapters would follow the same pattern */}
                        {["03", "04"].includes(activeChapter) && (
                            <div className="py-12 md:py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                <Activity className="w-8 h-8 md:w-12 md:h-12 text-primary animate-pulse" />
                                <div className="text-[10px] uppercase tracking-[0.4em]">Section_Under_Development</div>
                                <div className="text-[8px] text-neutral-600">SEQ_ERR_404 :: DATA_BUFFER_EMPTY</div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Pane 03: Execution Preview (Right) */}
                <aside className="w-full lg:w-96 bg-black/30 p-6 md:p-8 flex flex-col gap-6 md:gap-10 lg:border-l border-white/5 order-3 border-t lg:border-t-0">
                    <div className="space-y-4 md:space-y-6">
                        <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">Protocol_Binaries</div>
                        <div className="p-4 md:p-6 industrial-border bg-primary/5 space-y-4">
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

                    <div className="space-y-4 md:space-y-6">
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

                    <div className="mt-auto space-y-4 hidden md:block">
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
