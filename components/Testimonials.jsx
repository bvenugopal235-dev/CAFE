import { motion } from "framer-motion";
import { testimonials } from "../data/menuData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-orange text-xs font-bold tracking-[3px] uppercase mb-3 block">// Reviews</span>
          <h2 className="font-montserrat font-black text-5xl tracking-tight">
            What Customers <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">Are Saying</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-bg3 border border-white/[0.06] rounded-2xl p-7 hover:border-orange/20 transition-all"
            >
              <div className="text-5xl leading-none text-orange/30 font-serif mb-2">"</div>
              <div className="text-[#FFB800] tracking-widest text-sm mb-3">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{t.review}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-red flex items-center justify-center font-black text-sm text-black flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.tag}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
