'use client';

import { useUSDCPriceQuery } from '@/hooks/queries/usdc-price.query';
import { usePoolStore } from '@/store/pools.store';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { TokenInput } from '../ui/token-input';
import { DepositDetails } from './deposit-details';
import { ReviewDepositModal } from './review-deposit-modal';
import { UserActivities } from './user-activities';

const DepositSection: React.FC = () => {
  const { data: usdcPrice } = useUSDCPriceQuery();
  const inputValue = usePoolStore((state) => state.inputValue);
  const active = usePoolStore((state) => state.active);
  const setActive = usePoolStore((state) => state.setActive);

  const isInputValid = inputValue && Number(inputValue) > 0;

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-full max-w-screen w-full p-1 gap-1">
        <Button
          onClick={() => setActive('deposit')}
          className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors w-1/2 ${
            active === 'deposit'
              ? 'bg-[#7544EA] text-white'
              : 'bg-white text-black hover:text-white hover:bg-[#7544EA]/80'
          }`}
        >
          Deposit
        </Button>
        <Button
          onClick={() => setActive('withdraw')}
          className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors  w-1/2 ${
            active === 'withdraw'
              ? 'bg-[#7544EA] text-white'
              : 'bg-white text-black hover:text-white hover:bg-[#7544EA]/80'
          }`}
        >
          Withdraw
        </Button>
      </div>

      <TokenInput usdcPrice={usdcPrice ?? 0} />
      <DepositDetails />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-full py-3 rounded-full font-semibold h-[60px]"
            disabled={!isInputValid}
          >
            {isInputValid
              ? `Review ${active === 'deposit' ? 'Deposit' : 'Withdrawal'}`
              : 'Enter an Amount'}
          </Button>
        </DialogTrigger>

        <DialogContent showCloseButton={false}>
          <ReviewDepositModal />
        </DialogContent>
      </Dialog>
      <div>
        <h4 className="text-sm font-semibold text-muted-foreground mb-2">
          My Activity
        </h4>
        <UserActivities />
      </div>
    </div>
  );
};

export { DepositSection };
