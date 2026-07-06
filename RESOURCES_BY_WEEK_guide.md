# Resources by Week

Grouped exactly as needed for the Resources page navigation: one section per week, each with video links (title + URL), article links, and attached files. Titles for YouTube links were recovered by matching the inline links against the instructor's attachment list (same order, same count, matching topics per week).

Items marked **[no URL in source]** were referenced by title only in the original course email — no link was given, so double-check these before publishing.

---

## Week 2 — May 4 — Citizenship and Global Responsibility (Part 1)

**Videos**
- [Global Citizenship: Citizens of the 21st Century](https://youtu.be/8PppB07-JAg)
- [You're a Global Citizen, You Just Don't Know it Yet | Teo Nenes | TEDxYouth@SWA](https://youtu.be/Ztby2esVyTc)
- [What it means to live in the era of global citizens | Armand Arton | TEDxVitosha](https://youtu.be/nJq1g8kvN04)

**Articles**
- "What is Global Citizenship? | Education resources | Oxfam GB" **[no URL in source]**

**Files**
- None attached this week.

---

## Week 3 — May 11 — Citizenship and Global Responsibility (Part 2)

**Files**
- The Better World Handbook — *Building a Better World* (PDF)

**Videos / Articles**
- None listed this week.

---

## Week 4 — Cross-Cultural Understanding (Part 1)

**Videos**
- [The Cultural Iceberg](https://youtu.be/a9Z83I_g4Hw)
- [How Culture Drives Behaviours | Julien S. Bourrelle | TEDxTrondheim](https://youtu.be/l-Yy6poJ2zs)
- [Intersectionality 101](https://youtu.be/w6dnj2IyYjE)
- [Kimberlé Crenshaw at TED + Animation](https://youtu.be/JRci2V8PxW4)

**Files**
- "Turning Cultural Differences Into Workplace Assets" — Ross, Howard. *Recognition and Engagement Excellence Essentials*, 2018 (PDF)

---

## Week 5 — May 25 — Cross-Cultural Understanding (Part 2)

**Videos**
- [Effective Cross Cultural Communication 101](https://youtu.be/lMplUEgo5YQ)

**Articles**
- "Cultural Barriers to Communication" — Businesstopia **[no URL in source]**

**Files**
- "Communication: The Process, Barriers, and Improving Effectiveness" — Lunenburg, Fred C. *Schooling*, 2010 (PDF)
- The Better World Handbook — *Social Justice* (PDF)

---

## Week 6 — June 1 — Indigenous Understanding (Part 1)

**Videos**
- [How to talk about Indigenous people](https://youtu.be/XEzjA5RoLv0)
- [Justice for Aboriginal Peoples -- It's time](https://youtu.be/r5DrXZUIinU)
- [Stories of Decolonization: Land Dispossession and Settlement (Final Version)](https://youtu.be/aTruP6r2cAA)
- [8th Fire — Part 1](https://youtu.be/cb9f2L2u_JQ)
- [8th Fire — Part 2](https://youtu.be/JOeGtkp-HSQ)

**Articles**
- "2.4 The Millennia before Contact – Canadian History: Pre-Confederation" **[no URL in source]**

**Files**
- None attached this week.

---

## Week 7 — June 8 — Indigenous Understanding (Part 2)

**Videos**
- [Our Sisters In Spirit (MMIWG Documentary)](https://youtu.be/zdzM6krfaKY)

**Files**
- Truth and Reconciliation Commission of Canada — *Calls to Action* (PDF, 2015)

---

## Week 8 — June 22 — Entrepreneurship & Technology

*(content/reflection pending — resources below are ready to use once written)*

**Videos**
- [Sustainability in 4 minutes | Sustainable Explainable](https://youtu.be/t69P9_v7jrU)
- [Can We Fix the Planet? | Innovation and the Environment](https://youtu.be/VY_sjjpV3SY)
- [22 Inventions That Are Saving The Earth](https://youtu.be/FWFb-8hFutY)

---

## Week 9 — June 29 — Ecological Literacy (Part 1)

*(content/reflection pending — resources below are ready to use once written)*

**Files**
- The Better World Handbook — *Ecological Sustainability* (PDF)

**Articles**
- "Ecoliteracy: Learning from living systems" — Daniel Christian Wahl, *Age of Awareness* (Medium) **[no URL in source]**
- "What is water footprint assessment?" — Water Footprint Network **[no URL in source]**

---

## Week 10 — July 6 — Ecological Literacy (Part 2)

*(content/reflection pending)*

**Articles**
- "Ecological Literacy – a basic Life Skill" **[no URL in source]**

---

## Week 11 — July 13 — Health and Wellness (Part 1)

*(content/reflection pending)*

**Videos**
- [The Wellness Continuum](https://youtu.be/tjF-qNd3rY4)

---

## Week 12 — July 20 — Health and Wellness (Part 2)

*(content/reflection pending)*

**Videos**
- [Improve Your Life Using the Stages of Change Model (Transtheoretical) — @DrWendyGuess](https://youtu.be/Twlow2pXsv0)
- [Setting SMART Goals](https://youtu.be/Iyl_v-O_Cds)

**Files**
- "Wellness continuum self-assessment" — referenced as a download in the course material, but the actual file was not attached/provided. Needs to be added if you still have it.

---

## Implementation note for OpenCode

Structure `resources.ts` grouped by week to match this file directly, e.g.:

```ts
export const resourcesByWeek = [
  {
    week: 2,
    videos: [
      { title: "Global Citizenship: Citizens of the 21st Century", url: "https://youtu.be/8PppB07-JAg" },
      // ...
    ],
    articles: [
      { title: "What is Global Citizenship? | Education resources | Oxfam GB", url: null }
    ],
    files: []
  },
  // ...weeks 3–12
];
```

A `url: null` article should render on the Resources page as plain text (title only, no link) rather than a broken/dead link — flag these visually (e.g. muted text, no underline) so it's clear at a glance which citations still need a real URL.
