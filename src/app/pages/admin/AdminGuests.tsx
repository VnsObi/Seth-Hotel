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
import { Search, UserPlus } from "lucide-react";

const guests = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+2347064910016",
    visits: 3,
    lastVisit: "2026-03-20",
    status: "VIP",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+2348012345678",
    visits: 1,
    lastVisit: "2026-02-15",
    status: "Regular",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+2349098765432",
    visits: 5,
    lastVisit: "2026-01-10",
    status: "VIP",
  },
];

export function AdminGuests() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Guest Directory
          </h2>
          <p className="text-slate-500">
            Manage guest profiles and loyalty status.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="mr-2 h-4 w-4" /> Add Guest
        </Button>
      </div>

      <Card className="border-none shadow-md bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <CardTitle className="text-xl font-bold text-slate-800">
            All Guests
          </CardTitle>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              placeholder="Search guests..."
              className="bg-slate-50 border-slate-200"
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
                <TableHead className="text-right font-semibold text-slate-600">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guests.map((guest) => (
                <TableRow key={guest.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-900">
                    {guest.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col text-sm text-slate-600">
                      <span>{guest.email}</span>
                      <span className="text-xs text-slate-400">
                        {guest.phone}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-700">
                    {guest.visits}
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {guest.lastVisit}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        guest.status === "VIP"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {guest.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-500 hover:text-blue-600"
                    >
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
