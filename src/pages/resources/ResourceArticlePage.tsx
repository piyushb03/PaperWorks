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
                {resource.category}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>{resource.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              {resource.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              {resource.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
              <span>Published by Editorial Team at PaperWorks</span>
              <span>•</span>
              <span className="text-emerald-700 font-medium">Free Engineering Knowledge Base</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Content */}
      <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Summary Callout Box */}
        <div className="p-6 bg-white rounded-2xl border border-[#3157D5]/20 bg-gradient-to-r from-blue-50/40 to-transparent mb-12 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3157D5] mb-2">
            <Bookmark className="w-4 h-4 text-[#3157D5]" />
            <span>Guide Executive Summary</span>
          </div>
          <p className="text-sm sm:text-base text-[#111827] font-medium leading-relaxed m-0">
            {resource.summary}
          </p>
        </div>

        {/* Article Sections */}
        <div className="space-y-12">
          {resource.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight border-b border-gray-200 pb-2">
                {section.heading}
              </h2>

              {section.subheading && (
                <p className="text-sm font-semibold text-[#3157D5]">
                  {section.subheading}
                </p>
              )}

              <div className="space-y-3.5 text-sm sm:text-base text-[#374151] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="m-0">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Takeaway Alert */}
              {section.keyTakeaway && (
                <div className="p-4 rounded-xl bg-[#F7F7F5] border-l-4 border-[#3157D5] text-xs sm:text-sm text-[#111827] font-medium my-4">
                  <span className="font-bold text-[#3157D5]">Key Insight: </span>
                  {section.keyTakeaway}
                </div>
              )}

              {/* Checklist */}
              {section.checklist && (
                <div className="p-5 rounded-xl bg-white border border-[#E5E7EB] my-4 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-3 flex items-center gap-1.5">
                    <CheckSquare2 className="w-4 h-4 text-emerald-600" />
                    <span>Self-Review Checklist</span>
                  </div>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {section.checklist.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Academic Integrity Notice */}
        <div className="mt-14 p-5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-[#6B7280] flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#3157D5] flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#111827]">Academic Integrity Reminder:</span> This resource is provided freely for educational and reference purposes. All manuscripts and university reports must represent original student work and adhere to institutional academic codes.
          </div>
        </div>

        {/* Intentional Service Bridge Callout */}
        {relatedServices.length > 0 && (
          <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            <h3 className="text-lg font-bold text-[#111827] mb-2">
              Need Professional Assistance With This?
            </h3>
            <p className="text-sm text-[#4B5563] mb-6">
              PaperWorks provides dedicated support for {relatedServices[0].title.toLowerCase()}. Discuss scope or guidelines directly with our editors.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                to={relatedServices[0].route}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View {relatedServices[0].shortTitle}
              </Button>

              <Button
                href={getTelegramLinkWithService(relatedServices[0].title)}
                variant="telegram"
                size="md"
                icon={<MessageSquare className="w-4 h-4" />}
                analyticsEvent="telegram_click"
                analyticsData={{ source: 'resource_bridge', guide: resource.slug }}
              >
                Ask via Telegram
              </Button>
            </div>
          </div>
        )}
      </article>

      {/* Related Resources Grid */}
      {otherResources.length > 0 && (
        <section className="py-12 bg-white border-t border-[#E5E7EB] w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-[#111827] mb-6">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherResources.map((res) => (
                <ResourceCard key={res.slug} resource={res} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection
          title="Working on a technical paper or project?"
          copy="Send us your requirements or questions. We will guide you on the best way forward."
        />
      </section>
    </div>
  );
};
