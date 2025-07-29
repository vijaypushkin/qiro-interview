import { useMemo } from 'react';

const useUsdPrice = (value: string, usdcPrice: number) =>
  useMemo(() => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? 0 : numericValue * usdcPrice;
  }, [value, usdcPrice]);

export { useUsdPrice };
