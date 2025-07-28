import { PoolHighlightCard } from "./pool-highlight-card";

const PoolHighlightSec: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <PoolHighlightCard
          icon={<div className="w-6 h-6 bg-red-600" />}
          title="Pool"
          description="Pool description"
        />
        <PoolHighlightCard
          icon={<div className="w-6 h-6 bg-red-600" />}
          title="Pool"
          description="Pool description"
        />
        <PoolHighlightCard
          icon={<div className="w-6 h-6 bg-red-600" />}
          title="Pool"
          description="Pool description"
        />
        <PoolHighlightCard
          icon={<div className="w-6 h-6 bg-red-600" />}
          title="Pool"
          description="Pool description"
        />
      </div>
    </div>
  );
};

export { PoolHighlightSec };
