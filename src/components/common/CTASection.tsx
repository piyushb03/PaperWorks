import React from 'react';
import { MessageSquare, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { siteConfig, getTelegramLinkWithService, getMailtoLink } from '../../config/siteConfig';

interface CTASectionProps {
  title?: string;
  copy?: string;
  contextService?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Have something you need help preparing?',
  copy = "Tell us what you're working on and we'll discuss the best way forward.",
  contextService,
  className = '',
}) => {
  return (
    <section className={`w-full py-16 sm:py-20 bg-[#111827] text-white rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-xl ${className}`}>
      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#3157D5] bg-[#3157D5]/20 border border-[#3157D5]/40 px-3 py-1 rounded-full mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#3157D5]" />
          Direct Professional Support
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        {/* Copy */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {copy}
        </p>

        {/* Conversion CTA Group */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button
            to="/contact"
            variant="accent"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Discuss Your Requirement
          </Button>

          <Button
            href={getTelegramLinkWithService(contextService)}
            variant="telegram"
            size="lg"
            icon={<MessageSquare className="w-4 h-4" />}
            analyticsEvent="telegram_click"
            analyticsData={{ source: 'cta_section', context: contextService || 'general' }}
          >
            Message on Telegram
          </Button>

          <Button
            href={getMailtoLink(
              contextService ? `Requirement Discussion: ${contextService}` : 'Project / Document Requirement Discussion',
              'Hello PaperWorks,\n\nI would like to discuss my project/document requirements:\n- Service needed:\n- Target deadline:\n- Document scope / details:\n\nThank you.'
            )}
            variant="secondary"
            size="lg"
            icon={<Mail className="w-4 h-4" />}
            analyticsEvent="email_click"
            analyticsData={{ source: 'cta_section', context: contextService || 'general' }}
          >
            Send an Email
          </Button>
        </div>

        {/* Response Note */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-400 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span>⚡ {siteConfig.responseTime}</span>
          <span>🔒 Direct & Confidential</span>
          <span>🛡️ Pure Professional Assistance</span>
        </div>
      </div>
    </section>
  );
};
