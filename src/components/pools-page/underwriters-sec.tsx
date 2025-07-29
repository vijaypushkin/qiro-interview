import React from 'react';

import { Info } from 'lucide-react';

const UnderwritingPartnersSection: React.FC = () => {
  return (
    <div className="p-6 border rounded-xl bg-white space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">Qiro Underwriting Partners</h2>
          <p className="text-muted-foreground text-sm">
            Powering Smarter Credit Decisions with Trusted Underwriting Partners
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-[#f5f3ff] to-[#f5f3ff] text-sm font-medium text-black shadow"
        >
          📄 View Detailed Report ↗
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 border rounded-xl p-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Risk Score <Info className="w-3.5 h-3.5" />
          </div>
          <div className="text-2xl font-semibold">8.9/10</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Default Probability <Info className="w-3.5 h-3.5" />
          </div>
          <div className="text-2xl font-semibold">Low</div>
        </div>
      </div>
    </div>
  );
};

export { UnderwritingPartnersSection };
