// velocity-engine.js - VELOCITY high-throughput access runtime
/**
 * Initialize the VELOCITY handshake protocol on a set of DOM elements.
 * @param {Object} options - Configuration options
 * @param {string} options.targetId - ID of the trigger button
 * @param {string} options.statusId - ID of the status text element
 * @param {string} options.vaultId - ID of the hidden content container
 * @param {string} options.to - Solana recipient address
 * @param {number} options.sol - Amount of SOL to transfer
 * @param {string} [options.rpc] - Custom RPC URL (defaults to devnet)
 */
export function initVelocity(options) {
    const btn = document.getElementById(options.targetId);
    const status = document.getElementById(options.statusId);
    const unlock = document.getElementById(options.vaultId);

    if (!btn || !status || !unlock) {
        console.error("VELOCITY_INIT_FAILURE: Missing required DOM elements.");
        return;
    }

    btn.addEventListener("click", async () => {
        try {
            status.innerText = "INITIALIZING_HANDSHAKE...";

            if (!window.solana) {
                window.open("https://phantom.app/", "_blank");
                return;
            }

            const resp = await window.solana.connect();
            const fromPubkey = resp.publicKey;

            status.innerText = "WAITING_FOR_SIGNATURE...";

            if (!window.solanaWeb3) {
                throw new Error("DEPENDENCY_MISSING: window.solanaWeb3 not found.");
            }

            const { Transaction, SystemProgram, PublicKey, Connection, LAMPORTS_PER_SOL } = window.solanaWeb3;

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey,
                    toPubkey: new PublicKey(options.to),
                    lamports: Math.round(options.sol * LAMPORTS_PER_SOL),
                })
            );

            transaction.feePayer = fromPubkey;
            const connection = new Connection(options.rpc || "https://api.devnet.solana.com", "confirmed");
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;

            const { signature } = await window.solana.signAndSendTransaction(transaction);

            status.innerText = "EXECUTING_PROTOCOL...";

            // For static sites, we simulate the success state once signature is sent.
            // In high-stakes environments, always verify on-chain via backend.
            setTimeout(() => {
                status.innerText = "HANDSHAKE_COMPLETE";
                btn.style.display = "none";
                unlock.style.display = "block";
            }, 2000);

        } catch (err) {
            console.error("VELOCITY_SYSTEM_ERROR:", err);
            status.innerText = "SYSTEM_ERROR: " + (err.message || "FAILURE");
        }
    });
}