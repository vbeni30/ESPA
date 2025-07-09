"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  ArrowRight,
  Plus,
  Filter,
  Search,
  Star,
  Bookmark,
  Share2,
  Download,
  Eye,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const upcomingEvents = [
  {
    id: 1,
    title: "Democratic Education Workshop Series",
    description:
      "A comprehensive 3-day workshop focusing on constitutional rights, democratic participation, and civic engagement for community leaders.",
    category: "workshop",
    date: "June 15-17, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Addis Ababa Conference Center",
    participants: "50 participants",
    spotsRemaining: 25,
    price: "Free",
    featured: true,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    tags: ["democracy", "education", "leadership", "constitutional-rights"],
    organizer: "ESPA Training Team",
    contact: "training@espa.org",
    registrationDeadline: "June 10, 2024",
    status: "open",
    views: 1250,
    bookmarks: 89,
  },
  {
    id: 2,
    title: "Women Leadership Training",
    description: "Empowering women through leadership skills and economic opportunities in rural communities.",
    category: "training",
    date: "June 22, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Bahir Dar Community Center",
    participants: "30 participants",
    spotsRemaining: 12,
    price: "Free",
    featured: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    tags: ["women", "leadership", "empowerment", "economic-development"],
    organizer: "Women's Empowerment Division",
    contact: "women@espa.org",
    registrationDeadline: "June 18, 2024",
    status: "open",
    views: 980,
    bookmarks: 67,
  },
  {
    id: 3,
    title: "Community Human Rights Dialogue",
    description: "Open discussion on human rights challenges and solutions in local communities.",
    category: "dialogue",
    date: "June 28, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Hawassa Town Hall",
    participants: "100 participants",
    spotsRemaining: 45,
    price: "Free",
    featured: false,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    tags: ["human-rights", "dialogue", "community", "advocacy"],
    organizer: "Human Rights Division",
    contact: "rights@espa.org",
    registrationDeadline: "June 25, 2024",
    status: "open",
    views: 756,
    bookmarks: 43,
  },
  {
    id: 4,
    title: "Youth Engagement Forum",
    description: "Engaging young people in democratic processes and community development initiatives.",
    category: "forum",
    date: "July 5, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Mekelle University",
    participants: "75 participants",
    spotsRemaining: 0,
    price: "Free",
    featured: false,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    tags: ["youth", "engagement", "democracy", "development"],
    organizer: "Youth Programs Team",
    contact: "youth@espa.org",
    registrationDeadline: "July 1, 2024",
    status: "full",
    views: 634,
    bookmarks: 41,
  },
  {
    id: 5,
    title: "Election Observer Training",
    description: "Comprehensive training for volunteers to monitor upcoming elections and ensure transparency.",
    category: "training",
    date: "July 12-14, 2024",
    time: "8:00 AM - 6:00 PM",
    location: "Multiple Locations",
    participants: "200 participants",
    spotsRemaining: 85,
    price: "Free",
    featured: true,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
    tags: ["elections", "monitoring", "democracy", "transparency"],
    organizer: "Election Monitoring Unit",
    contact: "elections@espa.org",
    registrationDeadline: "July 8, 2024",
    status: "open",
    views: 1100,
    bookmarks: 78,
  },
]

