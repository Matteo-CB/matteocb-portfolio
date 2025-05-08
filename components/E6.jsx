"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { e6 } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function E6() {
  const { ref } = useSectionInView("e6");
  return (
    <section ref={ref} id="e6" className="scroll-mt-28 mb-28">
      <SectionHeading>Épreuve E6</SectionHeading>
      <div className="flex items-center mb-8 justify-center mt-8 ">
        <Link
          download={true}
          target="_blank"
          href={"/dossier_realisations_professionnelles.pdf"}
          className="cursor-pointer group sm:text-sm text-xs bg-black/[0.8] text-white px-5 py-2 flex items-center gap-2 rounded-full text-center outline-none focus:scale-110 hover:scale-110 hover:bg-black/[0.9]   active:scale-105 transition"
        >
          Voir le dossier des réalisations professionnelles{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>
      <div>
        {e6.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
