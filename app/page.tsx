import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full pt-16 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col gap-20">
          <section id="hero" className="w-full">
            <Hero />
          </section>

          <section id="skills" className="w-full">
            <Skills />
          </section>

          <section id="encryption" className="w-full">
            <Encryption />
          </section>

          <section id="projects" className="w-full">
            <Projects />
          </section>
        </div>
      </main>
    </>
  );
}