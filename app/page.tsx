import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full pt-16"> {/* Adiciona padding para evitar que a navbar fixe sobre o conteúdo */}
        <div className="flex flex-col gap-20">
          <section id="hero"> {/* ID deve ser 'hero' */}
            <Hero />
          </section>

          <section id="skills"> {/* ID deve ser 'skills' */}
            <Skills />
          </section>

          <section id="encryption"> {/* ID deve ser 'encryption' */}
            <Encryption />
          </section>

          <section id="projects"> {/* ID deve ser 'projects' */}
            <Projects />
          </section>
        </div>
      </main>
    </>
  );
}

