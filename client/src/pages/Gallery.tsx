import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";

import cricketImage from "@assets/generated_images/indoor_cricket_arena_action.png";
import futsalImage from "@assets/generated_images/indoor_futsal_soccer_court.png";
import tableTennisImage from "@assets/generated_images/tableTennis.jpg";
import recreationImage from "@assets/generated_images/friends_celebrating_sports_recreation.png";
import cricketCloseup from "@assets/generated_images/cricket_action_close-up.png";
import soccerBall from "@assets/generated_images/soccer_ball_futsal_court.png";
import facilityOverview from "@assets/generated_images/multi-sport_facility_overview.png";

const allImages = [
  { src: cricketImage, alt: "Indoor Cricket Arena in Action", category: "cricket" },
  { src: futsalImage, alt: "Futsal Soccer Court", category: "soccer" },
  { src: tableTennisImage, alt: "Table Tennis", category: "tableTennis" },
  { src: recreationImage, alt: "Friends Celebrating", category: "recreation" },
  { src: cricketCloseup, alt: "Cricket Action Close-up", category: "cricket" },
  { src: soccerBall, alt: "Soccer Ball on Futsal Court", category: "soccer" },
  { src: facilityOverview, alt: "Multi-Sport Facility Overview", category: "facility" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "cricket", label: "Cricket" },
  { id: "soccer", label: "Soccer" },
  { id: "tableTennis", label: "Table Tennis" },
  // { id: "facility", label: "Facility" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

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
              PHOTO <span className="text-primary">GALLERY</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our world-class facilities through images
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <GalleryGrid images={filteredImages} />
        </section>
      </div>

      <Footer />
    </div>
  );
}
