import Contact from "@/components/contact";
import EducationCerts from "@/components/educations";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-zinc-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-32">
        <Hero />
        <Experience />
        <EducationCerts />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
