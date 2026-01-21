import { motion } from "framer-motion";
import ChannelCard from "@/components/ChannelCard";
import { Tv, Radio, Facebook, Chrome, Youtube, Video, Mail, Pill } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Marketing Strategy 2025
          </motion.span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Marketing Channels
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our active advertising presence across Bulgaria
          </p>
        </motion.div>

        {/* Traditional Media Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-border"></span>
            Traditional Media
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChannelCard
              icon={<Tv size={28} />}
              title="TV Advertising"
              subtitle="Star Channel Group"
              gradient="var(--gradient-tv)"
              delay={0.4}
            />
            <ChannelCard
              icon={<Radio size={28} />}
              title="Radio Advertising"
              subtitle="Fresh Group · 3rd Largest Network"
              gradient="var(--gradient-radio)"
              delay={0.5}
            />
          </div>
        </motion.div>

        {/* Digital Platforms Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-border"></span>
            Digital Platforms
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ChannelCard
              icon={<Facebook size={28} />}
              title="Meta"
              subtitle="Facebook & Instagram"
              gradient="var(--gradient-meta)"
              delay={0.6}
            />
            <ChannelCard
              icon={<Chrome size={28} />}
              title="Google"
              subtitle="Search Ads & Display Network"
              gradient="var(--gradient-google)"
              delay={0.7}
            />
            <ChannelCard
              icon={<Youtube size={28} />}
              title="YouTube"
              subtitle="Video Advertising"
              gradient="var(--gradient-youtube)"
              delay={0.8}
            />
            <ChannelCard
              icon={<Video size={28} />}
              title="TikTok"
              subtitle="Short-Form Video Ads"
              gradient="var(--gradient-tiktok)"
              delay={0.9}
            />
            <ChannelCard
              icon={<Mail size={28} />}
              title="Email Marketing"
              subtitle="Direct Communication"
              gradient="var(--gradient-email)"
              delay={1.0}
            />
          </div>
        </motion.div>

        {/* Physical Presence Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-border"></span>
            Physical Presence
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            <ChannelCard
              icon={<Pill size={28} />}
              title="Pharmacy Network"
              subtitle="In-store advertising across Bulgaria"
              gradient="var(--gradient-pharmacy)"
              delay={1.1}
            />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            Multi-channel presence for maximum reach in Bulgaria
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
