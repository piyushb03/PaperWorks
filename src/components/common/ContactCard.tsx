import React, { useState } from 'react';
import { MessageSquare, Mail, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { siteConfig, getMailtoLink } from '../../config/siteConfig';

interface ContactCardProps {
  defaultService?: string;
  className?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ defaultService = '', className = '' }) => {
  const [service, setService] = useState(defaultService || 'Research Paper Support');
  const [deadline, setDeadline] = useState('Within 2 weeks');
  const [notes, setNotes] = useState('');

  const servicesList = [
    'Research Paper Support',
    'Review Paper Support',
    'IEEE Formatting Support',
    'Literature Review Support',
    'Paper Editing & Proofreading',
    'Major Project Support',
    'Final-Year Project Support',
    'Project Report Support',
    'Project Documentation & Synopsis',
    'ATS-Friendly Resume Support',
    'Academic CV Support',
    'Academic Documents Support',
    'Technical Presentation / PPT Support',
    'General Inquiry',
  ];

  const constructedMessage = `Hi PaperWorks,\n\nI would like to inquire about: ${service}\nTarget Timeline: ${deadline}${notes ? `\nDetails: ${notes}` : ''}`;

  const telegramHref = () => {
    const base = siteConfig.telegramUrl;
    const encoded = encodeURIComponent(constructedMessage);
    return base.includes('?') ? `${base}&text=${encoded}` : `${base}?text=${encoded}`;
  };

  const emailHref = () => {
    return getMailtoLink(`Inquiry: ${service}`, constructedMessage);
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-10 shadow-sm ${className}`}>
      {/* Left Column: Direct Direct Channels */}
      <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB] pb-8 lg:pb-0 lg:pr-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3157D5] bg-[#3157D5]/10 px-2.5 py-1 rounded-md">
            Direct Contact
          </span>

          <h3 className="text-2xl font-bold text-[#111827] mt-3 mb-2">
            Get in Touch Directly
          </h3>

          <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
            We review requirements directly through Telegram and Email. Share your project description, draft materials, or deadline.
          </p>

          {/* Channel Cards */}
          <div className="space-y-4">
            {/* Telegram Card */}
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3.5 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#229ED9] hover:bg-[#229ED9]/5 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#229ED9] text-white flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#6B7280]">Primary Fast Response</div>
                <div className="text-sm font-bold text-[#111827] group-hover:text-[#229ED9] transition-colors">
                  Telegram: @paperworkssupport
                </div>
                <div className="text-[11px] text-[#4B5563] mt-0.5">Quick scope review & document sharing</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group flex items-start gap-3.5 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#111827] hover:bg-black/[0.02] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#111827] text-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#6B7280]">Formal Inquiries</div>
                <div className="text-sm font-bold text-[#111827] group-hover:text-[#3157D5] transition-colors truncate">
                  {siteConfig.contactEmail}
                </div>
                <div className="text-[11px] text-[#4B5563] mt-0.5">Ideal for large attachments & guidelines</div>
              </div>
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-8 pt-6 border-t border-[#F3F4F6] space-y-2 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#3157D5]" />
            <span>Working Hours: {siteConfig.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{siteConfig.responseTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#111827]" />
            <span>Strict privacy and intellectual ownership</span>
          </div>
        </div>
      </div>

      {/* Right Column: Pre-compose Requirement Helper */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold text-[#111827] mb-1">
            Compose Your Requirement
          </h4>
          <p className="text-xs text-[#4B5563] mb-6">
            Configure your project details below to launch a pre-formatted message directly into Telegram or your email client.
          </p>

          <div className="space-y-4">
            {/* Service selector */}
            <div>
              <label htmlFor="service-select" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Service You Need Support With
              </label>
              <select
                id="service-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-sm bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[#111827] focus:border-[#3157D5] focus:bg-white"
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            {/* Target timeline */}
            <div>
              <label htmlFor="timeline-select" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Target Deadline / Urgency
              </label>
              <select
                id="timeline-select"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full text-sm bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[#111827] focus:border-[#3157D5] focus:bg-white"
              >
                <option value="Urgent (1–3 days)">Urgent (1–3 days)</option>
                <option value="Within 1 week">Within 1 week</option>
                <option value="Within 2 weeks">Within 2 weeks</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="Flexible / Just Planning">Flexible / Just Planning</option>
              </select>
            </div>

            {/* Specific notes */}
            <div>
              <label htmlFor="project-notes" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Brief Scope / Specific Requirements (Optional)
              </label>
              <textarea
                id="project-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. IEEE conference submission in 10 days, 6 pages draft ready, needs two-column formatting and reference checking..."
                className="w-full text-sm bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg p-3 text-[#111827] placeholder:text-gray-400 focus:border-[#3157D5] focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-4 border-t border-[#F3F4F6]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              href={telegramHref()}
              variant="telegram"
              size="lg"
              className="flex-1"
              icon={<Send className="w-4 h-4" />}
              analyticsEvent="telegram_click"
              analyticsData={{ service, deadline }}
            >
              Open in Telegram
            </Button>

            <Button
              href={emailHref()}
              variant="primary"
              size="lg"
              className="flex-1"
              icon={<Mail className="w-4 h-4" />}
              analyticsEvent="email_click"
              analyticsData={{ service, deadline }}
            >
              Open in Email App
            </Button>
          </div>

          <p className="text-[11px] text-[#6B7280] text-center mt-3">
            No registration required. We discuss scope directly with you.
          </p>
        </div>
      </div>
    </div>
  );
};
