type ChartDatum = {
  date: string;
  value: number;
};

type Payment = {
  id: string;
  date: string;
  amount: string;
  status: string;
};

export { type ChartDatum, type Payment };
