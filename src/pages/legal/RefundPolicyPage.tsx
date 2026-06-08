import React from 'react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { siteConfig } from '../../config/siteConfig';

export const RefundPolicyPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Refund & Revision Policy' }];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Refund & Revision Policy | PaperWorks"
        description="Clear, fair refund and revision guidelines for PaperWorks document support services."
        canonical={`${siteConfig.siteUrl}/refund-policy`}
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
              Refund & Revision Policy
            </h1>
            <p className="text-[#6B7280]">
              We believe in complete transparency and fair collaboration. This policy outlines how revisions, cancellations, and refunds are handled.
            </p>
          </div>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              1. Permitted Revisions
            </h2>
            <p>
              Your satisfaction with our technical precision and formatting quality is paramount. Every service engagement includes a post-delivery review window during which you can submit queries, request formatting corrections, or seek clarification on editorial commentary.
            </p>
            <p>
              Revisions are accommodated free of charge provided they fall within the parameters of the originally agreed scope and instructions.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              2. Cancellation Before Work Begins
            </h2>
            <p>
              If you cancel an order before technical work or document review has commenced, you are eligible for a full refund minus any third-party transaction or processing fees incurred.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              3. Work In-Progress
            </h2>
            <p>
              Because our services involve direct intellectual time, technical editing, and manual formatting by domain specialists, orders cancelled while work is actively in progress will be evaluated on a prorated basis according to completed milestones.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              4. Delivered Work
            </h2>
            <p>
              Once final deliverables conforming to the agreed scope have been delivered, refunds are generally not granted. In the rare event of an unresolvable formatting discrepancy or failure to meet the agreed scope specifications, we will review the case objectively and determine fair remediation or credit.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              5. How to Request Revisions or Inquiries
            </h2>
            <p>
              To request a revision or discuss an order, reach out to your editor via Telegram or Email with your original order reference:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E5E7EB] text-xs font-mono text-[#111827]">
              <div>Email: {siteConfig.contactEmail}</div>
              <div>Telegram: {siteConfig.telegramUrl}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
