'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useUsdPrice } from '@/hooks/get-usd-price';
import { usePoolStore } from '@/store/pools.store';

const MAX_USDC = 45.12; // Example max value, adjust as needed

const TokenInput: React.FC<{ usdcPrice: number }> = ({ usdcPrice }) => {
  const value = usePoolStore((state) => state.inputValue);
  const setValue = usePoolStore((state) => state.setInputValue);

  const active = usePoolStore((state) => state.active);

  const [error, setError] = useState('');

  const priceInUSD = useUsdPrice(value, usdcPrice);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (/^\d*\.?\d*$/.test(val)) {
      const numericVal = parseFloat(val);
      if (!isNaN(numericVal) && numericVal > MAX_USDC) {
        setError(`Amount cannot exceed ${MAX_USDC} USDC`);
      } else {
        setError('');
      }
      setValue(val);
    }
  };

  const handleMaxClick = () => {
    setValue(MAX_USDC.toString());
    setError('');
  };

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="text-sm text-muted-foreground mb-1 capitalize">
        {active} USDC
      </div>
      <input
        type="text"
        inputMode="decimal"
        placeholder="0.00"
        value={value}
        onChange={handleChange}
        className="text-4xl font-semibold tracking-tight outline-0"
      />

      <div className="flex justify-between text-sm text-muted-foreground items-baseline mt-1">
        <span>${priceInUSD.toFixed(2)}</span>
        <span className="text-xs">
          {MAX_USDC} USDC{' '}
          <Button
            variant="link"
            className="px-1 text-xs"
            onClick={handleMaxClick}
          >
            MAX
          </Button>
        </span>
      </div>
      {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
    </div>
  );
};

export { TokenInput };
