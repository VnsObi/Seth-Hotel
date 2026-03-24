import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Platform Settings
          </h2>
          <p className="text-slate-500">
            Configure global preferences for Vnsis Demo Hotel.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">
              General Information
            </CardTitle>
            <CardDescription className="text-slate-500">
              Manage basic hotel details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hotelName" className="text-slate-700">
                Hotel Name
              </Label>
              <Input
                id="hotelName"
                defaultValue="Vnsis Demo Hotel"
                className="bg-slate-50 border-slate-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="text-slate-700">
                Location
              </Label>
              <Input
                id="location"
                defaultValue="Lagos, Nigeria"
                className="bg-slate-50 border-slate-200"
              />
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100 flex justify-end p-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">
              Booking Preferences
            </CardTitle>
            <CardDescription className="text-slate-500">
              Customize how bookings are handled.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base text-slate-800 font-medium">
                  Auto-confirm Bookings
                </Label>
                <CardDescription className="text-slate-500">
                  Automatically confirm new reservations
                </CardDescription>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base text-slate-800 font-medium">
                  WhatsApp Notifications
                </Label>
                <CardDescription className="text-slate-500">
                  Send alerts to guests via WhatsApp
                </CardDescription>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100 flex justify-end p-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Update Preferences
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
