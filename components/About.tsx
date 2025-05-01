"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3" id="about">
        Salut, moi c'est <span className="font-medium">Matteo</span> 👋 Après
        avoir suivi une formation professionnelle de développeur web
        <span className="italic underline">
          {" "}
          RNCP niveau 5 équivalent Bac+2
        </span>{" "}
        avec OpenClassrooms, j'ai décidé de passer mon Bac en candidat libre.
        Cette année, je prépare à la fois mon Bac et mon
        <span className="font-medium"> BTS SIO option SLAM</span> (Solutions
        Logicielles et Applications Métiers) que je passerai en 2025 🎓
      </p>
      <p className="mb-3">
        En parallèle, j'ai créé ma propre
        <span className="font-medium">
          {" "}
          auto-entreprise de développement web freelance
        </span>{" "}
        🚀. À travers ce portfolio, vous pourrez découvrir mes études, mon
        parcours professionnel ainsi que les différents projets sur lesquels
        j'ai travaillé 💻.
      </p>
      <p>
        Vous trouverez également mon <span className="font-medium">CV</span> et
        mes
        <span className="font-medium"> réalisations</span> ci-dessous 👨‍💻.
      </p>
    </motion.section>
  );
}
