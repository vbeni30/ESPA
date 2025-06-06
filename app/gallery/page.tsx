import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Calendar, MapPin, Users, Heart, ArrowRight, Download, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container px-4 md:px-6 max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Camera className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Our Gallery</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of change, hope, and community empowerment across Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              Download Media Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Moments That Matter</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Browse through our collection of photos and videos showcasing our programs, events, and the
                  communities we serve.
                </p>
              </div>
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-5 gap-1">
                <TabsTrigger value="all" className="text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="programs" className="text-sm">
                  Programs
                </TabsTrigger>
                <TabsTrigger value="events" className="text-sm">
                  Events
                </TabsTrigger>
                <TabsTrigger value="community" className="text-sm">
                  Community
                </TabsTrigger>
                <TabsTrigger value="team" className="text-sm">
                  Team
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=600&fit=crop"
                  alt="Community workshop on democratic education"
                  width={1200}
                  height={600}
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-blue-600 text-white mb-3">Featured</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Democratic Education Workshop in Bahir Dar
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      March 15, 2024
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Bahir Dar, Ethiopia
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      150+ Participants
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Gallery Item 1 */}
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
                      alt="Citizens learning about democratic rights"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-green-600 text-white">Programs</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      Civic Education Session
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      February 28, 2024
                    </div>
                    <p className="text-gray-600 text-sm">
                      Community members learning about their constitutional rights and democratic participation.
                    </p>
                  </CardContent>
                </Card>

                {/* Gallery Item 2 */}
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                      alt="Women leadership training workshop"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-purple-600 text-white">Events</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                      Women Leadership Training
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      March 8, 2024
                    </div>
                    <p className="text-gray-600 text-sm">
                      Empowering women through leadership skills and economic opportunities.
                    </p>
                  </CardContent>
                </Card>

                {/* Gallery Item 3 */}
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
                      alt="Human rights awareness campaign"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-600 text-white">Community</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
                      Human Rights Campaign
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      December 10, 2023
                    </div>
                    <p className="text-gray-600 text-sm">
                      Raising awareness about fundamental human rights on International Human Rights Day.
                    </p>
                  </CardContent>
                </Card>

                {/* Gallery Item 4 */}
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                      alt="ESPA team planning session"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600 text-white">Team</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      Strategic Planning Session
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      January 15, 2024
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our team collaborating on strategic initiatives for community empowerment.
                    </p>
                  </CardContent>
                </Card>

                {/* Gallery Item 5 */}
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                      alt="Volunteers working with community"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-green-600 text-white">Community</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                      Community Outreach Program
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      February 14, 2024
                    </div>
                    <p className="text-gray-600 text-sm">
                      Volunteers working directly with community members to provide support and education.
                    </p>
                  </CardContent>
                </Card>

                {/* Gallery Item 6 */}
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop"
                      alt="Community celebration"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-yellow-600 text-white">Events</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 transition-colors">
                      Program Graduation Ceremony
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      March 20, 2024
                    </div>
                    <p className="text-gray-600 text-sm">
                      Celebrating the successful completion of our democratic education program.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Load More Button */}
              <div className="text-center pt-8">
                <Button size="lg" variant="outline" className="px-8">
                  Load More Images
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Other tab contents would be similar but filtered */}
            <TabsContent value="programs">
              <div className="text-center py-12">
                <p className="text-gray-600">Program-specific gallery content would be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="text-center py-12">
                <p className="text-gray-600">Event-specific gallery content would be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="text-center py-12">
                <p className="text-gray-600">Community-focused gallery content would be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="team">
              <div className="text-center py-12">
                <p className="text-gray-600">Team-related gallery content would be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Be Part of Our Story</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join us in creating positive change in Ethiopian communities. Your involvement helps us capture more moments
            of hope and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Heart className="mr-2 h-5 w-5" />
                Get Involved
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                <Camera className="mr-2 h-5 w-5" />
                Share Your Photos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
