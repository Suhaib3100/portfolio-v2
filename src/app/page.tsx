"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import Projects from "@/components/projects";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
import BlackholeVideo from "@/components/blackhole-video";
import { TracingBeam } from "@/components/ui/Aceternity/TracingBeam";
import { LanguageToggle } from "@/components/language/language-toggle";
import React from "react";
import { useLocation } from "@/providers/localization-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import StarsCanvas from "@/components/stars-canvas";

export default function Home() {
  const { pageData, language, setLanguage } = useLocation();

  return (
    <SheetProvider>
      <main className="min-h-screen w-full bg-transparent relative">
        <Navbar data={pageData.navbar} sheetsData={pageData.sheets} />
        <BlackholeVideo />
        <Hero data={pageData.hero} />

        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
          <StarsCanvas />
          <TracingBeam>
            <Grid data={pageData.bentoGrid} />

            <Projects data={pageData.projects} />

            <Approach data={pageData.approach} />

            <Footer data={pageData.footer} />
          </TracingBeam>
        </div>

        {/* Lang provider*/}
        <div className="fixed bottom-4 right-6 z-50">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </main>
    </SheetProvider>
  );
}
