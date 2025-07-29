import { Avatar, AvatarImage } from "@/components/ui/avatar";

const ActivityCard = () => {
  return (
    <div className="rounded-xl border p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src="/avatar.png" />
        </Avatar>
        <div>
          <div className="text-sm font-medium">0x9102...e3e7</div>
          <div className="text-xs text-muted-foreground">Invested</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-red-600">-$69.33 USDC</div>
        <div className="text-xs text-muted-foreground">Mar 1, 2025</div>
      </div>
    </div>
  );
};

const UserActivities: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <ActivityCard />
      <ActivityCard />
    </div>
  );
};

export { UserActivities };
