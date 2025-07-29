"use server";

const getPoolActivity = async () => {
  const data = Array(4)
    .fill(0)
    .map(() => ({
      wallet: "0x90eh...94w9",
      txType: "Invest",
      amount: " +$ 6.7K USDC",
      date: "5 Mar, 2025",
      tx: "0x90eh...94w9",
    }));

  return data;
};

export { getPoolActivity };
