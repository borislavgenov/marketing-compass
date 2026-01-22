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
            Маркетинг Стратегия 2026
          </motion.span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Рекламни Канали
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            
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
              title="TV реклама"
              subtitle="Star Channel Group"
              gradient="var(--gradient-tv)"
              delay={0.4}
              description="Нашата телевизионна кампания обхваща всички канали от групата Star Channel, достигайки до хиляди зрители в цяла България. Рекламните ни спотове се излъчват в прайм тайм и са отварящи и затварящи рекламния блок."
              stats={[
                { label: "Канали", value: "5+" },
                { label: "Спотове", value: "Отварящи и затварящи" }
              ]}
            />
            <ChannelCard
              icon={<Radio size={28} />}
              title="Радио реклама"
              subtitle="Fresh Group"
              gradient="var(--gradient-radio)"
              delay={0.5}
              description="Партнираме с Fresh Group - третата по големина радио мрежа в България. Рекламите ни се излъчват в ключови часове с максимална слушаемост."
              stats={[
                { label: "Радио станции", value: "3" },
                { label: "Часови пояси", value: "Час пик сутрин и вечер" }
              ]}
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
              description="Активно присъствие в социалните мрежи на Meta. Използваме таргетирани реклами за достигане до точната аудитория с цел да ставаме все по-разпознаваеми и да печелим доверието на все повече потребители."
              stats={[
                { label: "Последователи", value: "4K+" },
                { label: "Кампании", value: "6 на месец" }
              ]}
            />
            <ChannelCard
              icon={<Chrome size={28} />}
              title="Google"
              subtitle="Search Ads & Display Network"
              gradient="var(--gradient-google)"
              delay={0.7}
              description="Комплексна Google стратегия включваща Search Ads, Display Network и Google Shopping. Оптимизираме за максимална видимост и конверсии."
              stats={[
                { label: "Ключови думи", value: "При търсене на име, симптом и т.н" },
                { label: "Дисплей", value: "Кампании с цел разпознаваемост и доверие" }
              ]}
            />
            <ChannelCard
              icon={<Youtube size={28} />}
              title="YouTube"
              subtitle="Видео реклама"
              gradient="var(--gradient-youtube)"
              delay={0.8}
              description="Видео реклами в YouTube достигащи до българската аудитория. Използваме различни формати - от кратки bumper ads до по-дълги storytelling видеа."
              stats={[
                { label: "Видеа", value: "ТВ Рекалми + изцяло нови видеа" }
              ]}
            />
            <ChannelCard
              icon={<Video size={28} />}
              title="TikTok"
              subtitle="Кратки видео реклами"
              gradient="var(--gradient-tiktok)"
              delay={0.9}
              description="Присъствие в най-бързо растящата платформа. Създаваме engaging съдържание, което резонира и с по-младата аудитория в България."
              stats={[
                { label: "Съдържание", value: "Заснемане на изцяло ново съдържание специално за платформата" }
              ]}
            />
            <ChannelCard
              icon={<Mail size={28} />}
              title="Email маркетинг"
              subtitle="Директна комуникация"
              gradient="var(--gradient-email)"
              delay={1.0}
              description="Персонализирани email кампании за директна комуникация с нашите клиенти. Сегментирани списъци и автоматизирани последователности."
              stats={[
                { label: "Съдържание", value: "Актуални и сезонни продукти" },
                { label: "Кампании/месец", value: "1 кампания на месец" }
              ]}
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
              title="Аптечна мрежа"
              subtitle="Реклама в аптеки из цяла България"
              gradient="var(--gradient-pharmacy)"
              delay={1.1}
              description="Широко присъствие в аптечните вериги в България. Промо списания, онлайн присъствие и вторично позициониране"
              stats={[
                { label: "Списания", value: "Страници и карета" },
                { label: "Онлайн", value: "Банери в онлайн аптеките + присъствие в социалните им мрежи" },
                { label: "Вторично позициониране", value: "Промо кош, дисплей каса, червени етикети и т.н" }
              ]}
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
            
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
