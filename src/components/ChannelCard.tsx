import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ChannelCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  gradient: string;
  delay?: number;
  description?: string;
  images?: string[];
  stats?: { label: string; value: string }[];
}

const ChannelCard = ({ 
  icon, 
  title, 
  subtitle, 
  gradient, 
  delay = 0,
  description,
  images,
  stats
}: ChannelCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => setIsOpen(true)}
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
        
        {/* Click indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity">
          <span className="text-xs text-muted-foreground">Кликни за детайли →</span>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: gradient }}
              >
                {icon}
              </div>
              <div>
                <DialogTitle className="text-2xl">{title}</DialogTitle>
                {subtitle && (
                  <DialogDescription className="text-base mt-1">
                    {subtitle}
                  </DialogDescription>
                )}
              </div>
            </div>
          </DialogHeader>
          
          {/* Description */}
          {description && (
            <div className="mt-4">
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </div>
          )}
          
          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-muted/50 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Images */}
          {images && images.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Галерия
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden bg-muted"
                  >
                    <img 
                      src={image} 
                      alt={`${title} - изображение ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Placeholder for empty content */}
          {!description && (!images || images.length === 0) && (!stats || stats.length === 0) && (
            <div className="py-8 text-center">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
                style={{ background: gradient }}
              >
                {icon}
              </div>
              <p className="text-muted-foreground">
                Скоро ще добавим повече информация за този канал.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChannelCard;
