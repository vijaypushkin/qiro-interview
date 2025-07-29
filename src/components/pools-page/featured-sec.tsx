import React from 'react';

import Image from 'next/image';

import globalImg from '@/assets/images/icons/global.svg';
import linkedImg from '@/assets/images/icons/linkedin.svg';
import twitterImg from '@/assets/images/icons/twitter.svg';
import featureImg from '@/assets/images/pools/pool-feature.png';

const FeaturedLoanCard: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[352px] bg-cover bg-center overflow-hidden">
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
      <div className="absolute inset-0 text-white px-4 py-6 flex flex-col justify-between mx-auto lg:max-w-(--app-m-w)">
        <div className="space-y-2">
          <button className="text-lg">&larr;</button>
          <p className="text-xl font-medium">Featured Loan</p>
          <div className="flex items-baseline gap-2">
            <h1 className="text-[40px] font-semibold">Fintech Agency LLC</h1>
            <a
              href="#"
              className="underline underline-offset-2 hover:opacity-80"
            >
              Contract ↗
            </a>
          </div>
          <p className="max-w-lg text-white">
            Helo Finance specialises in offering liquidity services tailored for
            Small and Medium Businesses (SMBs) with an annual revenue threshold
            of at least $50 million.
          </p>
        </div>

        {/* Metrics */}
        <div className="flex lg:items-center justify-between flex-col lg:flex-row lg:gap-0 gap-4">
          <div className="flex gap-4 flex-row">
            <div className="bg-white/10 rounded-xl px-4 py-3 text-left">
              <p className="text-sm">Estimated APY</p>
              <p className="text-[28px]  font-semibold">14%</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-3 text-left">
              <p className="text-sm">Minimum Investment</p>
              <p className="text-[28px] font-semibold">$100K</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-3 text-left">
              <p className="text-sm">Total Value Locked</p>
              <p className="text-[28px]  font-semibold">$5M</p>
            </div>
          </div>
          <div className="lg:ml-auto flex gap-2">
            <a
              className="bg-[#f7f7f7]/74 hover:bg-white/74 text-sm rounded-full px-4 py-2 flex items-center gap-2 text-black"
              href="https://www.qiro.fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={globalImg} alt="" width={20} height={20} /> Website
            </a>
            <a
              className="bg-[#f7f7f7]/74 hover:bg-white/74 text-sm rounded-full px-4 py-2 flex items-center gap-2 text-black"
              href="https://www.linkedin.com/company/qiro-finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedImg} alt="" width={20} height={20} /> Linkedin
            </a>
            <a
              className="bg-[#f7f7f7]/74 hover:bg-white/74 text-sm rounded-full px-4 py-2 flex items-center gap-2 text-black"
              href="https://x.com/Qiro_Finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitterImg} alt="" width={20} height={20} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturedLoanCard };
