"use client";

import { useState, useEffect } from "react";
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Loader2, Wallet, CheckCircle2, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for different wallet providers
interface WalletProvider {
    isPhantom?: boolean;
    isSolflare?: boolean;
    connect: () => Promise<{ publicKey: PublicKey }>;
    signAndSendTransaction: (tx: Transaction) => Promise<{ signature: string }>;
    publicKey?: PublicKey;
}

declare global {
    interface Window {
        solana?: WalletProvider;
        solflare?: WalletProvider;
        backpack?: WalletProvider;
    }
}

interface DetectedWallet {
    name: string;
    icon: string;
    provider: WalletProvider;
}

export function VelocityVault() {
    const [status, setStatus] = useState<string>("SYSTEM_READY");
    const [loading, setLoading] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    const [txSignature, setTxSignature] = useState<string | null>(null);

    // Wallet selection state
    const [availableWallets, setAvailableWallets] = useState<DetectedWallet[]>([]);
    const [showWalletModal, setShowWalletModal] = useState(false);

    // Configuration
    const SOL_AMOUNT = 0.01;
    const RECIPIENT_ADDRESS = "3yFcwEP4gJc8G3KjC7QJ2s3r4D6x5c8e9f0a1b2c3d4e";
    const RPC_URL = "https://api.devnet.solana.com";

    useEffect(() => {
        const checkWallets = () => {
            const wallets: DetectedWallet[] = [];

            if (window.solana?.isPhantom) {
                wallets.push({ name: "PHANTOM", icon: "👻", provider: window.solana });
            }
            if (window.solflare?.isSolflare) {
                wallets.push({ name: "SOLFLARE", icon: "🌞", provider: window.solflare });
            }

            setAvailableWallets(wallets);
        };

        checkWallets();
        setTimeout(checkWallets, 1000);
    }, []);

    const initiatePayment = () => {
        if (availableWallets.length === 0) {
            window.open("https://phantom.app/", "_blank");
            return;
        }

        if (availableWallets.length === 1) {
            handlePay(availableWallets[0].provider);
        } else {
            setShowWalletModal(true);
        }
    };

    const handlePay = async (provider: WalletProvider) => {
        setShowWalletModal(false);
        try {
            setLoading(true);
            setStatus(`INITIALIZING_HANDSHAKE...`);

            const resp = await provider.connect();
            const fromPubkey = resp.publicKey;

            if (!fromPubkey) throw new Error("AUTH_FAILURE");

            setStatus(`AUTH_SUCCESS: ${fromPubkey.toBase58().slice(0, 4)}...`);

            const connection = new Connection(RPC_URL, "confirmed");
            const toPubkey = new PublicKey(RECIPIENT_ADDRESS);

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey,
                    toPubkey,
                    lamports: SOL_AMOUNT * LAMPORTS_PER_SOL,
                })
            );

            transaction.feePayer = fromPubkey;
            const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;

            setStatus("WAITING_FOR_SIGNATURE...");
            const { signature } = await provider.signAndSendTransaction(transaction);

            setStatus("EXECUTING_PROTOCOL...");
            setTxSignature(signature);

            const confirmation = await connection.confirmTransaction({
                signature,
                blockhash,
                lastValidBlockHeight
            });

            if (confirmation.value.err) {
                throw new Error("EXEC_FAILURE");
            }

            setUnlocked(true);
            setStatus("HANDSHAKE_COMPLETE");
        } catch (err: any) {
            console.error(err);
            setStatus(`SYSTEM_ERROR: ${err.message || "FAILURE"}`);
        } finally {
            setLoading(false);
        }
    };

    if (unlocked) {
        return (
            <div className="industrial-border bg-black p-8 animate-in fade-in duration-700">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 border-2 border-emerald-500 flex items-center justify-center animate-pulse">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Vault Unlocked</h3>
                        <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Protocol Handshake Verified</p>
                    </div>

                    <div className="w-full bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-sm">
                        <pre className="text-[10px] text-left text-emerald-400 font-mono leading-relaxed">
                            {`// ACCESS_GRANTED
{
  handshake: "v-verified",
  timestamp: "${new Date().toISOString()}",
  engine: "velocity-2.0.4"
}`}
                        </pre>
                    </div>

                    {txSignature && (
                        <a
                            href={`https://solscan.io/tx/${txSignature}?cluster=devnet`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-black px-4 py-2 font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-colors"
                        >
                            Open Explorer
                        </a>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="relative industrial-border bg-black overflow-hidden h-full min-h-[450px] flex flex-col">
            {/* Wallet Modal */}
            {showWalletModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowWalletModal(false)} />
                    <div className="relative bg-black border border-primary/30 p-8 w-full max-w-sm industrial-border animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                            <h3 className="text-xs font-bold font-mono tracking-widest uppercase text-primary">Select_Module</h3>
                            <button onClick={() => setShowWalletModal(false)} className="text-neutral-500 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {availableWallets.map((wallet) => (
                                <button
                                    key={wallet.name}
                                    onClick={() => handlePay(wallet.provider)}
                                    className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                                >
                                    <span className="flex items-center gap-4">
                                        <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{wallet.icon}</span>
                                        <span className="text-xs font-mono font-bold tracking-widest">{wallet.name}</span>
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-primary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Header / Decoder */}
            <div className="p-6 border-b border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-white/40">Vault::Handshake</h2>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Protocol 402_Active</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-mono text-neutral-600 uppercase">Input_Cap</div>
                        <div className="text-sm font-mono font-bold text-primary">{SOL_AMOUNT} SOL</div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-8">
                <div className="w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <p className="text-[10px] md:text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-tight max-w-[280px]">
                    Vault verification requires a native SOL handshake. Initialize the engine to synchronize state and unlock data.
                </p>

                <button
                    onClick={initiatePayment}
                    disabled={loading}
                    className="group relative w-full max-w-xs overflow-hidden bg-primary px-8 py-4 text-black transition-all hover:bg-white active:translate-y-px disabled:opacity-50 font-black text-[10px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-3">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Synchronizing...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-3">
                            <Wallet className="w-4 h-4" />
                            Initialize_Handshake
                        </span>
                    )}
                </button>
            </div>

            {/* Status Footer */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={cn("w-1 h-1 rounded-full", loading ? "bg-amber-500 animate-pulse" : "bg-emerald-500")} />
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">{status}</span>
                </div>
                <div className="text-[9px] font-mono text-neutral-700 uppercase">Devnet_Stable</div>
            </div>
        </div>
    );
}
