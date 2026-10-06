import React, { useState } from 'react';
import { MessageSquare, Mail, Search } from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Button } from '../components/common/Button';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CTASection } from '../components/common/CTASection';
import { faqsData } from '../data/faqsData';
import { siteConfig } from '../config/siteConfig';

export const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const breadcrumbs = [{ label: 'Frequently Asked Questions' }];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Frequently Asked Questions (FAQ) | PaperWorks"
        description="Find clear answers about PaperWorks services, pricing estimation, IEEE formatting compliance, turnaround times, and academic integrity policies."
        canonical={`${siteConfig.siteUrl}/faq`}
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
            Help & Clarifications
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our service scopes, quoting process, review windows, and academic integrity standards.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. IEEE, pricing, turnaround)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-xl text-[#111827] placeholder:text-gray-400 focus:border-[#3157D5] focus:outline-none shadow-2xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Questions List */}
      <section className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'general', label: 'General & Process' },
            { id: 'research', label: 'Research & IEEE' },
            { id: 'projects', label: 'Capstone Projects' },
            { id: 'career', label: 'Career & ATS' },
            { id: 'pricing', label: 'Pricing & Quotes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F9FAFB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        {filteredFaqs.length > 0 ? (
          <FAQAccordion items={filteredFaqs} defaultOpenIndex={0} />
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-[#E5E7EB] text-[#6B7280]">
            No questions matched your search query. Try searching for different keywords or ask us directly.
          </div>
        )}

        {/* Have a Question Not Answered Here? */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-[#E5E7EB] text-center space-y-3">
          <h3 className="text-base font-bold text-[#111827]">
            Have a question that isn&apos;t covered here?
          </h3>
          <p className="text-xs text-[#4B5563] max-w-md mx-auto">
            We are always happy to answer specific queries about your paper, thesis deadline, or formatting template.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={siteConfig.telegramUrl}
              variant="telegram"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5" />}
            >
              Ask on Telegram
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="sm"
              icon={<Mail className="w-3.5 h-3.5" />}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CTASection />
      </section>
    </div>
  );
};
