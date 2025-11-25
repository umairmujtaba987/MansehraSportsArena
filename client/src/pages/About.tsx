import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Clock } from "lucide-react";

import facilityImage from "@assets/generated_images/multi-sport_facility_overview.png";
import nightImage from "@assets/generated_images/sports_arena_night_exterior.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make fitness and sports accessible, enjoyable, and affordable for everyone in Mansehra.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a vibrant sports community where everyone feels welcome and encouraged to stay active.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Providing world-class facilities and maintaining the highest standards in sports infrastructure.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We never close, ensuring you can play, train, and compete whenever it suits your schedule.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 md:pt-24">
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={facilityImage}
            alt="MSA Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                ABOUT <span className="text-primary">MSA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Mansehra's Premier 24/7 Multi-Sports Complex
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                OUR STORY
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mansehra Sports Arena (MSA) is the city’s premier indoor sports destination — open 24/7 for athletes, teams, and sports enthusiasts. We’ve created a vibrant community built around passion, energy, and the love of sports.
                </p>
                <p>
                  Offering a range of activities including indoor cricket, futsal, table tennis, MSA provides a clean, safe, and fully equipped environment. Our customers appreciate our affordable pricing, professional staff, and the exciting atmosphere that keeps them returning.
                </p>
                <p>
                  Whether you're a professional athlete, a group of friends looking for fun, or someone beginning their fitness journey, MSA welcomes you with top-quality facilities and a supportive, friendly community.
                </p>
              </div>

            </div>
            <div className="rounded-md overflow-hidden">
              <img
                src={nightImage}
                alt="MSA at Night"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              OUR VALUES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-elevate active-elevate-2">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-4 bg-primary/10 rounded-md mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                JOIN THE MSA FAMILY
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Experience the difference that quality facilities and a supportive community can make in your sports journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">4.5★</div>
                  <div className="text-sm opacity-80">Google Rating</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-primary-foreground/30" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Always Open</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-primary-foreground/30" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">3+</div>
                  <div className="text-sm opacity-80">Sports Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}
