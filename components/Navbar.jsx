import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "Menu", "About", "Gallery", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", "menu", "about", "gallery", "contact"];
      const pos = window.scrollY + 100;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-300 ${
          scrolled ? "py-3 bg-bg/95 backdrop-blur-xl border-b border-orange/10" : "py-4"
        }`}
      >
        <a href="#hero" className="font-montserrat font-black text-2xl tracking-tight">
          Street<span className="text-orange">Bite</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`text-sm font-medium transition-colors relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange after:rounded after:transition-transform after:duration-300 ${
                  active === l
                    ? "text-white after:scale-x-100"
                    : "text-white/60 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-orange text-black font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,122,0,0.4)]"
        >
          Order Now 🍔
        </a>
        <button onClick={() => setMobileOpen(true)} className="md:hidden text-white p-1">
          <FiMenu size={22} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-8 text-white">
              <FiX size={26} />
            </button>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="font-montserrat font-bold text-3xl text-white hover:text-orange transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 font-bold text-xl mt-2"
            >
              Order on WhatsApp ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
