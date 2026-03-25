import type { ResourceItem } from '../types';

export const resourcesData: ResourceItem[] = [
  {
    slug: 'how-to-write-research-paper',
    route: '/resources/how-to-write-research-paper',
    title: 'How to Write a Research Paper: A Step-by-Step Engineering Guide',
    category: 'Research & Papers',
    readTime: '8 min read',
    description: 'A comprehensive, actionable framework for engineering scholars and students structuring their first technical research paper.',
    summary: 'Master the IMRaD architecture (Introduction, Methodology, Results, and Discussion), mathematical rigor, and reference hygiene needed for peer-reviewed conferences and journals.',
    publishedDate: '2025-01-15T09:00:00Z',
    seoTitle: 'How to Write an Engineering Research Paper: Complete Guide | PaperWorks',
    seoDescription: 'Learn how to write and structure a peer-reviewed engineering research paper. Practical guide covering abstract, methodology, results, and reference formatting.',
    keywords: ['how to write a research paper', 'engineering research paper guide', 'imrad structure', 'research methodology writing'],
    relatedServices: ['research-paper', 'ieee-formatting', 'paper-editing'],
    relatedResources: ['ieee-format-guide', 'review-paper-vs-research-paper'],
    sections: [
      {
        heading: '1. Understanding the Core Purpose of an Engineering Paper',
        paragraphs: [
          'A technical research paper is fundamentally a contribution report: it communicates a novel technique, an optimization over a known baseline, or a rigorous empirical evaluation of an existing system.',
          'Before typing your first sentence, pinpoint your primary contribution statement in one single sentence. If you cannot summarize what is novel about your work in 25 words or fewer, your experimental design may still be too broad.',
        ],
        keyTakeaway: 'Your contribution must address a clearly defined bottleneck, not simply demonstrate that a standard tool works.',
      },
      {
        heading: '2. Deconstructing the IMRaD Architecture',
        paragraphs: [
          'High-impact technical papers adhere to the classical IMRaD blueprint: Introduction, Methodology, Results, and Discussion.',
          '• Introduction: Establish the broad domain context, narrow down to the specific friction point or gap in existing literature, and conclude with bulleted primary contributions.',
          '• Related Work: Organize chronologically or thematically, showing why earlier solutions leave questions unanswered.',
          '• Proposed Architecture / Methodology: Provide a step-by-step mathematical formulation, algorithm pseudo-code, and system block diagram.',
          '• Experimental Evaluation & Results: Detail dataset parameters, hardware environment, evaluation metrics (e.g. F1-score, latency, memory footprint), and benchmark comparisons.',
          '• Discussion & Limitations: Be honest about edge cases and trade-offs. Peer reviewers respect intellectual honesty.',
        ],
        checklist: [
          'Does the introduction clearly state 2 to 3 distinct contributions?',
          'Is the proposed methodology accompanied by an architectural block diagram?',
          'Are baselines tested under identical conditions and datasets?',
        ],
      },
      {
        heading: '3. Crafting a High-Conversion Abstract and Title',
        paragraphs: [
          'Your abstract is the single most scrutinized paragraph in your paper. Editors use it to assign reviewers, and readers use it to decide whether to cite your work.',
          'Structure your abstract in five distinct sentences: (1) Background context, (2) The core unresolved problem, (3) Your proposed approach and key technical innovation, (4) Quantitative outcome (e.g., "reduces latency by 23.4% compared to baseline X"), and (5) Broader significance.',
        ],
        keyTakeaway: 'Always include hard quantitative numbers in your abstract rather than vague claims like "achieves superior performance."',
      },
      {
        heading: '4. Reference Hygiene and Citation Ethics',
        paragraphs: [
          'Citing relevant, recent, and foundational peer-reviewed literature builds immediate credibility with reviewers. Aim for 70% of citations to be from reputable peer-reviewed conferences and indexed journals within the past 3 to 5 years.',
          'Avoid relying on non-peer-reviewed blog posts or unverified GitHub repositories as foundational citations.',
        ],
      },
    ],
  },

  {
    slug: 'ieee-format-guide',
    route: '/resources/ieee-format-guide',
    title: 'IEEE Research Paper Format Explained: Two-Column Guidelines & Checklists',
    category: 'Formatting Standards',
    readTime: '7 min read',
    description: 'An authoritative guide to mastering IEEE conference and transactions specifications without falling into common formatting rejections.',
    summary: 'Navigate two-column geometry, font hierarchy, column balancing, equation numbering, and IEEE citation style [1] with complete clarity.',
    publishedDate: '2025-02-01T10:00:00Z',
    seoTitle: 'IEEE Research Paper Format: Guidelines, Columns & Rules | PaperWorks',
    seoDescription: 'Complete breakdown of IEEE two-column paper formatting. Font sizes, margins, equation placement, figure captions, and reference bracket styling.',
    keywords: ['ieee format guide', 'ieee two column format', 'ieee citation format', 'ieee paper guidelines'],
    relatedServices: ['ieee-formatting', 'research-paper', 'paper-editing'],
    relatedResources: ['how-to-write-research-paper', 'review-paper-vs-research-paper'],
    sections: [
      {
        heading: '1. Core IEEE Page Geometry & Margins',
        paragraphs: [
          'IEEE conference papers are structured on standard US Letter (8.5 x 11 in) or A4 paper with a strict two-column layout. Each column is typically 3.5 inches (88.9 mm) wide, separated by a 0.2-inch (5.1 mm) column gutter.',
          'Margins are typically: Top 0.75 in (19 mm), Bottom 1.0 in (25.4 mm), Left and Right 0.625 in (15.9 mm). Never compress margins to fit page constraints; reviewers notice immediately.',
        ],
      },
      {
        heading: '2. Typography and Heading Hierarchy',
        paragraphs: [
          'IEEE manuscripts utilize Times New Roman (or Computer Modern in LaTeX) with a precise point hierarchy:',
          '• Title: 24 pt, Regular, centered across both columns.',
          '• Author Names: 10 pt, Regular; Affiliations in 9 pt, Italic.',
          '• Section Headings (Level 1): 10 pt, Small Caps, Centered, Roman numerals (e.g., I. INTRODUCTION).',
          '• Subsections (Level 2): 10 pt, Italic, Left-aligned, Lettered (e.g., A. Architectural Overview).',
          '• Sub-subsections (Level 3): 10 pt, Italic, Indented, Arabic numerals with parenthesis.',
          '• Body Text: 10 pt, Regular, Justified, 1.15 line spacing.',
        ],
      },
      {
        heading: '3. Equations, Figures, and Tables',
        paragraphs: [
          '• Mathematical Equations: Center the equation in the column and place the equation number in parentheses flush right: (1). Refer to equations in text as "(1)" or "Equation (1)" at the start of a sentence.',
          '• Figures: Placed at the top or bottom of a column. Captions are placed BELOW the figure (e.g., "Fig. 1. Block diagram of proposed framework.").',
          '• Tables: Captions are placed ABOVE the table in Small Caps (e.g., "TABLE I: PERFORMANCE COMPARISON").',
        ],
        checklist: [
          'Are figures clear at 300 DPI without blurry text?',
          'Are equations numbered sequentially with parentheses flush right?',
          'Are captions placed below figures and above tables?',
        ],
      },
      {
        heading: '4. Final Page Column Balancing',
        paragraphs: [
          'A very common formatting error in IEEE submissions is leaving the final page with an uneven column height (e.g. left column full, right column empty). IEEE guidelines require column balancing on the final page so both columns terminate at the same vertical height.',
        ],
        keyTakeaway: 'In Microsoft Word, insert a Continuous Section Break before the References to automatically balance columns on the final page.',
      },
    ],
  },

  {
    slug: 'review-paper-vs-research-paper',
    route: '/resources/review-paper-vs-research-paper',
    title: 'Research Paper vs Review Paper: Structural Differences & When to Choose Each',
    category: 'Scholarly Writing',
    readTime: '6 min read',
    description: 'Understand the distinct objectives, methodological expectations, and structural differences between original research papers and review surveys.',
    summary: 'A side-by-side comparison of empirical research papers versus systematic review surveys to help scholars choose the right publication format.',
    publishedDate: '2025-02-12T11:00:00Z',
    seoTitle: 'Research Paper vs Review Paper: Key Differences & Structure | PaperWorks',
    seoDescription: 'Comprehensive comparison between a research paper and a review paper. Learn structural differences, citation depth, and when to write each.',
    keywords: ['research paper vs review paper', 'difference between research paper and review paper', 'survey paper writing', 'review paper format'],
    relatedServices: ['review-paper', 'research-paper', 'literature-review'],
    relatedResources: ['how-to-write-research-paper', 'literature-review-guide'],
    sections: [
      {
        heading: '1. Primary Objective Comparison',
        paragraphs: [
          'While both manuscript types advance scholarly understanding, their core purpose is fundamentally different:',
          '• Research Paper (Original Article): Reports primary research and empirical findings. The author formulates a hypothesis, designs an experiment, collects novel data, and evaluates the outcome.',
          '• Review Paper (Survey Article): Synthesizes secondary literature. The author systematically examines dozens or hundreds of published papers, identifies prevailing paradigms, compares benchmarks, and highlights unexplored research gaps.',
        ],
      },
      {
        heading: '2. Structural Breakdown Comparison',
        paragraphs: [
          'In a research paper, the heart of the document is Section III (Proposed Methodology) and Section IV (Experimental Results). The literature review occupies only one introductory section.',
          'In a review paper, literature analysis IS the paper. The core consists of systematic taxonomies, comparison matrices, methodological trade-off tables, and deep analytical discussions on future horizons.',
        ],
        keyTakeaway: 'A good review paper is not a book report; it provides original synthesis and comparative insight that does not exist in any single source paper.',
      },
      {
        heading: '3. When Should You Write Which?',
        paragraphs: [
          'Choose a Research Paper when: You have conducted concrete experiments, developed an algorithm, built a prototype, or collected proprietary benchmark datasets.',
          'Choose a Review Paper when: You are starting a PhD or Master’s thesis and need to master the field, or when a domain has experienced rapid publication growth and lacks a recent cohesive survey organizing state-of-the-art developments.',
        ],
      },
    ],
  },

  {
    slug: 'literature-review-guide',
    route: '/resources/literature-review-guide',
    title: 'How to Write a Comprehensive Literature Review: Thematic Synthesis & Gap Identification',
    category: 'Research Methodologies',
    readTime: '8 min read',
    description: 'Learn how to transition from an annotated bibliography to an analytical thematic synthesis that clearly defends your research problem.',
    summary: 'Step-by-step methodology for searching academic databases, constructing a literature synthesis matrix, and pinpointing convincing research gaps.',
    publishedDate: '2025-02-20T10:00:00Z',
    seoTitle: 'How to Write a Literature Review: Thematic Synthesis & Gaps | PaperWorks',
    seoDescription: 'Master the art of writing a thematic literature review for dissertations and journal papers. Avoid simple listing and construct rigorous comparison matrices.',
    keywords: ['how to write a literature review', 'literature synthesis matrix', 'identifying research gaps', 'dissertation literature review'],
    relatedServices: ['literature-review', 'research-paper', 'review-paper'],
    relatedResources: ['review-paper-vs-research-paper', 'how-to-write-research-paper'],
    sections: [
      {
        heading: '1. Escaping the "Annotated Bibliography" Trap',
        paragraphs: [
          'The most frequent flaw in student literature reviews is writing disconnected, sequential paragraphs: "Smith et al. (2021) proposed X. In 2022, Wang et al. did Y. Jones (2023) developed Z."',
          'This reads as an annotated catalog, not a scholarly review. A strong literature review is organized around themes, challenges, or methodological families.',
        ],
        keyTakeaway: 'Group studies by their fundamental approach or constraint (e.g., "Edge-computing solutions with memory constraints") and evaluate how researchers address that shared challenge.',
      },
      {
        heading: '2. Building a Synthesis Matrix',
        paragraphs: [
          'Before drafting text, construct a 5-column spreadsheet:',
          '1. Citation & Year',
          '2. Core Technical Architecture / Algorithm',
          '3. Benchmark Dataset & Sample Size',
          '4. Quantitative Results Achieved',
          '5. Explicit Limitations & Unhandled Assumptions',
          'Sorting this matrix reveals where existing solutions bottleneck, directly highlighting your research gap.',
        ],
      },
      {
        heading: '3. Articulating the Research Gap',
        paragraphs: [
          'Your literature review must lead naturally to a cliffhanger that only your proposed research can solve. Frame the research gap around concrete dimensions:',
          '• Computational Efficiency: Existing methods yield high accuracy but cannot run on edge hardware.',
          '• Generalizability: Algorithms overfit to homogeneous datasets and fail under real-world domain shift.',
          '• Scalability: Latency grows exponentially as graph dimensions expand.',
