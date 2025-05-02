import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-4">
      <h1 className="text-2xl font-semibold">
        Mes projets : <span className="italic underline">épreuve E5</span>
      </h1>

      <p className="max-w-3xl mb-5 text-center text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
        L’<span className="font-bold">épreuve E5</span> du BTS SIO SLAM,
        intitulée{" "}
        <span className="font-bold">
          "Conception et maintenance de solutions informatiques"
        </span>
        , est une{" "}
        <span className="font-bold">épreuve professionnelle orale</span> qui
        évalue les compétences en{" "}
        <span className="italic">développement logiciel</span> et{" "}
        <span className="italic">conception d'applications métiers</span>
        <br />
        <br />
        L’épreuve dure environ <span className="font-bold">
          40 minutes
        </span> : <span className="italic">20 minutes de présentation</span>{" "}
        suivies de{" "}
        <span className="italic">20 minutes d’échange avec le jury</span>. Le
        candidat doit y démontrer sa capacité à analyser des besoins, concevoir
        une solution technique, développer une application et justifier ses
        choix en matière de{" "}
        <span className="italic">
          technologies, outils et méthodes de travail
        </span>
        .
      </p>

      <Image
        className="mb-10"
        src={"/tableau.png"}
        alt="tableau"
        width={500}
        height={500}
      />

      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Page;
