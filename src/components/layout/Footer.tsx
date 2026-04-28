import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { siteConfig } from '../../config/siteConfig';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {

  return (
    <footer className="w-full bg-[#111827] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo inverted showTagline />
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Boutique professional support for research papers, review papers, IEEE formatting, major engineering projects, technical thesis reports, and career resumes.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Working: {siteConfig.hours}</span>
              </div>
              <div className="text-gray-400">
                {siteConfig.responseTime}
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-3 flex flex-wrap gap-2.5">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#229ED9] text-white text-xs font-semibold hover:bg-[#1D8BC0] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Telegram Support</span>
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 text-gray-200 text-xs font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#3157D5]">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link to="/research-paper" className="hover:text-white transition-colors">
                  Research Paper Support
                </Link>
              </li>
              <li>
                <Link to="/review-paper" className="hover:text-white transition-colors">
                  Review & Survey Paper
                </Link>
              </li>
              <li>
