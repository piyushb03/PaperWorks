import React from 'react';
import { Award, Terminal, ShieldCheck } from 'lucide-react';

interface ProjectReportPreviewProps {
  className?: string;
}

export const ProjectReportPreview: React.FC<ProjectReportPreviewProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative bg-white rounded-xl border border-[#E5E7EB] shadow-md p-5 sm:p-7 overflow-hidden text-[#111827] select-none ${className}`}
    >
      {/* Sample Header & University Ordinance Badge */}
      <div className="flex items-center justify-between pb-3.5 border-b border-gray-200 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#111827] text-white flex items-center justify-center font-bold text-xs">
            B.T
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#111827]">
              Major Project Dissertation
            </h4>
            <p className="text-[10px] text-[#6B7280]">
              Autonomous Cloud Telemetry Pipeline • B.Tech Capstone
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#3157D5] border border-blue-200 px-2 py-0.5 rounded">
          Sample • 85 Pages
        </span>
      </div>

      {/* Chapters & Content Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="p-2.5 rounded-lg bg-[#F7F7F5] border border-gray-200">
          <div className="text-[10px] font-bold text-[#6B7280] uppercase">Front Matter</div>
          <div className="text-xs font-semibold text-[#111827] mt-0.5 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#3157D5]" />
            Bonafide Certificate
          </div>
          <div className="text-[9.5px] text-[#4B5563] mt-0.5">Automated Roman i–vii</div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#F7F7F5] border border-gray-200">
          <div className="text-[10px] font-bold text-[#6B7280] uppercase">Chapter 4</div>
          <div className="text-xs font-semibold text-[#111827] mt-0.5 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            System Architecture
          </div>
          <div className="text-[9.5px] text-[#4B5563] mt-0.5">DFD 0-2 & UML Specs</div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#F7F7F5] border border-gray-200">
          <div className="text-[10px] font-bold text-[#6B7280] uppercase">Chapter 6</div>
          <div className="text-xs font-semibold text-[#111827] mt-0.5 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
            Test Suite
          </div>
          <div className="text-[9.5px] text-[#4B5563] mt-0.5">14 Unit & Load Tests</div>
        </div>
      </div>

      {/* Test Matrix Simulation */}
      <div className="border border-gray-200 rounded-lg overflow-hidden text-[10.5px]">
        <div className="bg-[#F9FAFB] px-3 py-1.5 font-semibold text-[#374151] border-b border-gray-200 flex justify-between items-center text-[10px]">
          <span>TABLE 6.2: INTEGRATION TEST SPECIFICATION</span>
          <span className="text-emerald-700 font-mono text-[9px] uppercase">All Passed</span>
        </div>
        <div className="divide-y divide-gray-100 text-[#4B5563]">
          <div className="px-3 py-1.5 flex items-center justify-between">
            <span className="font-mono text-[#111827]">TC-01: Token Auth Interceptor</span>
            <span className="text-emerald-600 font-semibold text-[10px]">PASS (42ms)</span>
          </div>
          <div className="px-3 py-1.5 flex items-center justify-between">
            <span className="font-mono text-[#111827]">TC-02: Microservice Fallback Circuit</span>
            <span className="text-emerald-600 font-semibold text-[10px]">PASS (118ms)</span>
          </div>
          <div className="px-3 py-1.5 flex items-center justify-between">
            <span className="font-mono text-[#111827]">TC-03: Asynchronous Kafka Backpressure</span>
            <span className="text-emerald-600 font-semibold text-[10px]">PASS (84ms)</span>
          </div>
        </div>
      </div>

      {/* University Formatting Compliance Bar */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10.5px] text-[#6B7280]">
        <span>Left Margin: 1.5 in (Binding Ready)</span>
        <span className="font-medium text-[#111827]">Font: Times 12pt / 1.5 Spacing</span>
      </div>
    </div>
  );
};
