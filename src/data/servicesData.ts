import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // ================= RESEARCH & PAPERS =================
  {
    slug: 'research-paper',
    route: '/research-paper',
    title: 'Research Paper Support & Technical Structuring',
    shortTitle: 'Research Paper Support',
    category: 'research',
    categoryLabel: 'Research & Papers',
    tagline: 'Refine your research findings into clear, rigorous, and professionally formatted manuscripts.',
    shortDescription: 'Comprehensive guidance on paper organization, methodology clarity, academic tone, data presentation, and reference rigor.',
    description: 'Writing an impactful research paper requires rigorous synthesis of methodology, precise presentation of experimental data, and adherence to scholarly standards. PaperWorks assists researchers, postgraduates, and undergraduate authors in structuring their manuscript, presenting analytical conclusions clearly, and ensuring clean citation hygiene.',
    audience: [
      'Undergraduate & Postgraduate researchers (B.Tech, M.Tech, MS, MCA)',
      'Doctoral scholars preparing conference or journal draft submissions',
      'Technical investigators seeking objective manuscript peer-review and structure validation',
    ],
    scopePoints: [
      'Manuscript structural reorganization (Abstract, Introduction, Related Work, Proposed Method, Results, Discussion)',
      'Technical narrative flow and academic tone enhancement',
      'Clarity improvements for algorithms, mathematical formulas, and system diagrams',
      'Validation of citation mapping and bibliography integrity',
      'Elimination of ambiguous phrasing and conversational syntax',
    ],
    deliverables: [
      'Annotated manuscript with comprehensive revision commentary (.docx / LaTeX source)',
      'Clean publication-ready manuscript adhering to specified guidelines',
      'Detailed structural analysis report highlighting strengths and potential review queries',
      'Standardized reference file (.bib or formatted reference list)',
    ],
    processSteps: [
      { title: 'Initial Draft Review', desc: 'You share your research draft, experimental findings, and target conference or journal guidelines.' },
      { title: 'Scope & Feedback Proposal', desc: 'We examine the manuscript architecture and provide a concrete support outline with milestone timelines.' },
      { title: 'Rigorous Structuring & Polishing', desc: 'Our technical specialists work through structure, logical transitions, technical clarity, and data presentation.' },
      { title: 'Final Handover & Permitted Revisions', desc: 'You review the organized document and we incorporate author feedback for complete accuracy.' },
    ],
    faqs: [
      {
        question: 'Does PaperWorks write original research findings from scratch?',
        answer: 'No. PaperWorks operates strictly within academic integrity guidelines. You supply the core hypotheses, experimental results, and domain insights; we provide professional editing, structuring, formatting, and technical presentation support.'
      },
      {
        question: 'Which research fields do you specialize in?',
        answer: 'We focus extensively on Computer Science, Information Technology, Artificial Intelligence, Data Science, Electronics, Electrical Engineering, and related applied technical disciplines.'
      },
      {
        question: 'Can you work with Overleaf and LaTeX manuscripts?',
        answer: 'Yes. We support both Microsoft Word (.docx) and Overleaf/LaTeX source archives, including style packages (.cls, .sty, and .bib files).'
      },
      {
        question: 'Do you guarantee acceptance in a specific journal or conference?',
        answer: 'No reputable service can or should guarantee peer-reviewed acceptance. We guarantee professional, meticulous document preparation that ensures your research is communicated with maximal clarity and standards.'
      }
    ],
    relatedServices: ['ieee-formatting', 'literature-review', 'paper-editing'],
    relatedResources: ['how-to-write-research-paper', 'ieee-format-guide', 'review-paper-vs-research-paper'],
    seoTitle: 'Research Paper Support & Technical Manuscript Structuring | PaperWorks',
    seoDescription: 'Professional research paper support for engineers and scholars. Rigorous manuscript organization, technical clarity, and reference verification.',
    keywords: ['research paper support', 'research paper structuring', 'academic manuscript review', 'technical paper editing'],
    sampleVisualType: 'research',
  },

  {
    slug: 'review-paper',
    route: '/review-paper',
    title: 'Review Paper & Systematic Survey Support',
    shortTitle: 'Review Paper Support',
    category: 'research',
    categoryLabel: 'Research & Papers',
    tagline: 'Synthesize state-of-the-art literature into authoritative, high-impact technical surveys.',
    shortDescription: 'Assistance in taxonomy formulation, comparative matrix structuring, research gap identification, and comprehensive literature mapping.',
    description: 'A standout review or survey paper provides the academic community with clarity by synthesizing diverse literature, categorizing existing approaches, and delineating unexplored research gaps. We help authors organize thematic taxonomies, comparative evaluation matrices, and systematic review methodologies.',
    audience: [
      'Early-stage researchers mapping out their dissertation background',
      'Scholars writing comprehensive state-of-the-art survey manuscripts',
      'Technical teams establishing an exhaustive competitive technology review',
    ],
    scopePoints: [
      'Survey taxonomy organization and thematic classification frameworks',
      'Construction of structured comparative literature tables and feature matrices',
      'Identification and articulating clear open challenges and future research directions',
      'Systematic review methodology structuring (PRISMA guidelines where applicable)',
      'Cross-citation validation and chronological progression synthesis',
    ],
    deliverables: [
      'Thoroughly organized review paper manuscript with clear hierarchical sections',
      'Structured comparative analysis tables and taxonomy diagrams',
      'Verified bibliography covering foundational and recent state-of-the-art papers',
      'Actionable reviewer notes on narrative coherence and research gap emphasis',
    ],
    processSteps: [
      { title: 'Topic & Corpus Alignment', desc: 'Share your chosen domain, collected papers list, and review paper objectives.' },
      { title: 'Taxonomy & Matrix Formulation', desc: 'We help design a logical classification taxonomy and comparative matrix framework.' },
      { title: 'Synthesis & Technical Writing Support', desc: 'Drafting structured sections that compare methodologies, trade-offs, and critical challenges.' },
      { title: 'Review & Refinement', desc: 'Final review round to verify reference depth, comparative neutrality, and academic rigor.' },
    ],
    faqs: [
      {
        question: 'What is the key difference between a research paper and a review paper?',
        answer: 'A research paper introduces new experimental findings, algorithms, or novel data. A review paper synthesizes and compares dozens or hundreds of existing published studies to identify trends, benchmark trade-offs, and highlight open challenges.'
      },
      {
        question: 'How many references are typically analyzed in a review paper?',
        answer: 'Comprehensive survey papers typically analyze between 50 to 150+ authoritative peer-reviewed sources depending on the scope and target publication venue.'
      },
      {
        question: 'Can you help build comparison tables for different algorithms?',
        answer: 'Yes. Constructing nuanced comparative matrices (evaluating metrics like complexity, dataset, accuracy, hardware constraints, and latency) is one of our primary strengths.'
      }
    ],
    relatedServices: ['research-paper', 'literature-review', 'ieee-formatting'],
    relatedResources: ['review-paper-vs-research-paper', 'literature-review-guide', 'how-to-write-research-paper'],
    seoTitle: 'Review Paper Support & Systematic Survey Structuring | PaperWorks',
    seoDescription: 'Professional review paper assistance for engineering and scientific literature surveys. Taxonomy design, comparison tables, and research gap formulation.',
    keywords: ['review paper support', 'survey paper writing support', 'literature synthesis', 'systematic survey engineering'],
    sampleVisualType: 'research',
  },

  {
    slug: 'ieee-formatting',
    route: '/ieee-formatting',
    title: 'IEEE Formatting Support & Standards Compliance',
    shortTitle: 'IEEE Formatting Support',
    category: 'research',
    categoryLabel: 'Research & Papers',
    tagline: 'Pixel-perfect adherence to IEEE two-column specifications, typography, and citation conventions.',
    shortDescription: 'Rigorous formatting for IEEE conference and transactions manuscripts, including margins, equations, vector figures, and numbered references.',
    description: 'IEEE publications demand strict adherence to two-column geometry, font point hierarchies, column balancing on final pages, specific caption alignments, and bracketed numeric citation formatting. PaperWorks ensures your document precisely aligns with IEEE Author Guidelines without formatting discrepancies.',
    audience: [
      'Authors preparing papers for IEEE conferences or transactions',
      'Engineers converting institutional reports into standard IEEE two-column format',
      'Postgraduate scholars requiring compliance with IEEE conference submission portals (e.g. IEEE PDF eXpress)',
    ],
    scopePoints: [
      'Two-column geometry setup (8.5" x 11" US Letter / A4 standard, margins, gutters, column widths)',
      'IEEE heading hierarchy (Roman numeral majors, uppercase letters, italicized subheadings)',
      'Equation formatting with right-aligned numbering and standard mathematical notation',
      'Figure and table formatting (top/bottom column placement, caption numbering, high-DPI scaling)',
      'IEEE reference style compliance [1], [2] with complete volume, issue, page, and DOI records',
      'Final page column height balancing',
    ],
    deliverables: [
      'Formatted manuscript in Microsoft Word (.docx) or LaTeX source files conforming to IEEE styles',
      'High-resolution PDF ready for compliance check (compatible with IEEE PDF eXpress workflows)',
      'Pre-flight formatting audit report detailing verified checks',
    ],
    processSteps: [
      { title: 'Document Submission', desc: 'Provide your unformatted or draft manuscript, graphics, and specific IEEE conference track info.' },
      { title: 'Grid & Geometry Configuration', desc: 'We set up exact column measurements, fonts (Times New Roman / Computer Modern), and line heights.' },
      { title: 'Figures, Tables & References', desc: 'All figures, mathematical equations, and numeric citations are meticulously aligned to IEEE rules.' },
      { title: 'Compliance Verification', desc: 'Final review ensuring column balancing, margin integrity, and clean export.' },
    ],
    faqs: [
      {
        question: 'Are you officially affiliated with IEEE?',
        answer: 'No. PaperWorks is an independent professional document support service. We assist authors with conforming to publicly documented IEEE publication specifications and guidelines.'
      },
      {
        question: 'Can you fix IEEE PDF eXpress font embedding errors?',
        answer: 'Yes. A frequent hurdle with IEEE submissions is font embedding or non-standard color spaces. We ensure all fonts (Type 1 / TrueType) are fully embedded and PDF compliance standards are met.'
      },
      {
        question: 'What formats do you deliver?',
        answer: 'We deliver formatted Microsoft Word templates (.docx) or Overleaf-ready LaTeX archives (.tex, .bib, figures) based on your target preference.'
      }
    ],
    relatedServices: ['research-paper', 'paper-editing', 'literature-review'],
    relatedResources: ['ieee-format-guide', 'how-to-write-research-paper'],
    seoTitle: 'IEEE Formatting Support & Two-Column Guidelines Compliance | PaperWorks',
    seoDescription: 'Precise IEEE manuscript formatting support. Column geometry, equation numbering, figure captions, and IEEE reference style compliance.',
    keywords: ['ieee formatting support', 'ieee paper format', 'two column ieee style', 'ieee reference format'],
    sampleVisualType: 'ieee',
  },

  {
    slug: 'literature-review',
    route: '/literature-review',
    title: 'Literature Review Support & Scholarly Synthesis',
    shortTitle: 'Literature Review Support',
    category: 'research',
    categoryLabel: 'Research & Papers',
    tagline: 'Transform scattered research publications into a coherent, logically linked thematic narrative.',
    shortDescription: 'Methodical organization of related works, identification of research gaps, thematic clustering, and citation lineage mapping.',
    description: 'A robust literature review does not merely summarize papers one by one; it weaves them together into thematic clusters that demonstrate the evolution of thought, uncover limitations in existing paradigms, and justify your research problem.',
    audience: [
      'Master’s and PhD scholars writing dissertation literature chapters',
      'Authors preparing Section II (Related Work) for technical papers',
      'Researchers needing systematic synthesis of contradictory findings in recent literature',
    ],
    scopePoints: [
      'Thematic clustering rather than mechanical chronological listing',
      'Critical analysis of methodological limitations in baseline works',
      'Clarity in establishing why previous approaches fall short for the target problem',
      'Comprehensive reference hygiene and citation context',
    ],
    deliverables: [
      'Structured literature review chapter or related-work section (.docx / .tex)',
      'Synthesis matrix mapping authors, approaches, datasets, and limitations',
      'Annotated citation list formatted according to your target journal/style',
    ],
    processSteps: [
      { title: 'Core Papers Gathering', desc: 'Share your target topic, bibliography list, or key benchmark papers.' },
      { title: 'Thematic Blueprint', desc: 'We outline cohesive themes and categories rather than isolated summaries.' },
      { title: 'Critical Synthesis Drafting', desc: 'We refine the text to emphasize methodological evolution and critical gaps.' },
      { title: 'Final Polish', desc: 'Reviewing narrative flow, transitions, and accurate reference mapping.' },
    ],
    faqs: [
      {
        question: 'How do you avoid the "annotated bibliography" trap?',
        answer: 'Instead of writing "Author A did X. Author B did Y.", we organize by concept (e.g. "Transformer-based approaches vs. CNN-based approaches for latency-critical inference"), showing where methodologies converge and diverge.'
      },
      {
        question: 'Can you help format references in APA, IEEE, or Harvard styles?',
        answer: 'Yes, we format citations across all major standards including IEEE, APA 7th, Harvard, ACM, and Springer LNCS.'
      }
    ],
    relatedServices: ['research-paper', 'review-paper', 'ieee-formatting'],
    relatedResources: ['literature-review-guide', 'review-paper-vs-research-paper'],
    seoTitle: 'Literature Review Support & Thematic Synthesis | PaperWorks',
    seoDescription: 'Transform related work into a cohesive thematic literature review. Methodological comparison, research gap articulation, and citation mapping.',
    keywords: ['literature review support', 'related work synthesis', 'research gap analysis', 'thematic literature review'],
    sampleVisualType: 'research',
  },

  {
    slug: 'paper-editing',
    route: '/paper-editing',
    title: 'Research Paper Editing, Proofreading & Academic Polish',
    shortTitle: 'Paper Editing & Proofreading',
    category: 'research',
    categoryLabel: 'Research & Papers',
    tagline: 'Eliminate grammatical ambiguity, refine academic voice, and sharpen technical prose.',
    shortDescription: 'Line-by-line editorial refinement focused on technical precision, formal academic register, concise phrasing, and typographical consistency.',
    description: 'Even ground-breaking technical contributions can receive critical reviewer pushback if obscured by awkward phrasing, run-on sentences, inconsistent terminology, or grammatical lapses. Our technical editing sharpens your manuscript so reviewers focus on your scientific merit.',
    audience: [
      'Authors preparing submissions for international peer-reviewed journals',
      'Non-native English researchers seeking natural, rigorous academic phrasing',
      'Scholars addressing reviewer feedback requesting language and clarity improvements',
    ],
    scopePoints: [
      'Sentence-level grammar, syntax, tense consistency, and punctuation correction',
      'Standardization of technical terminology, abbreviations, and acronym expansions',
      'Elimination of wordiness and passive redundancies to respect strict page limits',
      'Auditing figure/table cross-references in text (e.g. "as shown in Fig. 3")',
      'Ensuring formal, objective academic register throughout',
    ],
    deliverables: [
      'Track-changes manuscript displaying every edit, correction, and rationale (.docx / .tex)',
      'Clean, publication-ready finalized manuscript',
      'Summary editor feedback highlighting recurring patterns and style recommendations',
    ],
    processSteps: [
      { title: 'Manuscript Intake', desc: 'Send your complete draft with current word or page count specifications.' },
      { title: 'Substantive Line Editing', desc: 'Our editors polish syntax, academic tone, and technical precision line by line.' },
      { title: 'Quality Review', desc: 'A secondary review verifies cross-references, equations, and term consistency.' },
      { title: 'Author Walkthrough', desc: 'You receive track-changes files to inspect and accept recommendations.' },
    ],
    faqs: [
      {
        question: 'Will editing change my technical meaning or equations?',
        answer: 'Never. Technical editing preserves your scientific terminology and mathematics exactly while ensuring grammatical precision and clarity around them.'
      },
      {
        question: 'Do you provide track changes so I can see what was edited?',
        answer: 'Yes. We deliver documents with tracked revisions and margin comments so you retain full ownership of every word.'
      }
    ],
    relatedServices: ['research-paper', 'ieee-formatting', 'literature-review'],
    relatedResources: ['how-to-write-research-paper', 'ieee-format-guide'],
    seoTitle: 'Research Paper Editing & Academic Proofreading Support | PaperWorks',
    seoDescription: 'Line-by-line technical editing and proofreading for research papers. Academic tone, grammar, terminology consistency, and page-limit optimization.',
    keywords: ['research paper editing', 'academic proofreading', 'technical manuscript editing', 'scientific paper editing'],
    sampleVisualType: 'research',
  },

  // ================= MAJOR & FINAL-YEAR PROJECTS =================
  {
    slug: 'major-project',
    route: '/major-project',
    title: 'Major Project Support & Technical Guidance',
    shortTitle: 'Major Project Support',
    category: 'projects',
    categoryLabel: 'Major & Final-Year Projects',
    tagline: 'End-to-end guidance from architecture design and tech stack selection to execution and defense.',
    shortDescription: 'Holistic assistance for ambitious engineering projects, including system design, module decomposition, testing plans, and technical documentation.',
    description: 'Major projects in computer science, IT, and engineering disciplines represent the culmination of academic programs. PaperWorks provides technical mentoring, architecture validation, module development guidance, and rigorous reporting to ensure your project meets industrial and academic benchmarks.',
    audience: [
      'Final-year B.Tech / B.E. engineering students (CSE, IT, ECE, AI/ML, Data Science)',
      'Postgraduate MCA, M.Tech, and MSc candidates working on capstone projects',
      'Student project teams navigating complex software architectures or hardware integration',
    ],
    scopePoints: [
      'System architecture blueprints (microservices, REST/GraphQL APIs, database ER diagrams)',
      'Module decomposition and sprint planning for multi-member teams',
      'Codebase review, structural refactoring, and documentation of design patterns',
      'Unit, integration, and load test documentation',
      'Preparation of comprehensive project progress presentations',
    ],
    deliverables: [
      'System Architecture Specification document with UML diagrams',
      'Step-by-step development roadmap and technical execution checklist',
      'Cleanly documented source code conventions and README runbooks',
      'Project milestone review slide deck for departmental presentations',
    ],
    processSteps: [
      { title: 'Project Scope Intake', desc: 'Discuss your project domain, technology stack, departmental rubric, and timeline.' },
      { title: 'Architecture Blueprint', desc: 'We help design clear UML class, sequence, and system architecture diagrams.' },
      { title: 'Development & Guidance', desc: 'Continuous feedback on module integration, code hygiene, and troubleshooting.' },
      { title: 'Milestone Review Defense', desc: 'Prepare presentations and technical defense documentation for departmental reviews.' },
    ],
    faqs: [
      {
        question: 'What technology stacks do you support?',
        answer: 'We support full-stack web and cloud systems (React, Next.js, Node.js, Python FastAPI/Django, Spring Boot), Mobile (Flutter, React Native), AI/Machine Learning (PyTorch, TensorFlow, OpenCV, Scikit-Learn), and IoT/Embedded systems.'
      },
      {
        question: 'Do you provide ready-made projects to submit blindly?',
        answer: 'No. We strictly adhere to academic integrity. We provide architectural guidance, code reviews, debugging support, documentation, and viva coaching to ensure you understand and master your project.'
      }
    ],
    relatedServices: ['final-year-project', 'project-report', 'project-documentation'],
    relatedResources: ['final-year-project-guide', 'project-report-format'],
    seoTitle: 'Major Project Support & Technical Mentorship for Engineering | PaperWorks',
    seoDescription: 'Comprehensive major project support for B.Tech, MCA, and engineering students. Architecture design, module guidance, testing, and review prep.',
    keywords: ['major project support', 'engineering major project guidance', 'capstone project support', 'btech final project assistance'],
    sampleVisualType: 'project',
  },

  {
    slug: 'final-year-project',
    route: '/final-year-project',
    title: 'Final-Year Project Support & Capstone Mentorship',
    shortTitle: 'Final-Year Project Support',
    category: 'projects',
    categoryLabel: 'Major & Final-Year Projects',
    tagline: 'Navigate your capstone semester with structured technical support, reports, and viva readiness.',
    shortDescription: 'End-to-end guidance covering project synopses, system specifications, mid-term reviews, final thesis reports, and viva voce practice.',
    description: 'Final-year projects are often stressful due to simultaneous placement drives, exams, and departmental reviews. PaperWorks structures your capstone timeline with professional discipline, delivering rigorous documentation, clear architecture diagrams, and mock viva preparation.',
    audience: [
      'Final-year undergraduates (B.Tech, BCA, BSc CS) preparing capstone submissions',
      'Postgraduate scholars (MCA, M.Tech) executing applied industry projects',
      'Engineering teams requiring structured guidance for departmental approval reviews',
    ],
    scopePoints: [
      'Feasibility study and technical scope definition to prevent scope creep',
      'Database schema modeling, API contract specifications, and system data flows',
      'Mid-term review milestone preparations and presentation drafting',
      'Comprehensive final report drafting following university formatting ordinances',
      'Viva voce Q&A preparation with common faculty examiner queries',
    ],
    deliverables: [
      'Formal Project Synopsis document ready for guide approval',
      'System Requirements Specification (SRS) in IEEE 830 format',
      'Comprehensive Final Year Project Report (preliminary pages, chapters, bibliography)',
      'Professional PowerPoint presentation for external defense',
      'Viva Voce preparation question bank tailored to your tech stack',
    ],
    processSteps: [
      { title: 'Project Onboarding', desc: 'Share your approved project title, university guidelines, guide expectations, and deadlines.' },
      { title: 'Timeline & Milestone Structuring', desc: 'We map out Phase 1 (Synopsis & SRS) and Phase 2 (Development, Testing & Report).' },
      { title: 'Iterative Deliverable Crafting', desc: 'Documentation, diagrams, and slide decks crafted to high technical standards.' },
      { title: 'Viva Defense Prep', desc: 'Detailed Q&A rehearsal focusing on architectural decisions, trade-offs, and algorithms.' },
    ],
    faqs: [
      {
        question: 'Can you match our specific university report template?',
        answer: 'Yes. Whether your college follows VTU, Anna University, Mumbai University, AKTU, GGSIPU, or autonomous college guidelines, we format margins, fonts, certificates, and acknowledgments to your exact ordinances.'
      },
      {
        question: 'How do you help with Viva Voce preparation?',
        answer: 'We provide an examiner question guide addressing why you selected your tech stack, database normalization choices, algorithm complexity, edge cases, and future enhancements.'
      }
    ],
    relatedServices: ['major-project', 'project-report', 'project-documentation'],
    relatedResources: ['final-year-project-guide', 'project-report-format'],
    seoTitle: 'Final-Year Project Support & Capstone Guidance | PaperWorks',
    seoDescription: 'Structured final-year project guidance for engineering students. SRS documentation, milestone presentations, thesis reports, and viva voce defense.',
    keywords: ['final year project support', 'capstone project guidance', 'engineering project documentation', 'viva preparation'],
