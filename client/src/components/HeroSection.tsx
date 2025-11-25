import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Trophy } from "lucide-react";
import { Link } from "wouter";

import heroImage1 from "@assets/generated_images/indoor_cricket_arena_action.png";
import heroImage2 from "@assets/generated_images/indoor_futsal_soccer_court.png";
import heroImage3 from "@assets/generated_images/multi-sport_facility_overview.png";

const heroImages = [heroImage1, heroImage2, heroImage3];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`MSA Sports Facility ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-1.5 backdrop-blur-sm bg-card/50" data-testid="badge-rating">
              <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
              4.5 Google Rating
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1.5 backdrop-blur-sm bg-card/50" data-testid="badge-hours">
              <Clock className="w-4 h-4 mr-1 text-primary" />
              Open 24/7
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1.5 backdrop-blur-sm bg-card/50" data-testid="badge-sports">
              <Trophy className="w-4 h-4 mr-1 text-primary" />
              Multi-Sports Arena
            </Badge>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            <span className="block text-foreground">MANSEHRA'S #1</span>
            <span className="block text-primary mt-2">SPORTS ARENA</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto">
            Play. Train. Compete. 24/7 Fitness & Sports Excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
              data-testid="button-hero-book"
              onClick={() => console.log("Book a slot clicked")}
            >
              Book a Slot
            </Button> */}
            <Link href="/sports">
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 backdrop-blur-md bg-background/30 w-full sm:w-auto"
                data-testid="button-hero-sports"
              >
                View Sports
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 backdrop-blur-md bg-background/30 w-full sm:w-auto"
                data-testid="button-hero-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mt-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
                }`}
                data-testid={`button-slider-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
