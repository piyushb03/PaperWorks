import React from 'react';
import {
  Receipt,
  FileCheck2,
  Code2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { siteConfig, getTelegramLinkWithService } from '../config/siteConfig';

export const PricingPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Pricing' }];

  const categories = [
    {
      title: 'Research & Papers Support',
      icon: <FileCheck2 className="w-5 h-5 text-[#3157D5]" />,
      tagline: 'Research papers, review surveys & IEEE formatting',
      factors: [
        'Current manuscript status (raw draft vs. initial revision)',
        'Target venue guidelines (IEEE, Springer, ACM, Elsevier)',
        'Page or word count (e.g. 6-page conference vs. 15-page journal)',
        'Citation depth & mathematical complexity',
      ],
      deliverable: 'Fully formatted, reviewed manuscript (.docx / LaTeX) with citation hygiene',
      serviceQuery: 'Research Paper Support',
    },
    {
      title: 'Major & Final-Year Projects',
      icon: <Code2 className="w-5 h-5 text-purple-600" />,
      tagline: 'Capstone reports, synopses, SRS & viva preparation',
      factors: [
        'Project tier: Minor (30-40 pages) vs. Major Capstone (80-120+ pages)',
        'Department template & university ordinance requirements',
        'Architecture complexity & number of UML/DFD diagrams',
        'Testing depth (unit, integration test matrices)',
      ],
      deliverable: 'Complete project report, IEEE 830 SRS, UML diagrams, presentation & viva guide',
      serviceQuery: 'Major Project Support',
    },
    {
      title: 'Career & ATS Resumes',
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      tagline: 'ATS-parseable resumes & scholarly CVs',
      factors: [
        'Document type: 1-Page ATS Fresher Resume vs. Comprehensive Academic CV',
        'Number of technical projects and internships to quantify',
        'Target role domain (SWE, Data Science, Cloud, Graduate School)',
      ],
      deliverable: 'Editable .docx + vector PDF + plain text with live clickable links',
      serviceQuery: 'ATS-Friendly Resume Support',
    },
    {
      title: 'Academic & Technical Documents',
      icon: <GraduationCap className="w-5 h-5 text-amber-700" />,
      tagline: 'Technical seminar reports & defense presentations',
      factors: [
        'Report length and departmental formatting specifications',
        'Presentation slide count (standard 10-12 slides vs. detailed defense)',
        'Incorporation of custom vector architecture graphics',
      ],
      deliverable: 'Print-ready technical report & high-contrast PowerPoint slide deck with speaker notes',
