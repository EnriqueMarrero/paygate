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

export function PayGateDemo() {
    const [status, setStatus] = useState<string>("Ready to pay");
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
                wallets.push({ name: "Phantom", icon: "👻", provider: window.solana });
            }
            if (window.solflare?.isSolflare) {
                wallets.push({ name: "Solflare", icon: "🌞", provider: window.solflare });
            }
            // Fallback or generic provider check could go here

            setAvailableWallets(wallets);
        };

        checkWallets();
        // Re-check after a brief delay in case injection is slow
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
            setStatus(`Connecting to wallet...`);

            // 1. Connect
            const resp = await provider.connect();
            const fromPubkey = resp.publicKey;

            if (!fromPubkey) throw new Error("Could not connect to wallet");

            setStatus(`Connected: ${fromPubkey.toBase58().slice(0, 4)}...`);

            // 2. Prepare Transaction
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

            // 3. Sign & Send
            setStatus("Please approve transaction...");
            const { signature } = await provider.signAndSendTransaction(transaction);

            setStatus("Confirming transaction...");
            setTxSignature(signature);

            // 4. Confirm
            const confirmation = await connection.confirmTransaction({
                signature,
                blockhash,
                lastValidBlockHeight
            });

            if (confirmation.value.err) {
                throw new Error("Transaction failed");
            }

            setUnlocked(true);
            setStatus("Payment confirmed!");
        } catch (err: any) {
            console.error(err);
            setStatus(`Error: ${err.message || "Payment failed"} `);
        } finally {
            setLoading(false);
        }
    };

    if (unlocked) {
        return (
            <div className="grid gap-6">
                <div className="p-8 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl backdrop-blur-sm animate-in fade-in zoom-in duration-500">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-emerald-400 mb-2">Content Unlocked!</h3>
                        <p className="text-emerald-200/70 mb-6">Thank you for your payment.</p>

                        <div className="bg-[#0C1220] p-6 rounded-xl border border-white/10 w-full mb-4">
                            <pre className="text-xs text-left text-blue-300 font-mono overflow-x-auto">
                                {`// This represents your hidden content
const secret = "The treasure is at 42.12, -71.05";
display(secret); `}
                            </pre>
                        </div>

                        {txSignature && (
                            <a
                                href={`https://solscan.io/tx/${txSignature}?cluster=devnet`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-emerald-500/60 hover:text-emerald-400 underline"
                            >
                                View Transaction
                            </a >
                        )}
                    </div >
                </div >
            </div >
        );
    }

    return (
        <div className="grid gap-6 relative">
            {/* Wallet Modal */}
            {showWalletModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl" onClick={() => setShowWalletModal(false)} />
                    <div className="relative bg-neutral-900 border border-white/10 p-6 rounded-xl w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Select Wallet</h3>
                            <button onClick={() => setShowWalletModal(false)} className="text-neutral-500 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="space-y-2">
                            {availableWallets.map((wallet) => (
                                <button
                                    key={wallet.name}
                                    onClick={() => handlePay(wallet.provider)}
                                    className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-xl">{wallet.icon}</span>
                                        <span className="font-medium">{wallet.name}</span>
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Component Preview */}
            <div className="p-1 border border-white/10 rounded-2xl bg-neutral-900/50 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="bg-black/80 p-8 rounded-xl h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                    <div className="mb-6 space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live Demo (Devnet)
                        </div>
                        <h3 className="text-xl font-bold">Unlock Premium Content</h3>
                        <p className="text-neutral-500 text-sm">Pay {SOL_AMOUNT} SOL to access the secure area.</p>
                    </div>

                    <button
                        onClick={initiatePayment}
                        disabled={loading}
                        className="group relative w-full max-w-xs overflow-hidden rounded-full bg-white px-8 py-3 text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed font-semibold"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Processing...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                <Wallet className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
                                {availableWallets.length > 0 ? `Pay ${SOL_AMOUNT} SOL` : "Install Wallet"}
                            </span>
                        )}
                    </button>

                    {availableWallets.length === 0 && (
                        <p className="mt-4 text-xs text-amber-500/80">
                            No Solana wallet detected. Please install Phantom or Solflare.
                        </p>
                    )}

                    <p className="mt-4 text-xs font-mono text-neutral-600 h-4 min-h-[1rem]">
                        {status}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/5 w-full">
                        <p className="text-[10px] text-neutral-500 max-w-xs mx-auto leading-relaxed">
                            This is a simulation running on Solana Devnet.
                            <br />
                            No real funds will be lost.
                        </p>
                    </div>
                </div>
            </div>

            {/* Code Snippet Preview */}
            <div className="rounded-xl border border-white/10 bg-black/50 overflow-hidden">
                <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">snippet.js</span>
                    <span className="text-[10px] text-neutral-600 uppercase tracking-wider">Example Usage</span>
                </div>
                <div className="p-4 overflow-x-auto">
                    <pre className="text-xs font-mono text-neutral-400">
                        {`mountPayGate({
  to: "${RECIPIENT_ADDRESS.slice(0, 4)}...${RECIPIENT_ADDRESS.slice(-4)}",
  sol: ${SOL_AMOUNT},
  memo: "paygate-demo"
});`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
