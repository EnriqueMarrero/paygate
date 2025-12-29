import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Copy, ArrowLeft, Download } from "lucide-react";

export default function Docs() {
    return (
        <main className="min-h-screen px-4 pb-20 overflow-x-hidden">
            <div className="max-w-4xl mx-auto">
                <Navbar />

                <div className="mt-12 space-y-12">
                    {/* Header */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Go Back
                        </Link>
                        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
                        <p className="text-xl text-neutral-400 font-light">
                            How to integrate PayGate into your static site.
                        </p>
                    </div>
                    {/* Requirements */}
                    <div className="p-8 border border-white/10 bg-neutral-900/30 rounded-2xl">
                        <h2 className="text-lg font-semibold mb-4 text-white">Prerequisites</h2>
                        <ul className="space-y-3 text-neutral-400 font-light">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span><strong className="text-white">HTTPS</strong>: Your site must be served over HTTPS (or localhost) for wallet connection to work.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span><strong className="text-white">Solana Wallet</strong>: Users must have a wallet like Phantom or Solflare installed.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span><strong className="text-white">Modern Browser</strong>: Chrome, Brave, Firefox, or Edge.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div className="p-8 border border-white/10 bg-neutral-900/30 rounded-2xl">
                        <h2 className="text-lg font-semibold mb-4 text-white">Download Library</h2>
                        <p className="text-neutral-400 mb-6 font-light">
                            Get the lightweight PayGate module to include in your project.
                        </p>
                        <a
                            href="/paygate.js"
                            download="paygate.js"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors font-medium text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Download paygate.js
                        </a>
                    </div>

                    {/* Step 1 */}
                    <div className="p-8 border border-white/10 bg-neutral-900/30 rounded-2xl">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-bold">1</span>
                            Include Dependencies
                        </h2>
                        <p className="text-neutral-400 mb-6 font-light">
                            Add the Solana web3.js library to your HTML file.
                        </p>
                        <div className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm font-mono text-neutral-300">
                                &lt;script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"&gt;&lt;/script&gt;
                            </code>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="p-8 border border-white/10 bg-neutral-900/30 rounded-2xl">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-bold">2</span>
                            Add the PayGate Snippet
                        </h2>
                        <p className="text-neutral-400 mb-6 font-light">
                            Import and initialize the PayGate module.
                        </p>
                        <div className="relative group">
                            <div className="bg-black/50 border border-white/10 rounded-lg p-6 overflow-x-auto">
                                <pre className="text-sm font-mono text-neutral-300 leading-relaxed">
                                    {`<script type="module">
  import { mountPayGate } from "./paygate.js";

  mountPayGate({
    buttonId: "pay-btn",
    statusId: "pay-status",
    unlockId: "unlock-content",
    to: "YOUR_WALLET_ADDRESS", // SOL address
    sol: 0.01,                 // Price in SOL
    memo: "paygate-payment"    // Optional on-chain memo
  });
</script>`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="p-8 border border-white/10 bg-neutral-900/30 rounded-2xl">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-bold">3</span>
                            Create HTML Elements
                        </h2>
                        <p className="text-neutral-400 mb-6 font-light">
                            Add the button, status text, and the content you want to hide.
                        </p>
                        <div className="bg-black/50 border border-white/10 rounded-lg p-6 overflow-x-auto">
                            <pre className="text-sm font-mono text-neutral-300 leading-relaxed">
                                {`<!-- Pay Button -->
<button id="pay-btn">Pay 0.01 SOL to Unlock</button>
<p id="pay-status">Status: Waiting...</p>

<!-- Hidden Content -->
<div id="unlock-content" style="display: none;">
  <h1>Secret Content Unlocked! 🎉</h1>
  <p>Here is the download link...</p>
</div>`}
                            </pre>
                        </div>
                    </div>

                    <div className="p-6 border-l-2 border-amber-500/50 bg-amber-500/5 rounded-r-lg">
                        <h3 className="text-amber-200 font-semibold mb-2 text-sm uppercase tracking-wider">Security Notice</h3>
                        <p className="text-amber-200/70 text-sm leading-relaxed">
                            This is a frontend-only payment gate. Sophisticated users can View Source to find your hidden content.
                            It is designed for casual "coffee tip" style content, simple tools, or low-stakes access where convenience is prioritized over banking-grade security.
                        </p>
                    </div>

                </div>

                <Footer />
            </div>
        </main>
    );
}
