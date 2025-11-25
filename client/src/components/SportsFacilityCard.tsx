import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SportsFacilityCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
}

export default function SportsFacilityCard({
  title,
  description,
  image,
  features,
  reverse = false,
}: SportsFacilityCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className={`grid md:grid-cols-2 gap-0 ${reverse ? "md:flex-row-reverse" : ""}`}>
          <div className={`${reverse ? "md:order-2" : ""}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3
              className="text-2xl md:text-3xl font-bold mb-3 text-primary"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {title}
            </h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            {/* <Button
              className="w-full sm:w-auto"
              data-testid={`button-book-${title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => console.log(`Book ${title} clicked`)}
            >
              Book Now
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
