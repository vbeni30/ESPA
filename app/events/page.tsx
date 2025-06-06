import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Heart, ArrowRight, Plus, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
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
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Upcoming Events</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in our mission to promote democracy, human rights, and community empowerment across Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Plus className="mr-2 h-5 w-5" />
              Submit Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-600 border-white hover:bg-green-50 hover:text-green-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Discover upcoming workshops, training sessions, community dialogues, and advocacy events.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search events..." className="pl-10 w-full sm:w-64" />
              </div>
              <Button variant="outline" size="default">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full lg:w-auto grid-cols-3 gap-1 mb-8">
              <TabsTrigger value="upcoming" className="text-sm">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="ongoing" className="text-sm">
                Ongoing
              </TabsTrigger>
              <TabsTrigger value="past" className="text-sm">
                Past Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              {/* Featured Event */}
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/images/democratic-education.jpg"
                      alt="Democratic Education Workshop"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-black font-semibold">Featured Event</Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="bg-white/20 text-white w-fit mb-4">Workshop</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Democratic Education Workshop Series</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      A comprehensive 3-day workshop focusing on constitutional rights, democratic participation, and
                      civic engagement for community leaders.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-blue-100">
                        <Calendar className="h-5 w-5 mr-3" />
                        <span>June 15-17, 2024</span>
                      </div>
                      <div className="flex items-center text-blue-100">
                        <Clock className="h-5 w-5 mr-3" />
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center text-blue-100">
                        <MapPin className="h-5 w-5 mr-3" />
                        <span>Addis Ababa Conference Center</span>
                      </div>
                      <div className="flex items-center text-blue-100">
                        <Users className="h-5 w-5 mr-3" />
                        <span>50 participants (25 spots remaining)</span>
                      </div>
                    </div>
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 w-fit">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Upcoming Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Event 1 */}
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/women-empowerment.jpg"
                      alt="Women Leadership Training"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-purple-600 text-white">Training</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        Free
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      Women Leadership Training
                    </CardTitle>
                    <CardDescription>
                      Empowering women through leadership skills and economic opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>June 22, 2024</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Bahir Dar Community Center</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>30 participants</span>
                    </div>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Register</Button>
                  </CardContent>
                </Card>

                {/* Event 2 */}
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/human-rights-advocacy.jpg"
                      alt="Human Rights Dialogue"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-600 text-white">Dialogue</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        Free
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                      Community Human Rights Dialogue
                    </CardTitle>
                    <CardDescription>
                      Open discussion on human rights challenges and solutions in local communities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>June 28, 2024</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>2:00 PM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Hawassa Town Hall</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>100 participants</span>
                    </div>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Register</Button>
                  </CardContent>
                </Card>

                {/* Event 3 */}
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/volunteers-community.jpg"
                      alt="Youth Engagement Forum"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-green-600 text-white">Forum</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        Free
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                      Youth Engagement Forum
                    </CardTitle>
                    <CardDescription>
                      Engaging young people in democratic processes and community development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>July 5, 2024</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>1:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Mekelle University</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>75 participants</span>
                    </div>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Register</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Load More Button */}
              <div className="text-center pt-8">
                <Button size="lg" variant="outline" className="px-8">
                  View All Upcoming Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ongoing">
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Ongoing Events</h3>
                <p className="text-gray-600">Check back soon for ongoing programs and initiatives.</p>
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Past Events Archive</h3>
                <p className="text-gray-600 mb-6">Browse through our previous events and their impact.</p>
                <Button variant="outline">
                  View Archive
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Updated on Our Events</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter to receive notifications about upcoming workshops, training sessions, and
            community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Heart className="mr-2 h-5 w-5" />
                Subscribe to Updates
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline">
                <Plus className="mr-2 h-5 w-5" />
                Organize an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
