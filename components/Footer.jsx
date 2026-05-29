export default function Footer() {
  return (
    <footer className="bg-[#080808] pt-16 pb-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <a href="#hero" className="font-montserrat font-black text-2xl">Street<span className="text-orange">Bite</span></a>
            <p className="text-white/40 text-sm leading-relaxed mt-3 mb-5 max-w-xs">Your favourite neighbourhood evening snack shop. Made with love, served with pride — every single evening.</p>
            <div className="flex gap-3">
              {[["📸", "Instagram"], ["📘", "Facebook"], ["💬", "WhatsApp"], ["▶️", "YouTube"]].map(([icon, label]) => (
                <a key={label} href={label === "WhatsApp" ? "https://wa.me/919876543210" : "#"} aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-sm hover:border-orange hover:bg-orange/10 hover:text-orange transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {[
            ["Quick Links", [["Home", "#hero"], ["Menu", "#menu"], ["About Us", "#about"], ["Gallery", "#gallery"], ["Contact", "#contact"]]],
            ["Our Menu", [["Momos", "#menu"], ["Sandwiches", "#menu"], ["Egg Rolls", "#menu"], ["Burgers", "#menu"], ["French Fries", "#menu"]]],
            ["Contact", [["+91 98765 43210", "tel:+919876543210"], ["WhatsApp Order", "https://wa.me/919876543210"], ["Find Us", "#contact"], ["Timings", "#contact"]]],
          ].map(([title, items]) => (
            <div key={title}>
              <div className="font-bold text-sm mb-4">{title}</div>
              <ul className="flex flex-col gap-2.5">
                {items.map(([label, href]) => (
                  <li key={label}><a href={href} className="text-white/40 text-sm hover:text-orange transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex justify-between items-center flex-wrap gap-3">
          <span className="text-white/30 text-xs">© 2025 <span className="text-orange">StreetBite</span>. All rights reserved. Made with ❤️ for food lovers.</span>
          <span className="text-white/20 text-xs">Crafted with passion</span>
        </div>
      </div>
    </footer>
  );
}
