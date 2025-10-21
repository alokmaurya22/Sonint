import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 28,
  height = 28,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/sonintLogo.png"
        width={width}
        height={height}
        alt="Sonint Technology"
        className="h-8 sm:h-10 w-auto object-contain"
        priority
      />
      <span className="text-foreground text-xl font-bold tracking-tight">
        Sonint
      </span>
    </div>
  );
};
