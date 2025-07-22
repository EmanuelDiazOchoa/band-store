import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function CustomNavbar() {
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/shop" },
    { name: "Carrito", href: "/cart" },
    { name: "Contacto", href: "/contact" },
  ]

  useEffect(() => {
    const links = navRef.current.querySelectorAll("a")
    gsap.from(links, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    })
  }, [])

  useEffect(() => {
    if (open) {
      gsap.to(mobileMenuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        display: "flex",
      })
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.display = "none"
          }
        },
      })
    }
  }, [open])

  return (
    <header className="bg-zinc-900 shadow-md">
      <nav
        ref={navRef}
        className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3"
      >
        <div className="text-white text-xl font-bold">Band Store</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-white/80 hover:text-white transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <ul
        ref={mobileMenuRef}
        className="md:hidden flex-col gap-4 px-4 py-3 bg-zinc-800 text-white hidden"
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-white/80 hover:text-white transition duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
