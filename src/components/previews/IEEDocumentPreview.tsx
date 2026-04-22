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
      </div>

      {/* Two Column Layout Simulation */}
      <div className="grid grid-cols-2 gap-4 text-[10px] leading-normal font-serif text-[#374151] pt-1">
        {/* Left Column */}
        <div className="space-y-2">
          <div>
            <div className="font-sans font-bold text-[10.5px] text-[#111827] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-1 flex items-center justify-between">
              <span>I. Introduction</span>
              <FileCheck className="w-3 h-3 text-[#3157D5]" />
            </div>
            <p className="indent-2 text-justify">
              Edge devices operating in remote sensory nodes frequently encounter severe bandwidth bottlenecks [1]. Prior architectures relied primarily on cloud offloading [2], introducing unacceptable propagation latencies in mission-critical applications.
            </p>
          </div>

          <div className="bg-[#F7F7F5] p-2 rounded border border-gray-200 font-mono text-[9px] text-center my-1.5">
            <span className="italic">L</span><sub>total</sub> = α · <span className="italic">L</span><sub>lat</sub> + (1 - α) · <span className="italic">L</span><sub>mem</sub>
            <span className="float-right text-[#9CA3AF]">(1)</span>
          </div>

          <div>
            <div className="font-sans font-bold text-[10.5px] text-[#111827] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-1">
              <span>II. System Model</span>
            </div>
            <p className="indent-2 text-justify">
              Let G = (V, E) represent the directed communication topology where each vertex v ∈ V denotes an autonomous computing node with bounded SRAM capacity.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          {/* Mock Figure Block */}
          <div className="border border-dashed border-[#D1D5DB] rounded p-2 bg-[#F9FAFB] text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#3157D5]" />
              <span className="w-8 h-1 bg-gray-300 rounded" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="w-8 h-1 bg-gray-300 rounded" />
              <span className="w-2 h-2 rounded-full bg-[#111827]" />
            </div>
            <div className="text-[8.5px] font-sans font-medium text-[#4B5563]">
              Fig. 1. Pipelined quantization topology across edge sensors.
            </div>
          </div>

          <div>
            <div className="font-sans font-bold text-[10.5px] text-[#111827] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-1">
              <span>References</span>
            </div>
            <div className="space-y-1 text-[8.5px] text-[#6B7280]">
              <p>[1] J. Dean and S. Ghemawat, &quot;MapReduce: Simplified data processing,&quot; <em>Commun. ACM</em>, vol. 51, no. 1, pp. 107–113, 2008.</p>
              <p>[2] K. He et al., &quot;Deep residual learning for image recognition,&quot; in <em>Proc. IEEE CVPR</em>, 2016, pp. 770–778.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
