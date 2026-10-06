import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowRight, Home } from 'lucide-react';
import { SEO } from '../seo/SEO';
import { Button } from '../components/common/Button';
import { siteConfig } from '../config/siteConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEO
        title="Page Not Found | PaperWorks"
        description="The requested page could not be found. Explore PaperWorks research, engineering project, and resume support services."
        canonical={`${siteConfig.siteUrl}/404`}
      />

      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#111827] text-white flex items-center justify-center mx-auto shadow-md">
          <FileQuestion className="w-8 h-8 text-[#3157D5]" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#3157D5]">
            404 Error
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Looks like this page took a wrong turn.
          </h1>
          <p className="text-sm text-[#4B5563] leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
          >
            Back Home
          </Button>

          <Button
            to="/#services-section"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Services
          </Button>
        </div>

        <div className="pt-6 border-t border-[#E5E7EB] text-xs text-[#6B7280]">
          Need immediate document support?{' '}
          <Link to="/contact" className="text-[#3157D5] font-semibold hover:underline">
            Contact us directly
          </Link>
        </div>
      </div>
    </div>
  );
};
