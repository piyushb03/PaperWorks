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

