import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <span className="text-primary">MSA</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Mansehra's premier 24/7 multi-sports facility. Play, train, and compete in world-class facilities.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                data-testid="link-facebook"
                onClick={() => console.log("Facebook clicked")}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                data-testid="link-instagram"
                onClick={() => console.log("Instagram clicked")}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                data-testid="link-twitter"
                onClick={() => console.log("Twitter clicked")}
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Sports", "Reviews", "Gallery", "Pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-muted-foreground hover:text-foreground"
                        data-testid={`link-footer-${link.toLowerCase()}`}
                      >
                        {link}
                      </Button>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Sports</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Indoor Cricket</li>
              <li>Futsal / Soccer</li>
              <li>Table Tennis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+923409188204"
                  className="hover:underline text-muted-foreground"
                >
                  +92 340 9188204
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Mansehra+Sports+Arena/@34.320812,73.1972879,17z/data=!3m1!4b1!4m6!3m5!1s0x38de3d00269a9c37:0x1204ac822c6bf1ae!8m2!3d34.320812!4d73.1998628!16s%2Fg%2F11wmqxn_6g?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-muted-foreground"
                >
                  Mansehra Sport Arena Madina Colony Dub 2, Mansehra, Pakistan
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold">Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Mansehra Sports Arena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
