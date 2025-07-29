import { Info } from 'lucide-react';

type AssetOverviewSectionProps = {};

const AssetOverviewSection: React.FC<AssetOverviewSectionProps> = () => {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-heading">Fintech Agency LLC</h2>
        <p className="">
          Fintech Agency LLC Finance specialises in offering liquidity services
          tailored for Small and Medium Businesses (SMBs) with an annual revenue
          threshold of at least $50 million.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border px-4 py-3 space-y-1">
          <div className="flex items-center gap-1 text-muted text-sm">
            Asset Value <Info className="w-4 h-4" />
          </div>
          <div className="text-lg font-medium">$25M</div>
        </div>

        <div className="rounded-xl border px-4 py-3 space-y-1">
          <div className="flex items-center gap-1 text-muted text-sm">
            Asset Type <Info className="w-4 h-4" />
          </div>
          <div className="text-lg font-medium">Invoice</div>
        </div>

        <div className="rounded-xl border px-4 py-3 space-y-1">
          <div className="flex items-center gap-1 text-muted text-sm">
            Maturity Date <Info className="w-4 h-4" />
          </div>
          <div className="text-lg font-medium">Apr 06, 2025</div>
        </div>
      </div>
    </section>
  );
};

export { AssetOverviewSection };
