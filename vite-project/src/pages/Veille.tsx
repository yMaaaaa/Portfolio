import "./Veille.css";
import { useState } from "react";

type Category =
  | "Étude"
  | "Revue de code"
  | "Organisation"
  | "Enquête"
  | "Pratique";

interface NewsItem {
  id: number;
  sortDate: string;
  date: string;
  week: string;
  title: string;
  description: string;
  relevance?: string;
  source?: string;
  link?: string;
  preparation?: string;
  recordType?: "édition" | "hebdomadaire";
  category: Category;
  icon: string;
}

const newsItems: NewsItem[] = [
  {
    id: 13,
    sortDate: "2026-10-09",
    date: "9 octobre 2026",
    week: "Édition du 15 octobre 2026",
    title:
      "Les agents de codage IA génèrent plus de code, mais pas plus de logiciels (étude Harvard)",
    description:
      "Une étude de Fiona Chen et James Stratton (Université Harvard), fondée sur les données de Jellyfish, analyse plus de 300 millions d'événements de travail entre 2021 et mars 2026 dans plus de 700 entreprises (plus de 700 000 employés). L'introduction d'agents de codage IA est associée en moyenne à +30 % de lignes de code, +20 % de commits et +23 % de pull requests, sans changement statistiquement significatif du taux de résolution des Issues et Epics Jira. Le temps moyen entre soumission et fusion d'une pull request augmente de 49 %, les demandes de modification presque doublent et les commentaires par pull request augmentent de 35 %. En mars 2026, 80 % des entreprises utilisent une revue de code IA.",
    relevance:
      "Les gains de génération de code sont absorbés par la revue humaine : la collaboration et la capacité de révision deviennent le facteur limitant.",
    source: "Ars Technica",
    link: "https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/",
    recordType: "édition",
    category: "Revue de code",
    icon: "📊",
  },
  {
    id: 14,
    sortDate: "2026-10",
    date: "Octobre 2026 (date exacte non indiquée)",
    week: "Édition du 15 octobre 2026",
    title: "Le framework JetBrains pour la revue de code généré par IA",
    description:
      "L'équipe HAX de JetBrains (Katie Fraser, Agnia Sergeyuk et Ilya Zakharov) propose une revue en trois niveaux : vue d'ensemble, fichier, puis extrait de code. Le framework répond au problème de calibrage de la confiance : le LLM n'indique pas quelles lignes ou migrations sont incertaines, tandis qu'un audit ligne par ligne ne passe pas à l'échelle. La recherche s'appuie sur 4 ateliers, une conception participative avec 17 praticiens et une enquête de suivi auprès de 43 professionnels. Les revues assistées par Copilot représentent déjà plus d'un cinquième des revues sur GitHub. Présentation annoncée à l'ESEIW en octobre 2026.",
    relevance:
      "La revue de code, pratique collaborative, doit s'adapter à un auteur IA qui ne fournit pas les repères interpersonnels habituels pour répartir l'effort de vérification.",
    source: "JetBrains Research",
    link: "https://blog.jetbrains.com/research/2026/10/review-ai-generated/",
    recordType: "édition",
    category: "Revue de code",
    icon: "🔎",
  },
  {
    id: 15,
    sortDate: "2026-10-07",
    date: "7 octobre 2026 (dépôt de prépublication)",
    week: "Édition du 17 octobre 2026",
    title: "Pourquoi le génie logiciel est indispensable à l'ère des agents de codage",
    description:
      "Dans cette prépublication, Alfonso Fuggetta soutient que les agents de codage performants rendent le génie logiciel et les ingénieurs essentiels, et non obsolètes. Trois propriétés structurelles des LLM — génération probabiliste, agnosticisme et absence d'état sémantique — créent un vide que l'entraînement ne peut éliminer. Quatre leviers de connaissance sont nécessaires : méthodologie, domaine, choix de conception et choix de processus, à matérialiser dans des artefacts persistants.",
    relevance:
      "L'ingénieur devient méthodologue, médiateur et gardien des connaissances : l'IA renforce le besoin d'un génie logiciel structuré et assumé collectivement.",
    source: "arXiv (prépublication)",
    link: "https://arxiv.org/abs/2610.10226",
    recordType: "édition",
    category: "Organisation",
    icon: "🧭",
  },
  {
    id: 16,
    sortDate: "2026-10-15",
    date: "15 octobre 2026 (dépôt de prépublication)",
    week: "Édition du 17 octobre 2026",
    title:
      "« Plausible Is Not Enough » : confiance et preuves dans la revue de pull requests générées par IA",
    description:
      "Questionnaire apparié auprès de 239 praticiens de 31 pays, comparant les demandes de fusion humaines (HPR) et générées par IA (AIPR). 64,9 % déclarent moins de confiance initiale dans les AIPR et 61,1 % demandent davantage de preuves. En cas d'incertitude résiduelle, 43,9 % bloqueraient l'approbation d'une AIPR, contre 19,4 % pour une HPR. Une responsabilité incertaine suspend plus souvent la revue d'une AIPR (29,3 % contre 14,6 %).",
    relevance:
      "La revue devient un problème de preuve et de responsabilité, pas seulement de correction : la confiance se déplace de l'auteur vers la provenance et la validation.",
    source: "arXiv (prépublication)",
    link: "https://arxiv.org/abs/2610.21144",
    recordType: "édition",
    category: "Revue de code",
    icon: "🧾",
  },
  {
    id: 17,
    sortDate: "2026-10-02",
    date: "2 octobre 2026",
    week: "Édition du 20 octobre 2026",
    title:
      "Les développeurs codent plus vite, mais les revues de code « mangent » les gains (Bain & Co.)",
    description:
      "CIO Dive rend compte du 2026 Global Technology Report de Bain & Company, fondé sur un questionnaire auprès de près de 300 dirigeants technologiques seniors. Les outils de codage par IA aideraient à accomplir environ 21 % de tâches supplémentaires, mais le temps consacré à la revue des résultats a augmenté de 91 %. Le rapport n'est pas daté plus précisément dans l'article.",
    relevance:
      "La revue de code, activité collaborative centrale, devient le goulot d'étranglement qui absorbe les gains de productivité générés par l'IA.",
    source: "CIO Dive (Informa TechTarget)",
    link: "https://www.ciodive.com/news/bain-co-technology-AI-coding-deployment/831938/",
    recordType: "édition",
    category: "Revue de code",
    icon: "⏱️",
  },
  {
    id: 18,
    sortDate: "2025-07-10",
    date: "10 juillet 2025",
    week: "Édition du 20 octobre 2026",
    title: "L'IA ralentit les développeurs open-source expérimentés (essai METR)",
    description:
      "Un essai contrôlé randomisé a recruté 16 développeurs open-source expérimentés (dépôts de plus de 22 000 étoiles et un million de lignes de code en moyenne) pour traiter 246 problèmes réels. Les développeurs ont mis 19 % plus longtemps avec l'IA. Avant l'expérience, ils anticipaient un gain de vitesse de 24 % et, après l'avoir vécue, estimaient encore avoir été accélérés de 20 %. Une note de suivi de février 2026 indique que le résultat est périmé pour les outils actuels ; des effets de sélection rendent les nouvelles mesures difficiles.",
    relevance:
      "Cette étude contrôlée montre l'écart possible entre perception et mesure comportementale, nuance essentielle pour évaluer l'effet de l'IA dans une équipe.",
    source: "METR (Model Evaluation & Threat Research)",
    link: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
    recordType: "édition",
    category: "Étude",
    icon: "🧪",
  },
  {
    id: 19,
    sortDate: "2026-10-20",
    date: "20 octobre 2026",
    week: "Édition du 22 octobre 2026",
    title:
      "L'IA rend les développeurs plus rapides, mais expose ce qui ne fonctionne pas dans la livraison de logiciels (Atlassian)",
    description:
      "Le rapport Atlassian « State of Developer Experience 2026 » indique que 87 % des développeurs déclarent que l'IA les aide à livrer plus vite, mais 72 % subissent autant ou plus de friction. La part déclarant économiser au moins 10 heures par semaine passe de 68 % en 2025 à 25 % en 2026. 65 % corrigent régulièrement les résultats de l'IA et 41 % disent parfois l'utiliser plus que nécessaire. Les répondants au rapport ne sont pas dénombrés sur la page. Les organisations ayant une stratégie IA claire — déclarée par 17 % des développeurs et 23 % des dirigeants — voient leurs développeurs deux fois plus susceptibles de signaler moins de friction. Exemple distinct, sans recours à l'IA : 150 employés d'Atlassian Williams F1 ont économisé plus de 863 heures mensuelles de réunions à faible valeur.",
    relevance:
      "Sans stratégie et gouvernance adaptées, l'IA ne supprime pas les frictions organisationnelles ni les difficultés de coordination.",
    source: "Atlassian — Inside Atlassian",
    link: "https://www.atlassian.com/blog/development/developer-experience-report-2026",
    recordType: "édition",
    category: "Organisation",
    icon: "🏢",
  },
  {
    id: 20,
    sortDate: "2026-10-08",
    date: "8 octobre 2026 (dépôt de prépublication)",
    week: "Édition du 22 octobre 2026",
    title:
      "« Who Pays the Review Cost? » : triage, équité et responsabilité dans les demandes de fusion générées par IA",
    description:
      "Questionnaire à méthodes mixtes auprès de 239 praticiens de 31 pays exposés aux demandes de fusion rédigées par l'IA. L'autorat par l'IA n'est pas décrit comme un motif catégorique de rejet : les répondants conditionnent la révision à un périmètre limité, une justification ancrée dans le projet, une validation au-delà de l'intégration continue, la réactivité du contributeur et une responsabilité identifiable après fusion. Pour les nouveaux contributeurs, ils privilégient une participation visible à la revue plutôt que la seule réputation du profil. Les auteurs nomment « dette de vérifiabilité » l'absence de justification, validation et responsabilité.",
    relevance:
      "La gouvernance se déplace de la réputation vers une responsabilité humaine observable dans le processus de revue.",
    source: "arXiv (prépublication)",
    link: "https://arxiv.org/abs/2610.11179",
    recordType: "édition",
    category: "Revue de code",
    icon: "⚖️",
  },
  {
    id: 21,
    sortDate: "2026-10-05",
    date: "5 octobre 2026",
    week: "Édition du 24 octobre 2026",
    title:
      "Analyse préliminaire de l'impact du code assisté par IA sur la qualité et la revue à grande échelle (Meta)",
    description:
      "Étude présentée dans les actes ESEM 2026, fondée sur plus de 10 000 développeurs et 400 000 diffs chez Meta. Le traçage de provenance au niveau des caractères suit le code suggéré par l'IA à travers modification, revue et intégration. Le code IA apparaît plus souvent dans du code moins central, des changements plus grands, des fichiers de test et chez des auteurs plus anciens. Les temps de revue et taux de pannes de production (SEV) paraissent plus faibles pour les diffs avec IA, mais ces associations sont confondues par le contexte moins central où le code IA est utilisé.",
    relevance:
      "Une comparaison naïve entre code IA et non-IA peut induire en erreur : centralité, ancienneté et taille des changements doivent être contrôlées.",
    source: "Schloss Dagstuhl — ESEM 2026",
    link: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESEM.2026.93",
    recordType: "édition",
    category: "Étude",
    icon: "🔬",
  },
  {
    id: 22,
    sortDate: "2026-10-15",
    date: "15 octobre 2026",
    week: "Édition du 24 octobre 2026",
    title: "L'apprentissage humain, facteur sous-estimé des équipes humain-IA",
    description:
      "Une réanalyse dirigée par Julian Berger et Stefan Herzog examine 74 études d'interaction humain-IA, dont des tâches d'écriture de code. Les équipes humain-IA tendent à dépasser le meilleur partenaire seul lorsque les participants disposent à la fois de retours (bonne réponse après chaque décision) et d'explications ; les explications seules sont associées à une synergie nettement négative. Seules 10 études sur 74 fournissaient un retour et aucune ne manipulait expérimentalement les possibilités d'apprentissage.",
    relevance:
      "La synergie dépend de la capacité des humains à apprendre à évaluer la fiabilité de l'IA grâce aux retours, et non de l'outil seul.",
    source: "Max Planck Institute for Human Development (communiqué ; étude PNAS)",
    link: "https://www.mpib-berlin.mpg.de/press-releases/human-ai-collaboration",
    recordType: "édition",
    category: "Étude",
    icon: "🧠",
  },
  {
    id: 23,
    sortDate: "2026-10-24",
    date: "24 octobre 2026 (dépôt de prépublication)",
    week: "Édition du 27 octobre 2026",
    title: "Les développeurs comme managers d'agents IA : étude d'observation en entreprise",
    description:
      "Observation en entreprise de 11 développeurs pendant environ 15 heures, analyse de 255 prompts et 4,6 heures d'entretiens. Les participants passent en moyenne 33,4 % du temps observé à formuler des prompts ou vérifier l'IA ; leur rythme de changement de tâche varie de 0 à 101,6 par heure. Trois profils sont identifiés : Superviseur (inspection directe), Délégant (coordination par dialogue et délégation) et Apprenant (acquisition de connaissances avec les agents). Les agents sont sollicités pour l'information technique, les collègues pour le contexte organisationnel, l'autorité et l'alignement.",
    relevance:
      "Le développeur devient gestionnaire d'agents ; la collaboration humaine se recentre sur le contexte organisationnel, l'autorité et l'alignement.",
    source: "arXiv (prépublication)",
    link: "https://arxiv.org/abs/2610.33588",
    recordType: "édition",
    category: "Organisation",
    icon: "👥",
  },
  {
    id: 24,
    sortDate: "2026-10-20",
    date: "20 octobre 2026",
    week: "Édition du 27 octobre 2026",
    title:
      "L'IA divise par deux le temps de codage open source, mais 25 % des PR sont du « AI slop »",
    description:
      "Enquête de Linux Foundation Research (parrainage Red Hat, soutien de Futurewei, OpenSSF et LF AI & Data ; nombre de répondants non indiqué). Les répondants estiment que le temps de rédaction de code open source baisse de 52 %. En parallèle, 25 % des pull requests entrantes sont jugées de faible qualité (31 % dans les grands projets) ; 59 % des mainteneurs signalent une hausse du volume de contributions (69 % dans les grands projets) et 71 % estiment que l'IA réduit les barrières à l'entrée. 53 % ne sont pas d'accord que la confiance communautaire s'est améliorée ; 61 % des contributeurs déclarent faire des revues détaillées et des tests complets avant soumission. 46 % des mainteneurs déclarent un besoin accru de mentorat (32 % un besoin réduit) et seuls 35 % des projets ont une politique formelle sur la GenAI.",
    relevance:
      "L'IA facilite et accélère la contribution, mais la qualité perçue, la confiance, la revue et le mentorat pèsent sur la collaboration communautaire.",
    source: "The Linux Foundation (communiqué)",
    link: "https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-",
    recordType: "édition",
    category: "Enquête",
    icon: "🌐",
  },
  {
    id: 25,
    sortDate: "2026-10-23",
    date: "23 octobre 2026 (dépôt de prépublication)",
    week: "Édition du 29 octobre 2026",
    title: "Trajectoires GitHub Copilot : la collaboration humain-agent en conditions réelles",
    description:
      "Analyse de 7 581 pull requests Copilot avec données de session publiques, étudiant les trajectoires humain-dans-la-boucle « dans la nature ». 58 % des PR ne comportent aucune intervention humaine ; quand les développeurs interviennent, la collaboration est brève (médiane de 2 boucles). Les PR fusionnées tendent à avoir moins d'itérations initiales que les autres. Après la première intervention humaine, la trajectoire chute significativement de 20,8 itérations et 8,4 minutes, tandis que les interventions suivantes ont un effet moindre. Les développeurs guident parfois l'agent à plusieurs reprises ou sur plusieurs éditions de la PR.",
    relevance:
      "Cette observation des pratiques réelles complète les enquêtes déclaratives et documente les formes de collaboration avec un agent en équipe.",
    source: "arXiv (prépublication)",
    link: "https://arxiv.org/abs/2610.32313",
    recordType: "édition",
    category: "Pratique",
    icon: "🔁",
  },
  {
    id: 26,
    sortDate: "2026-10-27",
    date: "27 octobre 2026 (révision v2 ; dépôt v1 le 2 juillet 2026)",
    week: "Édition du 29 octobre 2026",
    title: "« AI Writes Faster Than Humans Can Review » : étude longitudinale d'un mandat « 2x »",
    description:
      "Étude de cas quantitative d'une entreprise ayant fixé en juin 2025 l'objectif de doubler les pull requests fusionnées par ingénieur grâce à l'IA. Le panel couvre 802 développeurs et 196 212 PR de janvier 2024 à avril 2026. La cible n'est atteinte qu'au dixième mois : le débit augmente d'environ 12 % quand chaque développeur commence à utiliser l'IA, puis continue de croître avec l'usage. Les jours de travail supplémentaires expliquent au plus un cinquième de la hausse ; les PR sont plus volumineuses et davantage orientées fonctionnalités et corrections. Le gain est similaire selon l'ancienneté et plus élevé dans les dépôts créés depuis 2022. La charge par réviseur double et la revue automatisée dépasse la revue humaine en couverture en quelques mois.",
    relevance:
      "Rare preuve longitudinale de la redistribution du travail : le débit augmente, mais une part du coût est reportée sur la revue humaine.",
    source: "arXiv (prépublication)",
    link: "https://arxiv.org/abs/2607.01904",
    recordType: "édition",
    category: "Revue de code",
    icon: "📈",
  },
  {
    id: 27,
    sortDate: "2026-11-03",
    date: "3 novembre 2026",
    week: "Édition du 14 novembre 2026",
    title: "Comment les suggestions Copilot affectent frustration et productivité ?",
    description:
      "Étude quasi-expérimentale croisée AB/BA auprès de 33 développeurs (16 experts, 17 novices), chacun réalisant deux tâches de maintenance Java : suggestions Copilot automatiques, ou Copilot sur demande. La frustration est inférée à partir de la variabilité de la fréquence cardiaque (RMSSD, bracelet Empatica Embrace PLUS) ; la productivité réelle est mesurée par la proportion de sous-tâches correctes et le temps. Chez les experts, le mode réactif est associé à une frustration inférée plus faible (β = 18,762 ; p = 0,001) et une productivité réelle plus élevée (médianes 0,75 contre 0,41 ; p ajusté = 0,0468). Chez les novices, les suggestions automatiques sont associées à une productivité réelle et perçue plus élevée (médianes 0,46 contre 0,15 ; p ajusté = 0,0063). Publication dans Empirical Software Engineering, vol. 32, article 42 (2027).",
    relevance:
      "L'effet des suggestions varie selon l'expérience : les stratégies d'interaction avec l'IA doivent tenir compte des niveaux de compétence présents dans l'équipe.",
    source: "Springer Nature — Empirical Software Engineering",
    link: "https://link.springer.com/article/10.1007/s10664-026-10965-6",
    recordType: "édition",
    category: "Étude",
    icon: "💓",
  },
  {
    id: 28,
    sortDate: "2026-10-30",
    date: "30 octobre 2026 (corrigé et composé le 10 novembre 2026)",
    week: "Édition du 14 novembre 2026",
    title:
      "Concevoir la collaboration humain-IA : productivité, satisfaction et diversité créative",
    description:
      "Expérience en classe auprès de 285 étudiants, chacun écrivant deux histoires de 1 000 mots : sans IA au premier jour, puis avec ChatGPT 3.5 selon un modèle assigné (Human Confirmation, Human Creativity ou Copilot). Quatre évaluateurs ont évalué 549 histoires (2 196 évaluations). La baisse de qualité entre les jours est plus forte sous Human Confirmation que sous Copilot (b = −0,43 ; p = 0,007). La similarité sémantique est la plus élevée sous Human Confirmation (0,779 contre 0,647 sans IA). Les participants Human Creativity et Copilot rapportent plus de fierté et un sentiment de partenariat accru (p = 0,0052 et p = 0,0025). Préserver l'implication humaine dans l'idéation et le plan protège qualité et diversité collective sans allonger le temps total. Séances de 105 minutes.",
    relevance:
      "Le moment où l'humain intervient — idéation et planification ou simple confirmation — conditionne qualité, satisfaction et diversité collective.",
    source: "PNAS Nexus — Oxford University Press",
    link: "https://academic.oup.com/pnasnexus/article/5/11/pgag353/9025436",
    recordType: "édition",
    category: "Étude",
    icon: "✍️",
  },
  {
    id: 29,
    sortDate: "2026-09-03",
    date: "3 septembre 2026",
    week: "S1 · classement du 11 septembre 2026",
    title: "« The Agentic Pivot: Why the work around code matters more than ever »",
    description:
      "Rapport fondé sur un sondage de plus de 1 100 ingénieurs et responsables d'ingénierie. 94 % des responsables déclarent que leur organisation utilise l'IA, mais seulement 19 % ont construit un système de travail d'ingénierie gouverné pour l'IA (88 % en ressentent le besoin). 78 % des équipes s'appuient encore sur la revue par les pairs traditionnelle face au code IA. Seuls 15 % des ingénieurs se disent très confiants de pouvoir reconstituer le raisonnement derrière une décision assistée par IA six mois plus tard.",
    relevance:
      "Le goulot d'étranglement se déplace vers le travail autour du code — planification, revue et contexte — où se transforme la collaboration d'équipe.",
    source: "Atlassian — Inside Atlassian",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date de publication sur la page originale et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Organisation",
    icon: "🗂️",
  },
  {
    id: 30,
    sortDate: "2026-09-08",
    date: "Présenté du 8 au 11 septembre 2026 (date de publication non précisée)",
    week: "S1 · classement du 17 septembre 2026",
    title: "« When the Pair Becomes Three » : GitHub Copilot en programmation en binôme",
    description:
      "Observation qualitative de 40 semaines dans une équipe de 7 membres utilisant GitHub Copilot en programmation en binôme. L'IA transforme le binôme en « trio » : rédaction collective des prompts, négociation des suggestions, davantage de discussions et de partage de connaissances. Les séances deviennent toutefois plus longues et plus fatigantes cognitivement ; une dette technique apparaît lorsque des suggestions sont acceptées sans évaluation, phénomène reconnu vers la semaine 30 sur 40. Présenté à la conférence SBES 2026 (CBSoft).",
    relevance:
      "Observation directe de la transformation du binôme : l'IA crée des stratégies de négociation collective autour de ses suggestions.",
    source: "CBSoft 2026 — SBES (PDF)",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date de la conférence et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Pratique",
    icon: "🤝",
  },
  {
    id: 31,
    sortDate: "2026-09-22",
    date: "22 septembre 2026 (page mise à jour ; publication initiale le 27 mai 2026)",
    week: "S2 · classement du 22 septembre 2026",
    title: "« The State of AI-Powered Software Development »",
    description:
      "Enquête UserEvidence menée en mars 2026 auprès de 831 ingénieurs logiciels et professionnels DevOps. 97 % utilisent des assistants de codage IA et 92 % constatent une amélioration de la productivité (8 heures gagnées par semaine en moyenne). Pourtant, 90 % des équipes rencontrent des problèmes liés au code IA dans leur flux de travail ; revue manuelle (52 %), tests de sécurité (51 %) et réécriture (48 %) sont les principaux goulots d'étranglement.",
    relevance:
      "L'enquête quantifie les nouveaux goulots d'étranglement d'équipe — revue, tests et réécriture — qui accompagnent l'adoption de l'IA.",
    source: "Black Duck — Rapport",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier les dates de publication et de mise à jour dans le HTML brut, et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Enquête",
    icon: "📋",
  },
  {
    id: 32,
    sortDate: "2026-09-23",
    date: "23 septembre 2026",
    week: "S2 · classement du 23 septembre 2026",
    title: "« What the Sonar State of Code Developer Survey Report 2026 Says »",
    description:
      "Analyse du rapport Sonar « State of Code 2026 ». 53 % des développeurs déclarent que l'IA a produit du code apparemment correct mais peu fiable, nuisant à leur dette technique. 40 % des développeurs juniors (10 ans d'expérience ou moins) estiment que la revue du code IA demande plus d'effort que celle du code humain, contre 29 % chez les seniors (20 ans ou plus). Les juniors estiment que 45 % de leur code soumis est assisté par l'IA, contre 40 % chez les seniors.",
    relevance:
      "La revue devient plus exigeante et la dette technique générée peut peser sur la collaboration future de l'équipe.",
    source: "Conversational Geek — analyse",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date de publication et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Revue de code",
    icon: "🧩",
  },
  {
    id: 33,
    sortDate: "2026-09-25",
    date: "25 septembre 2026",
    week: "S3 · classement du 25 septembre 2026",
    title: "« AI Coding Tools in Mid-2026: High Adoption, Low Trust »",
    description:
      "Enquête informelle auprès de 103 développeurs : 87 % utilisent ou prévoient d'utiliser des outils de codage IA, mais seulement 31 % font confiance à l'exactitude du code généré et 4 % déclarent une grande confiance. Seuls 13 % estiment que les agents IA ont amélioré la collaboration dans l'équipe, contre 56 % pour la productivité individuelle. La source signale les limites de cette enquête informelle.",
    relevance:
      "L'écart entre adoption, confiance et bénéfices perçus pour la collaboration — bien plus faibles que pour la productivité individuelle — concerne directement la problématique.",
    source: "SD Times",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date et la méthodologie (enquête informelle, limites signalées), et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Enquête",
    icon: "📉",
  },
  {
    id: 34,
    sortDate: "2026-04-15",
    date: "15 avril 2026 (présenté à ICSE 2026)",
    week: "S3 · classement du 1er octobre 2026",
    title: "« Understanding AI's Impact on Developer Workflows » (JetBrains HAX)",
    description:
      "Étude mixte combinant la télémétrie de 800 développeurs sur deux ans (octobre 2022 à octobre 2024) et une enquête auprès de 62 professionnels. Plus de 80 % des répondants déclarent une hausse de productivité ; les journaux montrent davantage de code saisi et supprimé chez les utilisateurs d'IA, signal comportemental de cycles d'édition et de reprise plus fréquents. Un architecte décrit l'IA comme une « deuxième paire d'yeux », mais la collaboration entre collègues n'a pas été mesurée séparément.",
    relevance:
      "La télémétrie complète les perceptions déclarées pour comprendre l'évolution des workflows, tout en rappelant que l'étude ne mesure pas séparément la collaboration entre collègues.",
    source: "JetBrains Blog — Research",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier les dates de publication et de mise à jour dans le HTML brut, et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Étude",
    icon: "🖥️",
  },
  {
    id: 35,
    sortDate: "2026-10-05",
    date: "5 octobre 2026",
    week: "S4 · classement du 5 octobre 2026",
    title: "« The risks of AI overreliance in software engineering »",
    description:
      "L'article cite une étude 2026 de Management Science portant sur 4 867 développeurs chez Microsoft, Accenture et une entreprise Fortune 100 : l'accès à un assistant de codage IA est associé à 26 % de tâches supplémentaires, avec des gains plus élevés chez les moins expérimentés. Une méta-analyse de 23 études citée rapporte un effet positif modéré sur la productivité, mais aucune preuve d'amélioration de l'apprentissage ou des compétences. L'article aborde aussi la « verification tax » de DORA et une étude longitudinale où la charge des réviseurs a doublé après l'adoption d'outils IA.",
    relevance:
      "La sur-dépendance, la compréhension du code, l'apprentissage des compétences et la charge de vérification sont des enjeux de long terme pour l'équipe.",
    source: "TechTarget",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date et les études citées dans la page originale, et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Organisation",
    icon: "⚠️",
  },
  {
    id: 36,
    sortDate: "2026-10-06",
    date: "6 octobre 2026 (annonce des résultats)",
    week: "S4 · classement du 6 octobre 2026",
    title: "« The results of the 2026 Developer Survey are here! »",
    description:
      "Enquête Stack Overflow menée sur sept semaines auprès de plus de 30 000 répondants. 62 % voient l'IA au moins plutôt positivement (71 % chez les utilisateurs quotidiens) ; 93 % estiment que l'attribution des sources est nécessaire pour faire confiance aux réponses de l'IA. Selon la page des résultats IA, 48 % ne font confiance à l'IA que lorsque ses réponses peuvent être facilement vérifiées.",
    relevance:
      "L'acceptation de l'IA reste conditionnelle à la vérifiabilité, ce qui influence son intégration aux pratiques collaboratives des équipes.",
    source: "Stack Overflow — blog et résultats IA",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date de l'annonce officielle et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Enquête",
    icon: "🗳️",
  },
  {
    id: 37,
    sortDate: "2026-05-22",
    date: "22 mai 2026 (dépôt de la prépublication v1)",
    week: "S5 · classement du 10 octobre 2026",
    title: "« The Impact of AI Coding Assistants on Software Engineering »",
    description:
      "Étude longitudinale avec deux questionnaires à six mois d'intervalle (158 puis 101 participants, cohorte appariée de 95). 82 % des participants déclarent passer moins de temps à écrire du code : le travail se déplace de la création vers la vérification. Les auteurs nomment « travail d'ingénierie de supervision » le fait de diriger, évaluer et corriger les sorties de l'IA. La part des participants signalant une expérience développeur dégradée passe de 14 % à 27 %.",
    relevance:
      "L'étude documente un nouveau travail de supervision qui restructure le rôle de l'ingénieur et la répartition des activités d'équipe.",
    source: "arXiv (prépublication 2605.23135)",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier la date de dépôt sur arXiv et aider à la synthèse.",
    recordType: "hebdomadaire",
    category: "Étude",
    icon: "📝",
  },
  {
    id: 38,
    sortDate: "2026-10",
    date: "Date de publication non précisée (page retenue dans la sélection du 13 octobre 2026)",
    week: "S5 · classement du 13 octobre 2026",
    title: "« DORA: ROI of AI-assisted Software Development »",
    description:
      "La page Google Cloud / DORA présente un cadre reliant les indicateurs de performance technique aux résultats financiers via le cadre de livraison DORA. Elle explique la « courbe en J » : les gains initiaux de vitesse de codage ne se traduisent pas automatiquement en impact financier et un coût d'apprentissage initial (« tuition cost ») est à prévoir. Le rapport recommande de réinvestir la capacité récupérée, notamment en réduisant les reprises inutiles, plutôt que de réduire les effectifs.",
    relevance:
      "L'évaluation passe de la productivité individuelle à l'impact organisationnel et financier sur la performance collective.",
    source: "Google Cloud — DORA Report",
    preparation:
      "Perplexity Computer a été utilisé pour rechercher la source, vérifier les dates et les conclusions présentes sur la page, et aider à la synthèse. La date de publication n'est pas précisée.",
    recordType: "hebdomadaire",
    category: "Organisation",
    icon: "📐",
  },
];

