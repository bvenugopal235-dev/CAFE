import { motion } from "framer-motion";
import { galleryItems } from "../data/menuData";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-orange text-xs font-bold tracking-[3px] uppercase mb-3 block">// Gallery</span>
          <h2 className="font-montserrat font-black text-5xl tracking-tight mb-2">
            Food That <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">Looks Good</span>
          </h2>
          <p className="text-white/50 mb-10">Because great food should be a feast for the eyes too.</p>
        </motion.div>
        <div className="grid grid-cols-3 gap-4">
          {galleryItems.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl overflow-hidden relative bg-bg2 border border-white/[0.05] flex items-center justify-center hover:border-orange/30 transition-all cursor-pointer group ${
                i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
              style={{ fontSize: i === 0 ? "5rem" : "3.5rem" }}
            >
              {g.emoji}
              <div className="absolute inset-0 bg-orange/85 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-bold text-black text-sm tracking-widest uppercase">{g.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
