import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Target, Users } from "lucide-react";

const infoCards = [
  {
    icon: Star,
    title: "4.5 Google Rating",
    description: "17 Reviews",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "Indoor Cricket",
    description: "Professional Turf",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Futsal & Soccer",
    description: "Team Matches",
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "Open 24/7",
    description: "Never Closes",
    color: "text-accent",
  },
];

export default function QuickInfoCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {infoCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 cursor-pointer transition-transform"
              data-testid={`card-info-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-md bg-muted ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
