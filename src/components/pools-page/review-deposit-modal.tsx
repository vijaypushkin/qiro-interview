"use client";

import { use, useMemo, useState } from "react";
import { DialogTitle } from "../ui/dialog";
import { usePoolStore } from "@/store/pools.store";
import { useUSDCPriceQuery } from "@/hooks/queries/usdc-price.query";
import { useUsdPrice } from "@/hooks/get-usd-price";
import { Button } from "../ui/button";
import { cn } from "@/utils/ui.utils";
import { MoveUpRight, X } from "lucide-react";
import Image from "next/image";
import copyIcon from "@/assets/images/icons/copy.svg";
import successIcon from "@/assets/images/icons/success.svg";
import { Close as DialogClose } from "@radix-ui/react-dialog";

const ReviewDepositModal = () => {
  const { data: usdcPrice } = useUSDCPriceQuery();

  const inputValue = usePoolStore((state) => state.inputValue);
  const active = usePoolStore((state) => state.active);

  const priceInUSD = useUsdPrice(inputValue, usdcPrice ?? 0);

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const handleClick = () => {
    setStep(2);

    setTimeout(() => setStep(3), 5_000);

    setTimeout(() => setStep(4), 10_000);
  };

  const title = useMemo(() => {
    switch (step) {
      case 1:
        return `Review ${active === "deposit" ? "Deposit" : "Withdrawal"}`;
      case 2:
      case 3:
        return "Confirm";
      case 4:
        return (
          <div className="flex items-center gap-2">
            <Image src={successIcon} alt="copy" width={46} height={46} />
            <span className="">
              {active === "deposit" ? "Deposit" : "Withdrawal"} Successful
            </span>
          </div>
        );
      default:
        return "";
    }
  }, [step]);

  return (
    <div className="">
      <div className="flex items-start justify-between mb-6">
        <DialogTitle className="text-[28px] font-semibold">{title}</DialogTitle>

        <DialogClose>
          <X className="h-5 w-5 text-muted-foreground" />
        </DialogClose>
      </div>

      <div className="rounded-2xl bg-white p-5">
        <div className="flex items-center gap-2 pb-[26px]">
          <div className="h-3 w-3 rounded-full bg-[#A98CFA]" />
          <span className="text-sm font-medium">Fintech Agency LLC</span>
        </div>

        <div className="pb-6">
          <p className="text-xs text-muted-foreground">Deposit</p>
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">{inputValue} USDC</div>
            <span className="text-xs bg-[#F1EBFC] rounded-md px-2 py-0.5 font-medium">
              ${priceInUSD.toFixed(6)}
            </span>
          </div>
        </div>

        {(step === 1 || step === 4) && (
          <TxDetails step={step} onClick={handleClick} />
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
          <Button
            className="mt-4 w-full py-2 h-[54px] text-sm font-semibold text-white bg-(--primary) rounded-full"
            onClick={handleClick}
          >
            Continue to Confirm
          </Button>
        </>
      )}

      {(step === 2 || step === 3) && (
        <TxProgress amount={inputValue} step={step} active={active} />
      )}
    </div>
  );
};

const TxDetails: React.FC<{ step: 1 | 4; onClick: () => void }> = ({
  step,
  onClick,
}) => {
  return (
    <>
      <div className="bg-radial from-[#CACACA] from-40% to-white h-px w-full" />

      <div className="flex flex-col justify-between">
        {step === 1 && (
          <>
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
          </>
        )}
        {step === 4 && (
          <>
            <div className="flex justify-between py-3.5">
              <p className="text-xs text-muted-foreground">Gas Fees</p>
              <p className="text-sm font-medium">0.1%</p>
            </div>

            <div className="flex justify-between py-3.5">
              <p className="text-xs text-muted-foreground text-right">
                Tx Hash
              </p>
              <p className="text-sm text-right font-medium flex items-center gap-2 justify-end">
                <a
                  href="https://etherscan.io/tx/0x48Ybuy8c9e04u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors flex items-center gap-1"
                >
                  0x48Ybuy8c9e04u <MoveUpRight size={12} />
                </a>
                <button
                  className="h-3 w-3"
                  onClick={() =>
                    navigator.clipboard.writeText("0x48Ybuy8c9e04u")
                  }
                >
                  <Image src={copyIcon} alt="copy" width={20} height={20} />
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const TxProgress: React.FC<{
  step: 2 | 3;
  amount: string;
  active: "deposit" | "withdraw";
}> = ({ step, amount, active }) => {
  return (
    <div className="w-full space-y-3 text-center">
      <p className="text-sm font-medium">
        Approve {active === "deposit" ? "Deposit" : "Withdrawal"} of {amount}{" "}
        USDC
      </p>

      <div className="flex items-center justify-center gap-2">
        <div className="h-2 rounded-full bg-[#8A50F7] w-1/2" />
        <div
          className={cn(
            "h-2 rounded-full w-1/2 bg-[#D9D2EF] relative overflow-hidden"
          )}
        >
          <div
            className={cn(
              "absolute top-0 left-0 h-full bg-[#8A50F7] transition-all duration-1000 ease-in-out",
              step === 2 ? "w-0" : "w-full"
            )}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Signature {step === 2 ? "1" : "2"} / 2 - Proceed in your wallet
      </p>
    </div>
  );
};

export { ReviewDepositModal };
