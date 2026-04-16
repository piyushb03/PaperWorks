import React from 'react';
import { FileCheck, Sparkles } from 'lucide-react';

interface IEEDocumentPreviewProps {
  className?: string;
  showBadge?: boolean;
}

export const IEEDocumentPreview: React.FC<IEEDocumentPreviewProps> = ({
  className = '',
  showBadge = true,
}) => {
  return (
    <div
      className={`relative bg-white rounded-xl border border-[#E5E7EB] shadow-md p-5 sm:p-7 overflow-hidden text-[#111827] select-none ${className}`}
    >
      {/* Sample Watermark / Badge */}
      {showBadge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#111827] text-white px-2 py-0.5 rounded shadow-xs">
            <Sparkles className="w-2.5 h-2.5 text-[#3157D5]" />
            Sample • IEEE Standard
          </span>
        </div>
      )}

      {/* Manuscript Header */}
      <div className="text-center pb-4 border-b border-gray-200">
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#6B7280] mb-1">
          IEEE Transactions on Computational Engineering • Vol. 32, No. 4
        </div>
        <h4 className="text-sm sm:text-base font-serif font-bold text-[#111827] leading-snug max-w-lg mx-auto">
          Optimizing Edge Inference Latency in Distributed Sensor Topologies
        </h4>
        <div className="text-[11px] text-[#4B5563] mt-1 font-serif italic">
          A. Sharma, R. Verma, and K. Patel
        </div>
        <div className="text-[9px] text-[#9CA3AF] font-mono mt-0.5">
          Department of Computer Science & Engineering • Digital Object Identifier (DOI): 10.1109/TCE.2025.0421
        </div>
      </div>

      {/* Abstract & Index Terms */}
      <div className="py-3 px-2 text-[10.5px] leading-relaxed text-[#374151] border-b border-gray-100 bg-[#F9FAFB]/50 rounded my-2">
        <span className="font-bold italic text-[#111827]">Abstract—</span>
        Recent breakthroughs in localized telemetry processing necessitate edge inference pipelines capable of operating under strict thermal and memory budgets. This paper presents an adaptive quantization framework reducing memory footprint by 38.4% while retaining 99.1% baseline precision across multi-node IoT sensor clusters.
        <div className="mt-1 text-[9.5px]">
          <span className="font-bold text-[#111827]">Index Terms—</span>
          Edge computing, neural quantization, distributed consensus, low-power telemetry.
        </div>
