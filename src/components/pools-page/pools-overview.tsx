import { AppTooltip } from '../ui/app-tooltip';
import { Button } from '../ui/button';

const PoolsOverview: React.FC = () => {
  return (
    <div className="rounded-2xl border p-6 bg-white text-black mx-auto space-y-6">
      {/* Pool Capacity */}
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
          Pool Capacity
          <AppTooltip className="w-4 h-4">Capacity of the pool</AppTooltip>
        </div>
        <div className="text-3xl font-semibold">$28,493,949</div>

        {/* Progress Bar */}
        <div className="relative mt-2 h-2 w-full rounded-full bg-purple-100">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-purple-600"
            style={{ width: '80%' }}
          />
          <span className="absolute right-0 -top-6 text-xs text-purple-600 font-medium">
            80% Filled
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 divide-x rounded-2xl border p-4">
        <div className="space-y-1 px-7">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Estimated APY
            <AppTooltip className="w-4 h-4">Capacity of the pool</AppTooltip>
          </div>
          <div className="text-2xl font-semibold">14%</div>
        </div>
        <div className="space-y-1 px-7">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Capital Formation
            <AppTooltip className="w-4 h-4">Capacity of the pool</AppTooltip>
          </div>
          <div className="text-2xl font-semibold">30 Days</div>
        </div>
        <div className="space-y-1 px-7">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Loan Term
            <AppTooltip className="w-4 h-4">Capacity of the pool</AppTooltip>
          </div>
          <div className="text-2xl font-semibold">4 Days</div>
        </div>
      </div>
    </div>
  );
};

export { PoolsOverview };
