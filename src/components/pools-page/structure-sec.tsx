import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DonutChart } from "../charts/donut-chart";

type StructureSectionProps = {};

const StructureSection: React.FC<StructureSectionProps> = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart + APR */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          <DonutChart percentage={14} />
          <div className="text-center mt-2 text-sm text-muted">APR</div>
        </div>

        {/* Tranche Info */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-muted text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C4DFF]" />
                Senior Tranche Details
              </div>
              <Badge variant="outline">Fixed Yield</Badge>
            </div>
            <div className="grid grid-cols-3 border rounded-xl p-3 text-center text-sm">
              <div>
                <div className="text-muted">Allocation</div>
                <div className="font-medium">80 %</div>
              </div>
              <div>
                <div className="text-muted">APY</div>
                <div className="font-medium">14 %</div>
              </div>
              <div>
                <div className="text-muted">TVL</div>
                <div className="font-medium">336K USD</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-muted text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B388FF]" />
                Junior Tranche Details
              </div>
              <Badge variant="outline">Variable Yield</Badge>
            </div>
            <div className="grid grid-cols-3 border rounded-xl p-3 text-center text-sm">
              <div>
                <div className="text-muted">Allocation</div>
                <div className="font-medium">20 %</div>
              </div>
              <div>
                <div className="text-muted">APY</div>
                <div className="font-medium">19 %</div>
              </div>
              <div>
                <div className="text-muted">TVL</div>
                <div className="font-medium">5M USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-xl overflow-hidden bg-white">
        <div className="grid grid-cols-2 text-muted text-sm font-medium px-4 py-[14px]">
          <div>Details</div>
          <div>Description</div>
        </div>
        <div className="grid grid-cols-2 px-4 py-[27px] border-t text-sm">
          <div className="font-medium">Pool Type</div>
          <div>Senior Tranche</div>
        </div>
        <div className="grid grid-cols-2 px-4 py-[27px] border-t text-sm">
          <div className="font-medium">Investor Protections</div>
          <div>20-25% first-loss coverage</div>
        </div>
        <div className="grid grid-cols-2 px-4 py-[27px] border-t text-sm">
          <div className="font-medium">Collateralization</div>
          <div>
            Yes, This loan is secured with real-world, off-chain assets as
            collateral.
          </div>
        </div>
        <div className="grid grid-cols-2 px-4 py-[27px] border-t text-sm">
          <div className="font-medium">Legal Documents</div>
          <div>
            <Link href="#" className="underline">
              📜 Senior Pool Agreement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StructureSection };
