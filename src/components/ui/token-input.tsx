import { Button } from "@/components/ui/button";

const TokenInput = () => {
  return (
    <div className="rounded-xl border p-4">
      <div className="text-sm text-muted-foreground mb-1">Deposit USDC</div>
      <div className="text-4xl font-semibold tracking-tight">0.00</div>
      <div className="flex justify-between text-sm text-muted-foreground mt-1">
        <span>$0</span>
        <span className="text-xs">
          0.00 USDC{" "}
          <Button variant="link" className="px-1 text-xs">
            MAX
          </Button>
        </span>
      </div>
    </div>
  );
};

export { TokenInput };
