import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/sports", label: "Sports" },
    { path: "/reviews", label: "Reviews" },
    { path: "/gallery", label: "Gallery" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-primary" style={{ fontFamily: 'Rajdhani, sans-serif' }}>MSA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                MANSEHRA SPORTS ARENA
              </div>
              <div className="text-xs text-muted-foreground">Open 24/7</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.path ? "bg-muted" : ""}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex items-center gap-2"
              data-testid="button-call-now"
              onClick={() => console.log("Call now clicked")}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            {/* <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              data-testid="button-book-slot"
              onClick={() => console.log("Book a slot clicked")}
            >
              Book a Slot
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <a href="tel:+923409188204">
                <Button variant="default" size="sm" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              {/* <Button
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => console.log("Book a slot clicked")}
              >
                Book a Slot
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
