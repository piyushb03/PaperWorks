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
