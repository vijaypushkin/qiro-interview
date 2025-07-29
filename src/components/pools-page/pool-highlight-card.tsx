import React from 'react';

type PoolHighlightCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const PoolHighlightCard: React.FC<PoolHighlightCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 text-purple-600">{icon}</div>
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export { PoolHighlightCard };
