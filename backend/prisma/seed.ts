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

  for (const roomData of rooms) {
    const existingRoom = await prisma.room.findFirst({
      where: { name: roomData.name },
    });

    if (!existingRoom) {
      await prisma.room.create({
        data: roomData,
      });
      console.log(`Created room: ${roomData.name}`);
    } else {
      console.log(`Room already exists: ${roomData.name}`);
    }
  }

  // Also seed an Admin user
  const adminEmail = "admin@vnsis.com";
  let existingAdmin = await prisma.admin.findUnique({
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
  } else {
    console.log("Admin user already exists");
  }

  // Create some sample bookings
  const bookingCount = await prisma.booking.count();
  if (bookingCount === 0) {
    console.log("Seeding sample bookings...");

    const checkIn = new Date();
    checkIn.setDate(checkIn.getDate() + 1);
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + 3);

    await prisma.booking.create({
      data: {
        guestName: "John Doe",
        guestEmail: "john@example.com",
        guestPhone: "+2347064910016",
        roomType: "Classic Apartment",
        checkInDate: checkIn,
        checkOutDate: checkOut,
        numberOfGuests: 2,
        totalPrice: 105000,
        status: "CONFIRMED",
      },
    });

    await prisma.booking.create({
      data: {
        guestName: "Jane Smith",
        guestEmail: "jane@example.com",
        guestPhone: "+2348012345678",
        roomType: "Deluxe Suite",
        checkInDate: checkIn,
        checkOutDate: checkOut,
        numberOfGuests: 1,
        totalPrice: 150000,
        status: "PENDING",
      },
    });

    // Add another booking for John Doe to test aggregation
    const prevCheckIn = new Date();
    prevCheckIn.setMonth(prevCheckIn.getMonth() - 1);
    const prevCheckOut = new Date(prevCheckIn);
    prevCheckOut.setDate(prevCheckOut.getDate() + 5);

    await prisma.booking.create({
      data: {
        guestName: "John Doe",
        guestEmail: "john@example.com",
        guestPhone: "+2347064910016",
        roomType: "Executive Penthouse",
        checkInDate: prevCheckIn,
        checkOutDate: prevCheckOut,
        numberOfGuests: 2,
        totalPrice: 425000,
        status: "Checked Out",
      },
    });

    console.log("Created sample bookings");
  } else {
    console.log("Bookings already exist, skipping sample data");
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
