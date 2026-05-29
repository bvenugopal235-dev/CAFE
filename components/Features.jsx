import { motion } from "framer-motion";
import { features } from "../data/menuData";

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-orange text-xs font-bold tracking-[3px] uppercase mb-3 block">// Why Choose Us</span>
          <h2 className="font-montserrat font-black text-5xl tracking-tight">
            The <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">StreetBite</span> Promise
          </h2>
        </motion.div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-bg2 border border-white/[0.05] rounded-2xl p-7 relative overflow-hidden group hover:border-orange/25 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange/20 to-red/10 border border-orange/30 flex items-center justify-center text-2xl mb-5 relative z-10">
                {f.icon}
              </div>
              <h3 className="font-montserrat font-black text-lg mb-2 relative z-10">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed relative z-10">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
