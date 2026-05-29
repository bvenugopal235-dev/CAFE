import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="text-orange text-xs font-bold tracking-[3px] uppercase mb-3 block">// About Us</span>
            <h2 className="font-montserrat font-black text-5xl tracking-tight mb-6">
              Born from<br />
              <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">
                Street Love
              </span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              StreetBite started as a simple dream: to serve the best evening snacks in town without compromising on quality. What began as a small stall has grown into a beloved community favourite.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Every recipe, every ingredient, every moment in our kitchen is driven by our passion for food and our respect for you — our valued customers.
            </p>
            <div className="flex gap-8">
              {[["500+", "Orders Daily"], ["98%", "Customer Satisfaction"], ["3", "Years Strong"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <span className="font-montserrat font-black text-2xl text-orange block">{num}</span>
                  <span className="text-white/40 text-xs uppercase tracking-widest mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <div className="aspect-square bg-gradient-to-br from-orange/20 to-red/10 rounded-2xl border border-orange/30 flex items-center justify-center text-9xl">
              🍟
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
