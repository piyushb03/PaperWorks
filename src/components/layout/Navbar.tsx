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
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[760px] bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-6 grid grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-150"
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
