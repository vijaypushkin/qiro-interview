import { AssetOverviewSection } from '@/components/pools-page/assets-overview-sec';
import { DepositSection } from '@/components/pools-page/deposit-section';
import { FeaturedLoanCard } from '@/components/pools-page/featured-sec';
import { PoolActivity } from '@/components/pools-page/pool-activity';
import { PoolHighlightSec } from '@/components/pools-page/pool-highlight-sec';
import { PoolsOverview } from '@/components/pools-page/pools-overview';
import { RepaymentsSec } from '@/components/pools-page/repayments-sec';
import { StructureSection } from '@/components/pools-page/structure-sec';
import { UnderwritingPartnersSection } from '@/components/pools-page/underwriters-sec';
import { SectionNav } from '@/components/ui/section-nav';

export default function PoolsPage() {
  return (
    <main className="flex flex-col mb-8">
      <FeaturedLoanCard />

      <div className="flex flex-col p-4 lg:p-0 lg:flex-row-reverse mt-10 lg:gap-[37px]  mx-auto max-w-(--app-m-w) px-4">
        <div className="lg:w-[520px] pt-5">
          <DepositSection />
        </div>

        <div className="flex-1 flex flex-col gap-[55px]">
          <SectionNav
            sections={[
              'overview',
              'highlights',
              'repayment',
              'assets',
              'structure',
              'underwriters',
              'pool-activity',
            ]}
          />
          <section id="overview" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Overview</h2>

            <PoolsOverview />
          </section>

          <section id="highlights" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Highlights</h2>

            <PoolHighlightSec />
          </section>

          <section id="repayment" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Repayments</h2>

            <RepaymentsSec />
          </section>

          <section id="assets" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Assets</h2>

            <AssetOverviewSection />
          </section>

          <section id="structure" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Structure</h2>

            <StructureSection />
          </section>

          <section id="underwriters" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Underwriters</h2>

            <UnderwritingPartnersSection />
          </section>

          <section id="pool-activity" className="scroll-mt-18">
            <h2 className="text-heading mb-[26px]">Pool Activity </h2>

            <PoolActivity />
          </section>
        </div>
      </div>
    </main>
  );
}
