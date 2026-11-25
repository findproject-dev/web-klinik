interface LogoProps {
  size?: number;
  withText?: boolean;
  inverted?: boolean;
}

export default function Logo({ size = 40, inverted = false }: LogoProps) {
  const teal = inverted ? "#FFFFFF" : "#238C83";
  const deepTeal = inverted ? "rgba(255,255,255,0.7)" : "#176B68";
  const bg = inverted ? "rgba(255,255,255,0.15)" : "#DCEBE3";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Klinik Sehatara"
      role="img"
    >
      {/* Background rounded square */}
      <rect width="48" height="48" rx="13" fill={bg} />
      
      {/* Protective arc / shield shape */}
      <path
        d="M24 8 C18 8 13 10 11 13 L11 24 C11 32 17 38 24 40 C31 38 37 32 37 24 L37 13 C35 10 30 8 24 8Z"
        fill={teal}
        opacity="0.15"
      />

      {/* Cross symbol */}
      <rect x="21" y="14" width="6" height="20" rx="3" fill={teal} />
      <rect x="14" y="21" width="20" height="6" rx="3" fill={teal} />

      {/* Family dots – 3 people representation */}
      <circle cx="17" cy="10" r="2.5" fill={deepTeal} opacity="0.5" />
      <circle cx="24" cy="8" r="2.5" fill={deepTeal} opacity="0.5" />
      <circle cx="31" cy="10" r="2.5" fill={deepTeal} opacity="0.5" />

      {/* Bottom accent */}
      <rect x="20" y="37" width="8" height="3" rx="1.5" fill={teal} opacity="0.4" />
    </svg>
  );
}
