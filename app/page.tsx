import About from "@/components/About";
import BtsSio from "@/components/BtsSio";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import MessageSend from "@/components/MessageSend";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import E6 from "@/components/E6";
import Veille from "@/components/Veille";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <BtsSio />
        <Certification />
        <Projects />
        <E6 />
        <Skills />
        <Veille />
        <Contact />
        <MessageSend />
      </main>
    </>
  );
}
