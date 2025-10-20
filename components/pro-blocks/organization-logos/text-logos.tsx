import { cn } from "@/lib/utils";

interface TextLogoProps {
  className?: string;
}

export function TechCorpLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        TechCorp
      </div>
    </div>
  );
}

export function InnovateLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        Innovate
      </div>
    </div>
  );
}

export function DataFlowLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        DataFlow
      </div>
    </div>
  );
}

export function CloudTechLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        CloudTech
      </div>
    </div>
  );
}

export function DigitalHubLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        DigitalHub
      </div>
    </div>
  );
}

export function infohomeLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        InfoHome
      </div>
    </div>
  );
}

export function SmartSysLogo({ className }: TextLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        SmartSys
      </div>
    </div>
  );
}