import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import DigitalGoods from "@/components/DigitalGoods";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import ReadyToShip from "@/components/ReadyToShip";
import ScrollTop from "@/components/ScrollTop";
import FloatingBlogButton from "@/components/FloatingBlogButton";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#0a0a0a] text-[#00ff00] selection:bg-[#00ff00] selection:text-[#0a0a0a] overflow-x-hidden matrix-bg"
      suppressHydrationWarning
    >
      {/* CRT Screen Border Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-100 border-8 border-terminal-bg shadow-[inset_0_0_100px_rgba(0,255,0,0.05)]"
        suppressHydrationWarning
      />

      <Navbar />
      <div className="max-w-5xl mx-auto relative z-8">
        <Hero />
        <LogoSlider />
        <Projects />
        {/* <Skills /> */}
        {/* <Blog /> */}
        {/* <DigitalGoods /> */}
        <Process />
        <Contact />
        <ReadyToShip />
      </div>
      <FloatingBlogButton />
      <FloatingWhatsappButton />
      <ScrollTop />

      <footer className="py-8 border-t border-[#00aa00] text-center text-[#00aa00] text-sm font-mono max-w-[1024px] mx-auto relative z-10">
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#00ff00]">
            ╔══════════════════════════════════════════════════════════════╗
          </div>
          <div className="px-4">
            <span className="text-[#00ffff]">[SYS]</span> ©{" "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span> •
            TERMINAL v1.0.0 • ALL RIGHTS RESERVED TO JAHIRUL ISLAM AKASH
          </div>
          <div className="text-[#00ff00]">
            ╚══════════════════════════════════════════════════════════════╝
          </div>
        </div>
      </footer>
    </main>
  );
}
