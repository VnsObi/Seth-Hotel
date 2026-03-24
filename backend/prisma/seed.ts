import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rooms = [
    {
      name: "Classic Apartment",
      type: "Classic Apartment",
      price: 35000,
      description: "Kitchenette, Living Area, Free Wi-Fi, Air Conditioning",
    },
    {
      name: "Deluxe Suite",
      type: "Deluxe Suite",
      price: 50000,
      description:
        "Full Kitchen, Two Bedrooms, Washing Machine, Balcony, Smart TV",
    },
    {
      name: "Executive Penthouse",
      type: "Executive Penthouse",
      price: 85000,
      description:
        "Panoramic View, Jacuzzi, Private Lounge, Butler Service, Home Office",
    },
  ];

  for (const room of rooms) {
    const existingRoom = await prisma.room.findFirst({
      where: { name: room.name },
    });

    if (!existingRoom) {
      await prisma.room.create({
        data: room,
      });
      console.log(`Created room: ${room.name}`);
    } else {
      console.log(`Room already exists: ${room.name}`);
    }
  }

  // Also seed an Admin user
  const adminEmail = "admin@vnsis.com";
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        email: adminEmail,
        password: "adminpassword", // In a real app, hash this!
        name: "Admin User",
      },
    });
    console.log("Created admin user");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
