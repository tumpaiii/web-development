import { cn } from "@/lib/utils";
import heroPoster from "@/assets/images/workshop-hero.webp";
import heroVideo from "@/assets/videos/coding-session.mp4";

interface HeroVideoProps {
  className?: string;
}

export default function HeroVideo({ className }: HeroVideoProps) {
  return (
    <video
      className={cn("workshop-photo", className)}
      src={heroVideo}
      poster={heroPoster}
      aria-label="Programmer working on a laptop"
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
    />
  );
}
