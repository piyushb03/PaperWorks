import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { ServiceCard } from '../../components/services/ServiceCard';
import { CTASection } from '../../components/common/CTASection';
import { ResumePreview } from '../../components/previews/ResumePreview';
import { getServicesByCategory } from '../../data/servicesData';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

export const CareerHubPage: React.FC = () => {
  const careerServices = getServicesByCategory('career');

  const breadcrumbs = [
    { label: 'Services', href: '/#services-section' },
    { label: 'Career Documents' },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="ATS-Friendly Resumes & Academic CVs for Engineers | PaperWorks"
        description="Professional ATS-compliant resumes and scholarly CVs. Single-column layouts, quantifiable XYZ accomplishments, and parseable technical skills formatting."
        canonical={`${siteConfig.siteUrl}/career`}
        breadcrumbs={breadcrumbs}
      />

      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-[#F7F7F5] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Career & Admissions Documents
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Career Documents
              </h1>
              <p className="text-lg text-[#3157D5] font-medium">
                Engineered for automated ATS parsers and technical interview screeners.
              </p>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
                We craft single-column, parseable resumes and scholarly CVs that articulate your engineering projects, open-source repositories, and coursework using quantifiable impact metrics.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href={getTelegramLinkWithService('Career Documents Hub')}
                  variant="telegram"
                  size="lg"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Message on Telegram
                </Button>
                <Button
                  href={getMailtoLink('Resume Support Inquiry', 'Hi PaperWorks,\n\nI would like an ATS resume review:\n- Target Role:\n- Experience Level (Fresher / Experienced):')}
                  variant="secondary"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Send an Email
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResumePreview />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            Career & Placement Services
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Targeted for software engineering roles, tech campus placements, and MS/PhD applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerServices.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Ready to build an ATS-compliant resume?"
          copy="Send your existing resume draft for a detailed parseability review."
          contextService="ATS Resumes"
        />
      </section>
    </div>
  );
};
