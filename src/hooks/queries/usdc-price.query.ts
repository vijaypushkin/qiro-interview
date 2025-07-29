import { useQuery } from "@tanstack/react-query";
import wretch from "wretch";
import queryString from "wretch/addons/queryString";

const getUSDCPrice = async () => {
  const res = await wretch("https://api.coingecko.com/api/v3/simple/price")
    .addon(queryString)
    .query({ ids: "usd-coin", vs_currencies: "usd" })
    .get()
    .json<{ "usd-coin": { usd: number } }>();

  return res["usd-coin"].usd;
};

const useUSDCPriceQuery = () =>
  useQuery({
    queryKey: ["usdcPrice"],
    queryFn: getUSDCPrice,
    staleTime: 60 * 1000, // 1 minute
  });

export { useUSDCPriceQuery };
