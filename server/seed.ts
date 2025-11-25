import { storage } from "./storage";

async function seed() {
  console.log("Seeding database...");

  const facilitiesData = [
    {
      name: "Indoor Cricket Arena",
      description: "Experience the thrill of cricket in our state-of-the-art indoor facility with professional-grade turf and lighting.",
      hourlyRate: "1500",
      features: [
        "Professional turf pitch",
        "Advanced lighting system",
        "Cricket nets and safety equipment",
        "Suitable for all skill levels"
      ],
      icon: "🏏"
    },
    {
      name: "Futsal & Indoor Soccer",
      description: "Play futsal or mini soccer on our smooth, professional turf with safety nets and goal posts.",
      hourlyRate: "2000",
      features: [
        "Smooth green turf surface",
        "Protective wall nets",
        "Professional goal posts",
        "Perfect for team matches"
      ],
      icon: "⚽"
    },
    {
      name: "Fitness Training Zone",
      description: "Stay fit with our modern fitness equipment and training area designed for all fitness levels.",
      hourlyRate: "800",
      features: [
        "Modern exercise equipment",
        "Cardio and weight training",
        "Professional trainers available",
        "Motivational environment"
      ],
      icon: "💪"
    }
  ];

  for (const facility of facilitiesData) {
    await storage.createFacility(facility);
    console.log(`Created facility: ${facility.name}`);
  }

  console.log("Database seeded successfully!");
}

seed().catch(console.error);
