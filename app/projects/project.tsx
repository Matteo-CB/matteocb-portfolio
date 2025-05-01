"use client";

import React from "react";
import Image from "next/image";
import { regrouperCompetences } from "@/lib/data";
import type { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
  sousCompetences,
  isDownload,
  link,
}) => {
  const competencesRegroupees = regrouperCompetences(sousCompetences);

  return (
    <section
      id={title}
      className="bg-gray-100 mx-2 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden transition hover:bg-gray-200 p-6 shadow-md mb-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white">
        {title}
      </h2>

      <p className="text-sm leading-relaxed text-gray-700 mb-4 dark:text-white/70">
        {description}
      </p>

      <Image
        src={imageUrl}
        alt={`Image du projet ${title}`}
        className="w-full h-auto rounded-xl mb-4"
        quality={95}
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-black/70 text-white px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full dark:text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
          Compétences mobilisées :
        </h3>
        <ul className="space-y-4">
          {Object.entries(competencesRegroupees).map(
            ([groupe, sousComps]: any, idx) => (
              <li key={idx}>
                <p className="font-bold text-blue-800 dark:text-blue-300">
                  {groupe}
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 dark:text-white/70">
                  {sousComps.map((sous: any, index: any) => (
                    <li key={index}>{sous}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mt-6">
        <a
          href={link}
          download={isDownload}
          target={isDownload ? "_self" : "_blank"}
          rel={isDownload ? undefined : "noopener noreferrer"}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Voir le projet
        </a>
      </div>
    </section>
  );
};

export default Project;
