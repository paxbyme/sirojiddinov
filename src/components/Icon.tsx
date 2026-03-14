import {
  Zap,
  Layers,
  Palette,
  Github,
  Linkedin,
  Send,
  Globe,
} from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Zap,
  Layers,
  Palette,
  Github,
  Linkedin,
  Send,
  Globe,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={className} />;
}
