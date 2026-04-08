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
