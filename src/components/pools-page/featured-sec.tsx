import React from "react";
import featureImg from "@/assets/images/pools/pool-feature.png";
import Image from "next/image";

const FeaturedLoanCard: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-cover bg-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0">
        <Image
          src={featureImg}
          alt="usa boston buildings"
          fill={true}
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 text-white px-4 py-6 flex flex-col justify-between  mx-auto max-w-(--app-m-w)">
        <div className="space-y-2">
          <button className="text-lg">&larr;</button>
          <p className="text-sm text-muted">Featured Loan</p>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-semibold">Fintech Agency LLC</h1>
            <a
              href="#"
              className="text-sm underline underline-offset-2 hover:opacity-80"
            >
              Contract ↗
            </a>
          </div>
          <p className="text-sm max-w-lg text-white/80">
            Helo Finance specialises in offering liquidity services tailored for
            Small and Medium Businesses (SMBs) with an annual revenue threshold
            of at least $50 million.
          </p>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-4 mt-4">
          <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
            <p className="text-xs text-white/70">Estimated APY</p>
            <p className="text-lg font-semibold">14%</p>
          </div>
          <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
            <p className="text-xs text-white/70">Minimum Investment</p>
            <p className="text-lg font-semibold">$100K</p>
          </div>
          <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
            <p className="text-xs text-white/70">Total Value Locked</p>
            <p className="text-lg font-semibold">$5M</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="bg-white/10 hover:bg-white/20 text-sm rounded-full px-4 py-2">
              🌐 Website
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-sm rounded-full px-4 py-2">
              🔗 Linkedin
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-sm rounded-full px-4 py-2">
              ✖ Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturedLoanCard };
