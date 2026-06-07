// app/page.tsx
import Navbar from "@/components/TempNavbar";
import Hero from "@/components/TempHero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Dynamic Navigation Pipeline Tracker */}
        <div className="bg-gradient-to-r from-blue-950/20 via-slate-900 to-indigo-950/20 border-y border-slate-800/80 py-5 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Looking for structured validation matrix records?{" "}
            <Link href="/projects" className="inline-flex items-center font-bold text-blue-400 hover:text-blue-300 transition-colors ml-1 underline underline-offset-4 decoration-blue-500/20">
              Browse 6 Live Engineering Case Records <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </p>
        </div>

        <Services />
        <ValueProposition />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}