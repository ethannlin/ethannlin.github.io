// All site content lives here. About text = Ethan's own words (placeholders marked [ ]).
export const site = {
  name: "Ethan Lin",
  role: "M.S. in AI, Santa Clara University",
  email: "enlin@scu.edu",
  photo: "/photo.jpg", // null hides it
  about: [
    `Hi! I'm an M.S. student in Artificial Intelligence at <a href="https://www.scu.edu" target="_blank" rel="noopener">Santa Clara University</a>, advised by Professor <a href="https://yi-fang.org/" target="_blank" rel="noopener">Yi Fang</a> and Professor <a href="https://hyang1999.github.io/" target="_blank" rel="noopener">Hoeseok Yang</a>. I'm currently a visiting researcher at <a href="https://www.docomoinnovations.com/" target="_blank" rel="noopener">DOCOMO Innovations</a>.`,
    `My research interests are in machine learning and LLMs, particularly how models and LLM-driven systems learn from feedback, and how to make them efficient and reliable.`,
  ],
  links: [
    ["scholar", "https://scholar.google.com/citations?hl=en&user=SjV-FeUAAAAJ"],
    ["github", "https://github.com/ethannlin"],
    ["linkedin", "https://www.linkedin.com/in/ethannlin"],
  ],
  papers: [
    { badge: "preprint", kind: "pre", title: "Component-Aware Feedback for Self-Evolving Programs", authors: "Ethan Lin, Jinming Nian, Yi Fang", venue: "Under review", links: [["paper", "https://arxiv.org/abs/2609.38639"]] },
    { badge: "TCAD", kind: "journal", title: "ACAS: Adaptive Control of Inference‑Time Activation Sparsity for On‑Device LLMs", authors: "Ethan Lin, Youngmin Yi, Hoeseok Yang", venue: "IEEE TCAD 2026 (to appear)", links: [["paper", "/acas-paper.pdf"], ["code", "https://github.com/SCU-CoAI/acas"], ["slides", "/acas-slides.pdf"]] },
    { badge: "MMSP", kind: "workshop", title: "LoRA-MIC: Low-Rank Adaptation for Machine-Vision Image Compression", authors: "Ethan Lin, Jeromy Chang, Giuseppe Valenzise, Ying Liu", venue: "IEEE MMSP 2026 (to appear)", links: [["paper", "https://centralesupelec.hal.science/hal-05729521/document"]] },
    { badge: "AISD @ NAACL", kind: "workshop", title: "Evaluating and Enhancing LLMs for Novelty Assessment in Scholarly Publications", authors: "Ethan Lin, Zhiyuan Peng, Yi Fang", venue: "AISD @ NAACL 2025", links: [["paper", "https://aclanthology.org/2025.aisd-main.5/"], ["code", "https://github.com/ethannlin/SchNovel"]] },
  ],
  news: [], // empty = no news section
  experience: [
    ["Visiting Researcher", "DOCOMO Innovations", "2026-now"],
    ["Research Assistant", "Santa Clara University", "2024-now"],
    ["Embedded Software Engineer Co-op", "Nokia", "2026"],
  ],
  teaching: [
    ["Introduction to Logic Design", "Teaching Assistant, Santa Clara University", "2025-now"],
    ["Advanced Logic Design", "Teaching Assistant, Santa Clara University", "2025-now"],
    ["Mathematics & Computer Science", "Tutor, Santa Clara University", "2022-25"],
  ],
  awards: [
    ["AI Impact Scholarship (1 of 4 recipients)", "Santa Clara University", "2026-27"],
    ["CSE Outstanding Senior Award (sole recipient)", "Santa Clara University", "2025"],
  ],
  updated: "nov 2026",
};
