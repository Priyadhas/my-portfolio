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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Hero />
        <Experience />
        <EducationCerts />
         <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
