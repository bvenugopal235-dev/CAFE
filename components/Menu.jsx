import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../data/menuData";

const filters = ["all", "snacks", "mains", "drinks"];

export default function Menu() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-orange text-xs font-bold tracking-[3px] uppercase mb-3 block">// Our Menu</span>
          <h2 className="font-montserrat font-black text-5xl tracking-tight mb-3">
            Crafted for <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">Every Craving</span>
          </h2>
          <p className="text-white/50 text-base max-w-md leading-relaxed">Every item made fresh, every evening. No frozen shortcuts — just real, honest food.</p>
        </motion.div>

        <div className="flex gap-3 flex-wrap mt-8 mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                active === f ? "bg-orange text-black font-bold" : "border border-white/10 text-white/60 hover:border-orange hover:text-orange"
              }`}
            >
              {f === "all" ? "All Items" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="bg-bg2 border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer transition-colors hover:border-orange/30"
              >
                <div className="h-48 bg-bg3 flex items-center justify-center relative text-7xl">
                  {item.emoji}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg2 to-transparent" />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-orange text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide z-10">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-montserrat font-black text-lg mb-1">{item.name}</h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat font-black text-xl text-orange">{item.price}</span>
                    <a
                      href={`https://wa.me/919876543210?text=I'd%20like%20to%20order%20${encodeURIComponent(item.name)}`}
                      target="_blank" rel="noreferrer"
                      className="bg-orange/10 border border-orange/30 text-orange text-xs font-semibold px-4 py-2 rounded-full hover:bg-orange hover:text-black transition-all"
                    >
                      Order →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
