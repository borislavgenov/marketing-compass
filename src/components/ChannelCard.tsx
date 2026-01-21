import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChannelCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  gradient: string;
  delay?: number;
}

const ChannelCard = ({ icon, title, subtitle, gradient, delay = 0 }: ChannelCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Gradient accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ background: gradient }}
      />
      
      {/* Icon container */}
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white"
        style={{ background: gradient }}
      >
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default ChannelCard;
