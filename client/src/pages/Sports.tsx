import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SportsFacilityCard from "@/components/SportsFacilityCard";
import { Button } from "@/components/ui/button";

import cricketImage from "@assets/generated_images/indoor_cricket_arena_action.png";
import futsalImage from "@assets/generated_images/indoor_futsal_soccer_court.png";
import tableTennisImage from "@assets/generated_images/tabletennis.jpg";
import recreationImage from "@assets/generated_images/friends_celebrating_sports_recreation.png";

export default function Sports() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 md:pt-24">
        <section className="bg-card py-12 md:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              OUR <span className="text-primary">SPORTS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class facilities for cricket, soccer, fitness, and recreation. Find your perfect sport at MSA.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-12">
          <SportsFacilityCard
            title="Indoor Cricket Arena"
            description="Experience the thrill of cricket in our state-of-the-art indoor facility. Our professional-grade turf pitch provides the perfect playing surface, whether you're practicing your batting, bowling, or fielding skills. Complete with advanced lighting and safety equipment, this arena is designed for players of all skill levels."
            image={cricketImage}
            features={[
              "Professional synthetic turf pitch",
              "Advanced LED lighting system for perfect visibility",
              "High-quality cricket nets and safety equipment",
              "Suitable for individual practice and team matches",
              "Available for hourly bookings or long-term sessions",
              "Bat and ball equipment available for rent",
            ]}
          />

          <SportsFacilityCard
            title="Futsal & Indoor Soccer"
            description="Play futsal or mini soccer on our smooth, professional turf. Our indoor soccer court features protective wall nets, professional goal posts, and a surface designed for optimal ball control and player safety. Perfect for competitive matches or casual games with friends."
            image={futsalImage}
            features={[
              "Premium smooth green turf surface",
              "Protective wall nets for continuous play",
              "Professional-grade goal posts",
              "Perfect dimensions for 5-a-side or 7-a-side matches",
              "Suitable for all age groups and skill levels",
              "Team bookings and tournaments available",
            ]}
            reverse
          />

          <SportsFacilityCard
            title="Table Tennis"
            description="Enjoy fast-paced table tennis on high-quality tables with a smooth playing surface. Whether you're practicing solo, playing doubles, or competing with friends, our indoor facility offers the perfect environment for all skill levels."
            image={tableTennisImage}
            features={[
              "High-quality professional table tennis tables",
              "Perfect indoor lighting for clear visibility",
              "Quality rackets and balls available",
              "Beginner to advanced friendly setup",
              "Fast-paced, fun, and competitive environment",
              "Ideal for practice, matches, and tournaments",
            ]}
            // reverse
          />


          <SportsFacilityCard
            title="Recreation Zone"
            description="Our recreation zone is perfect for groups, families, and friends looking to have fun together. A versatile space that can accommodate various activities and social gatherings in a safe, enjoyable environment."
            image={recreationImage}
            features={[
              "Multi-purpose recreation space",
              "Perfect for group activities and social events",
              "Safe and clean environment",
              "Suitable for families and friend groups",
              "Affordable rates for extended sessions",
              "Create memorable experiences together",
            ]}
            reverse
          />
        </section>

        <section className="bg-card py-16 md:py-20 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              READY TO GET STARTED?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your preferred sport today and experience the best facilities in Mansehra!
            </p>
            {/* <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => console.log("Book a slot clicked")}
            >
              Book Your Slot Now
            </Button> */}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
