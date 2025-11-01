export const BreastPump = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full max-w-md mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main bottle */}
      <rect
        x="70"
        y="100"
        width="60"
        height="80"
        rx="5"
        className="fill-primary opacity-20 stroke-primary"
        strokeWidth="2"
      />
      
      {/* Bottle cap */}
      <rect
        x="75"
        y="90"
        width="50"
        height="15"
        rx="3"
        className="fill-secondary opacity-30 stroke-secondary"
        strokeWidth="2"
      />
      
      {/* Pump top */}
      <circle
        cx="100"
        cy="70"
        r="25"
        className="fill-accent opacity-20 stroke-accent"
        strokeWidth="2"
      />
      
      {/* Measurement lines */}
      <line x1="75" y1="120" x2="85" y2="120" className="stroke-muted-foreground" strokeWidth="1" />
      <line x1="75" y1="140" x2="85" y2="140" className="stroke-muted-foreground" strokeWidth="1" />
      <line x1="75" y1="160" x2="85" y2="160" className="stroke-muted-foreground" strokeWidth="1" />
      
      {/* Decorative handle */}
      <path
        d="M 130 110 Q 145 125 130 140"
        className="stroke-primary"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};
