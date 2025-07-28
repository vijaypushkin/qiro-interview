type DonutChartProps = {
  percentage: number;
};

const DonutChart: React.FC<DonutChartProps> = ({ percentage }) => {
  const radius = 108;
  const circumference = 2 * Math.PI * radius;
  const filled = (percentage / 100) * circumference;
  const dashArray = `${filled} ${circumference}`;

  return (
    <svg
      width="272"
      height="272"
      viewBox="0 0 272 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="136" cy="136" r={radius} fill="#fff" />

      <circle
        cx="136"
        cy="136"
        r={radius}
        stroke="#CCB3E6"
        strokeWidth="48"
        fill="none"
      />

      <circle
        cx="136"
        cy="136"
        r={radius}
        stroke="#7052E7"
        strokeWidth="48"
        fill="none"
        // strokeLinecap="round"
        strokeDasharray={dashArray}
        transform="rotate(-90 136 136)"
      />

      <text
        x="136"
        y="128"
        textAnchor="middle"
        fontSize="36"
        fontWeight="600"
        fill="#030712"
      >
        {percentage}%
      </text>
      <text x="136" y="162" textAnchor="middle" fontSize="16" fill="#030712">
        APR
      </text>
    </svg>
  );
};

export { DonutChart };
