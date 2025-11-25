import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickInfoCards from "@/components/QuickInfoCards";
import SportsFacilityCard from "@/components/SportsFacilityCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import cricketImage from "@assets/generated_images/indoor_cricket_arena_action.png";
import futsalImage from "@assets/generated_images/indoor_futsal_soccer_court.png";
import fitnessImage from "@assets/generated_images/fitness_training_zone.png";
import tableTennisImage from "@assets/generated_images/tabletennis.jpg";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuickInfoCards />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            OUR FACILITIES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience world-class sports facilities designed for players of all levels
          </p>
        </div>

        <div className="space-y-8">
          <SportsFacilityCard
            title="Indoor Cricket Arena"
            description="Experience the thrill of cricket in our state-of-the-art indoor facility with professional-grade turf and lighting."
            image={cricketImage}
            features={[
              "Professional turf pitch",
              "Advanced lighting system",
              "Cricket nets and safety equipment",
              "Suitable for all skill levels",
            ]}
          />
          <SportsFacilityCard
            title="Futsal & Indoor Soccer"
            description="Play futsal or mini soccer on our smooth, professional turf with safety nets and goal posts."
            image={futsalImage}
            features={[
              "Smooth green turf surface",
              "Protective wall nets",
              "Professional goal posts",
              "Perfect for team matches",
            ]}
            reverse
          />
          <SportsFacilityCard
            title="Table Tennis"
            description="Enjoy high-quality table tennis setups perfect for casual play, training, and competitive matches."
            image={tableTennisImage}
            features={[
              "Professional table tennis tables",
              "High-quality rackets & balls",
              "Spacious playing area",
              "Beginner to advanced friendly",
            ]}
          />

        </div>
      </section>

      <TestimonialCarousel />

      <section className="bg-card py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            READY TO PLAY?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of players who trust MSA for their sports. Book your slot today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button
              size="lg"
              className="text-lg px-8 py-6 w-full sm:w-auto"
              onClick={() => console.log("Book a slot clicked")}
            >
              Book a Slot Now
            </Button> */}
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
