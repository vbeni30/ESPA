import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DonateLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="w-20 h-20 rounded-full mx-auto mb-8 bg-white/20" />
            <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-white/20" />

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-32 bg-white/20" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-8 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-48 mx-auto" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-8 w-16 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Skeleton */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-8 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-80 mx-auto" />
            </div>

            <div className="space-y-8">
              {/* Donation Type Card */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                </CardContent>
              </Card>

              {/* Amount Selection Card */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {[...Array(6)].map((_, i) => (
                      <Skeleton key={i} className="h-20 w-full rounded-lg" />
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>

              {/* Payment Method Card */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full rounded-lg" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Donor Information Card */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-48" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-10 w-full" />
                    ))}
                  </div>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Skeleton className="h-12 w-48 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
