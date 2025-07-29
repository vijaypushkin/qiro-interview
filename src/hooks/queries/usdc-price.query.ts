import { useQuery } from '@tanstack/react-query';
import wretch from 'wretch';
import queryString from 'wretch/addons/queryString';

const getUSDCPrice = async () => {
  try {
    const res = await wretch('https://api.coingecko.com/api/v3/simple/price')
      .addon(queryString)
      .query({ ids: 'usd-coin', vs_currencies: 'usd' })
      .get()
      .json<{ 'usd-coin': { usd: number } }>();

    if (!res || !res['usd-coin'] || typeof res['usd-coin'].usd !== 'number') {
      throw new Error('Invalid response from CoinGecko API');
    }

    return res['usd-coin'].usd;
  } catch (error: any) {
    throw new Error(
      `Failed to fetch USDC price from CoinGecko API: ${
        error?.message || error
      }`,
    );
  }
};

const useUSDCPriceQuery = () =>
  useQuery({
    queryKey: ['usdcPrice'],
    queryFn: getUSDCPrice,
    staleTime: 60 * 1000, // 1 minute
  });

export { useUSDCPriceQuery };
