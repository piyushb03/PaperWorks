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
      serviceQuery: 'Academic Documents Support',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Transparent Pricing & Custom Quotes | PaperWorks"
        description="Learn how pricing is determined at PaperWorks. Requirement-first quotes based on scope, document length, deadline, and technical depth. No hidden fees."
        canonical={`${siteConfig.siteUrl}/pricing`}
        breadcrumbs={breadcrumbs}
      />

      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F7F5] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-3 py-1 rounded-md">
            <Receipt className="w-3.5 h-3.5 text-[#3157D5]" />
            <span>Transparent, Requirement-First Scoping</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Clear Pricing. Definitive Quotes.
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Because technical documents vary significantly in length, mathematical depth, and university formatting rubrics, we provide customized quotes after examining your specific requirements.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Get a Quote
            </Button>
            <Button
              href={siteConfig.telegramUrl}
              variant="telegram"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Ask on Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Determinants Breakdown */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Estimation Criteria"
          title="How Your Quote Is Decided"
          description="We review your files or project description and calculate an all-inclusive, fixed quote based on these five objective criteria."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#3157D5]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] flex items-center justify-center mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#3157D5] font-medium mb-4">
                  {cat.tagline}
                </p>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                  Pricing Factors:
                </div>
                <ul className="space-y-1.5 text-xs text-[#374151] list-none p-0 m-0 mb-6">
                  {cat.factors.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <span className="text-[#3157D5] font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F3F4F6]">
                <Button
                  href={getTelegramLinkWithService(cat.serviceQuery)}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  icon={<MessageSquare className="w-3.5 h-3.5" />}
                >
                  Get Quote on Telegram
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Commitment & Integrity Notice */}
      <section className="py-12 bg-white border-y border-[#E5E7EB] w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 bg-[#F7F7F5] rounded-2xl border border-[#E5E7EB] space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#3157D5]" />
              <h3 className="text-lg font-bold text-[#111827]">
                Our Honest Pricing Commitment
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              We do not display artificial strikethrough discounts, fake countdown timers, or &ldquo;limited-time urgency&rdquo; banners. When you receive a quote from PaperWorks, it is fixed, transparent, and includes agreed review iterations within scope. If your draft requires less work than anticipated, we tell you openly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#111827] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3157D5]" />
                <span>Permitted Scope Revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Confidential Handling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Pricing Details"
          title="Frequently Asked Questions on Quotes"
          align="center"
        />

        <div className="space-y-3">
          <div className="p-5 bg-white rounded-xl border border-[#E5E7EB]">
            <h4 className="text-sm sm:text-base font-bold text-[#111827] mb-1.5">
              How quickly will I receive my quote?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              During working hours ({siteConfig.hours}), quotes are typically provided within 1 to 3 hours after reviewing your materials on Telegram or email.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E5E7EB]">
            <h4 className="text-sm sm:text-base font-bold text-[#111827] mb-1.5">
              Can I request revisions after receiving my completed work?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Yes. Every project includes a designated review window to request permitted refinements aligning with the originally agreed scope.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E5E7EB]">
            <h4 className="text-sm sm:text-base font-bold text-[#111827] mb-1.5">
              What if my deadline is very tight (e.g. 48 hours)?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              We frequently accommodate expedited timelines when editor bandwidth permits. Please highlight your urgent deadline upfront when reaching out.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Ready to get a clear, no-obligation quote?"
          copy="Share your document or project requirements with us on Telegram or Email."
        />
      </section>
    </div>
  );
};
