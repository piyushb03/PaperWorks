import type { FAQItem } from '../types';

export const faqsData: FAQItem[] = [
  {
    id: 'how-to-request',
    question: 'How do I request a service?',
    answer: 'Simply reach out via Telegram (@paperworkssupport) or email (contact@paperworks.pro). Share your document draft, university guidelines, or project requirements. We will review your materials and respond promptly with a clear scope outline and delivery timeline.',
    category: 'general',
  },
  {
    id: 'pricing-decided',
    question: 'How is pricing decided?',
    answer: 'Pricing is customized based on scope, document length, technical complexity, research domain, and required turnaround time. We believe in complete transparency: after reviewing your requirement, we provide a definitive, all-inclusive quote before any work begins. There are never hidden fees.',
    category: 'pricing',
  },
  {
    id: 'ieee-formatting-query',
    question: 'Do you provide IEEE formatting?',
    answer: 'Yes. We provide comprehensive IEEE formatting for conference manuscripts and journal submissions. This includes two-column page geometry, typography hierarchies, equation numbering, vector figure alignment, and bracketed numeric reference compliance [1], [2].',
    category: 'research',
  },
  {
    id: 'send-existing-doc',
    question: 'Can I send my existing draft or half-finished document?',
    answer: 'Absolutely. Most clients come to us with a rough draft, an unformatted report, or raw experimental data. We can take your existing materials and structure, edit, and format them to professional publication or university submission standards.',
    category: 'general',
  },
  {
    id: 'turnaround-time',
    question: 'How long does the work usually take?',
    answer: 'Turnaround depends on the document scope. Resume and formatting reviews are typically completed within 2 to 4 business days. Comprehensive project reports and research manuscripts usually require 5 to 10 business days. Expedited timelines can often be accommodated upon request.',
    category: 'general',
  },
  {
    id: 'contact-channels',
    question: 'How do I contact PaperWorks?',
    answer: 'Our primary contact channels are Telegram (for real-time messaging and quick requirement discussions) and Email (for formal inquiries and large document attachments). Direct links are accessible across the website.',
    category: 'general',
  },
  {
    id: 'academic-integrity',
    question: 'What is your policy on academic integrity?',
    answer: 'PaperWorks provides professional editorial, technical formatting, mentoring, and documentation support. We do not write papers from thin air, take exams, impersonate students, guarantee specific grades, or guarantee journal acceptance. Our role is to assist you in communicating your genuine technical work with maximal clarity and rigor.',
    category: 'general',
  },
  {
    id: 'project-stacks',
    question: 'Which engineering domains do you support for major projects?',
    answer: 'We specialize in Computer Science, IT, AI/Machine Learning, Data Engineering, Cloud Systems, IoT, and Electronics. We support modern stacks including Python, PyTorch, React, Node.js, Java Spring Boot, and Flutter.',
    category: 'projects',
  },
  {
    id: 'revisions-policy',
    question: 'Are revisions included in the service?',
    answer: 'Yes. Every project includes a designated review window where you can inspect the deliverables and request permitted revisions within the agreed original scope to ensure your complete satisfaction.',
    category: 'pricing',
  },
  {
    id: 'ats-parseability',
    question: 'How do you test ATS parseability for resumes?',
    answer: 'We format resumes strictly to parsing standards (single-column layout, standard font glyphs, explicit section tags) and verify that text streams can be extracted cleanly without scrambled characters or omitted contact headers.',
    category: 'career',
  },
];
