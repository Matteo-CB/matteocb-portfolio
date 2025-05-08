import React from "react";

export default function Veille() {
  const themes = [
    // Thème 1
    [
      {
        title: "Définition de la cybersécurité",
        date: "1er février 2022",
        text: "La cybersécurité regroupe l’ensemble des moyens techniques, humains et organisationnels permettant de protéger les systèmes informatiques, les réseaux et les données contre les attaques, les fuites ou les détériorations.",
        source: "ANSSI",
        link: "https://www.ssi.gouv.fr/entreprise/bonnes-pratiques/",
      },
      {
        title: "Cyberattaques en hausse dans les entreprises",
        date: "1er février 2022",
        text: "Selon une étude récente, les attaques informatiques ciblant les PME ont augmenté de 50 % en un an, en particulier via les ransomwares.",
        source: "LeMagIT",
        link: "https://www.lemagit.fr/ehandbook/Infographie-Ransomware-la-situation-a-laube-de-2022",
      },
      {
        title: "Qu’est-ce qu’une donnée sensible ?",
        date: "1er février 2022",
        text: "Les données personnelles et confidentielles sont de plus en plus ciblées par les cybercriminels. Leur protection est devenue une priorité stratégique.",
        source: "CNIL",
        link: "https://www.cnil.fr/fr/definition/donnee-sensible",
      },
    ],
    // Thème 2
    [
      {
        title: "Le phishing, menace persistante",
        date: "21 juin 2024",
        text: "Le hameçonnage reste l’une des attaques les plus répandues, visant à soutirer des informations personnelles via des messages frauduleux.",
        source: "Zataz",
        link: "https://www.zataz.com/decouverte-dun-espace-de-phishing-aux-235-millions-de-victimes/",
      },
      {
        title: "Les malwares de nouvelle génération",
        date: "2 octobre 2024",
        text: "Des virus toujours plus sophistiqués sont capables de contourner les antivirus classiques et de chiffrer entièrement les systèmes.",
        source: "01net",
        link: "https://www.01net.com/actualites/fausses-apps-chrome-nordvpn-cachent-nouvelle-version-malware-bien-connu.html",
      },
      {
        title: "Attaques via l’ingénierie sociale",
        date: "1er juillet 2023",
        text: "Les pirates exploitent la psychologie humaine pour inciter les victimes à donner accès à leurs systèmes ou à leurs mots de passe.",
        source: "Cybermalveillance.gouv.fr",
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/cybermois-cp-mobilisons-nous",
      },
    ],
    // Thème 3
    [
      {
        title: "Authentification forte et MFA",
        date: "28 mars 2024",
        text: "La mise en place de l’authentification multifactorielle devient indispensable pour limiter les intrusions dans les systèmes critiques.",
        source: "LeMondeInformatique",
        link: "https://www.lemondeinformatique.fr/actualites/lire-la-cnil-planche-sur-l-authentification-multifacteur-93374.html",
      },
      {
        title: "Sensibilisation des utilisateurs",
        date: "1er juillet 2023",
        text: "La formation des employés et des citoyens aux bonnes pratiques numériques est un levier crucial pour limiter les risques.",
        source: "CNIL",
        link: "https://www.cnil.fr/fr/securite-impliquer-et-former-les-utilisateurs",
      },
      {
        title: "L’intelligence artificielle au service de la sécurité",
        date: "1er juillet 2023",
        text: "L’IA est de plus en plus utilisée pour détecter les anomalies et réagir rapidement face à une tentative d’intrusion.",
        source: "L’Usine Digitale",
        link: "https://www.usine-digitale.fr/article/l-intelligence-artificielle-face-a-la-cybersecurite.N2198923",
      },
    ],
  ];

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-neutral-600 dark:text-neutral-200 flex items-center gap-2">
          🛡️ Veille Technologique
        </h1>
        <hr className="border-t-2 border-neutral-600 w-16 my-2" />
        <h2 className="text-2xl font-semibold mt-4">
          Qu’est-ce que la veille technologique ?
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-400">
          La veille technologique, branche de la veille stratégique, consiste à
          observer les évolutions techniques et les innovations dans un domaine
          spécifique. Elle implique la collecte, le tri, la diffusion et
          l’analyse d’informations afin d’anticiper les changements dans les
          domaines de la recherche, du développement, ou de la production. Dans
          le cas de la cybersécurité, cela permet d’identifier de nouvelles
          menaces, d’adopter des technologies de protection innovantes, et
          d’ajuster les politiques de sécurité des systèmes informatiques.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          Les principaux outils de ma veille
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-400">
          Pour réaliser cette veille, j’ai utilisé <strong>Feedly</strong>, un
          agrégateur de flux RSS, et consulté régulièrement{" "}
          <strong>Openai.com</strong> pour des analyses sur la sécurité
          informatique. D’autres sites spécialisés comme{" "}
          <strong>Zataz.com</strong>, <strong>LeMagIT</strong> et{" "}
          <strong>Cybermalveillance.gouv.fr</strong> m’ont permis de suivre les
          actualités et alertes en matière de cybersécurité. J’ai aussi mis en
          favoris certains articles de <strong>01net</strong> et{" "}
          <strong>L’Usine Digitale</strong> afin de rester informé sur les
          tendances et attaques récentes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Sujet de ma veille</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-400">
          Pour cette veille technologique, j’ai choisi de me concentrer sur le
          thème suivant :{" "}
          <strong>
            Quels sont les enjeux actuels et futurs de la cybersécurité ?
          </strong>
        </p>
        <p className="mt-1 text-gray-700 dark:text-gray-400">
          Ma veille s’articule autour de <strong>3 grands axes</strong> :
        </p>
      </section>

      {themes.map((section, index) => (
        <section key={index}>
          <h3 className="text-2xl font-bold text-neutral-600 dark:text-neutral-200">
            Thème {index + 1} :{" "}
            {
              [
                "Pourquoi la cybersécurité est-elle indispensable ?",
                "Les principales menaces en cybersécurité",
                "Comment renforcer la cybersécurité ?",
              ][index]
            }
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {section.map((item, i) => (
              <div key={i} className="p-4 rounded-xl shadow-md border">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  {item.text}
                </p>
                <p className="text-sm mt-1">
                  Source :{" "}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800"
                  >
                    {item.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
