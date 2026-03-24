import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

const rooms = [
  {
    id: 1,
    name: "Classic Apartment",
    type: "Classic Apartment",
    price: 35000,
    status: "Available",
    amenities: ["Kitchenette", "Living Area", "Free Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    name: "Deluxe Suite",
    type: "Deluxe Suite",
    price: 50000,
    status: "Occupied",
    amenities: ["Full Kitchen", "Two Bedrooms", "Balcony"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 3,
    name: "Executive Penthouse",
    type: "Executive Penthouse",
    price: 85000,
    status: "Available",
    amenities: ["Jacuzzi", "Private Lounge", "Butler Service"],
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=300",
  },
];

export function AdminRooms() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Rooms Management
          </h2>
          <p className="text-slate-500">
            View and edit room details and availability.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Room
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card
            key={room.id}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white group"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <Badge
                className={`absolute top-4 right-4 ${room.status === "Available" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
              >
                {room.status}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl text-slate-800">
                  {room.name}
                </CardTitle>
                <span className="text-lg font-bold text-blue-600">
                  ₦{room.price.toLocaleString()}
                </span>
              </div>
              <CardDescription className="text-sm text-slate-500">
                {room.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
