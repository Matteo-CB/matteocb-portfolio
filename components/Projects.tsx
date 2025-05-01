"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Mes Projets</SectionHeading>
      <div className="flex items-center mb-8 justify-center mt-8 ">
        <Link
          href="/projects"
          className="cursor-pointer group sm:text-sm text-xs bg-black/[0.8] text-white px-5 py-2 flex items-center gap-2 rounded-full text-center outline-none focus:scale-110 hover:scale-110 hover:bg-black/[0.9]   active:scale-105 transition"
        >
          Voir en détails les projets{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 ">
        <a
          href="https://github.com/Matteo-CB/matteocb-portfolio"
          target="_blank"
          className="cursor-pointer group sm:text-sm text-xs bg-black/[0.8] text-white px-5 py-2 flex items-center gap-2 rounded-full text-center outline-none focus:scale-110 hover:scale-110 hover:bg-black/[0.9]   active:scale-105 transition"
        >
          Voir le code de ce portfolio{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </section>
  );
}
