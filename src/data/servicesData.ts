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
    sampleVisualType: 'project',
  },

  {
    slug: 'project-report',
    route: '/project-report',
    title: 'Project Report Preparation & Formatting',
    shortTitle: 'Project Report Support',
    category: 'projects',
    categoryLabel: 'Major & Final-Year Projects',
    tagline: 'Transform your technical code into a publication-grade academic project report.',
    shortDescription: 'Exhaustive thesis documentation including SRS, system design, test cases, screenshots, performance graphs, and university front-matter.',
    description: 'Writing a 70 to 120-page engineering project report is a daunting task. PaperWorks provides complete report structuring support—from certificate pages, acknowledgments, and table of contents to detailed chapter write-ups, UML diagrams, test suite logs, and IEEE-formatted references.',
    audience: [
      'B.Tech, B.E., BCA, and MCA students required to submit spiral or hard-bound project reports',
      'Project teams with working software who need comprehensive academic documentation',
      'Students needing immediate formatting assistance to pass guide and HOD review',
    ],
    scopePoints: [
      'Mandatory university front matter (Certificate, Declaration, Acknowledgments, Abstract)',
      'Chapter 1: Introduction, Problem Statement, Objectives, and Scope',
      'Chapter 2: Literature Review and Comparative Study of Existing Systems',
      'Chapter 3: System Requirements Specification (Hardware, Software, Functional & Non-Functional)',
      'Chapter 4: System Architecture, Data Flow Diagrams (DFD Levels 0-2), and UML Modeling',
      'Chapter 5: Implementation Details, Key Algorithms, and Database Design (ER Diagrams)',
      'Chapter 6: Testing Methodology, Test Cases, and Results Analysis',
      'Chapter 7: Conclusion, Limitations, and Future Enhancements',
      'References, Appendices, and Clean Screenshot Layouts',
    ],
    deliverables: [
      'Complete, fully formatted Project Report in editable Word (.docx) and print-ready PDF',
      'High-resolution vector UML diagrams (Use Case, Class, Sequence, Activity, Architecture)',
      'Structured test case evaluation tables with pass/fail criteria',
      'Automated dynamic Table of Contents, List of Figures, and List of Tables',
    ],
    processSteps: [
      { title: 'Project Details & College Template', desc: 'Send your code repository, screenshots, project details, and college report guideline PDF.' },
      { title: 'Chapter Outline & Diagram Generation', desc: 'We structure the narrative and design clean, high-resolution architectural diagrams.' },
      { title: 'Full Report Compilation', desc: 'Meticulous writing of chapters, technical descriptions, and test case tables.' },
      { title: 'Format Audit & Final Delivery', desc: 'Page numbering (Roman numerals for front matter, Arabic for chapters), margins, and binding review.' },
    ],
    faqs: [
      {
        question: 'Are diagrams included in high resolution?',
        answer: 'Yes. All DFDs, ER diagrams, and UML diagrams are generated as crisp vector or high-DPI visuals that look sharp when printed.'
      },
      {
        question: 'Can you handle both Minor and Major project reports?',
        answer: 'Yes. We cater to concise 30-40 page Minor project reports as well as comprehensive 80-150 page Major capstone reports.'
      }
    ],
    relatedServices: ['project-documentation', 'final-year-project', 'major-project'],
    relatedResources: ['project-report-format', 'final-year-project-guide'],
    seoTitle: 'Engineering Project Report Preparation & University Formatting | PaperWorks',
    seoDescription: 'Professional project report preparation for B.Tech, MCA, and engineering students. Complete chapters, UML diagrams, test cases, and university guidelines.',
    keywords: ['project report formatting', 'engineering project report', 'btech project report', 'final year project report format'],
    sampleVisualType: 'project',
  },

  {
    slug: 'project-documentation',
    route: '/project-documentation',
    title: 'Project Documentation, Synopsis & Technical Specifications',
    shortTitle: 'Project Documentation',
    category: 'projects',
    categoryLabel: 'Major & Final-Year Projects',
    tagline: 'Clear, concise project proposals, synopses, and technical runbooks that get immediate faculty sign-off.',
    shortDescription: 'Preparation of project synopses, IEEE 830 SRS documents, API documentation, deployment runbooks, and viva presentation slide decks.',
    description: 'Before project development begins and after deployment concludes, documentation serves as the vital bridge between your code and your evaluators. PaperWorks creates polished synopses, comprehensive Software Requirements Specifications (SRS), and developer runbooks.',
    audience: [
      'Students pitching capstone ideas seeking prompt synopsis approval',
      'Student startups and project teams requiring clear API specs and deployment guides',
      'Graduates preparing technical portfolios showcasing their architectural rigor',
    ],
    scopePoints: [
      'Project Synopsis drafting (Title, Objective, Scope, Technology Stack, Proposed Methodology, References)',
      'IEEE 830 compliant Software Requirements Specification (SRS)',
      'Database Schema DDL & Data Dictionary documentation',
      'REST API contract specification with request/response payloads',
      'Installation, deployment, and environment configuration runbooks',
    ],
    deliverables: [
      'Faculty-ready Project Synopsis (.docx / .pdf, usually 3-6 pages)',
      'Standardized IEEE 830 SRS Document',
      'Technical README and deployment runbook for GitHub repositories',
      'Slide deck for proposal defense presentation',
    ],
    processSteps: [
      { title: 'Project Brief', desc: 'Share your intended project concept, domain, tools, and supervisor instructions.' },
      { title: 'Synopsis Drafting', desc: 'We draft the formal proposal articulating technical merit, novelty, and feasible timeline.' },
      { title: 'SRS & Spec Generation', desc: 'Complete requirements engineering detailing functional and non-functional constraints.' },
      { title: 'Guide Approval Review', desc: 'Refinements based on feedback from your project guide.' },
    ],
    faqs: [
      {
        question: 'How long is a typical project synopsis?',
        answer: 'Most university departments require a 3 to 8 page document outlining problem statement, literature background, proposed methodology, modules, hardware/software specifications, and expected outcomes.'
      },
      {
        question: 'Do you help if the guide asks for modifications in the proposal?',
        answer: 'Yes. We include permitted review iterations to adjust the proposed scope or tech stack based on supervisor recommendations.'
      }
    ],
    relatedServices: ['project-report', 'final-year-project', 'major-project'],
    relatedResources: ['project-report-format', 'final-year-project-guide'],
    seoTitle: 'Project Synopsis & Technical Documentation Support | PaperWorks',
    seoDescription: 'Professional project synopsis and SRS documentation for engineering students. High-acceptance proposals, IEEE 830 specs, and API runbooks.',
    keywords: ['project synopsis support', 'project documentation', 'srs document preparation', 'engineering project proposal'],
    sampleVisualType: 'project',
  },

  // ================= CAREER DOCUMENTS =================
  {
    slug: 'ats-resume',
    route: '/ats-resume',
    title: 'ATS-Friendly Resume Support for Freshers & Engineers',
    shortTitle: 'ATS-Friendly Resume Support',
    category: 'career',
    categoryLabel: 'Career Documents',
    tagline: 'Clean, parseable, keyword-aligned resumes engineered to pass recruiter screeners and Applicant Tracking Systems.',
    shortDescription: 'Single-column ATS formatting, impact-driven bullet formulation, technical skill categorization, and role-targeted keyword integration.',
    description: 'Over 90% of mid-to-large technology companies filter candidates through Applicant Tracking Systems (ATS) like Workday, Greenhouse, Taleo, and Lever before a human recruiter ever sees them. We transform scattered student resumes into high-parseability documents that highlight technical impact, GitHub projects, and relevant coursework.',
    audience: [
      'Final-year college students preparing for campus placements and off-campus drives',
      'Fresh software engineers, data analysts, and technical graduates entering the job market',
      'Professionals with 0-3 years experience transitioning to new technical roles',
    ],
    scopePoints: [
      'Clean, single-column typographical hierarchy without tables, text boxes, or unparseable columns',
      'Action-oriented bullet crafting using the XYZ formula ("Accomplished [X], as measured by [Y], by doing [Z]")',
      'Categorized technical skills section (Languages, Frameworks, Developer Tools, Core Concepts)',
      'Strategic presentation of academic projects with live demo and GitHub repository hyperlinks',
      'Standardized section headers recognized by ATS parsers (Education, Experience, Projects, Skills)',
    ],
    deliverables: [
      'ATS-Optimized resume in editable Microsoft Word (.docx)',
      'Vector PDF export with live clickable hyperlinks and embedded standard fonts',
      'Plain text (.txt) export for copy-pasting directly into portal application fields',
      'ATS Parseability checklist verifying section recognition and keyword density',
    ],
    processSteps: [
      { title: 'Profile & Target Role Intake', desc: 'Share your current resume, LinkedIn, GitHub, academic marks, and target job profiles.' },
      { title: 'Bullet Crafting & Impact Refinement', desc: 'We rewrite project and internship bullets to highlight metrics, technologies, and outcomes.' },
      { title: 'ATS Formatting & Layout', desc: 'We build a pristine single-column layout adhering to strict parsing standards.' },
      { title: 'Review & Final Polish', desc: 'You inspect the resume, test it against target job descriptions, and finalize.' },
    ],
    faqs: [
      {
        question: 'Why do two-column resumes often fail ATS scans?',
        answer: 'Many legacy ATS parsers read text horizontally from left to right across the entire page, causing two-column text to get mangled into an incoherent stream of words.'
      },
      {
        question: 'Do you promise job placements or guaranteed interview calls?',
        answer: 'No. No honest service can guarantee employment. We ensure your resume is formatted with maximal ATS parseability and compelling technical communication so your qualifications receive the attention they deserve.'
      },
      {
        question: 'Should a fresher resume be one page or two pages?',
        answer: 'For freshers and engineers with under 4 years of experience, a tightly edited single-page resume is the industry gold standard in tech recruiting.'
      }
    ],
    relatedServices: ['cv', 'academic-documents'],
    relatedResources: ['ats-resume-guide'],
    seoTitle: 'ATS-Friendly Resume Support for Freshers & Tech Graduates | PaperWorks',
    seoDescription: 'Transform your college projects and skills into an ATS-compliant resume. Clean single-column formatting, quantifiable bullets, and keyword optimization.',
    keywords: ['ats friendly resume', 'fresher resume support', 'engineering resume formatting', 'ats resume format for freshers'],
    sampleVisualType: 'resume',
  },

  {
    slug: 'cv',
    route: '/cv',
    title: 'Curriculum Vitae (CV) Support for Academia & Higher Studies',
    shortTitle: 'Academic CV Support',
    category: 'career',
    categoryLabel: 'Career Documents',
    tagline: 'Comprehensive, scholarly CVs designed for master’s applications, PhD admissions, and fellowship programs.',
    shortDescription: 'In-depth academic CVs highlighting publications, research experience, teaching assistantships, grants, and scholarly honors.',
    description: 'Unlike a concise 1-page corporate resume, an academic Curriculum Vitae (CV) is an exhaustive record of your scholarly trajectory. PaperWorks crafts structured, dignified academic CVs tailored for MS/PhD admissions, faculty positions, research lab fellowships, and international scholarships.',
    audience: [
      'Students applying for MS or PhD programs in the US, Europe, Canada, and Asia',
      'Research scholars applying for post-doctoral fellowships or research assistantships (RA/TA)',
      'Faculty and research scientists updating institutional dossiers',
    ],
    scopePoints: [
      'Scholarly section hierarchy (Education, Research Interests, Publications, Presentations, Grants, Awards)',
      'Accurate publication bibliographic citations with paper titles, co-authors, and venues',
      'Detailed descriptions of lab experiments, technical methodologies, and research leadership',
      'Clean typography with consistent margins, dates, and institutional affiliations',
    ],
    deliverables: [
      'Comprehensive Academic CV in editable Word (.docx) and high-resolution PDF',
      'Formatted bibliography section adhering to academic citation guidelines',
      'Admissions-focused suggestions for statement of purpose (SOP) alignment',
    ],
    processSteps: [
      { title: 'Academic Profile Collection', desc: 'Share your educational background, published papers, conference talks, and target programs.' },
      { title: 'Curricular Structure Design', desc: 'We organize your scholarly achievements with appropriate weight given to research output.' },
      { title: 'Editorial Polish', desc: 'Polishing narrative descriptions of research projects and institutional roles.' },
      { title: 'Final Inspection', desc: 'Ensuring consistency across typography, dates, and international application formats.' },
    ],
    faqs: [
      {
        question: 'How is an academic CV different from a corporate resume?',
        answer: 'A resume is typically 1 page focused on immediate job skill match. An academic CV has no strict page limit and exhaustively documents publications, teaching, research, and scholarly honors.'
      },
      {
        question: 'Can this CV be used for DAAD, Fulbright, or Erasmus Mundus scholarship applications?',
        answer: 'Yes. We align academic CVs to international higher education scholarship standards and university graduate admissions committees.'
      }
    ],
    relatedServices: ['ats-resume', 'research-paper'],
    relatedResources: ['ats-resume-guide', 'how-to-write-research-paper'],
    seoTitle: 'Academic CV Support for Graduate Admissions & Fellowships | PaperWorks',
    seoDescription: 'Comprehensive academic CV preparation for MS, PhD admissions, and research fellowships. Scholarly publication formatting and research trajectory.',
    keywords: ['academic cv support', 'curriculum vitae for phd', 'graduate school cv', 'research scholar cv'],
    sampleVisualType: 'resume',
  },

  // ================= ACADEMIC DOCUMENTS =================
  {
    slug: 'academic-documents',
    route: '/academic-documents',
    title: 'Academic & Technical Documents Support',
    shortTitle: 'Academic Documents Support',
    category: 'academic',
    categoryLabel: 'Academic Documents',
    tagline: 'Precision formatting and editorial structuring for seminar reports, technical briefs, and institutional manuals.',
    shortDescription: 'Formatting and documentation support for technical seminar reports, lab manuals, case study summaries, and institutional submissions.',
    description: 'Engineering and university curricula require numerous formal documents beyond the major project—including technical seminar reports, term papers, internship training summaries, and lab experiment manuals. PaperWorks ensures every submission reflects professional engineering documentation standards.',
    audience: [
      'Students preparing semester technical seminar reports and industrial training summaries',
      'Research groups compiling laboratory procedure guides and technical whitepapers',
      'Undergraduate and master’s students requiring fastidious academic formatting',
    ],
    scopePoints: [
      'Structuring technical seminar reports (Abstract, Literature Review, Case Study, Conclusion)',
      'Industrial training and internship report compilation with company verification pages',
      'Formatting consistency (standard margins, fonts, headers/footers, and figure captions)',
      'Citation and bibliography hygiene in university-mandated styles',
    ],
    deliverables: [
      'Fully structured and formatted report (.docx and print-ready PDF)',
      'Clean vector diagrams, charts, and table alignments',
      'Automated table of contents and figure lists',
    ],
    processSteps: [
      { title: 'Topic & Rubric Review', desc: 'Share your seminar topic, guidelines, and departmental submission specifications.' },
      { title: 'Draft Structuring', desc: 'We organize technical content logically with proper academic flow and transitions.' },
      { title: 'Formatting & Typography', desc: 'Applying uniform styles, captions, equations, and page numbers.' },
      { title: 'Final Handover', desc: 'Final review to ensure seamless printing and evaluation readiness.' },
    ],
    faqs: [
      {
        question: 'What types of academic reports do you format?',
        answer: 'We assist with technical seminar reports, summer internship reports, industrial training reports, term papers, and laboratory experiment manuals.'
      },
      {
        question: 'Can you work with strict page constraints (e.g. exactly 25 pages)?',
        answer: 'Yes. We adjust formatting, spacing, and content distribution to hit specific departmental page targets cleanly.'
      }
    ],
    relatedServices: ['presentations', 'project-report'],
    relatedResources: ['project-report-format'],
    seoTitle: 'Academic Documents & Technical Seminar Report Support | PaperWorks',
    seoDescription: 'Professional formatting for technical seminar reports, industrial training summaries, and academic whitepapers. Fastidious university compliance.',
    keywords: ['academic documents support', 'seminar report formatting', 'technical report preparation', 'internship training report'],
    sampleVisualType: 'project',
  },

  {
    slug: 'presentations',
    route: '/presentations',
    title: 'Technical Presentations & Defense Slide Deck Support',
    shortTitle: 'Technical Presentation Support',
    category: 'academic',
    categoryLabel: 'Academic Documents',
    tagline: 'High-impact slide decks crafted for project reviews, conference presentations, and viva defenses.',
    shortDescription: 'Clean, legible presentation design focused on architecture diagrams, methodology workflows, live demo cues, and concise talking points.',
    description: 'Evaluation panels and conference audiences judge your work in under 15 minutes. Cluttered slides with tiny text and low-resolution screenshots undermine great engineering. PaperWorks creates minimalist, high-contrast, technical slide decks that communicate complex concepts with immediate clarity.',
    audience: [
      'Students presenting project proposals, mid-term reviews, and final year vivas',
      'Researchers presenting accepted papers at IEEE and international conferences',
      'Graduates defending thesis projects in front of external examiners',
    ],
    scopePoints: [
      'Clean slide layout following the 6x6 rule (concise bullets, generous whitespace, large typography)',
      'High-contrast system architecture and data-flow diagrams tailored for projectors',
      'Results presentation using clear benchmark charts and comparative tables',
      'Slide-by-slide speaker notes highlighting key talking points for confident delivery',
      'Backup slides addressing expected tough questions from examiners',
    ],
    deliverables: [
      'Editable Microsoft PowerPoint presentation (.pptx)',
      'Self-contained vector PDF version for seamless presentation on any computer',
      'Slide-by-slide speaker notes runbook',
      'Master slide template matching PaperWorks editorial clarity',
    ],
    processSteps: [
      { title: 'Content & Duration Brief', desc: 'Share your paper, project report, allocated presentation time (e.g. 10 mins), and rubric.' },
      { title: 'Storyboard & Slide Outline', desc: 'We determine slide allocation (Problem, Architecture, Results, Demo, Q&A).' },
      { title: 'Visual Design & Diagramming', desc: 'Crafting clean vector slides with legible typography and crisp diagram cards.' },
      { title: 'Speaker Notes & Defense Prep', desc: 'Adding concise speaker cues to ensure a smooth, confident delivery.' },
    ],
    faqs: [
      {
        question: 'How many slides are appropriate for a 10-minute project presentation?',
        answer: 'A standard 10-minute presentation should have roughly 10 to 12 slides (approx. 1 minute per slide) plus 2-3 backup slides for technical examiner questions.'
      },
      {
        question: 'Do you use animations and transitions?',
        answer: 'We use only subtle, professional slide builds (e.g. revealing architectural layers sequentially). We strictly avoid distracting spins, flips, or sounds.'
      }
    ],
    relatedServices: ['academic-documents', 'project-report', 'final-year-project'],
    relatedResources: ['project-report-format', 'final-year-project-guide'],
    seoTitle: 'Technical Presentation & Defense Slide Deck Support | PaperWorks',
    seoDescription: 'High-impact slide decks for engineering project reviews and conference paper presentations. Clean architecture visuals and speaker notes.',
    keywords: ['technical presentation support', 'project viva ppt', 'conference presentation slides', 'defense slide deck'],
    sampleVisualType: 'project',
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug);
};

export const getServicesByCategory = (category: ServiceItem['category']): ServiceItem[] => {
  return servicesData.filter((s) => s.category === category);
};
