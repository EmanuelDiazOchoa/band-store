import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const navItems = ["Home", "News", "Gallery", "Store"];

export default function CustomNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const indicatorRef = useRef(null);
  const linksRef = useRef([]);

  // Mueve el indicador azul
  const moveIndicator = () => {
    const link = linksRef.current[activeIndex];
    if (link && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        x: link.offsetLeft,
        width: link.offsetWidth,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  // Detecta la ruta actual del navegador
  useEffect(() => {
    const path = window.location.pathname;
    const index = navItems.findIndex((item) =>
      path === "/" && item === "Home"
        ? true
        : path.includes(item.toLowerCase())
    );
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, []);

  // Aplica la animación del indicador cuando cambia el índice
  useEffect(() => {
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [activeIndex]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-transparent z-20 text-white w-full fixed top-0 left-0 font-rocksalt">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center relative">
        {/* Desktop nav */}
        <div className="relative hidden md:flex items-center space-x-6">
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[2px] bg-cyan-400 transition-all duration-300"
            style={{ transform: "translateX(0)", width: "0px" }}
          />
          {navItems.map((item, i) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <a
                key={i}
                ref={(el) => (linksRef.current[i] = el)}
                href={href}
                onClick={() => setActiveIndex(i)}
                className={`relative z-10 px-2 pb-1 transition-colors ${
                  activeIndex === i
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-white absolute right-4"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-2 px-4 pb-4">
          {navItems.map((item, i) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li key={i}>
                <a
                  href={href}
                  onClick={() => {
                    setActiveIndex(i);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-2 rounded hover:bg-cyan-600 transition-colors ${
                    activeIndex === i ? "text-white" : "text-white/60"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

