"use client";

import { useState } from "react";
import { DialogTitle } from "../ui/dialog";

const ReviewDepositModal = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleClick = () => {
    setStep(2);

    setTimeout(() => setStep(3), 5000);
  };
  return (
    <div className="">
      <div className="flex items-start justify-between mb-6">
        <DialogTitle className="text-lg font-semibold">
          Review Deposit
        </DialogTitle>
        {/* <button>
          <X className="h-5 w-5 text-muted-foreground" />
        </button> */}
      </div>

      <div className="rounded-2xl bg-white p-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#A98CFA]" />
          <span className="text-sm font-medium">Fintech Agency LLC</span>
        </div>

        <div className="pb-6">
          <p className="text-xs text-muted-foreground">Deposit</p>
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">100.00 USDC</div>
            <span className="text-xs bg-[#F1EBFC] rounded-md px-2 py-0.5 font-medium">
              $100
            </span>
          </div>
        </div>

        {step === 1 && (
          <>
            <div className="bg-radial from-[#CACACA] from-40% to-white h-px w-full" />

            <div className="flex flex-col justify-between">
              <div className="flex justify-between py-3.5">
                <p className="text-xs text-muted-foreground">Tranche</p>
                <p className="text-sm font-medium">Senior Tranche</p>
              </div>

              <div className="flex justify-between py-3.5">
                <p className="text-xs text-muted-foreground text-right">
                  Rate (USDC)
                </p>
                <p className="text-sm text-right font-medium">
                  1 USDC = 1.07900 QSR
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {step === 1 && (
        <>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            By confirming this transaction, you agree to the{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>{" "}
            and the services provisions relating to the morpho Vault.
          </p>
          <button
            className="mt-4 w-full py-2 text-sm font-semibold text-white bg-[#7B5DFA] rounded-full"
            onClick={handleClick}
          >
            Continue to Confirm
          </button>
        </>
      )}

      {step !== 1 && <SignatureProgress step={step} />}
    </div>
  );
};

const SignatureProgress: React.FC<{ step: 2 | 3 }> = ({ step }) => {
  return (
    <div className="w-full space-y-3 text-center">
      <p className="text-sm font-medium">Approve deposit of 100 USDC</p>

      <div className="flex items-center justify-center gap-2">
        <div className="h-2 rounded-full bg-[#8A50F7] w-1/2" />
        <div className="h-2 rounded-full bg-[#D9D2EF] w-1/2" />
      </div>

      <p className="text-sm text-muted-foreground">
        Signature 1 / 2 - Proceed in your wallet
      </p>
    </div>
  );
};

export { ReviewDepositModal };
