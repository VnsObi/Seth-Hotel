"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatus = exports.getBookings = exports.createBooking = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const createBooking = async (req, res) => {
    const { name, email, phone, checkIn, checkOut, guests, roomType, notifyWhatsApp, } = req.body;
    try {
        // 1. Find the Room by type (or name)
        // We try to match the incoming string to our seeded room names
        const room = await prisma_1.default.room.findFirst({
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
        const booking = await prisma_1.default.booking.create({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create booking" });
    }
};
exports.createBooking = createBooking;
const getBookings = async (req, res) => {
    try {
        const bookings = await prisma_1.default.booking.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(bookings);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};
exports.getBookings = getBookings;
const updateBookingStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if (!["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"].includes(status)) {
        res.status(400).json({ error: "Invalid status value" });
        return;
    }
    try {
        const booking = await prisma_1.default.booking.update({
            where: { id },
            data: { status },
        });
        res.json(booking);
    }
    catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ error: "Failed to update booking status" });
    }
};
exports.updateBookingStatus = updateBookingStatus;
//# sourceMappingURL=bookingController.js.map