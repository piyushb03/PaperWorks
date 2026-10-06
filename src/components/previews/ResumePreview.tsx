import React from 'react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

interface ResumePreviewProps {
  className?: string;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative bg-white rounded-xl border border-[#E5E7EB] shadow-md p-5 sm:p-7 overflow-hidden text-[#111827] select-none ${className}`}
    >
      {/* Sample Header & Parseability Score */}
      <div className="flex items-center justify-between pb-3.5 border-b border-gray-200 mb-4">
        <div>
          <span className="text-xs font-bold text-[#111827] tracking-tight">
            Single-Column Technical Resume
          </span>
          <p className="text-[10px] text-[#6B7280]">
            Formatted for Workday, Greenhouse & Lever Parsers
          </p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          Sample • 100% Parseable
        </span>
      </div>

      {/* Candidate Header Simulation */}
      <div className="text-center pb-3 border-b border-gray-100">
        <h4 className="text-sm font-bold text-[#111827]">
          ALEXANDER CHEN
        </h4>
        <div className="text-[10px] text-[#4B5563] mt-0.5 space-x-2">
          <span>alex.chen@university.edu</span>
          <span>•</span>
          <span>github.com/alexchen-dev</span>
          <span>•</span>
          <span>linkedin.com/in/alexchen</span>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="py-2.5 border-b border-gray-100 text-[10px] space-y-1">
        <div className="font-bold text-[#111827] uppercase tracking-wide text-[10.5px]">
          Technical Skills
        </div>
        <div className="text-[#374151]">
          <span className="font-semibold text-[#111827]">Languages:</span> Python, TypeScript, Go, SQL, C++
        </div>
        <div className="text-[#374151]">
          <span className="font-semibold text-[#111827]">Frameworks & Libraries:</span> React, Next.js, Node.js, FastAPI, PyTorch, Tailwind CSS
        </div>
        <div className="text-[#374151]">
          <span className="font-semibold text-[#111827]">Developer Tools & Cloud:</span> Git, Docker, AWS (S3, Lambda), Redis, PostgreSQL
        </div>
      </div>

      {/* Projects Section (XYZ Formula) */}
      <div className="py-2.5 border-b border-gray-100 text-[10.5px] space-y-2">
        <div className="font-bold text-[#111827] uppercase tracking-wide">
          Technical Projects
        </div>

        <div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-[#111827]">Distributed Document Ingestion Engine</span>
            <span className="text-[#6B7280]">Go, Redis, Docker • 2024</span>
          </div>
          <ul className="list-disc list-inside text-[9.5px] text-[#4B5563] mt-1 space-y-0.5">
            <li>Architected concurrent token-bucket rate limiter handling 2,400 req/sec with zero dropped packets.</li>
            <li>Reduced query latency by 34% across 500k index records by implementing Redis LRU caching layer.</li>
          </ul>
        </div>
      </div>

      {/* Parser Notice */}
      <div className="mt-3 pt-2 flex items-center justify-between text-[10px] text-[#6B7280]">
        <div className="flex items-center gap-1 text-emerald-700 font-medium">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>Zero Unparseable Multi-Column Tables</span>
        </div>
        <div className="flex items-center gap-1 text-[#4B5563]">
          <ShieldAlert className="w-3 h-3 text-[#3157D5]" />
          <span>Standard UTF-8 Typography</span>
        </div>
      </div>
    </div>
  );
};
