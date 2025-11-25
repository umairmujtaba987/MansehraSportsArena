import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const allReviews = [
  {
    name: "Ibrar Tanoli",
    rating: 5,
    text: "Enjoyed a lot. Best place to remain physically fit in Mansehra with multiple sports activities.",
    date: "2 months ago",
  },
  {
    name: "Muzzam Khan",
    rating: 5,
    text: "Cricket 24 is the most faithful recreation. Had great fun with friends!",
    date: "3 months ago",
  },
  {
    name: "GulShahzad Tanoli",
    rating: 5,
    text: "Awesome experience. Enjoyed a lot with affordable rates to play indoor cricket.",
    date: "4 months ago",
  },
  {
    name: "Ahmad Khan",
    rating: 4,
    text: "Great facilities and friendly staff. The indoor cricket arena is top-notch!",
    date: "5 months ago",
  },
  {
    name: "Bilal Ahmed",
    rating: 5,
    text: "Perfect place for futsal. The turf quality is excellent and the staff is very cooperative.",
    date: "6 months ago",
  },
  {
    name: "Shahid Malik",
    rating: 4,
    text: "Good sports facility with reasonable prices. Great for staying active and fit.",
    date: "7 months ago",
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 md:pt-24">
        <section className="bg-card py-12 md:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              CUSTOMER <span className="text-primary">REVIEWS</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">4.5</span>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Based on 17+ Google Reviews
            </p>
          </div>
        </section>

        <TestimonialCarousel />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            ALL REVIEWS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {allReviews.map((review, index) => (
              <Card key={index} className="hover-elevate active-elevate-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-foreground mb-3 leading-relaxed">{review.text}</p>
                      <p className="font-semibold text-primary">— {review.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              EXPERIENCE MSA YOURSELF
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the community of satisfied players and athletes. Book your slot today!
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
