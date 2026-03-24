import { Request, Response } from "express";
import prisma from "../prisma";

export const createBooking = async (req: Request, res: Response) => {
  const {
    name,
    email,
    phone,
    checkIn,
    checkOut,
    guests,
    roomType,
    notifyWhatsApp,
  } = req.body;

  try {
    // 1. Find the Room by type (or name)
    // We try to match the incoming string to our seeded room names
    const room = await prisma.room.findFirst({
      where: {
        OR: [{ name: roomType }, { type: roomType }],
      },
    });

    if (!room) {
      res.status(400).json({ error: "Invalid room type selected." });
      return;
    }

    // 2. Calculate Nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Basic validation
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      res.status(400).json({ error: "Invalid dates provided." });
      return;
    }

    if (checkOutDate <= checkInDate) {
      res
        .status(400)
        .json({ error: "Check-out date must be after check-in date." });
      return;
    }

    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Days calculation

    // 3. Calculate Total Price
    const totalPrice = room.price * nights;

    // 4. Create Booking
    const booking = await prisma.booking.create({
      data: {
        guestName: name,
        guestEmail: email,
        guestPhone: phone,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numberOfGuests: parseInt(guests),
        roomType: room.name, // normalizing to the DB name
        totalPrice: totalPrice,
        status: "PENDING",
        roomId: room.id,
      },
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"].includes(status)) {
    res.status(400).json({ error: "Invalid status value" });
    return;
  }

  try {
    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
    });
    res.json(booking);
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ error: "Failed to update booking status" });
  }
};
