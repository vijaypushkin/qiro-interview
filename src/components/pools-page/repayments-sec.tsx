'use client';

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

const RepaymentsSec: React.FC = () => {
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

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="h-[260px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} />
              <YAxis
                tickFormatter={(v) => `${v}M`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="var(--primary)">
                {chartData.map((x, i) => (
                  <Cell
                    key={`cell-${x.date}`}
                    fill={i > 7 ? '#C8BAFF' : 'var(--primary)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Table
          variant="compact"
          columns={[
            { key: 'id', label: 'ID' },
            { key: 'date', label: 'Date' },
            { key: 'amount', label: 'Amount' },
            { key: 'status', label: 'Status' },
          ]}
          data={payments}
        />
      </CardContent>
    </Card>
  );
};

export { RepaymentsSec };
