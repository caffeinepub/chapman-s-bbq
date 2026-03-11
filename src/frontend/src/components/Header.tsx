import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Flame, Menu, UtensilsCrossed, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { to: "/", label: "Home", ocid: "nav.home_link" },
  { to: "/menu", label: "Menu", ocid: "nav.menu_link" },
  { to: "/about", label: "About", ocid: "nav.about_link" },
  { to: "/gallery", label: "Gallery", ocid: "nav.gallery_link" },
  { to: "/contact", label: "Contact", ocid: "nav.contact_link" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPath = useRef(currentPath);

  if (prevPath.current !== currentPath) {
    prevPath.current = currentPath;
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Flame className="w-7 h-7 text-accent animate-flicker" />
            </div>
            <div>
              <span className="font-display text-xl md:text-2xl font-black tracking-tight">
                <span className="fire-text">Chapman's</span>
                <span className="text-foreground"> BBQ</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPath === link.to
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              variant="outline"
              data-ocid="nav.order_button"
              className="ml-2 border-accent/50 text-accent hover:bg-accent/10 font-semibold"
            >
              <Link to="/menu">
                <UtensilsCrossed className="w-4 h-4 mr-1.5" />
                Order Now
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="ml-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <a href="tel:+18309985031">Call Now</a>
            </Button>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
                    currentPath === link.to
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/menu"
                data-ocid="nav.order_button"
                className="mt-2 px-4 py-3 rounded-md border border-accent/50 text-accent text-center font-semibold flex items-center justify-center gap-2 hover:bg-accent/10 transition-colors"
              >
                <UtensilsCrossed className="w-4 h-4" />
                Order Now
              </Link>
              <a
                href="tel:+18309985031"
                className="mt-1 px-4 py-3 rounded-md bg-primary text-primary-foreground text-center font-semibold"
              >
                📞 Call Now: +1 830-998-5031
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
