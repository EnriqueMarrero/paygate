"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, Terminal, Cpu, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function VelocityVault() {
    const [status, setStatus] = useState<string>("SYSTEM_IDLE");
    const [loading, setLoading] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (loading) {
            const sequence = [
                "SCANNING_LOCAL_BUFFER...",
                "INJECTING_SKEW_CORRECTION...",
                "SYNC_ESTABLISHED :: PORT_443",
                "K_EXCHANGE_INITIATED...",
                "LATENCY_CHECK :: 42ms",
                "VERIFYING_HANDSHAKE_HASH...",
                "PROTOCOL_FINALIZED"
            ];

            let i = 0;
            const interval = setInterval(() => {
                if (i < sequence.length) {
                    setLogs(prev => [...prev, sequence[i]]);
                    setStatus(sequence[i]);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setUnlocked(true);
                        setLoading(false);
                    }, 800);
                }
            }, 600);

            return () => clearInterval(interval);
        }
    }, [loading]);

    const startSync = () => {
        setLoading(true);
        setLogs([]);
    };

    if (unlocked) {
        return (
            <div className="industrial-border bg-black p-8 animate-in fade-in duration-700 h-full flex flex-col justify-center">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 border-2 border-primary flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Sync_Complete</h3>
                        <p className="text-[10px] font-mono text-primary uppercase tracking-widest">Access_Layer_Stabilized</p>
                    </div>

                    <div className="w-full bg-primary/5 border border-primary/20 p-6 rounded-sm">
                        <pre className="text-[10px] text-left text-primary/80 font-mono leading-relaxed">
                            {`// HANDSHAKE_FINAL
{
  status: "verified",
  session_id: "VX_${Math.random().toString(36).substring(7).toUpperCase()}",
  throughput: "unlimited",
  latency: "sub-1ms"
}`}
                        </pre>
                    </div>

                    <button
                        onClick={() => setUnlocked(false)}
                        className="text-[9px] font-mono text-neutral-500 uppercase hover:text-white transition-colors"
                    >
                        [ RESET_LINK ]
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative industrial-border bg-black overflow-hidden h-full min-h-[450px] flex flex-col">
            {/* Header / Decoder */}
            <div className="p-6 border-b border-white/5">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-white/40">Core::Synchronizer</h2>
                        <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full", loading ? "bg-primary animate-ping" : "bg-white/10")} />
                            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                                {loading ? "LINK_NEGOTIATION" : "STANDBY"}
                            </span>
                        </div>
                    </div>
                    <Cpu className="w-4 h-4 text-neutral-800" />
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-8">
                {loading ? (
                    <div className="w-full space-y-3 font-mono">
                        {logs.map((log, i) => (
                            <div key={i} className="text-[9px] text-primary/60 uppercase tracking-tighter animate-in slide-in-from-left duration-300">
                                <span className="opacity-30 mr-2 text-[7px]">{`>>`}</span> {log}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6 flex flex-col items-center">
                        <div className="w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <p className="text-[10px] md:text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-tight max-w-[280px]">
                            Protocol link required for secure dashboard integration. Establish a sub-second sync to bridge the SVM access layer.
                        </p>
                        <div className="w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                )}

                {!loading && (
                    <button
                        onClick={startSync}
                        className="group relative w-full max-w-xs overflow-hidden bg-primary px-8 py-4 text-black transition-all hover:bg-white active:translate-y-px font-black text-[10px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                    >
                        <span className="flex items-center justify-center gap-3">
                            <Zap className="w-4 h-4" />
                            Initialize_Handshake_0.1
                        </span>
                    </button>
                )}
            </div>

            {/* Status Footer */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={cn("w-1 h-1 rounded-full", loading ? "bg-primary animate-pulse" : "bg-neutral-800")} />
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">{status}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Activity className="w-3 h-3 text-neutral-800" />
                    <span className="text-[9px] font-mono text-neutral-700 uppercase">SYS_SECURE</span>
                </div>
            </div>
        </div>
    );
}

