import { cn } from "@/lib/utils";
import Image from "next/image";

interface SirMusizLogoProps {
  className?: string;
}

export function SirMusizLogo({ className }: SirMusizLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src="/Trusted-organisation/sirMusiz.webp"
        alt="SirMusiz"
        width={120}
        height={40}
        sizes="(min-width: 1024px) 144px, 120px"
        loading="lazy"
        decoding="async"
        className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
