"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Certification() {
  const { ref } = useSectionInView("Certification");

  return (
    <motion.section
      ref={ref}
      id="certification"
      className="scroll-mt-28 mb-28 max-w-[60rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Ma certification</SectionHeading>

      <p className="mb-6">
        J’ai validé une{" "}
        <span className="font-medium">
          formation professionnelle de développeur web{" "}
        </span>
        qui m’a permis d’obtenir un{" "}
        <span className="italic underline">titre RNCP niveau 5 </span>,
        équivalent à un Bac +2. Cette certification atteste de mes compétences
        techniques en intégration web, développement frontend et backend, et
        gestion de projets web.
      </p>

      <div className="flex justify-center">
        <Image
          src="/images/diplome.jpg"
          alt="Diplôme développeur web RNCP niveau 5"
          width={800}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </motion.section>
  );
}
