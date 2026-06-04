import React from 'react';
import { Navigate } from 'react-router-dom';
import {
  Clock,
  CheckSquare2,
  Bookmark,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { CTASection } from '../../components/common/CTASection';
import { ResourceCard } from '../../components/resources/ResourceCard';
import { getResourceBySlug, resourcesData } from '../../data/resourcesData';
import { getServiceBySlug } from '../../data/servicesData';
import { siteConfig, getTelegramLinkWithService } from '../../config/siteConfig';

interface ResourceArticlePageProps {
  slug: string;
}

export const ResourceArticlePage: React.FC<ResourceArticlePageProps> = ({ slug }) => {
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = resource.relatedServices
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => !!s);

  const otherResources = resourcesData
    .filter((r) => r.slug !== resource.slug)
    .slice(0, 2);

  const breadcrumbs = [
    { label: 'Resources', href: '/resources' },
    { label: resource.title },
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title={resource.seoTitle}
        description={resource.seoDescription}
        canonical={`${siteConfig.siteUrl}${resource.route}`}
        ogType="article"
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: resource.title,
          description: resource.description,
          publishedTime: resource.publishedDate,
        }}
      />

      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 sm:py-16 bg-[#F7F7F5] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-semibold text-[#6B7280]">
              <span className="text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[11px] font-bold">
