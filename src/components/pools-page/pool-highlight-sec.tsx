import Image from "next/image";
import { PoolHighlightCard } from "./pool-highlight-card";
import protection from "@/assets/images/pools/protection.svg";
import global from "@/assets/images/pools/global.svg";
import secure from "@/assets/images/pools/secure.svg";
import transparent from "@/assets/images/pools/transparent.svg";

const PoolHighlightSec: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <PoolHighlightCard
          icon={
            <div className="w-12 h-12 pt-2 pl-2">
              <Image className="w-8 h-8" src={secure} alt="secure" />
            </div>
          }
          title="Secure & Collateralized"
          description="The pool is overcollateralized with real-world assets, ensuring risk protection. Assets include commercial real estate, SME loans, and structured finance products."
        />
        <PoolHighlightCard
          icon={
            <div className="w-12 h-12 pt-2 pl-2">
              <Image className="w-8 h-8" src={protection} alt="protection" />
            </div>
          }
          title="Investor Protection"
          description="20-25% first-loss capital ensures investors are protected from defaults. Senior tranche structure prioritizes investor repayments."
        />
        <PoolHighlightCard
          icon={
            <div className="w-12 h-12 pt-2 pl-2">
              <Image className="w-8 h-8" src={global} alt="global" />
            </div>
          }
          title="Global & Diversified"
          description="Borrowers span 15+ countries across multiple sectors. Industries include supply chain financing, renewable energy, and fintech lending."
        />
        <PoolHighlightCard
          icon={
            <div className="w-12 h-12 pt-2 pl-2">
              <Image className="w-8 h-8" src={transparent} alt="transparent" />
            </div>
          }
          title="Transparent & Monitored"
          description="Investors receive quarterly financial reports and real-time loan tracking. Data rooms provide access to borrower financials and risk metrics."
        />
      </div>
    </div>
  );
};

export { PoolHighlightSec };
