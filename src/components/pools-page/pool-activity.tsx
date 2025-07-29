import { Table } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { getPoolActivity } from "@/server/get-pool-activity";

const columns = [
  { key: "wallet", label: "Wallet", sortable: true },
  { key: "txType", label: "Tx Type", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "date", label: "Date", sortable: true },
  { key: "tx", label: "", sortable: false },
];

const PoolActivity = async () => {
  const data = await getPoolActivity();

  const formattedData = data.map((item) => ({
    wallet: (
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src="/avatar.png" />
        </Avatar>
        <a
          href="#"
          className="text-primary underline underline-offset-2 text-sm"
        >
          {item.wallet}
        </a>
      </div>
    ),
    txType: <span className="text-sm">{item.txType}</span>,
    amount: (
      <span className="text-sm font-medium text-green-600">{item.amount}</span>
    ),
    date: <span className="text-sm">{item.date}</span>,
    tx: (
      <Button
        variant="ghost"
        size="sm"
        className="rounded-full bg-[#F1EBFC] text-sm font-medium"
      >
        Tx <ExternalLinkIcon className="w-4 h-4 ml-1" />
      </Button>
    ),
  }));

  return (
    <Table
      columns={columns}
      data={formattedData}
      toolbar={
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            placeholder="Search by address"
            className="w-[280px] px-3 py-2 text-sm border rounded-md"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm">Rows per page</span>
            <select className="px-2 py-1 text-sm border rounded-md">
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>

            <div className="flex items-center justify-end gap-4 text-sm">
              <span className="text-muted-foreground">1-4 of 4 wallet</span>
              <div className="flex gap-1">
                <Button size="icon" variant="outline" disabled>
                  <span className="sr-only">Previous</span>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </Button>
                <Button size="icon" variant="outline">
                  <span className="sr-only">Next</span>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export { PoolActivity };
