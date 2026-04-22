import React from 'react';
import { ArrowRight, MessageSquare, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { IEEDocumentPreview } from '../previews/IEEDocumentPreview';
import { ResearchPaperMockup } from '../previews/ResearchPaperMockup';
import { ProjectReportPreview } from '../previews/ProjectReportPreview';
import { ResumePreview } from '../previews/ResumePreview';
import { getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

interface ServiceEditorialBlockProps {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  previewType: 'ieee' | 'research' | 'project' | 'resume';
  serviceRoute: string;
  serviceTitle: string;
  reverse?: boolean;
}

export const ServiceEditorialBlock: React.FC<ServiceEditorialBlockProps> = ({
  eyebrow,
  title,
  tagline,
  description,
  points,
  previewType,
  serviceRoute,
  serviceTitle,
  reverse = false,
}) => {
  const renderPreview = () => {
    switch (previewType) {
      case 'ieee':
        return <IEEDocumentPreview />;
      case 'research':
        return <ResearchPaperMockup />;
      case 'project':
        return <ProjectReportPreview />;
      case 'resume':
        return <ResumePreview />;
      default:
        return <IEEDocumentPreview />;
    }
  };

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content Column */}
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#3157D5] bg-[#3157D5]/8 px-2.5 py-1 rounded-md mb-3">
          {eyebrow}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] leading-tight mb-2">
          {title}
        </h3>

        <p className="text-base text-[#3157D5] font-medium mb-4">
          {tagline}
        </p>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6 font-normal">
          {description}
        </p>

        <div className="space-y-2.5 mb-8">
          {points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
              <CheckCircle2 className="w-4 h-4 text-[#3157D5] flex-shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            to={serviceRoute}
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore {serviceTitle}
          </Button>

          <Button
            href={getTelegramLinkWithService(serviceTitle)}
            variant="telegram"
            size="md"
            icon={<MessageSquare className="w-4 h-4" />}
            analyticsEvent="telegram_click"
            analyticsData={{ source: 'editorial_block', service: serviceTitle }}
          >
            Message on Telegram
          </Button>

          <Button
            href={getMailtoLink(`Inquiry: ${serviceTitle}`, `Hello PaperWorks, I would like to inquire about ${serviceTitle}.`)}
            variant="secondary"
            size="md"
            icon={<Mail className="w-4 h-4" />}
            analyticsEvent="email_click"
            analyticsData={{ source: 'editorial_block', service: serviceTitle }}
          >
            Email
          </Button>
        </div>
      </div>

      {/* Visual Preview Column */}
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          {/* Subtle background frame */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#3157D5]/5 to-black/5 rounded-2xl -z-10 blur-xs" />
          {renderPreview()}
        </div>
      </div>
    </div>
  );
};
