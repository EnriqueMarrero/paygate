import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { VelocityVault } from "@/components/VelocityVault";
import { Footer } from "@/components/Footer";
import { ContractAddress } from "@/components/ContractAddress";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-mono selection:bg-primary selection:text-black">
      {/* Background System Grid */}
      <div className="fixed inset-0 -z-50 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <Navbar />

        {/* Dashboard Layout */}
        <div className="pt-24 md:pt-32 pb-20 space-y-4 md:space-y-2">

          {/* Top Row: System Status & Contract */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-2">
            <div className="lg:col-span-8 industrial-border bg-white/[0.02] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">System_Status :: Operational</span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-primary/40">Lat :: 401ms // Seq :: 9.1.0</div>
            </div>
            <div className="lg:col-span-4 industrial-border bg-white/[0.02] p-4">
              <ContractAddress />
            </div>
          </div>

          {/* Main Dash: Hero & Vault */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-2 items-stretch">
            <div className="lg:col-span-8 h-full">
              <Hero />
            </div>
            <div className="lg:col-span-4 h-full">
              <VelocityVault />
            </div>
          </div>

          {/* Bottom Row: Features */}
          <div className="pt-4 md:pt-2">
            <FeatureGrid />
          </div>
        </div>

        <Footer />
      </div>

      {/* Edge Decor */}
      <div className="fixed top-0 left-0 w-1 h-full bg-primary/20 pointer-events-none" />
      <div className="fixed top-0 right-0 w-1 h-full bg-white/5 pointer-events-none" />
    </main>
  );
}
