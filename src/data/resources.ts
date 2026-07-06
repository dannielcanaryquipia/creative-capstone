export interface ResourceEntry {
  weekNumber: number;
  weekTitle: string;
  title: string;
  url?: string;
  author?: string;
  publication?: string;
  year?: string;
  type: "video" | "reading" | "file" | "book" | "report" | "article";
}

export const resources: ResourceEntry[] = [
  // ── Week 2: Citizenship and Global Responsibility (Part 1) ──
  {
    weekNumber: 2,
    weekTitle: "Citizenship and Global Responsibility (Part 1)",
    title: "What is Global Citizenship? | Education resources | Oxfam GB",
    type: "reading",
    url: undefined,
  },
  {
    weekNumber: 2,
    weekTitle: "Citizenship and Global Responsibility (Part 1)",
    title: "Global Citizenship: Citizens of the 21st Century",
    url: "https://youtu.be/8PppB07-JAg",
    type: "video",
  },
  {
    weekNumber: 2,
    weekTitle: "Citizenship and Global Responsibility (Part 1)",
    title: "You're a Global Citizen, You Just Don't Know it Yet — Teo Nenes, TEDxYouth@SWA",
    url: "https://youtu.be/Ztby2esVyTc",
    type: "video",
  },
  {
    weekNumber: 2,
    weekTitle: "Citizenship and Global Responsibility (Part 1)",
    title: "What it means to live in the era of global citizens — Armand Arton, TEDxVitosha",
    url: "https://youtu.be/nJq1g8kvN04",
    type: "video",
  },

  // ── Week 3: Citizenship and Global Responsibility (Part 2) ──
  {
    weekNumber: 3,
    weekTitle: "Citizenship and Global Responsibility (Part 2)",
    title: "The Better World Handbook — Building a Better World",
    author: "Ellis Jones et al.",
    url: "/pdf-files/The Better World Handbook Building a Better World.pdf",
    type: "file",
  },

  // ── Week 4: Cross-Cultural Understanding (Part 1) ──
  {
    weekNumber: 4,
    weekTitle: "Cross-Cultural Understanding (Part 1)",
    title: "The Cultural Iceberg",
    url: "https://youtu.be/a9Z83I_g4Hw",
    type: "video",
  },
  {
    weekNumber: 4,
    weekTitle: "Cross-Cultural Understanding (Part 1)",
    title: "How Culture Drives Behaviours — Julien S. Bourrelle, TEDxTrondheim",
    url: "https://youtu.be/l-Yy6poJ2zs",
    type: "video",
  },
  {
    weekNumber: 4,
    weekTitle: "Cross-Cultural Understanding (Part 1)",
    title: "Intersectionality 101",
    url: "https://youtu.be/w6dnj2IyYjE",
    type: "video",
  },
  {
    weekNumber: 4,
    weekTitle: "Cross-Cultural Understanding (Part 1)",
    title: "Kimberlé Crenshaw at TED + Animation",
    url: "https://youtu.be/JRci2V8PxW4",
    type: "video",
  },
  {
    weekNumber: 4,
    weekTitle: "Cross-Cultural Understanding (Part 1)",
    title: "Turning Cultural Differences Into Workplace Assets",
    author: "Howard Ross",
    publication: "Recognition and Engagement Excellence Essentials",
    year: "2018",
    url: "/pdf-files/Turning Cultural Differences into Workplace Assets.pdf",
    type: "file",
  },

  // ── Week 5: Cross-Cultural Understanding (Part 2) ──
  {
    weekNumber: 5,
    weekTitle: "Cross-Cultural Understanding (Part 2)",
    title: "Effective Cross Cultural Communication 101",
    url: "https://youtu.be/lMplUEgo5YQ",
    type: "video",
  },
  {
    weekNumber: 5,
    weekTitle: "Cross-Cultural Understanding (Part 2)",
    title: "Cultural Barriers to Communication — Businesstopia",
    type: "reading",
    url: undefined,
  },
  {
    weekNumber: 5,
    weekTitle: "Cross-Cultural Understanding (Part 2)",
    title: "Communication: The Process, Barriers, and Improving Effectiveness",
    author: "Fred C. Lunenburg",
    publication: "Schooling",
    year: "2010",
    url: "/pdf-files/Communication_Process_Barriers and Improving Effectiveness.PDF",
    type: "file",
  },
  {
    weekNumber: 5,
    weekTitle: "Cross-Cultural Understanding (Part 2)",
    title: "Better World Handbook — Social Justice",
    author: "Ellis Jones et al.",
    url: "/pdf-files/The Better World Handbook Social Justice.pdf",
    type: "file",
  },

  // ── Week 6: Indigenous Understanding (Part 1) ──
  {
    weekNumber: 6,
    weekTitle: "Indigenous Understanding (Part 1)",
    title: "How to talk about Indigenous people",
    url: "https://youtu.be/XEzjA5RoLv0",
    type: "video",
  },
  {
    weekNumber: 6,
    weekTitle: "Indigenous Understanding (Part 1)",
    title: "Justice for Aboriginal Peoples — It's time",
    url: "https://youtu.be/r5DrXZUIinU",
    type: "video",
  },
  {
    weekNumber: 6,
    weekTitle: "Indigenous Understanding (Part 1)",
    title: "Stories of Decolonization: Land Dispossession and Settlement",
    url: "https://youtu.be/aTruP6r2cAA",
    type: "video",
  },
  {
    weekNumber: 6,
    weekTitle: "Indigenous Understanding (Part 1)",
    title: "8th Fire — Part 1",
    url: "https://youtu.be/cb9f2L2u_JQ",
    type: "video",
  },
  {
    weekNumber: 6,
    weekTitle: "Indigenous Understanding (Part 1)",
    title: "8th Fire — Part 2",
    url: "https://youtu.be/JOeGtkp-HSQ",
    type: "video",
  },
  {
    weekNumber: 6,
    weekTitle: "Indigenous Understanding (Part 1)",
    title: "2.4 The Millennia before Contact – Canadian History: Pre-Confederation",
    type: "reading",
    url: undefined,
  },

  // ── Week 7: Indigenous Understanding (Part 2) ──
  {
    weekNumber: 7,
    weekTitle: "Indigenous Understanding (Part 2)",
    title: "Our Sisters In Spirit (MMIWG Documentary)",
    url: "https://youtu.be/zdzM6krfaKY",
    type: "video",
  },
  {
    weekNumber: 7,
    weekTitle: "Indigenous Understanding (Part 2)",
    title: "Truth and Reconciliation Commission of Canada — Calls to Action",
    publication: "Truth and Reconciliation Commission of Canada",
    year: "2015",
    url: "/pdf-files/Calls_to_Action_English2 (7).pdf",
    type: "file",
  },

  // ── Week 8: Entrepreneurship & Technology ──
  {
    weekNumber: 8,
    weekTitle: "Entrepreneurship & Technology",
    title: "Sustainability in 4 minutes — Sustainable Explainable",
    url: "https://youtu.be/t69P9_v7jrU",
    type: "video",
  },
  {
    weekNumber: 8,
    weekTitle: "Entrepreneurship & Technology",
    title: "Can We Fix the Planet? — Innovation and the Environment",
    url: "https://youtu.be/VY_sjjpV3SY",
    type: "video",
  },
  {
    weekNumber: 8,
    weekTitle: "Entrepreneurship & Technology",
    title: "22 Inventions That Are Saving The Earth",
    url: "https://youtu.be/FWFb-8hFutY",
    type: "video",
  },

  // ── Week 9: Ecological Literacy (Part 1) ──
  {
    weekNumber: 9,
    weekTitle: "Ecological Literacy (Part 1)",
    title: "The Better World Handbook — Ecological Sustainability",
    author: "Ellis Jones et al.",
    url: "/pdf-files/The Better World Handbook Ecological Sustainability (2).pdf",
    type: "file",
  },
  {
    weekNumber: 9,
    weekTitle: "Ecological Literacy (Part 1)",
    title: "Ecoliteracy: Learning from living systems",
    author: "Daniel Christian Wahl",
    publication: "Age of Awareness — Medium",
    type: "reading",
    url: undefined,
  },
  {
    weekNumber: 9,
    weekTitle: "Ecological Literacy (Part 1)",
    title: "What is water footprint assessment?",
    publication: "Water Footprint Network",
    type: "reading",
    url: undefined,
  },

  // ── Week 10: Ecological Literacy (Part 2) ──
  {
    weekNumber: 10,
    weekTitle: "Ecological Literacy (Part 2)",
    title: "Ecological Literacy – a basic Life Skill",
    type: "reading",
    url: undefined,
  },

  // ── Week 11: Health and Wellness (Part 1) ──
  {
    weekNumber: 11,
    weekTitle: "Health and Wellness (Part 1)",
    title: "The Wellness Continuum",
    url: "https://youtu.be/tjF-qNd3rY4",
    type: "video",
  },
  {
    weekNumber: 11,
    weekTitle: "Health and Wellness (Part 1)",
    title: "Health vs Wellness — Fahey et al.",
    year: "2019",
    type: "book",
  },
  {
    weekNumber: 11,
    weekTitle: "Health and Wellness (Part 1)",
    title: "9 Dimensions of Wellness — Fahey et al.",
    year: "2019",
    type: "book",
  },

  // ── Week 12: Health and Wellness (Part 2) ──
  {
    weekNumber: 12,
    weekTitle: "Health and Wellness (Part 2)",
    title: "Improve Your Life Using the Stages of Change Model — Dr. Wendy Guess",
    url: "https://youtu.be/Twlow2pXsv0",
    type: "video",
  },
  {
    weekNumber: 12,
    weekTitle: "Health and Wellness (Part 2)",
    title: "Setting SMART Goals",
    url: "https://youtu.be/Iyl_v-O_Cds",
    type: "video",
  },
  {
    weekNumber: 12,
    weekTitle: "Health and Wellness (Part 2)",
    title: "Transtheoretical Model of Behaviour Change — Stages of Change",
    type: "book",
  },
  {
    weekNumber: 12,
    weekTitle: "Health and Wellness (Part 2)",
    title: "SMART Goals Framework",
    type: "book",
  },
  {
    weekNumber: 12,
    weekTitle: "Health and Wellness (Part 2)",
    title: "Wellness Continuum Self-Assessment",
    type: "file",
    url: undefined,
  },
];
