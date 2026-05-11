import React from 'react';
import { Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  PackageCheck,
  Users,
  Layers,
  ArrowRight,
  MessageSquare,
  Mail,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { FAQAccordion } from '../../components/common/FAQAccordion';
import { CTASection } from '../../components/common/CTASection';
import { IEEDocumentPreview } from '../../components/previews/IEEDocumentPreview';
import { ResearchPaperMockup } from '../../components/previews/ResearchPaperMockup';
import { ProjectReportPreview } from '../../components/previews/ProjectReportPreview';
import { ResumePreview } from '../../components/previews/ResumePreview';
import { ServiceCard } from '../../components/services/ServiceCard';
import { ResourceCard } from '../../components/resources/ResourceCard';
import { getServiceBySlug, servicesData } from '../../data/servicesData';
import { getResourceBySlug } from '../../data/resourcesData';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Related services
  const relatedServices = service.relatedServices
    .map((sSlug) => servicesData.find((s) => s.slug === sSlug))
    .filter((s): s is typeof servicesData[0] => !!s);

  // Related resources
  const relatedResources = service.relatedResources
    .map((rSlug) => getResourceBySlug(rSlug))
    .filter((r): r is NonNullable<ReturnType<typeof getResourceBySlug>> => !!r);

  const breadcrumbs = [
    { label: service.categoryLabel, href: `/${service.category}` },
    { label: service.shortTitle },
  ];

  const renderVisual = () => {
    switch (service.sampleVisualType) {
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
    <div className="w-full flex flex-col">
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`${siteConfig.siteUrl}${service.route}`}
        breadcrumbs={breadcrumbs}
      />

      {/* Top Breadcrumb Bar */}
      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
