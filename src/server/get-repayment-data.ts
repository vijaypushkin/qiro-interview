'use server';

import { ChartDatum, Payment } from '@/app/types/repayment.types';

const getRepaymentData = async (): Promise<{
  chartData: ChartDatum[];
  payments: Payment[];
}> => {
  const chartData = [
    { date: '11 Jan', value: 6.8 },
    { date: '26 Jan', value: 5.6 },
    { date: '11 Feb', value: 2.4 },
    { date: '26 Feb', value: 4.6 },
    { date: '11 Mar', value: 4.8 },
    { date: '26 Mar', value: 4.2 },
    { date: '11 Apr', value: 6.7 },
    { date: '26 Apr', value: 5.1 },
    { date: '11 May', value: 2.2 },
    { date: '26 May', value: 4.6 },
    { date: '11 Jun', value: 4.7 },
  ];

  const payments = [
    { id: '1', date: '1 Dec 2024', amount: '$10,000', status: 'Paid' },
    { id: '2', date: '1 Jan 2025', amount: '$10,000', status: 'Paid' },
    { id: '3', date: '1 Feb 2025', amount: '$10,000', status: 'Pending' },
    { id: '4', date: '1 Mar 2025', amount: '$10,000', status: 'Upcoming' },
  ];

  return { chartData, payments };
};

export { getRepaymentData };
