import { CodeBlock } from "@/components/code-block";
import { FeatureCard } from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logoSendAI from "@/assets/logos/sendai.svg"
export default function Page() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
    <div className="min-h-screen min-w-full relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="min-h-full min-w-full bg-[url('/assets/bgs/home.svg')] bg-repeat bg-top"></div>
      </div>
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-relish font-bold text-[#1BE1FF] tracking-wider"
          >
            <Image src={logoSendAI} alt="Solana Agent Kit Logo" />
            {/* SOLANA AGENT KIT */}
          </Link>
          <div className="space-x-8">
            <Link
              href="#"
              className="text-gray-300 hover:text-[#1BE1FF] transition-colors"
            >
              Features
            </Link>
            {/* <Link
              href="#"
              className="text-gray-300 hover:text-[#1BE1FF] transition-colors"
            >
              Docs
            </Link> */}
            <Link
              href="#"
              className="text-gray-300 hover:text-[#1BE1FF] transition-colors"
            >
              Community
            </Link>
            {/* <Link
              href="#"
              className="text-gray-300 hover:text-[#1BE1FF] transition-colors"
            >
              Enterprise
            </Link> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4 py-12 md:py-24">
          <div className="max-w-full mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="font-ppsans text-3xl md:text-6xl font-bold text-white leading-tight">
                Build AI-Powered Applications on Solana{" "}
                <span className="text-[#1BE1FF]">Effortlessly</span>
              </h1>
              <p className="font-departureMono text-md md:text-xl text-gray-400">
                A powerful toolkit for integrating AI agents with Solana
                blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                <Button className="font-ppsans bg-[#1BE1FF] hover:bg-cyan-500 text-black font-bold w-full sm:w-auto">
                  Get Started
                </Button>
                <Button className="font-ppsans border-[#1BE1FF] text-[#1BE1FF] hover:bg-[#1BE1FF]/10 w-full sm:w-auto">
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full overflow-hidden">
              <CodeBlock className="bg-black border border-[#1BE1FF]/20 rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Create Tokens"
            description="Deploy custom tokens with advanced AI-powered features"
            color="yellow"
          />
          <FeatureCard
            title="Deploy NFT Collections"
            description="Launch NFT collections with intelligent minting mechanisms"
            color="cyan"
          />
          <FeatureCard
            title="Trade Assets"
            description="Smart trading powered by AI market analysis"
            color="mint"
          />
          <FeatureCard
            title="Lend on Lulu"
            description="Automated lending protocols with AI risk assessment"
            color="red"
          />
          <FeatureCard
            title="Trade NFTs"
            description="AI-assisted NFT trading and valuation"
            color="purple"
          />
          <FeatureCard
            title="Transfer Assets"
            description="Secure asset transfers with AI verification"
            color="cyan"
          />
        </div>
      </section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border-l bg-background md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"></span>
      </div>
    </div>
  );
}
