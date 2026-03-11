import { Link } from "@tanstack/react-router";
import { Clock, Flame, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-accent" />
              <span className="font-display text-xl font-black">
                <span className="fire-text">Chapman's</span>
                <span className="text-foreground"> BBQ</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic slow-smoked BBQ served with Southern love in Monticello,
              Indiana.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent/20 hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Find Us
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  1430 N Main St
                  <br />
                  Monticello, IN 47960
                </span>
              </div>
              <div className="flex gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a
                  href="tel:+18309985031"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +1 830-998-5031
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Hours
            </h3>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span>Mon–Thu: 11am – 8pm</span>
                <span>Fri–Sat: 11am – 9pm</span>
                <span>Sun: 12pm – 7pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Chapman's BBQ. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
