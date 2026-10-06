import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [prevPathname, setPrevPathname] = useState(location.pathname);

  // Close menus when route changes
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  // Handle scroll detection for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesMenu = [
    {
      title: 'Research & Papers',
      href: '/research',
      items: [
        { label: 'Research Paper Support', href: '/research-paper' },
        { label: 'Review Paper Support', href: '/review-paper' },
        { label: 'IEEE Formatting Support', href: '/ieee-formatting' },
        { label: 'Literature Review Support', href: '/literature-review' },
        { label: 'Paper Editing & Proofreading', href: '/paper-editing' },
      ],
    },
    {
      title: 'Major & Final-Year Projects',
      href: '/projects',
      items: [
        { label: 'Major Project Support', href: '/major-project' },
        { label: 'Final-Year Project Support', href: '/final-year-project' },
        { label: 'Project Report Support', href: '/project-report' },
        { label: 'Project Documentation & Synopsis', href: '/project-documentation' },
      ],
    },
    {
      title: 'Career Documents',
      href: '/career',
      items: [
        { label: 'ATS-Friendly Resume', href: '/ats-resume' },
        { label: 'Academic Curriculum Vitae (CV)', href: '/cv' },
      ],
    },
    {
      title: 'Academic Documents',
      href: '/academic',
      items: [
        { label: 'Academic & Technical Documents', href: '/academic-documents' },
        { label: 'Technical Presentations & Slides', href: '/presentations' },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs'
          : 'bg-[#F7F7F5] border-b border-[#E5E7EB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" ref={dropdownRef}>
            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'services' ? null : 'services')
                }
                onMouseEnter={() => setActiveDropdown('services')}
                aria-expanded={activeDropdown === 'services'}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#9CA3AF] transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-[#3157D5]' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {activeDropdown === 'services' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-2 w-[680px] max-w-[calc(100vw-180px)] bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  {servicesMenu.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      <Link
                        to={group.href}
                        className="text-xs font-bold uppercase tracking-wider text-[#3157D5] hover:underline flex items-center gap-1"
                      >
                        <span>{group.title}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <ul className="space-y-1 pl-0 list-none m-0">
                        {group.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              to={sub.href}
                              className="block py-1.5 px-2 text-xs font-medium text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB] rounded transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs text-[#6B7280]">
                    <span>Need custom formatting according to your university rubric?</span>
                    <Link
                      to="/contact"
                      className="font-semibold text-[#3157D5] hover:underline flex items-center gap-1"
                    >
                      Discuss with an Editor &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors"
            >
              Pricing
            </Link>

            <Link
              to="/portfolio"
              className="px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors"
            >
              Sample Work
            </Link>

            <Link
              to="/resources"
              className="px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors"
            >
              Resources & Guides
            </Link>

            <Link
              to="/about"
              className="px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors"
            >
              About
            </Link>

            <Link
              to="/faq"
              className="px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors"
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="px-3 py-2 text-sm font-semibold text-[#374151] hover:text-[#111827] rounded-lg transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              href={siteConfig.telegramUrl}
              variant="telegram"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5" />}
              analyticsEvent="telegram_click"
              analyticsData={{ source: 'navbar_desktop' }}
            >
              Telegram
            </Button>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Discuss Requirement
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2 rounded-lg bg-[#229ED9] text-white"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#111827] hover:bg-black/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-[#F7F7F5] z-50 overflow-y-auto px-6 py-6 border-t border-[#E5E7EB] flex flex-col justify-between"
        >
          <div className="space-y-6">
            {/* Services Hubs */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                Services
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link
                  to="/research"
                  className="p-3 rounded-lg bg-white border border-[#E5E7EB] font-semibold text-xs text-[#111827]"
                >
                  Research & Papers &rarr;
                </Link>
                <Link
                  to="/projects"
                  className="p-3 rounded-lg bg-white border border-[#E5E7EB] font-semibold text-xs text-[#111827]"
                >
                  Major & Final Projects &rarr;
                </Link>
                <Link
                  to="/career"
                  className="p-3 rounded-lg bg-white border border-[#E5E7EB] font-semibold text-xs text-[#111827]"
                >
                  Career & ATS Resumes &rarr;
                </Link>
                <Link
                  to="/academic"
                  className="p-3 rounded-lg bg-white border border-[#E5E7EB] font-semibold text-xs text-[#111827]"
                >
                  Academic Documents &rarr;
                </Link>
              </div>
            </div>

            {/* Main Links */}
            <div className="flex flex-col space-y-3 font-semibold text-base text-[#111827] pt-2 border-t border-[#E5E7EB]">
              <Link to="/pricing" className="hover:text-[#3157D5] py-1">
                Pricing
              </Link>
              <Link to="/portfolio" className="hover:text-[#3157D5] py-1">
                Sample Work Portfolio
              </Link>
              <Link to="/resources" className="hover:text-[#3157D5] py-1">
                Free Student Resources & Guides
              </Link>
              <Link to="/about" className="hover:text-[#3157D5] py-1">
                About PaperWorks
              </Link>
              <Link to="/faq" className="hover:text-[#3157D5] py-1">
                Frequently Asked Questions
              </Link>
              <Link to="/contact" className="hover:text-[#3157D5] py-1">
                Contact & Channels
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-[#E5E7EB] space-y-3 mt-6">
            <Button
              href={siteConfig.telegramUrl}
              variant="telegram"
              size="lg"
              className="w-full"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Message on Telegram
            </Button>

            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Discuss Your Requirement
            </Button>

            <p className="text-center text-xs text-[#6B7280]">
              Email: {siteConfig.contactEmail}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
