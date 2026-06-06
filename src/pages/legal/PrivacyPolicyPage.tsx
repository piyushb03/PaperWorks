import React from 'react';
import { SEO } from '../../seo/SEO';
import { Breadcrumbs } from '../../components/layout/Breadcrumbs';
import { siteConfig } from '../../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Privacy Policy' }];

  return (
    <div className="w-full flex flex-col">
      <SEO
        title="Privacy Policy | PaperWorks"
        description="Privacy policy and data protection standards at PaperWorks. How we handle documents, communications, and client confidentiality."
        canonical={`${siteConfig.siteUrl}/privacy`}
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
              Privacy Policy
            </h1>
            <p className="text-[#6B7280]">
              At {siteConfig.businessName}, we hold your intellectual privacy and document confidentiality in the highest regard. This Privacy Policy outlines what information we receive and how it is processed.
            </p>
          </div>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              1. Information We Collect
            </h2>
            <p>
              When you contact {siteConfig.businessName} via Telegram, Email, or external channels, you voluntarily provide information necessary to scope your document requirements. This may include:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-[#4B5563]">
              <li>Contact details such as your Telegram username or email address.</li>
              <li>Academic and technical materials: draft papers, project reports, presentation slides, resumes, or formatting guidelines.</li>
              <li>Specific instructions, deadlines, and project milestones.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              2. How We Use Your Information
            </h2>
            <p>
              Materials and communications are utilized strictly for the purpose of fulfilling your requested document formatting, technical review, and editorial assistance. We do not sell, rent, monetize, or publicly disseminate any client files.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              3. Strict Intellectual Confidentiality
            </h2>
            <p>
              All academic findings, methodologies, algorithmic implementations, and resume contents remain your sole property. {siteConfig.businessName} claims zero ownership rights over manuscripts, codebases, or documents reviewed.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              4. Third-Party Messaging Platforms
            </h2>
            <p>
              When communicating with us via third-party platforms such as Telegram or your chosen email provider, communications are subject to the respective privacy practices and terms of those platforms.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-[#111827]">
              5. Contact & Data Inquiries
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request the deletion of historical correspondence files, please contact:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E5E7EB] text-xs font-mono text-[#111827]">
              <div>Email: {siteConfig.contactEmail}</div>
              <div>Telegram: {siteConfig.telegramUrl}</div>
              <div className="text-gray-400 mt-1">[Business Entity Name &amp; Registered Address Placeholder — To be updated upon formal corporate filing]</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
