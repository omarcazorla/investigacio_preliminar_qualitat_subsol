"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Card */}
          <Card className="bg-chart-1 text-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">First Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                This is the first card with a beautiful warm color. Hover to see the
                shadow effect.
              </p>
            </CardContent>
          </Card>

          {/* Second Card */}
          <Card className="bg-chart-2 text-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Second Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                This is the second card with a cool teal color. Both cards are
                responsive and look great on all devices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}