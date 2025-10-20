interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M8 12h4l2 4 2-4h4v8h-2v-5l-2 3h-2l-2-3v5H8v-8z"
          fill="white"
        />
        <path
          d="M8 20h16v2H8v-2z"
          fill="white"
        />
      </svg>
      <span className="text-foreground text-xl font-bold tracking-tight">
        Sonint
      </span>
    </div>
  );
};
