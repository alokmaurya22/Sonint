import { cn } from "@/lib/utils";
import Image from "next/image";

interface ckSolutionsLogoProps {
  className?: string;
}

export function cksolutionsLogo({ className }: ckSolutionsLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src="/Trusted-organisation/ck-solutions.png"
        alt="CK Solutions"
        width={120}
        height={40}
        className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}