const pastEvents = [
  {
    id: 6,
    title: "Constitutional Rights Workshop",
    description: "Educational workshop on constitutional rights and civic responsibilities.",
    date: "May 15, 2024",
    location: "Addis Ababa",
    participants: "120 participants",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    impact: "95% of participants reported increased understanding of constitutional rights",
    materials: ["Workshop slides", "Participant handbook", "Video recordings"],
  },
  {
    id: 7,
    title: "Community Dialogue on Peace",
    description: "Inter-community dialogue session promoting peaceful coexistence.",
    date: "April 28, 2024",
    location: "Hawassa",
    participants: "200 participants",
    category: "dialogue",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    impact: "Established 5 community peace committees",
    materials: ["Dialogue framework", "Peace agreement template", "Follow-up guide"],
  },
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [selectedEvent, setSelectedEvent] = useState<(typeof upcomingEvents)[0] | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "bookmarks":
        return b.bookmarks - a.bookmarks
      case "spots":
        return b.spotsRemaining - a.spotsRemaining
      default: // date
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      workshop: "bg-blue-600",
      training: "bg-purple-600",
      dialogue: "bg-green-600",
      forum: "bg-orange-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-600"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      open: "bg-green-100 text-green-800",
      full: "bg-red-100 text-red-800",
      closed: "bg-gray-100 text-gray-800",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <CheckCircle className="h-4 w-4" />
      case "full":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  // Calculate statistics
  const totalEvents = upcomingEvents.length
  const totalSpots = upcomingEvents.reduce((sum, event) => sum + event.spotsRemaining, 0)
  const totalViews = upcomingEvents.reduce((sum, event) => sum + event.views, 0)
  const totalBookmarks = upcomingEvents.reduce((sum, event) => sum + event.bookmarks, 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1920&auto=format&fit=crop"
            alt="ESPA events and community gatherings promoting democratic participation"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-green-700/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-lg px-6 py-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  Community Events & Programs
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Upcoming
                  <span className="text-green-300 block">Events</span>
                </h1>
                <p className="text-xl text-green-100 leading-relaxed max-w-2xl">
                  Join us in our mission to promote democracy, human rights, and community empowerment across Ethiopia
                  through engaging workshops, training sessions, and community dialogues.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-green-900 hover:bg-green-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Target className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Browse Events
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Submit Event
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
                  alt="Community members participating in ESPA events and workshops"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{totalEvents}</p>
                    <p className="text-sm text-gray-600">Upcoming Events</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{totalSpots}</p>
                    <p className="text-sm text-gray-600">Available Spots</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Impact Statistics */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-green-100 text-green-800 text-lg px-6 py-3">Event Impact</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Community Engagement Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our events create meaningful connections and drive positive change in Ethiopian communities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Total Events",
                value: totalEvents.toString(),
                description: "Upcoming workshops, training sessions, and dialogues",
                icon: Calendar,
                color: "green",
              },
              {
                title: "Available Spots",
                value: totalSpots.toString(),
                description: "Open registration opportunities for community members",
                icon: Users,
                color: "blue",
              },
              {
                title: "Event Views",
                value: totalViews.toLocaleString(),
                description: "People interested in our upcoming programs",
                icon: Eye,
                color: "purple",
              },
              {
                title: "Bookmarked Events",
                value: totalBookmarks.toString(),
                description: "Events saved by community members",
                icon: Bookmark,
                color: "orange",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-500 group"
                >
                  <CardContent className="p-8">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                    <div className="font-medium text-lg text-gray-900 mb-2">{stat.title}</div>
                    <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event Controls */}
      <section className="py-8 bg-gray-50 border-b sticky top-16 z-40">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="default"
                onClick={() => setShowFilters(!showFilters)}
                className={showFilters ? "bg-green-50 border-green-200" : ""}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">By Date</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="bookmarks">Most Bookmarked</SelectItem>
                  <SelectItem value="spots">Available Spots</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-white rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Event Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="workshop">Workshops</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="dialogue">Dialogues</SelectItem>
                      <SelectItem value="forum">Forums</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All locations</SelectItem>
                      <SelectItem value="addis">Addis Ababa</SelectItem>
                      <SelectItem value="bahir">Bahir Dar</SelectItem>
                      <SelectItem value="hawassa">Hawassa</SelectItem>
                      <SelectItem value="mekelle">Mekelle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All events" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All events</SelectItem>
                      <SelectItem value="open">Open for registration</SelectItem>
                      <SelectItem value="full">Full capacity</SelectItem>
                      <SelectItem value="featured">Featured events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" className="w-full bg-transparent">
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Programs</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Discover upcoming workshops, training sessions, community dialogues, and advocacy events.
                </p>
              </div>
              <TabsList className="grid w-full lg:w-auto grid-cols-3 gap-1">
                <TabsTrigger value="upcoming" className="text-sm">
                  Upcoming ({upcomingEvents.length})
                </TabsTrigger>
                <TabsTrigger value="ongoing" className="text-sm">
                  Ongoing (0)
                </TabsTrigger>
                <TabsTrigger value="past" className="text-sm">
                  Past Events ({pastEvents.length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              {/* Featured Events */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 mr-2 text-yellow-500" />
                  Featured Events
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingEvents
                    .filter((event) => event.featured)
                    .map((event) => (
                      <Card
                        key={event.id}
                        className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white group hover:shadow-3xl transition-all duration-500"
                      >
                        <div className="relative">
                          <div className="relative h-80">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-yellow-500 text-black font-semibold">Featured Event</Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <Badge className={`${getStatusColor(event.status)}`}>
                                {getStatusIcon(event.status)}
                                <span className="ml-1 capitalize">{event.status}</span>
                              </Badge>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          </div>
                          <div className="p-8">
                            <Badge className="bg-white/20 text-white w-fit mb-4 capitalize">{event.category}</Badge>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
                            <p className="text-blue-100 mb-6 leading-relaxed line-clamp-3">{event.description}</p>
                            <div className="space-y-3 mb-8">
                              <div className="flex items-center text-blue-100">
                                <Calendar className="h-5 w-5 mr-3" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                <Clock className="h-5 w-5 mr-3" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                <MapPin className="h-5 w-5 mr-3" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                <Users className="h-5 w-5 mr-3" />
                                <span>
                                  {event.participants} ({event.spotsRemaining} spots remaining)
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-blue-600 hover:bg-gray-100 flex-1"
                                    onClick={() => setSelectedEvent(event)}
                                  >
                                    View Details
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                              </Dialog>
                              <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent flex-1"
                                disabled={event.status === "full"}
                              >
                                {event.status === "full" ? "Event Full" : "Register Now"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Showing {sortedEvents.length} {sortedEvents.length === 1 ? "event" : "events"}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>
                    Total spots available: {sortedEvents.reduce((sum, event) => sum + event.spotsRemaining, 0)}
                  </span>
                </div>
              </div>

              {/* Upcoming Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedEvents
                  .filter((event) => !event.featured)
                  .map((event) => (
                    <Card
                      key={event.id}
                      className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getCategoryColor(event.category)} text-white capitalize`}>
                            {event.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className={`${getStatusColor(event.status)}`}>
                            {getStatusIcon(event.status)}
                            <span className="ml-1 capitalize">{event.status}</span>
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
                          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                            <Eye className="h-3 w-3" />
                            {event.views}
                          </div>
                          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                            <Bookmark className="h-3 w-3" />
                            {event.bookmarks}
                          </div>
                        </div>
                        {event.price === "Free" && (
                          <div className="absolute bottom-3 right-3">
                            <Badge variant="secondary" className="bg-green-600 text-white">
                              Free
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span>
                            {event.participants}
                            {event.spotsRemaining > 0 && ` (${event.spotsRemaining} spots left)`}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-2">
                          {event.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {event.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{event.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 bg-transparent"
                                onClick={() => setSelectedEvent(event)}
                              >
                                <Info className="h-4 w-4 mr-2" />
                                Details
                              </Button>
                            </DialogTrigger>
                          </Dialog>
                          <Button
                            className={`flex-1 ${getCategoryColor(event.category)} hover:opacity-90`}
                            size="sm"
                            disabled={event.status === "full"}
                          >
                            {event.status === "full" ? "Full" : "Register"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Load More Button */}
              {sortedEvents.length > 0 && (
                <div className="text-center pt-8">
                  <Button size="lg" variant="outline" className="px-8 bg-transparent">
                    Load More Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* No Results */}
              {sortedEvents.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                  <p className="text-gray-600">
                    {searchQuery
                      ? `No results found for "${searchQuery}". Try adjusting your search terms.`
                      : "No events available in this category yet."}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="ongoing">
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Ongoing Events</h3>
                <p className="text-gray-600">Check back soon for ongoing programs and initiatives.</p>
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Events Archive</h3>
                <p className="text-gray-600 mb-6">
                  Browse through our previous events and their impact on communities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={`${getCategoryColor(event.category)} text-white capitalize`}>
                          {event.category}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-gray-600 text-white">
                          Completed
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-600 col-span-2">
                          <Users className="h-4 w-4 mr-2" />
                          {event.participants}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Impact</h4>
                        <p className="text-green-700 text-sm">{event.impact}</p>
                      </div>

                      {/* Materials */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Available Materials</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.materials.map((material, index) => (
                            <Button key={index} variant="outline" size="sm" className="text-xs bg-transparent">
                              <Download className="h-3 w-3 mr-1" />
                              {material}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-8">
                <Button variant="outline" size="lg">
                  View Full Archive
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedEvent.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${getCategoryColor(selectedEvent.category)} text-white capitalize`}>
                    {selectedEvent.category}
                  </Badge>
                  <Badge className={`${getStatusColor(selectedEvent.status)}`}>
                    {getStatusIcon(selectedEvent.status)}
                    <span className="ml-1 capitalize">{selectedEvent.status}</span>
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3" />
                      <span>
                        {selectedEvent.participants} ({selectedEvent.spotsRemaining} spots remaining)
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Registration Info</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500">Registration Deadline</span>
                      <p className="font-medium">{selectedEvent.registrationDeadline}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Organizer</span>
                      <p className="font-medium">{selectedEvent.organizer}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Contact</span>
                      <p className="font-medium">{selectedEvent.contact}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Price</span>
                      <p className="font-medium text-green-600">{selectedEvent.price}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button
                  className={`flex-1 ${getCategoryColor(selectedEvent.category)} hover:opacity-90`}
                  disabled={selectedEvent.status === "full"}
                >
                  {selectedEvent.status === "full" ? "Event Full" : "Register Now"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Event
                </Button>
                <Button variant="outline">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members participating in ESPA events and programs"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">Stay Updated on Our Events</h2>
            <p className="text-xl text-green-100">
              Subscribe to our newsletter to receive notifications about upcoming workshops, training sessions, and
              community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Subscribe to Updates
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Organize an Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
