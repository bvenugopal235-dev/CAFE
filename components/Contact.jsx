import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const msg = e.target[2].value;
    window.open(`https://wa.me/919876543210?text=Hi!%20I'm%20${encodeURIComponent(name)}%20(${encodeURIComponent(phone)}).%20${encodeURIComponent(msg || "I want to place an order!")}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-orange text-xs font-bold tracking-[3px] uppercase mb-3 block">// Get In Touch</span>
          <h2 className="font-montserrat font-black text-5xl tracking-tight mb-10">
            Visit Us or <span className="bg-gradient-to-r from-orange to-red bg-clip-text text-transparent">Order Now</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
            {[
              ["📍", "Location", "Shop No. 12, Main Market Road\nNear Bus Stand, Your City – 500001"],
              ["📞", "Phone", "+91 98765 43210"],
            ].map(([icon, label, val]) => (
              <div key={label} className="flex gap-4 items-start p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                <div className="w-11 h-11 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                <div>
                  <div className="text-orange text-[10px] font-bold uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-white/80 text-sm font-medium whitespace-pre-line">{val}</div>
                </div>
              </div>
            ))}
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center text-lg flex-shrink-0">🕐</div>
                <div>
                  <div className="text-orange text-[10px] font-bold uppercase tracking-widest mb-2">Opening Hours</div>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <span className="text-white/60">Mon – Fri</span><span className="text-orange font-semibold">4:00 PM – 11:00 PM</span>
                    <span className="text-white/60">Sat – Sun</span><span className="text-orange font-semibold">3:00 PM – 11:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20order%20from%20StreetBite" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold py-4 rounded-2xl hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all shadow-[0_0_0] hover:shadow-[0_12px_32px_rgba(37,211,102,0.3)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[["Your Name", "text", "Rahul Sharma"], ["Phone Number", "tel", "+91 98765 43210"]].map(([label, type, ph]) => (
                <div key={label} className="flex flex-col gap-2">
                  <label className="text-white/60 text-xs font-medium">{label}</label>
                  <input type={type} placeholder={ph} required
                    className="bg-bg3 border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-orange/50 placeholder:text-white/25 transition-colors" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-xs font-medium">Your Order / Message</label>
                <textarea rows={4} placeholder="I'd like to order 2 Momos, 1 Burger..."
                  className="bg-bg3 border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm outline-none focus:border-orange/50 placeholder:text-white/25 resize-none transition-colors" />
              </div>
              <button type="submit" className="bg-gradient-to-r from-orange to-red text-white font-bold py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,122,0,0.4)] transition-all text-sm tracking-wide">
                Send Message ✉️
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
