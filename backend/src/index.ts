import "dotenv/config";
import express from "express";
import { fileURLToPath } from "url";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*", // Allow all origins for development
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.use("/api/bookings", bookingRoutes);

app.get("/", (_req, res) => {
  res.send("Vnsis Central Booking Engine API is running");
});

// Export the app for Vercel Serverless Functions
export default app;

// Only start the server if running locally (not in Vercel)
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);
if (process.env.NODE_ENV !== "production" && isMainModule) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
