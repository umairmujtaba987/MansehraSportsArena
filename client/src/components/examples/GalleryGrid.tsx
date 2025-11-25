import GalleryGrid from "../GalleryGrid";
import image1 from "@assets/generated_images/indoor_cricket_arena_action.png";
import image2 from "@assets/generated_images/indoor_futsal_soccer_court.png";
import image3 from "@assets/generated_images/fitness_training_zone.png";

const sampleImages = [
  { src: image1, alt: "Cricket Arena", category: "cricket" },
  { src: image2, alt: "Futsal Court", category: "soccer" },
  { src: image3, alt: "Fitness Zone", category: "fitness" },
];

export default function GalleryGridExample() {
  return (
    <div className="bg-background p-6">
      <GalleryGrid images={sampleImages} />
    </div>
  );
}
