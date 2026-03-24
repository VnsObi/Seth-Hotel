import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns"; // We don't have date-fns, but I will simulate it.

interface Booking {
  id: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  totalPrice: number;
  roomType: string;
  status: string;
  createdAt: string;
}

export function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:3000/api/bookings");
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      setBookings(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load booking data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/bookings/${id}/status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (response.ok) {
        setBookings(
          bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b)),
        );
        toast.success(`Booking ${newStatus.toLowerCase()}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (e) {
      console.error(e);
      toast.error("Error updating status");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "bg-green-100 text-green-800 hover:bg-green-200 border-green-200";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200";
      case "CANCELLED":
        return "bg-red-100 text-red-800 hover:bg-red-200 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-md bg-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-blue-50 to-white rounded-t-lg">
          <div>
            <CardTitle className="text-xl font-bold text-slate-800">
              All Bookings
            </CardTitle>
            <p className="text-sm text-slate-500 mt-1">
              Manage all guest reservations
            </p>
          </div>
          <Button
            onClick={fetchBookings}
            size="sm"
            variant="outline"
            className="border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            Refresh Data
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="font-semibold text-slate-600">
                    Guest Details
                  </TableHead>
                  <TableHead className="font-semibold text-slate-600">
                    Room
                  </TableHead>
                  <TableHead className="font-semibold text-slate-600">
                    Stay Duration
                  </TableHead>
                  <TableHead className="font-semibold text-slate-600">
                    Status
                  </TableHead>
                  <TableHead className="text-right font-semibold text-slate-600">
                    Amount
                  </TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      Loading bookings...
                    </TableCell>
                  </TableRow>
                ) : bookings.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="h-24 text-center text-slate-500"
                    >
                      No bookings found.
                    </TableCell>
                  </TableRow>
                ) : (
                  bookings.map((booking) => (
                    <TableRow
                      key={booking.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-900">
                            {booking.guestName}
                          </span>
                          <span className="text-xs text-slate-500">
                            {booking.guestEmail}
                          </span>
                          <span className="text-xs text-slate-400">
                            {booking.guestPhone}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="font-normal bg-blue-50 text-blue-700 border-blue-200"
                        >
                          {booking.roomType}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col text-sm text-slate-600">
                          <span>
                            In:{" "}
                            {new Date(booking.checkInDate).toLocaleDateString()}
                          </span>
                          <span>
                            Out:{" "}
                            {new Date(
                              booking.checkOutDate,
                            ).toLocaleDateString()}
                          </span>
                          <span className="text-xs text-slate-400 mt-0.5">
                            {booking.numberOfGuests} Guests
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`border ${getStatusColor(booking.status)} shadow-none`}
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium text-slate-900">
                        ₦{booking.totalPrice.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-slate-100 rounded-full"
                            >
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4 text-slate-500" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[160px]"
                          >
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => {
                                navigator.clipboard.writeText(booking.id);
                                toast.success("ID Copied");
                              }}
                            >
                              Copy ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {booking.status === "PENDING" && (
                              <DropdownMenuItem
                                onClick={() =>
                                  handleStatusUpdate(booking.id, "CONFIRMED")
                                }
                                className="text-green-600 focus:text-green-700 focus:bg-green-50"
                              >
                                Confirm Booking
                              </DropdownMenuItem>
                            )}
                            {booking.status !== "CANCELLED" && (
                              <DropdownMenuItem
                                onClick={() =>
                                  handleStatusUpdate(booking.id, "CANCELLED")
                                }
                                className="text-red-600 focus:text-red-700 focus:bg-red-50"
                              >
                                Cancel Booking
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
