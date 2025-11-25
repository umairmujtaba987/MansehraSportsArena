import SportsFacilityCard from "../SportsFacilityCard";
import cricketImage from "@assets/generated_images/indoor_cricket_arena_action.png";

export default function SportsFacilityCardExample() {
  return (
    <div className="bg-background p-6">
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
    </div>
  );
}
