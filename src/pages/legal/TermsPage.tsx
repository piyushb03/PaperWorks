import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { siteConfig } from '../../config/siteConfig';

export const TermsPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Terms of Service' }];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Terms of Service | PaperWorks"
        description="Terms of service, academic integrity expectations, and acceptable usage policy for PaperWorks document support services."
        canonical={`${siteConfig.siteUrl}/terms`}
        breadcrumbs={breadcrumbs}
      />

      <div className="w-full bg-white border-b border-[#E5E7EB] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-6 text-sm sm:text-base text-[#374151] leading-relaxed">
          <div>
            <span className="text-xs font-mono uppercase text-[#6B7280]">
              Last Updated: March 2025
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-2 mb-4">
              Terms of Service
            </h1>
            <p className="text-[#6B7280]">
              Please review these Terms of Service carefully before utilizing document support, formatting, or mentoring services provided by {siteConfig.businessName}.
            </p>
          </div>

          {/* Academic Integrity Highlight */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3 my-6">
            <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Academic Integrity Mandate:</span> {siteConfig.businessName} provides formatting, editorial refinement, technical documentation, and mentoring. We strictly prohibit services intended for cheating, taking examinations on behalf of students, submitting unresearched claims, or violating university academic honor codes.
            </div>
          </div>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              1. Nature of Services
            </h2>
            <p>
              {siteConfig.businessName} offers professional assistance designed to elevate the presentation, organization, formatting, and technical communication of documents supplied by the client. You represent that any source data, research findings, or project code provided to us represent your legitimate work.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              2. Scope of Work & Quotations
            </h2>
            <p>
              All service engagements are defined by a mutually agreed scope and delivery timeline confirmed via Telegram or Email prior to commencement. Any scope alterations requested after commencement may require an adjusted quote or milestone timeline.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              3. Disclaimer of Outcomes
            </h2>
            <p>
              {siteConfig.businessName} makes no guarantees regarding:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-[#4B5563]">
              <li>Acceptance or publication in any academic conference or journal.</li>
              <li>Specific letter grades or evaluation outcomes awarded by university examiners or committees.</li>
              <li>Job interview offers or corporate hiring decisions.</li>
            </ul>
            <p>
              Peer-review and evaluation processes involve independent third-party subjectivity outside our control.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              4. Permitted Revisions
            </h2>
            <p>
              Every delivered project includes a designated review window (typically 3 to 7 calendar days after delivery) during which you may request refinements that directly align with the originally agreed scope.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              5. Governing Law & Contact
            </h2>
            <p>
              For legal inquiries regarding these Terms:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E5E7EB] text-xs font-mono text-[#111827]">
              <div>Email: {siteConfig.contactEmail}</div>
              <div className="text-gray-400 mt-1">[Jurisdiction / Registered Business Location Placeholder — To be updated upon formal corporate filing]</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
