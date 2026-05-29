import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,122,0,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_20%,rgba(255,61,61,0.08),transparent_50%)]" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,122,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />
      {/* Orbs */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-orange opacity-10 blur-[80px]"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 -left-24 w-[400px] h-[400px] rounded-full bg-red opacity-10 blur-[80px]"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-1.5 rounded-full text-orange text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
            Now Open Evenings 4PM – 11PM
          </span>

          <h1 className="font-montserrat font-black text-[clamp(3rem,8vw,6.5rem)] leading-none tracking-tight mb-6">
            Taste the<br />
            <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">
              Evening Vibes
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-lg mx-auto leading-relaxed font-light mb-10">
            Fresh momos, sizzling burgers, crispy fries — handcrafted with love every single evening. Your favourite street bites, made premium.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#menu" className="bg-gradient-to-r from-orange to-red text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,122,0,0.45)] text-sm tracking-wide">
              🍟 Explore Menu
            </a>
            <a href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20order" target="_blank" rel="noreferrer"
              className="border border-white/25 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all hover:border-orange hover:text-orange hover:-translate-y-1 text-sm">
              📱 Order on WhatsApp
            </a>
          </div>

          <div className="flex gap-12 justify-center mt-16 flex-wrap">
            {[["500+", "Happy Customers"], ["25+", "Menu Items"], ["4.9★", "Average Rating"], ["3yrs", "Of Deliciousness"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <span className="font-montserrat font-black text-3xl text-orange block leading-none">{num}</span>
                <span className="text-white/40 text-xs uppercase tracking-widest mt-1 block">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
