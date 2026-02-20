import { motion, Variants, Transition } from "framer-motion";
import { CATEGORIES } from "@/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    } as Transition,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 18 },
  },
};

const PopularCategories = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Popular Categories 🎨
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-14">
            Pick what you love most! These categories have everything you need to learn something awesome
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="absolute top-10 left-[10%] right-[10%] z-0 hidden md:block"
            style={{ borderTop: "2px dashed hsl(var(--primary) / 0.35)" }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          />

          <motion.div
            className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.07,
                  transition: { type: "spring" as const, stiffness: 300, damping: 15 },
                }}
                whileTap={{ scale: 0.96 }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <motion.div
                  className={`relative w-20 h-20 rounded-2xl border-2 ${cat.color} flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow`}
                  whileHover={{ rotate: [0, -5, 5, -3, 0] as unknown as number }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-12 h-12 object-contain drop-shadow-md"
                  />
                  <motion.div
                    className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${cat.accent} ring-2 ring-background hidden md:block`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" as const }}
                  />
                </motion.div>

                <motion.span
                  className="text-sm font-semibold text-foreground mt-3 text-center leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {cat.label}
                </motion.span>

                <motion.div
                  className={`h-0.5 w-0 rounded-full ${cat.accent}`}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
