import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { TokenInput } from "../ui/token-input";
import { DepositDetails } from "./deposit-details";
import { ReviewDepositModal } from "./review-deposit-modal";
import { UserActivities } from "./user-activities";

const DepositSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <TokenInput />
      <DepositDetails />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full py-3 rounded-xl font-semibold">
            Enter an Amount
          </Button>
        </DialogTrigger>

        <DialogContent>
          <ReviewDepositModal />
        </DialogContent>
      </Dialog>
      <div>
        <h4 className="text-sm font-semibold text-muted-foreground mb-2">
          My Activity
        </h4>
        <UserActivities />
      </div>
    </div>
  );
};

export { DepositSection };
