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