const categories: Array<"Tous" | Category> = [
  "Tous",
  "Étude",
  "Revue de code",
  "Organisation",
  "Enquête",
  "Pratique",
];

export default function Veille() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const sortedNews = [...newsItems].sort((a, b) =>
    b.sortDate.localeCompare(a.sortDate),
  );
  const filteredNews =
    selectedCategory === "Tous"
      ? sortedNews
      : sortedNews.filter((item) => item.category === selectedCategory);
  const editionCount = newsItems.filter(
    (item) => item.recordType === "édition",
  ).length;
  const weeklyCount = newsItems.filter(
    (item) => item.recordType === "hebdomadaire",
  ).length;
  const linkedCount = newsItems.filter((item) => item.link).length;

  return (
    <div className="veille-container">
      <section className="veille-hero">
        <div className="hero-blur"></div>
        <div className="veille-hero-content">
          <h1>Veille technologique</h1>
          <p>
            Comment l’intelligence artificielle transforme-t-elle la
            collaboration et l’organisation du travail au sein des équipes de
            développement logiciel ?
          </p>
          <p className="veille-scope-note">
            Les semaines S1 à S5 sont un classement rétrospectif préparé le 13
            octobre 2026 ; elles ne constituent pas des dates de consultation.
            Pour ces entrées, Perplexity Computer a aidé à préparer la veille.
          </p>
        </div>
      </section>

      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="news-grid-section">
        <div className="container">
          <div className="news-grid">
            {filteredNews.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <article
                  key={item.id}
                  className={`news-card ${isExpanded ? "expanded" : ""}`}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  <div className="news-header">
                    <div className="news-icon">{item.icon}</div>
                    <div className="news-meta">
                      <span className="news-week">{item.week}</span>
                      <span className="news-date">{item.date}</span>
                    </div>
                    <span
                      className={`news-category category-${item.category.toLowerCase().replace(/ /g, "-")}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3 className="news-title">{item.title}</h3>
                  {item.source && (
                    <p className="news-source">Source : {item.source}</p>
                  )}

                  {isExpanded && (
                    <div className="news-details">
                      <p className="news-description">{item.description}</p>
                      {item.relevance && (
                        <p className="news-relevance">
                          <strong>Intérêt pour la problématique : </strong>
                          {item.relevance}
                        </p>
                      )}
                      {item.preparation && (
                        <p className="news-preparation">{item.preparation}</p>
                      )}
                      {item.link && (
                        <a
                          className="news-source-link"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Consulter la source d’origine ↗
                        </a>
                      )}
                      {!item.link && item.recordType === "hebdomadaire" && (
                        <p className="news-no-link">
                          Aucun lien direct n’était indiqué dans la sélection.
                        </p>
                      )}
                    </div>
                  )}

                  <div className="news-footer">
                    <span className="read-more">
                      {isExpanded ? "← Réduire" : "Lire plus →"}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>Résumé de la veille</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{filteredNews.length}</div>
              <div className="stat-label">Entrées affichées</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{editionCount}</div>
              <div className="stat-label">Articles des éditions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{weeklyCount}</div>
              <div className="stat-label">Entrées hebdomadaires S1–S5</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{linkedCount}</div>
              <div className="stat-label">Sources avec lien direct</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
