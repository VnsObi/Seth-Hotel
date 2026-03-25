import { Router } from "express";
import {
  createBooking,
  getBookings,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.put("/:id/status", updateBookingStatus);

export default router;
