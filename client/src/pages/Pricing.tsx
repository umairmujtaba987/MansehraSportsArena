import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign } from "lucide-react";

const pricingPlans = [
  {
    title: "Indoor Cricket",
    icon: "🏏",
    hourlyRate: "Affordable Rates",
    features: [
      "Professional turf pitch",
      "Cricket nets and equipment",
      "Advanced lighting system",
      "Suitable for all skill levels",
      "Hourly or session bookings",
    ],
    popular: true,
  },
  {
    title: "Futsal / Soccer",
    icon: "⚽",
    hourlyRate: "Competitive Pricing",
    features: [
      "Premium turf surface",
      "Full court access",
      "Goal posts and nets",
      "Team match bookings",
      "Flexible time slots",
    ],
    popular: false,
  },
  {
    title: "Table Tennis",
    icon: "🏓",
    hourlyRate: "Special Rates",
    features: [
      "Professional tables and paddles",
      "Indoor playing area",
      "Coaching available",
      "Flexible membership options",
      "Flexible time slots",
    ],
    popular: false,
  },
];

export default function Pricing() {
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
              PRICING & <span className="text-primary">PACKAGES</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Affordable rates for world-class sports facilities
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover-elevate active-elevate-2 ${plan.popular ? "border-primary border-2" : ""
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-3">{plan.icon}</div>
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {plan.title}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-xl font-semibold text-primary">{plan.hourlyRate}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    data-testid={`button-book-${plan.title.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => console.log(`Book ${plan.title} clicked`)}
                  >
                    Book Now
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-muted">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    TEAM PACKAGES
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Special rates available for team bookings and group sessions. Perfect for corporate events, team building, or regular practice sessions.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Discounted rates for bulk bookings
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Flexible scheduling options
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Priority booking for regular teams
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    MEMBERSHIP OPTIONS
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Join our membership program for exclusive benefits, priority access, and special rates on all facilities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Monthly and annual membership plans
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Unlimited access to fitness zone
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Discounted rates on all sports
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              NEED MORE INFORMATION?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us to learn more about our pricing, packages, and special offers.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => (window.location.href = "tel:+923409188204")}
            >
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
