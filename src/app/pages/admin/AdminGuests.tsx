import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Search } from "lucide-react";
import { format } from "date-fns";

// Define the shape of a booking from the API
interface Booking {
  id: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}

// Define the shape of our derived Guest
interface Guest {
  email: string;
  name: string;
  phone: string;
  visits: number;
  lastStay: string;
  status: string; // "VIP", "Regular", "New"
}

export function AdminGuests() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/api/bookings");
        if (!response.ok) throw new Error("Failed to fetch bookings");

        const bookings: Booking[] = await response.json();
        const guestMap = new Map<string, Guest>();

        bookings.forEach((booking) => {
          const email = booking.guestEmail.toLowerCase();
          const existingGuest = guestMap.get(email);

          if (existingGuest) {
            existingGuest.visits += 1;
            // Update to latest contact info if changed
            existingGuest.name = booking.guestName;
            existingGuest.phone = booking.guestPhone;

            // Keep the latest visit date
            if (
              new Date(booking.checkOutDate) > new Date(existingGuest.lastStay)
            ) {
              existingGuest.lastStay = booking.checkOutDate;
            }
          } else {
            guestMap.set(email, {
              email: email,
              name: booking.guestName,
              phone: booking.guestPhone,
              visits: 1,
              lastStay: booking.checkOutDate,
              status: "New",
            });
          }
        });

        // Determine status based on visits
        const guestList = Array.from(guestMap.values()).map((guest) => {
          let status = "New";
          if (guest.visits > 5) status = "VIP";
          else if (guest.visits > 2) status = "Regular";

          return { ...guest, status };
        });

        setGuests(guestList);
      } catch (error) {
        console.error("Error fetching guest data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGuests();
  }, []);

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Guest Directory
          </h2>
          <p className="text-slate-500">
            View guest profiles and history derived from bookings.
          </p>
        </div>
        {/* Removed "Add Guest" button as guests are created via bookings */}
      </div>

      <Card className="border-none shadow-md bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <CardTitle className="text-xl font-bold text-slate-800">
            All Guests ({guests.length})
          </CardTitle>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              placeholder="Search guests..."
              className="bg-slate-50 border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              className="bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="font-semibold text-slate-600">
                  Name
                </TableHead>
                <TableHead className="font-semibold text-slate-600">
                  Contact Info
                </TableHead>
                <TableHead className="font-semibold text-slate-600">
                  Visits
                </TableHead>
                <TableHead className="font-semibold text-slate-600">
                  Last Stay
                </TableHead>
                <TableHead className="font-semibold text-slate-600">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    Loading guest directory...
                  </TableCell>
                </TableRow>
              ) : filteredGuests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    No guests found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredGuests.map((guest, idx) => (
                  <TableRow key={idx} className="hover:bg-slate-50/50">
                    <TableCell className="font-medium text-slate-900">
                      {guest.name}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-slate-900">{guest.email}</span>
                        <span className="text-slate-500 text-sm">
                          {guest.phone}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {guest.visits}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {/* Handle invalid dates gracefully */}
                      {(() => {
                        try {
                          return format(
                            new Date(guest.lastStay),
                            "MMM d, yyyy",
                          );
                        } catch (e) {
                          return guest.lastStay;
                        }
                      })()}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          guest.status === "VIP"
                            ? "bg-purple-100 text-purple-800"
                            : guest.status === "Regular"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {guest.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
