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
        ],
      },
    ],
  },

  {
    slug: 'final-year-project-guide',
    route: '/resources/final-year-project-guide',
    title: 'The Complete Engineering Final-Year Project Guide: From Concept to Defense',
    category: 'Engineering Projects',
    readTime: '9 min read',
    description: 'A structured roadmap for engineering teams navigating project topic selection, architecture design, milestone reviews, and external viva defense.',
    summary: 'Avoid project failure traps with this practical guide covering feasibility vetting, module decomposition, mentor management, and examiner Q&A.',
    publishedDate: '2025-02-28T12:00:00Z',
    seoTitle: 'Engineering Final-Year Project Guide: Concept to Viva Defense | PaperWorks',
    seoDescription: 'Complete roadmap for B.Tech, MCA, and engineering final-year projects. Topic selection, system architecture, milestone reviews, and viva defense.',
    keywords: ['final year project guide', 'engineering capstone roadmap', 'btech final year project ideas', 'project viva preparation'],
    relatedServices: ['final-year-project', 'major-project', 'project-report'],
    relatedResources: ['project-report-format'],
    sections: [
      {
        heading: '1. Selecting a Viable Project Topic',
        paragraphs: [
          'A successful final-year project balances ambition with semester feasibility. Avoid two extremes: the trivial CRUD application (e.g. basic e-commerce store with zero algorithmic complexity) and the impossibly broad moonshot (e.g. training a 100-billion-parameter LLM without GPU funding).',
          'Opt for domain-specific applications with a clear algorithmic or analytical layer: automated diagnostic assistance on public medical imaging, privacy-preserving telemetry aggregation, or real-time distributed sensor anomaly detection.',
        ],
        checklist: [
          'Is open benchmark data readily accessible for training and testing?',
          'Can a minimum viable module be demonstrated within the first 6 weeks?',
          'Does the project involve measurable engineering trade-offs?',
        ],
      },
      {
        heading: '2. Decomposing the Project into Sprints',
        paragraphs: [
          'Treat your capstone like an industry engineering sprint rather than an all-nighter before submission:',
          '• Phase 1 (Weeks 1-4): Literature study, Problem formulation, Synopsis approval, SRS draft.',
          '• Phase 2 (Weeks 5-8): System architecture, Database schema, Core module proof-of-concept.',
          '• Phase 3 (Weeks 9-12): Integration, Frontend/Backend connectivity, Testing, Benchmark logging.',
          '• Phase 4 (Weeks 13-16): Project report compilation, Presentation slide deck, Mock viva rehearsal.',
        ],
      },
      {
        heading: '3. Acing the Final External Viva Voce',
        paragraphs: [
          'External examiners rarely evaluate code line by line. Instead, they probe your architectural reasoning and foundational computer science principles.',
          'Expect questions such as: "Why did you select MongoDB over PostgreSQL for this schema?", "What is the time complexity of your search routine?", "How does your system behave if the third-party API returns a 500 error?", and "If this system handled 100,000 concurrent users, what would fail first?"',
        ],
        keyTakeaway: 'Never guess answers during viva. If unsure of an edge case, state your engineering hypothesis calmly: "While we have not benchmarked that specific case, based on our memory footprint we would expect..."',
      },
    ],
  },

  {
    slug: 'project-report-format',
    route: '/resources/project-report-format',
    title: 'Engineering Project Report Structure & Formatting Guidelines: Complete Chapter Breakdown',
    category: 'Documentation Standards',
    readTime: '8 min read',
    description: 'A detailed blueprint for formatting university-grade B.Tech and MCA major project reports according to academic ordinances.',
    summary: 'Comprehensive breakdown of report front matter, chapter hierarchies, UML diagrams, test cases, and bibliography formatting.',
    publishedDate: '2025-03-05T08:00:00Z',
    seoTitle: 'Project Report Format for Engineering: Complete Chapter Blueprint | PaperWorks',
    seoDescription: 'Standard university project report format for B.Tech, MCA, and engineering students. Detailed guidelines for chapters, diagrams, margins, and front matter.',
    keywords: ['project report format', 'btech project report structure', 'engineering report guidelines', 'final year project thesis format'],
    relatedServices: ['project-report', 'project-documentation', 'final-year-project'],
    relatedResources: ['final-year-project-guide'],
    sections: [
      {
        heading: '1. Mandatory University Front Matter Sequence',
        paragraphs: [
          'Engineering project reports adhere to a standardized sequence before Chapter 1 begins:',
          '1. Cover Page & Inner Title Page (with college insignia, department, student names, and roll numbers)',
          '2. Bonafide Certificate (signed by Project Guide, Head of Department, and External Examiner)',
          '3. Declaration by Students',
          '4. Acknowledgments',
          '5. Abstract (executive summary of problem, methodology, and outcome, under 350 words)',
          '6. Table of Contents',
          '7. List of Figures (with exact page numbers)',
          '8. List of Tables (with exact page numbers)',
          'Note: Front matter pages are numbered with lowercase Roman numerals (i, ii, iii...), while Chapter 1 onward uses Arabic numerals (1, 2, 3...).',
        ],
      },
      {
        heading: '2. Standard Seven-Chapter Body Layout',
        paragraphs: [
          '• Chapter 1: Introduction (Background, Problem Statement, Objectives, Scope, Organization of Report)',
          '• Chapter 2: Literature Survey (Analysis of 10-15 related systems and research gap statement)',
          '• Chapter 3: System Requirements Specification (Hardware, Software, Functional & Non-Functional Requirements)',
          '• Chapter 4: System Design & Architecture (Architecture Block Diagram, DFD Levels 0-2, UML Class & Sequence Diagrams)',
          '• Chapter 5: Implementation & Methodology (Algorithms, Database Schema ER diagrams, Module Descriptions)',
          '• Chapter 6: Testing & Results (Unit & Integration Test Cases table, Performance Benchmark Graphs, GUI Screenshots)',
          '• Chapter 7: Conclusion & Future Scope (Summary of completed work, Limitations, Potential Future Work)',
        ],
      },
      {
        heading: '3. Typography and Page Setup Specifications',
        paragraphs: [
          '• Paper Size: Standard A4 (210 x 297 mm)',
          '• Margins: Left margin 1.5 inches (38 mm) to accommodate spiral or hardbound binding; Right, Top, and Bottom 1.0 inch (25.4 mm)',
          '• Font: Times New Roman, 12 pt for body, 1.5 line spacing, Fully Justified',
          '• Headings: Chapter titles in 16 pt Bold; Main section heads in 14 pt Bold; Sub-sections in 12 pt Bold',
        ],
      },
    ],
  },

  {
    slug: 'ats-resume-guide',
    route: '/resources/ats-resume-guide',
    title: 'ATS Resume Guide for Freshers: Formatting Rules, Keywords & Common Traps',
    category: 'Career Documents',
    readTime: '7 min read',
    description: 'How to build a clean, parseable resume that breezes through Applicant Tracking Systems (ATS) and earns human recruiter interviews.',
    summary: 'Discover the exact single-column format, XYZ accomplishment formula, and keyword optimization strategies favored by top tech hiring teams.',
    publishedDate: '2025-03-12T14:00:00Z',
    seoTitle: 'ATS Resume Guide for Freshers & Tech Graduates | PaperWorks',
    seoDescription: 'Master ATS resume writing for fresh software engineers. Learn single-column formatting rules, action verbs, keyword placement, and avoid parser errors.',
    keywords: ['ats resume guide', 'fresher resume format', 'ats friendly resume tips', 'software engineer resume for freshers'],
    relatedServices: ['ats-resume', 'cv'],
    relatedResources: ['how-to-write-research-paper'],
    sections: [
      {
        heading: '1. What Applicant Tracking Systems Actually Do',
        paragraphs: [
          'An Applicant Tracking System (ATS) is automated enterprise software used by recruiters to organize, search, and rank applicant resumes.',
          'When you upload your resume, the parser strips away formatting and extracts your text into database fields: Name, Contact Info, Education, Experience, and Skills. If your resume uses complex multi-column tables, floating text boxes, or graphics, the parser scrambles the text, resulting in immediate filtering out.',
        ],
      },
      {
        heading: '2. The Strict Single-Column Formatting Rules',
        paragraphs: [
          '• Format: Clean, single-column layout from top to bottom.',
          '• Typography: Standard fonts (Inter, Arial, Calibri, Helvetica, Georgia) in 10-11 pt for body, 12-14 pt for headings.',
          '• Margins: 0.5 to 0.75 inches on all four sides.',
          '• File Format: PDF (with live selectable text) or .docx.',
          '• DO NOT include: Headshot photos, skill progress bars (e.g. "Python: 80%"), nested tables, icons, or headers/footers with critical contact information.',
        ],
        checklist: [
          'Can you select and copy every word of your PDF without missing characters?',
          'Are standard section names used (Education, Technical Skills, Projects, Experience)?',
          'Is your contact info (Email, Phone, LinkedIn, GitHub) in the main body, not header margins?',
        ],
      },
      {
        heading: '3. Crafting XYZ Bullets for Academic Projects',
        paragraphs: [
          'Recruiters look for evidence of problem solving, not passive task lists. Use Google’s XYZ framework: "Accomplished [X], as measured by [Y], by doing [Z]."',
          'Weak: "Made an e-commerce website using React and Node.js."',
          'Strong: "Architected a scalable full-stack inventory platform using React and Node.js with Redis caching, reducing database read latency by 42% across 1,000 simulated queries."',
        ],
        keyTakeaway: 'Always include measurable metrics (latency, accuracy, queries per second, user test scores) in your project descriptions.',
      },
    ],
  },
];

export const getResourceBySlug = (slug: string): ResourceItem | undefined => {
  return resourcesData.find((r) => r.slug === slug);
};
