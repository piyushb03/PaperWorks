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
                <Link to="/ieee-formatting" className="hover:text-white transition-colors">
                  IEEE Formatting Support
                </Link>
              </li>
              <li>
                <Link to="/major-project" className="hover:text-white transition-colors">
                  Major Project Support
                </Link>
              </li>
              <li>
                <Link to="/final-year-project" className="hover:text-white transition-colors">
                  Final-Year Project Support
                </Link>
              </li>
              <li>
                <Link to="/project-report" className="hover:text-white transition-colors">
                  Project Report & Thesis
                </Link>
              </li>
              <li>
                <Link to="/ats-resume" className="hover:text-white transition-colors">
                  ATS-Friendly Resumes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#3157D5]">
              Guides & Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link to="/resources/how-to-write-research-paper" className="hover:text-white transition-colors">
                  How to Write a Research Paper
                </Link>
              </li>
              <li>
                <Link to="/resources/ieee-format-guide" className="hover:text-white transition-colors">
                  IEEE Two-Column Format Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/review-paper-vs-research-paper" className="hover:text-white transition-colors">
                  Research vs. Review Papers
                </Link>
              </li>
              <li>
                <Link to="/resources/final-year-project-guide" className="hover:text-white transition-colors">
                  Final-Year Project Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/project-report-format" className="hover:text-white transition-colors">
                  Project Report Formatting
                </Link>
              </li>
              <li>
                <Link to="/resources/ats-resume-guide" className="hover:text-white transition-colors">
                  ATS Resume Writing for Freshers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#3157D5]">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About PaperWorks
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing & Quotes
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Sample Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-800">
                <Link to="/privacy" className="hover:text-white transition-colors text-xs text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors text-xs text-gray-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-white transition-colors text-xs text-gray-400">
                  Refund & Revision Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic Integrity Disclaimer Notice */}
        <div className="pt-8 pb-4 text-xs text-gray-400 leading-relaxed border-b border-gray-800/80">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gray-300">Academic Integrity Policy:</span> PaperWorks provides professional technical document support, editing, proofreading, structural formatting, and mentorship. We do not provide exam cheating, student impersonation, ghostwriting of unresearched claims, guaranteed publications, guaranteed university grades, or guaranteed employment. Authors retain full intellectual responsibility for their work.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            &copy; {CURRENT_YEAR} {siteConfig.businessName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Direct Lead Support via Telegram & Email</span>
            <a
              href="#root"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
