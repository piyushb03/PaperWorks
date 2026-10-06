import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  FileCheck2,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Button } from '../components/common/Button';
import { TrustStrip } from '../components/common/TrustStrip';
import { ProcessTimeline } from '../components/common/ProcessTimeline';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { SectionHeading } from '../components/common/SectionHeading';
import { IEEDocumentPreview } from '../components/previews/IEEDocumentPreview';
import { ServiceEditorialBlock } from '../components/services/ServiceEditorialBlock';
import { ResourceCard } from '../components/resources/ResourceCard';
import { resourcesData } from '../data/resourcesData';
import { faqsData } from '../data/faqsData';
import { siteConfig } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  const topFaqs = faqsData.slice(0, 6);
  const featuredResources = resourcesData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="PaperWorks — Research, Project & Professional Document Support"
        description="Professional support for research papers, review papers, IEEE formatting, major engineering projects, thesis documentation, and ATS-friendly resumes."
        canonical={`${siteConfig.siteUrl}/`}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-grid-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/5 border border-[#111827]/10 text-[#111827] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#3157D5]" />
                <span>RESEARCH • PROJECTS • PROFESSIONAL DOCUMENTS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
                Your academic work,{' '}
                <span className="relative inline-block text-[#3157D5]">
                  professionally prepared.
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#3157D5]/20 rounded-full" />
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl font-normal">
                Professional support for research papers, review papers, IEEE formatting, major engineering capstone projects, technical thesis documentation, and career-ready ATS resumes.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Discuss Your Requirement
                </Button>

                <Button
                  href="#services-section"
                  variant="secondary"
                  size="lg"
                >
                  Explore Services
                </Button>

                <Button
                  href={siteConfig.telegramUrl}
                  variant="telegram"
                  size="lg"
                  icon={<MessageSquare className="w-4 h-4" />}
                  analyticsEvent="telegram_click"
                  analyticsData={{ source: 'hero' }}
                >
                  Telegram
                </Button>
              </div>

              {/* Integrity & Direct Channel Note */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3157D5]" />
                  <span>Strict Academic Integrity</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Direct Communication via Telegram & Email</span>
                </div>
              </div>
            </div>

            {/* Right Hero Bespoke Document Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                {/* Primary Card: IEEE Document Preview */}
                <div className="relative z-20 transform hover:-translate-y-1 transition-transform duration-200">
                  <IEEDocumentPreview />
                </div>

                {/* Floating Decorative Badges */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 z-30 bg-white p-3.5 rounded-xl border border-[#E5E7EB] shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111827]">IEEE 830 & Two-Column Ready</div>
                    <div className="text-[10px] text-[#6B7280]">Margins, equations & references verified</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-5 -right-5 z-30 bg-[#111827] text-white p-3 rounded-xl shadow-lg items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#3157D5] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">100% Parseable ATS Format</div>
                    <div className="text-[10px] text-gray-400">Single-column XYZ layout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <TrustStrip />

      {/* ================= SERVICES HUB OVERVIEW ================= */}
      <section id="services-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="What can we help you prepare?"
          description="Explore our four specialized service areas engineered to support researchers, engineering students, and graduating professionals."
          align="center"
        />

        {/* 4 Distinct Asymmetric Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Research & Papers */}
          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#3157D5]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#3157D5]/10 text-[#3157D5] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5]">
                Academic Publishing
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-1 mb-2.5">
                Research & Papers
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                Research paper structuring, systematic review surveys, literature synthesis, and IEEE conference formatting.
              </p>
              <ul className="space-y-1.5 text-xs text-[#374151] list-none p-0 mb-6">
                <li className="flex items-center gap-2">• IEEE Two-Column Formatting</li>
                <li className="flex items-center gap-2">• Review Paper Syntheses</li>
                <li className="flex items-center gap-2">• Technical Editing & Citations</li>
              </ul>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors"
            >
              <span>Explore Research Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Major Projects */}
          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#3157D5]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                Engineering Capstones
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-1 mb-2.5">
                Major & Final-Year Projects
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                Complete engineering project support: synopses, SRS documents, architectural UML diagrams, reports, and viva preparation.
              </p>
              <ul className="space-y-1.5 text-xs text-[#374151] list-none p-0 mb-6">
                <li className="flex items-center gap-2">• B.Tech & MCA Project Reports</li>
                <li className="flex items-center gap-2">• IEEE 830 SRS Specifications</li>
                <li className="flex items-center gap-2">• Examiner Viva Q&amp;A Coaching</li>
              </ul>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors"
            >
              <span>Explore Project Support</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Career Documents */}
          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#3157D5]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                Industry Placements
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-1 mb-2.5">
                Career Documents
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                ATS-friendly technical resumes and comprehensive academic CVs tailored for campus placements and graduate admissions.
              </p>
              <ul className="space-y-1.5 text-xs text-[#374151] list-none p-0 mb-6">
                <li className="flex items-center gap-2">• Single-Column ATS Layout</li>
                <li className="flex items-center gap-2">• Quantifiable XYZ Bullets</li>
                <li className="flex items-center gap-2">• Master’s &amp; PhD Academic CVs</li>
              </ul>
            </div>
            <Link
              to="/career"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors"
            >
              <span>Explore Resume Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Academic Documents */}
          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#3157D5]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                Coursework & Defenses
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-1 mb-2.5">
                Academic Documents
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                Technical seminar reports, internship summaries, defense slide decks, and laboratory documentation manuals.
              </p>
              <ul className="space-y-1.5 text-xs text-[#374151] list-none p-0 mb-6">
                <li className="flex items-center gap-2">• Seminar &amp; Internship Reports</li>
                <li className="flex items-center gap-2">• High-Contrast Defense PPTs</li>
                <li className="flex items-center gap-2">• University Formatting Ordinances</li>
              </ul>
            </div>
            <Link
              to="/academic"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors"
            >
              <span>Explore Academic Documents</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="Simple process. Clear communication."
            description="We prioritize speed, clarity, and requirement-first scoping so you know exactly what to expect from inquiry to final delivery."
            align="center"
          />

          <ProcessTimeline />

          <div className="mt-12 text-center">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Start by Sharing Your Requirement
            </Button>
          </div>
        </div>
      </section>

      {/* ================= EDITORIAL SECTION: RESEARCH & PAPERS ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ServiceEditorialBlock
          eyebrow="Research & Publishing"
          title="Research deserves more than formatting."
          tagline="Rigorous structure, reproducible methodologies, and meticulous citation hygiene."
          description="Reviewers at IEEE, Springer, ACM, and Elsevier evaluate your contribution based on logical clarity, experimental rigor, and formal academic tone. We assist you in organizing research papers, crafting review taxonomies, balancing two-column templates, and ensuring error-free references."
          points={[
            'Two-column IEEE format compliance (margins, font hierarchies, column balancing)',
            'Comprehensive review paper taxonomies and comparative baseline matrices',
            'Substantive academic editing with tracked changes and commentary',
            'Verification of [1]–[N] numeric citations and complete DOI records',
          ]}
          previewType="research"
          serviceRoute="/research"
          serviceTitle="Research Services"
        />
      </section>

      {/* ================= EDITORIAL SECTION: MAJOR PROJECTS ================= */}
      <section className="py-16 sm:py-24 bg-[#F0F0ED] border-y border-[#E5E7EB] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEditorialBlock
            eyebrow="Engineering Capstone"
            title="Build it. Document it. Present it."
            tagline="Transform your code repository into an exemplary university project dissertation."
            description="Whether you are an engineering team building a distributed cloud architecture or an AI prototype, your project evaluation hinges on your thesis report, SRS clarity, and oral viva defense. We assist B.Tech, MCA, and M.Tech candidates through every stage of documentation."
            points={[
              'University front matter: Bonafide Certificate, Declaration, Automated TOC',
              'UML modeling: Use Case, Class, Sequence diagrams, and DFD Levels 0–2',
              'Unit and integration test matrices with explicit verification logs',
              'Viva Voce preparation question bank tailored to your tech stack',
            ]}
            previewType="project"
            serviceRoute="/projects"
            serviceTitle="Project Support"
            reverse
          />
        </div>
      </section>

      {/* ================= EDITORIAL SECTION: CAREER DOCUMENTS ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ServiceEditorialBlock
          eyebrow="Career & Placements"
          title="Make your first impression count."
          tagline="Clean, parseable resumes engineered for ATS scanners and technical hiring managers."
          description="Do not let unparseable multi-column tables or passive task descriptions keep your qualifications hidden. We format technical resumes for fresh engineering graduates using Google’s XYZ accomplishment formula, clear skill categorization, and clean single-column hierarchy."
          points={[
            'Single-column structure tested against modern ATS parsers',
            'Quantifiable accomplishment bullets highlighting metrics and scale',
            'Categorized skills section (Languages, Frameworks, Cloud, Tools)',
            'Comprehensive academic CVs formatted for Master’s & PhD admissions',
          ]}
          previewType="resume"
          serviceRoute="/career"
          serviceTitle="Resume Services"
        />
      </section>

      {/* ================= WHY PAPERWORKS ================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why PaperWorks"
            title="Genuine value. Direct professional support."
            description="We built PaperWorks to be the kind of technical document partner we needed during our own engineering and academic journeys."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#111827] text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="text-base font-bold text-[#111827]">
                Clear Communication
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                No tickets or convoluted dashboards. You talk directly with technical editors and engineers through Telegram or Email.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#3157D5] text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="text-base font-bold text-[#111827]">
                Requirement-First Approach
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                We review your university guidelines, target conference track, or job target before quoting. No generic one-size-fits-all packages.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F7F5] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="text-base font-bold text-[#111827]">
                Professional Standards
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                From IEEE column balancing to university thesis front-matter, every millimeter of your document is crafted to exacting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATIONAL RESOURCES ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <SectionHeading
            eyebrow="Knowledge Base"
            title="Free resources for students."
            description="In-depth, practical guides written to help you understand research methodologies, formatting rules, and project milestones."
            className="mb-0"
          />
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3157D5] hover:underline"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((res) => (
            <ResourceCard key={res.slug} resource={res} />
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB] w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Clear, honest answers about our scoping, turnaround times, and academic integrity policies."
            align="center"
          />

          <FAQAccordion items={topFaqs} defaultOpenIndex={0} />

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="text-xs sm:text-sm font-semibold text-[#3157D5] hover:underline inline-flex items-center gap-1"
            >
              <span>View full list of questions & answers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection />
      </section>
    </div>
  );
};
