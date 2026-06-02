import { ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { siteConfig } from '../config/siteConfig';

export const AboutPage: React.FC = () => {
  const breadcrumbs = [{ label: 'About' }];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="About PaperWorks | Professional Document, Research & Project Support"
        description="Learn about PaperWorks. Our philosophy, commitment to academic integrity, and dedicated professional document support for scholars and engineers."
        canonical={`${siteConfig.siteUrl}/about`}
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
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
            Our Mission & Philosophy
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            About PaperWorks
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            A boutique professional document consultancy built to help students, postgraduates, and researchers present their technical work with clarity, rigorous formatting, and scholarly discipline.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="space-y-6 text-sm sm:text-base text-[#374151] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#111827]">
            Why We Founded PaperWorks
          </h2>
          <p>
            During our own academic journeys in engineering and technical education, we noticed a persistent dilemma: students and researchers often develop brilliant codebases, compelling algorithms, and novel prototypes—yet their impact gets undermined by confusing paper organization, formatting non-compliance, unparseable resumes, or poorly structured thesis reports.
          </p>
          <p>
            University ordinances demand strict margin and binding standards; prestigious journals reject manuscripts on preliminary formatting hurdles; and modern corporate hiring systems silently discard resumes that fail ATS parser extraction.
          </p>
          <p>
            PaperWorks was established to bridge that gap. We provide specialized, human-centered document guidance, formatting standards compliance, and technical structuring so that your hard work receives the evaluation it truly merits.
          </p>
        </div>

        {/* Guiding Principles */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">
            Our Core Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#3157D5]/10 text-[#3157D5] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                Uncompromising Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                We never engage in exam cheating, ghostwriting unresearched claims, or falsifying citations. We refine and polish your genuine findings.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                Obsessive Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Every margin, bracketed reference, column gutter, and equation number is aligned to exact publication and university rubrics.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111827]">
                Direct Human Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                No bureaucratic ticketing portals. You talk directly with technical editors who understand your domain, deadlines, and requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Editable Institutional Information Note */}
        <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] text-xs text-[#6B7280] space-y-2">
          <div className="font-semibold text-[#111827]">
            Institutional & Contact Information:
          </div>
          <p>
            PaperWorks operates as an independent technical document and research support service. Inquiries, scope discussions, and document reviews are handled directly through verified channels.
          </p>
          <div className="flex flex-wrap gap-4 pt-1 font-mono text-[11px] text-[#4B5563]">
            <span>Email: {siteConfig.contactEmail}</span>
            <span>•</span>
            <span>Telegram: {siteConfig.telegramUrl}</span>
            <span>•</span>
            <span>Hours: {siteConfig.hours}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Have a document requirement you'd like to discuss?"
          copy="Reach out directly to discuss your paper or capstone project with our team."
        />
      </section>
    </div>
  );
};
