const DepositDetails = () => {
  return (
    <div className="rounded-xl p-4 space-y-4 bg-white">
      <div>
        <div className="text-xs text-muted-foreground">Minimum Investments</div>
        <div className="font-medium">100K</div>
      </div>
      <div>
        <div className="text-xs text-muted-foreground">Lockup Period</div>
        <div className="font-medium">28 Days</div>
      </div>
      <div>
        <div className="text-xs text-muted-foreground">APY</div>
        <div className="font-medium">7.87%</div>
      </div>
    </div>
  );
};

export { DepositDetails };
