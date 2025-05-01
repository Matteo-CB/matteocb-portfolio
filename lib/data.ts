import glpi from "../public/images/Glpi_screenshot.png";
import DLK from "../public/images/projects/dlk.png";
import FlopyBoard from "../public/images/projects/flopy-board.png";
import schema from "../public/images/schema-reseau.png";
import trello from "../public/images/trello.png";
import seo from "../public/images/seo.png";
import events from "../public/images/724events.png";
import ze from "../public/images/ze.png";
const competences = {
  "Gérer le patrimoine informatique": [
    "Recenser et identifier les ressources numériques",
    "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
    "Vérifier le respect des règles d’utilisation des ressources numériques",
  ],
  "Répondre aux incidents et aux demandes d’assistance et d’évolution": [
    "Collecter, suivre et orienter des demandes",
    "Traiter des demandes concernant les services et les systèmes",
    "Traiter des demandes concernant les applications",
  ],
  "Développer la présence en ligne de l’organisation": [
    "Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
    "Référencer les services en ligne de l’organisation et mesurer leur visibilité",
    "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
  ],
  "Travailler en mode projet": [
    "Analyser les objectifs et les modalités d’organisation d’un projet",
    "Planifier les activités",
    "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
  ],
  "Mettre à disposition des utilisateurs un service informatique": [
    "Réaliser les tests d’intégration et d’acceptation d’un service",
    "Déployer un service",
    "Accompagner les utilisateurs dans la mise en place d’un service",
  ],
  "Organiser son développement professionnel": [
    "Mettre en place son environnement d’apprentissage personnel",
    "Mettre en œuvre des outils et stratégies de veille informationnelle",
    "Développer son projet professionnel",
  ],
};
export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Recréation et gestion du serveur GLPI",
    description:
      "Récupération et organisation des tickets, rédaction de documentations techniques, étude de l’agent GLPI, création d’un logigramme ITIL et export de la base MySQL.",
    tags: ["Debian", "GLPI", "MySQL"],
    imageUrl: glpi,
    url: "/projects#1",
    isDownload: true,
    link: "/projets-bts/MC_P2_gerez-les-demandes-au-quotidien-1_2024-05-27T120322.zip",
    sousCompetences: [
      competences["Gérer le patrimoine informatique"][0],
      competences["Gérer le patrimoine informatique"][1],
      competences[
        "Répondre aux incidents et aux demandes d’assistance et d’évolution"
      ][0],
      competences[
        "Répondre aux incidents et aux demandes d’assistance et d’évolution"
      ][1],
      competences["Travailler en mode projet"][1],
    ],
  },
  {
    title: "Mise en réseau d’un nouveau bâtiment",
    description:
      "Conception du schéma réseau, plan d’adressage, intégration des équipements, création de VLAN, configuration des règles de connexion pour un déploiement opérationnel sous trois semaines.",
    tags: ["Réseau", "VLAN"],
    imageUrl: schema,
    url: "/projects#2",
    isDownload: true,
    link: "/projets-bts/MC_P3_mettez-en-place-et-documentez-le-reseau-local-dune-startup_2024-06-19T075424.zip",
    sousCompetences: [
      competences["Gérer le patrimoine informatique"][0],
      competences["Gérer le patrimoine informatique"][1],
    ],
  },
  {
    title: "Gestion du projet Menu Maker",
    description:
      "Rédaction des spécifications techniques, création d’un tableau Kanban structuré sur Trello, veille technologique et préparation d’une présentation pour le client.",
    tags: ["Gestion de projet", "Trello", "Veille technologique"],
    imageUrl: trello,
    url: "/projects#3",
    isDownload: true,
    link: "/projets-bts/MC_P7_planifiez-le-developpement-du-site-de-votre-client_2023-08-23T174247.zip",
    sousCompetences: [
      competences["Travailler en mode projet"][0],
      competences["Travailler en mode projet"][1],
      competences["Travailler en mode projet"][2],
    ],
  },
  {
    title: "Optimisation du site ninacarducci.github.io",
    description:
      "Amélioration des performances et du référencement SEO, tests avec Lighthouse et WAVE Evaluation Tool.",
    tags: ["SEO", "Performance", "Accessibilité"],
    imageUrl: seo,
    url: "/projects#4",
    isDownload: true,
    link: "/projets-bts/MC_P9_optimisez-le-referencement-dun-site-de-photographe-1_2023-09-12T081424.zip",
    sousCompetences: [
      competences["Développer la présence en ligne de l’organisation"][0],
      competences["Développer la présence en ligne de l’organisation"][1],
      competences["Développer la présence en ligne de l’organisation"][2],
      competences[
        "Mettre à disposition des utilisateurs un service informatique"
      ][0],
    ],
  },
  {
    title: "Finalisation du site 724events",
    description:
      "Correction des bugs, traitement des issues signalées, complétion du cahier de recette avec tous les scénarios de test, validation finale avant publication.",
    tags: ["Débogage", "Recette", "Frontend"],
    imageUrl: events,
    url: "/projects#5",
    isDownload: true,
    link: "/projets-bts/MC_P10_debuggez-le-site-dune-agence-devenementiel_2023-09-19T075258.zip",
    sousCompetences: [
      competences[
        "Mettre à disposition des utilisateurs un service informatique"
      ][0],
    ],
  },
  {
    title: "Développement d’un clone de Flappy Bird",
    description:
      "Possibilité de jouer en invité ou connecté, classement des meilleurs joueurs, et ajout d’un mode difficile pour un challenge supplémentaire.",
    tags: ["Next.js", "Node.js", "TypeScript", "MongoDB"],
    imageUrl: FlopyBoard,
    url: "/projects#6",
    isDownload: false,
    link: "https://flopy-board.vercel.app",
    sousCompetences: [
      competences["Gérer le patrimoine informatique"][1],
      competences["Développer la présence en ligne de l’organisation"][2],
    ],
  },
  {
    title: "Création de DLK Digital Agency",
    description:
      "Développement d’un site vitrine avec Next.js, SEO optimisé, identité visuelle complète (logo, branding) et bonnes pratiques de référencement.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: DLK,
    url: "/projects#7",
    isDownload: false,
    link: "https://dlkdigitalagency.com",
    sousCompetences: [
      competences["Développer la présence en ligne de l’organisation"][0],
      competences["Développer la présence en ligne de l’organisation"][1],
      competences["Développer la présence en ligne de l’organisation"][2],
      competences[
        "Mettre à disposition des utilisateurs un service informatique"
      ][0],
      competences[
        "Mettre à disposition des utilisateurs un service informatique"
      ][1],
      competences["Organiser son développement professionnel"][2],
    ],
  },
  {
    title: "Développement d’un site de location de villas en Provence",
    description:
      "Affichage des logements disponibles, redirection vers Airbnb, présentation de l’entreprise, optimisation du SEO pour maximiser la visibilité.",
    tags: ["Next.js", "SEO", "Frontend"],
    imageUrl: ze,
    url: "/projects#8",
    isDownload: false,
    link: "https://zeenprovence.fr",
    sousCompetences: [
      competences[
        "Répondre aux incidents et aux demandes d’assistance et d’évolution"
      ][0],
      competences[
        "Répondre aux incidents et aux demandes d’assistance et d’évolution"
      ][2],
      competences["Développer la présence en ligne de l’organisation"][0],
      competences["Développer la présence en ligne de l’organisation"][1],
      competences["Développer la présence en ligne de l’organisation"][2],
    ],
  },
  {
    title: "Développement d’un blog de voyages",
    description:
      "Fonctionnalités : authentification, commentaires, interface admin pour ajouter du contenu, monétisation via affiliation à un site de réservation.",
    tags: ["Next.js", "Auth", "Affiliation"],
    imageUrl: ze,
    url: "/projects#9",
    isDownload: false,
    link: "https://travel-blog.vercel.app",
    sousCompetences: [
      competences["Gérer le patrimoine informatique"][2],
      competences["Développer la présence en ligne de l’organisation"][0],
      competences["Développer la présence en ligne de l’organisation"][1],
      competences["Développer la présence en ligne de l’organisation"][2],
      competences[
        "Mettre à disposition des utilisateurs un service informatique"
      ][0],
      competences[
        "Mettre à disposition des utilisateurs un service informatique"
      ][1],
      competences["Organiser son développement professionnel"][2],
    ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Sass/Scss",
  "npm",
  "pnpm",
  "Postman",
  "Agile",
  "Kanban",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Redux-Toolkit",
  "Express",
  "PHP",
  "MySQL",
  "Python",
  "Framer Motion",
  "GLPI",
  "Linux",
  "Debian",
  "Réseaux",
] as const;

export function regrouperCompetences(sousCompetences: any) {
  const resultat: any = {};

  sousCompetences.forEach((sousComp: any) => {
    for (const [groupe, liste] of Object.entries(competences)) {
      if (liste.includes(sousComp)) {
        if (!resultat[groupe]) {
          resultat[groupe] = [];
        }
        resultat[groupe].push(sousComp);
        break;
      }
    }
  });

  return resultat;
}
