"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function BtsSio() {
  const { ref } = useSectionInView("BtsSio");

  return (
    <motion.section
      ref={ref}
      id="bts-sio"
      className="scroll-mt-28 mb-28 max-w-[60rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Présentation du BTS SIO 🎓</SectionHeading>

      <p className="mb-3">
        Avant de parler de mon parcours, je souhaitais d'abord vous présenter la
        filière que j'ai choisie.
      </p>

      <p className="mb-3">
        Le{" "}
        <span className="font-medium">
          Brevet de Technicien Supérieur Services Informatiques aux
          Organisations (BTS SIO)
        </span>{" "}
        est une formation en deux ans qui prépare aux métiers de développeur ou
        d'administrateur réseau. Ce diplôme permet soit d'intégrer rapidement le
        marché du travail, soit de poursuivre des études dans le secteur
        informatique.
      </p>

      <p className="mb-3">Le BTS SIO propose deux spécialités :</p>

      <p className="mb-3">
        <span className="font-medium">➔ Option SISR</span> – L'option{" "}
        <span className="italic">
          Solutions d’Infrastructure, Systèmes et Réseaux
        </span>{" "}
        forme des spécialistes capables d'installer, maintenir et sécuriser les
        réseaux et les équipements informatiques. Elle prépare aux métiers
        suivants :
      </p>
      <ul className="mb-6 list-none text-left inline-block">
        <li>➔ Administrateur systèmes et réseaux</li>
        <li>➔ Informaticien support et déploiement</li>
        <li>➔ Pilote d’exploitation</li>
        <li>➔ Support systèmes et réseaux</li>
        <li>➔ Technicien d’infrastructure</li>
        <li>➔ Technicien de production</li>
        <li>➔ Technicien micro et réseaux</li>
      </ul>

      <p className="mb-3">
        <span className="font-medium">➔ Option SLAM</span> – (la filière que
        j'ai choisie) L'option{" "}
        <span className="italic">
          Solutions Logicielles et Applications Métiers
        </span>{" "}
        prépare aux métiers du développement d'applications : rédaction de
        cahiers des charges, analyse des besoins, développement et intégration
        de solutions logicielles. Elle conduit aux métiers suivants :
      </p>
      <ul className="list-none text-left inline-block">
        <li>➔ Développeur d’applications informatiques</li>
        <li>➔ Développeur informatique</li>
        <li>➔ Analyste d’applications ou d’études</li>
        <li>➔ Analyste programmeur</li>
        <li>➔ Programmeur analyste</li>
        <li>➔ Programmeur d’applications</li>
        <li>➔ Responsable des services applicatifs</li>
        <li>➔ Technicien d’études informatiques</li>
      </ul>
    </motion.section>
  );
}
