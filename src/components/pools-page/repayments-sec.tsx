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

import { ChartDatum, Payment } from '@/app/types/repayment.types';
import { Card, CardContent } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

type RepaymentsSecProps = {
  chartData: ChartDatum[];
  payments: Payment[];
};

const RepaymentsSec: React.FC<RepaymentsSecProps> = ({
  chartData,
  payments,
}) => {
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
