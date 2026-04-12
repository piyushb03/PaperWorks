import React from 'react';
import { CheckCircle, Layers, Bookmark } from 'lucide-react';

interface ResearchPaperMockupProps {
  className?: string;
}

export const ResearchPaperMockup: React.FC<ResearchPaperMockupProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative bg-white rounded-xl border border-[#E5E7EB] shadow-md p-5 sm:p-7 overflow-hidden text-[#111827] select-none ${className}`}
    >
      {/* Sample Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-[#3157D5]" />
          <span className="text-xs font-semibold text-[#111827]">Research Manuscript Architecture</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">
          Sample • Peer-Review Ready
        </span>
      </div>

      {/* Structural Checklist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#F7F7F5] border border-[#E5E7EB] flex items-start gap-2.5">
          <CheckCircle className="w-4 h-4 text-[#3157D5] flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-[#111827]">Explicit Novelty Claim</div>
            <div className="text-[11px] text-[#4B5563]">Contribution statement formulated in 3 clear hypotheses.</div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#F7F7F5] border border-[#E5E7EB] flex items-start gap-2.5">
          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-[#111827]">Benchmark Comparison</div>
            <div className="text-[11px] text-[#4B5563]">Evaluated against 4 baseline models on standard testbeds.</div>
          </div>
        </div>
      </div>

      {/* Structured Content Preview */}
      <div className="space-y-3 font-mono text-[11px] bg-[#F9FAFB] p-3.5 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between text-[#6B7280] text-[10px]">
          <span>SECTION III: PROPOSED ARCHITECTURE</span>
          <span className="text-[#3157D5] font-semibold">Algorithm 1 Verified</span>
        </div>
        <div className="text-[#111827] font-semibold">
          Input: Stream D = {'{x_1, x_2, ..., x_t}'}, Batch Size B = 64
        </div>
        <div className="text-[#4B5563] pl-3 border-l-2 border-[#3157D5] space-y-1">
          <div>1. Compute localized covariance matrix: Σ = Cov(D_b)</div>
          <div>2. Apply low-rank tensor decomposition: T = SVD(Σ, rank=k)</div>
          <div>3. Project feature representations into subspace: Z = T * X</div>
          <div>4. Return optimized inference vectors with bounded error ε &lt; 0.05</div>
        </div>
      </div>

      {/* Footnote / Review Hygiene */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#6B7280]">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#3157D5]" />
          <span>Citation Rigor: 48 Peer-Reviewed Sources</span>
        </div>
        <span className="font-medium text-[#111827]">Clean Editorial Register</span>
      </div>
    </div>
  );
};
