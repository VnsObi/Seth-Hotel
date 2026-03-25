import { useState } from "react";
import { Check, Calendar, Users, X } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  checkIn: z.string().refine((val) => val !== "", {
    message: "Check-in date is required.",
  }),
  checkOut: z.string().refine((val) => val !== "", {
    message: "Check-out date is required.",
  }),
  roomType: z.string().min(1, {
    message: "Please select a room type.",
  }),
  guests: z.string().min(1, {
    message: "Please select number of guests",
  }),
  notifyWhatsApp: z.boolean().default(true),
});

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoom?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultRoom = "Classic Apartment",
}: BookingModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: defaultRoom,
      guests: "2",
      notifyWhatsApp: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting booking:", values);
    try {
      // Simulate network delay for UX then send to actual backend
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Failed to create booking: ${response.statusText}`,
        );
      }

      setIsSuccess(true);
      toast.success("Booking Request Sent to Vnsis Central System!", {
        description:
          "Your request has been logged and forwarded to the hotel administration.",
      });
    } catch (error: any) {
      console.error("Booking error:", error);
      toast.error("Booking Submission Failed", {
        description:
          error.message ||
          "Could not connect to Vnsis Central System. Please try again.",
      });
    }
  }

  const handleClose = () => {
    setIsSuccess(false);
    form.reset();
    onClose();
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-[#1e3a5f]">
              Booking Confirmed!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for choosing Vnsis Demo Hotel.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-gray-900 font-semibold">
                Your reservation request has been processed by the Vnsis Central
                Booking Engine.
              </p>
              <p className="text-sm text-gray-600">
                A confirmation has been sent to your email and WhatsApp (if
                selected). The hotel administration has been notified instantly.
              </p>
            </div>
            <Button
              onClick={handleClose}
              className="w-full bg-[#1e3a5f] hover:bg-[#152a45]"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1e3a5f]">
            Book Your Stay
          </DialogTitle>
          <DialogDescription>
            Best rates guaranteed when you book directly with us.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, (errors) => {
              console.log("Validation errors:", errors);
              toast.error("Please check the form for errors");
            })}
            className="space-y-4 py-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+234..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Check-in Date</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="date" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Check-out Date</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="date" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a room" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Classic Apartment">
                          Classic Apartment
                        </SelectItem>
                        <SelectItem value="Deluxe Suite">
                          Deluxe Suite
                        </SelectItem>
                        <SelectItem value="Executive Penthouse">
                          Executive Penthouse
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guests</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notifyWhatsApp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Receive booking confirmation via WhatsApp
                    </FormLabel>
                    <FormDescription>
                      We will send your booking details and a payment link to
                      your WhatsApp number.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#c19d2f] text-white font-bold py-6 text-lg mt-6"
            >
              Confirm Booking - Pay on Arrival
            </Button>
            <p className="text-center text-xs text-gray-500 mt-2">
              No credit card required for booking. Free cancellation up to 24
              hours before check-in.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
