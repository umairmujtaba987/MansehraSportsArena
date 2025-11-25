import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ibrar Tanoli",
    rating: 5,
    text: "Enjoyed a lot. Best place to remain physically fit in Mansehra with multiple sports activities.",
  },
  {
    name: "Muzzam Khan",
    rating: 5,
    text: "Cricket 24 is the most faithful recreation. Had great fun with friends!",
  },
  {
    name: "GulShahzad Tanoli",
    rating: 5,
    text: "Awesome experience. Enjoyed a lot with affordable rates to play indoor cricket.",
  },
  {
    name: "Ahmad Khan",
    rating: 4,
    text: "Great facilities and friendly staff. The indoor cricket arena is top-notch!",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          WHAT OUR PLAYERS SAY
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-muted-foreground">4.5 Average</span>
        </div>
      </div>

      <Card className="relative">
        <CardContent className="p-8 md:p-12">
          <Quote className="w-12 h-12 text-primary/20 mb-4" />
          <div className="min-h-[160px] flex flex-col justify-center">
            <div className="flex mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-semibold text-primary text-lg">
              — {testimonials[currentIndex].name}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
