import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { ServiceCard } from '../../components/services/ServiceCard';
import { CTASection } from '../../components/common/CTASection';
import { ProjectReportPreview } from '../../components/previews/ProjectReportPreview';
import { getServicesByCategory } from '../../data/servicesData';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

export const ProjectsHubPage: React.FC = () => {
  const projectServices = getServicesByCategory('projects');

  const breadcrumbs = [
    { label: 'Services', href: '/#services-section' },
    { label: 'Major & Final-Year Projects' },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Major & Final-Year Project Support for Engineering | PaperWorks"
        description="Comprehensive major project support for B.Tech, MCA, and engineering students. Synopsis, IEEE 830 SRS, UML architecture, thesis reports, and viva voce defense."
        canonical={`${siteConfig.siteUrl}/projects`}
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">
                Capstone & Thesis Engineering
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Major & Final-Year Projects
              </h1>
              <p className="text-lg text-[#3157D5] font-medium">
                Architect, document, and defend your engineering capstone with confidence.
              </p>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
                We assist undergraduate and postgraduate teams in translating codebases into university-compliant project reports, IEEE 830 requirement specifications, vector UML diagrams, and high-impact viva defenses.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href={getTelegramLinkWithService('Engineering Projects Hub')}
                  variant="telegram"
                  size="lg"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Message on Telegram
                </Button>
                <Button
                  href={getMailtoLink('Project Support Inquiry', 'Hi PaperWorks,\n\nI would like to discuss support for my engineering project:\n- Department (B.Tech / MCA):\n- Tech Stack:\n- Required Documentation:')}
                  variant="secondary"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Send an Email
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ProjectReportPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            Project & Documentation Services
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">
            Structured for B.Tech, MCA, M.Tech, and technical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectServices.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Preparing your capstone submission?"
          copy="Share your college guidelines or project topic for clear guidance and report formatting."
          contextService="Major Projects"
        />
      </section>
    </div>
  );
};
