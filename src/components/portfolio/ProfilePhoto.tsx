import { motion } from "framer-motion";
import profileImage from "@/photos/profile.png";

interface ProfilePhotoProps {
  className?: string;
}

export default function ProfilePhoto({ className }: ProfilePhotoProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Decorative background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
      
      {/* Outer ring with animated gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="relative aspect-square w-full rounded-full p-1.5 bg-gradient-to-br from-border via-card to-border"
      >
        <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-border bg-card shadow-xl shadow-accent/10">
          <img
            src={profileImage}
            alt="Vikram Udhayakumar - Gen AI Developer"
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Floating accent dots */}
      <div className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-accent/80" />
      <div className="absolute -bottom-1 -left-2.5 h-2.5 w-2.5 rounded-full bg-primary/60" />
      <div className="absolute top-1/3 -left-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
    </div>
  );
}
