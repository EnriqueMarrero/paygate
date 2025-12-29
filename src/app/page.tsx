import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PayGateDemo } from "@/components/PayGateDemo";
import { Footer } from "@/components/Footer";

import { ContractAddress } from "@/components/ContractAddress";

export default function Home() {
  return (
    <main className="min-h-screen px-4 pb-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <Navbar />

        <div className="flex justify-center mt-24 mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <ContractAddress />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Hero & Info */}
          <div className="space-y-12">
            <Hero />
          </div>

          {/* Right Column: Demo */}
          <div className="sticky top-8">
            <PayGateDemo />
          </div>
        </div>

        {/* Features below full width */}
        <div className="mt-20">
          <FeatureGrid />
        </div>

        <Footer />
      </div>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />
      </div>
    </main>
  );
}
