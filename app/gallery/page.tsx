"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Camera,
  Calendar,
  MapPin,
  Users,
  Heart,
  ArrowRight,
  Download,
  Share2,
  Search,
  Filter,
  Play,
  Eye,
  Grid3X3,
  List,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Tag,
  ImageIcon,
  Video,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
    title: "Democratic Education Workshop",
    description:
      "Community members learning about constitutional rights and democratic participation in a comprehensive workshop setting",
    category: "programs",
    date: "March 15, 2024",
    location: "Bahir Dar, Ethiopia",
    participants: "150+ Participants",
    tags: ["education", "democracy", "workshop", "community"],
    featured: true,
    views: 1250,
    likes: 89,
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    title: "Women Leadership Training",
    description: "Empowering women through leadership skills and economic opportunities in rural communities",
    category: "events",
    date: "March 8, 2024",
    location: "Addis Ababa, Ethiopia",
    participants: "75 Women Leaders",
    tags: ["women", "leadership", "empowerment", "training"],
    featured: true,
    views: 980,
    likes: 67,
  },
  {
    id: 3,
    type: "video",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    title: "Human Rights Campaign Documentary",
    description: "A comprehensive look at our human rights awareness campaign and its impact on communities",
    category: "community",
    date: "December 10, 2023",
    location: "Multiple Locations",
    participants: "10,000+ Citizens Reached",
    tags: ["human-rights", "campaign", "documentary", "awareness"],
    duration: "12:34",
    featured: false,
    views: 2340,
    likes: 156,
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    title: "Strategic Planning Session",
    description: "ESPA team collaborating on strategic initiatives for community empowerment and program development",
    category: "team",
    date: "January 15, 2024",
    location: "ESPA Headquarters",
    participants: "25 Team Members",
    tags: ["planning", "strategy", "team", "collaboration"],
    featured: false,
    views: 456,
    likes: 23,
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    title: "Community Outreach Program",
    description: "Volunteers working directly with community members to provide support and education services",
    category: "community",
    date: "February 14, 2024",
    location: "Rural Communities",
    participants: "500+ Community Members",
    tags: ["outreach", "volunteers", "community", "support"],
    featured: false,
    views: 789,
    likes: 45,
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    title: "Program Graduation Ceremony",
    description: "Celebrating the successful completion of our democratic education program with community leaders",
    category: "events",
    date: "March 20, 2024",
    location: "Community Center",
    participants: "200 Graduates",
    tags: ["graduation", "celebration", "achievement", "education"],
    featured: false,
    views: 1100,
    likes: 78,
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
    title: "Youth Advocacy Training",
    description: "Young advocates learning skills to promote democratic values and human rights in their communities",
    category: "programs",
    date: "April 5, 2024",
    location: "Hawassa, Ethiopia",
    participants: "120 Youth Advocates",
    tags: ["youth", "advocacy", "training", "democracy"],
    featured: false,
    views: 634,
    likes: 41,
  },
  {
    id: 8,
    type: "video",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    title: "Community Dialogue Sessions",
    description: "Facilitating peaceful discussions among diverse community groups to build understanding",
    category: "community",
    date: "March 25, 2024",
    location: "Various Communities",
    participants: "300+ Participants",
    tags: ["dialogue", "peace", "community", "understanding"],
    duration: "8:45",
    featured: false,
    views: 892,
    likes: 52,
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "liked":
        return b.likes - a.likes
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      default: // latest
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      programs: "bg-blue-600",
      events: "bg-purple-600",
      community: "bg-green-600",
      team: "bg-orange-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-600"
  }

  const getCategoryBorderColor = (category: string) => {
    const colors = {
      programs: "border-blue-200",
      events: "border-purple-200",
      community: "border-green-200",
      team: "border-orange-200",
    }
    return colors[category as keyof typeof colors] || "border-gray-200"
  }

  const openLightbox = (item: (typeof galleryItems)[0]) => {
    setSelectedItem(item)
    const index = galleryItems.findIndex((i) => i.id === item.id)
    setCurrentImageIndex(index)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + galleryItems.length) % galleryItems.length
        : (currentImageIndex + 1) % galleryItems.length

    setCurrentImageIndex(newIndex)
    setSelectedItem(galleryItems[newIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItem) {
        if (e.key === "ArrowLeft") navigateImage("prev")
        if (e.key === "ArrowRight") navigateImage("next")
        if (e.key === "Escape") setSelectedItem(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedItem, currentImageIndex])

  // Calculate statistics
  const totalImages = galleryItems.filter((item) => item.type === "image").length
  const totalVideos = galleryItems.filter((item) => item.type === "video").length
  const totalViews = galleryItems.reduce((sum, item) => sum + item.views, 0)
  const totalLikes = galleryItems.reduce((sum, item) => sum + item.likes, 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="ESPA media gallery showcasing community programs and events"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-purple-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-6 py-3">
                  <Camera className="h-4 w-4 mr-2" />
                  Visual Stories Collection
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Media
                  <span className="text-blue-300 block">Gallery</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Capturing moments of change, hope, and community empowerment across Ethiopia through powerful visual
                  storytelling that documents our impact and celebrates the communities we serve.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Eye className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Gallery
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Media Kit
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
                  alt="Community members participating in ESPA programs"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <ImageIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{totalImages}</p>
                    <p className="text-sm text-gray-600">Photos</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Video className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{totalVideos}</p>
                    <p className="text-sm text-gray-600">Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Gallery Impact</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Visual Impact Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our visual content reaches thousands of people, documenting real change in Ethiopian communities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Total Media Items",
                value: galleryItems.length.toString(),
                description: "Photos and videos documenting our work",
                icon: Camera,
                color: "blue",
              },
              {
                title: "Total Views",
                value: totalViews.toLocaleString(),
                description: "People reached through our visual content",
                icon: Eye,
                color: "green",
              },
              {
                title: "Community Engagement",
                value: totalLikes.toString(),
                description: "Likes and positive interactions",
                icon: Heart,
                color: "pink",
              },
              {
                title: "Featured Stories",
                value: galleryItems.filter((item) => item.featured).length.toString(),
                description: "Highlighted impact stories and moments",
                icon: Star,
                color: "yellow",
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

      {/* Gallery Controls */}
      <section className="py-8 bg-gray-50 border-b sticky top-16 z-40">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search photos and videos..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="default"
                onClick={() => setShowFilters(!showFilters)}
                className={showFilters ? "bg-blue-50 border-blue-200" : ""}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Sort and View Mode */}
            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Viewed</SelectItem>
                  <SelectItem value="liked">Most Liked</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-1 border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-white rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This week</SelectItem>
                      <SelectItem value="month">This month</SelectItem>
                      <SelectItem value="year">This year</SelectItem>
                      <SelectItem value="all">All time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Media Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="image">Photos only</SelectItem>
                      <SelectItem value="video">Videos only</SelectItem>
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

      {/* Gallery Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visual Stories</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Explore our collection of photos and videos showcasing our programs, events, and the communities we
                  serve.
                </p>
              </div>
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-5 gap-1">
                <TabsTrigger value="all" className="text-sm">
                  All ({galleryItems.length})
                </TabsTrigger>
                <TabsTrigger value="programs" className="text-sm">
                  Programs ({galleryItems.filter((item) => item.category === "programs").length})
                </TabsTrigger>
                <TabsTrigger value="events" className="text-sm">
                  Events ({galleryItems.filter((item) => item.category === "events").length})
                </TabsTrigger>
                <TabsTrigger value="community" className="text-sm">
                  Community ({galleryItems.filter((item) => item.category === "community").length})
                </TabsTrigger>
                <TabsTrigger value="team" className="text-sm">
                  Team ({galleryItems.filter((item) => item.category === "team").length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={selectedCategory} className="space-y-8">
              {/* Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {sortedItems.length} {sortedItems.length === 1 ? "item" : "items"}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Total views: {galleryItems.reduce((sum, item) => sum + item.views, 0).toLocaleString()}</span>
                </div>
              </div>

              {/* Featured Items */}
              {selectedCategory === "all" && !searchQuery && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="h-6 w-6 mr-2 text-yellow-500" />
                    Featured Content
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {galleryItems
                      .filter((item) => item.featured)
                      .slice(0, 2)
                      .map((item) => (
                        <Card
                          key={item.id}
                          className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                          <div className="relative overflow-hidden h-80">
                            <Image
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onClick={() => openLightbox(item)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <Badge className={`${getCategoryColor(item.category)} text-white`}>
                                Featured • {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                              </Badge>
                            </div>

                            {/* Video Play Button */}
                            {item.type === "video" && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 rounded-full p-6 group-hover:bg-white transition-colors">
                                  <Play className="h-12 w-12 text-gray-800 ml-1" />
                                </div>
                              </div>
                            )}

                            {/* Stats */}
                            <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white text-sm">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {item.views.toLocaleString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4" />
                                {item.likes}
                              </div>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-4 left-4 right-20">
                              <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                              <div className="flex items-center text-white/80 text-sm">
                                <Calendar className="h-4 w-4 mr-2" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* Gallery Grid/List */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedItems.map((item) => (
                    <Card
                      key={item.id}
                      className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${getCategoryBorderColor(item.category)} border-l-4`}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          onClick={() => openLightbox(item)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getCategoryColor(item.category)} text-white`}>
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </Badge>
                        </div>

                        {/* Video Play Button */}
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors">
                              <Play className="h-8 w-8 text-gray-800 ml-1" />
                            </div>
                          </div>
                        )}

                        {/* Zoom Icon */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/90 rounded-full p-2">
                            <ZoomIn className="h-4 w-4 text-gray-800" />
                          </div>
                        </div>

                        {/* Video Duration */}
                        {item.type === "video" && item.duration && (
                          <div className="absolute bottom-3 right-3">
                            <Badge variant="secondary" className="bg-black/70 text-white">
                              {item.duration}
                            </Badge>
                          </div>
                        )}

                        {/* Stats */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
                          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                            <Eye className="h-3 w-3" />
                            {item.views}
                          </div>
                          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                            <Heart className="h-3 w-3" />
                            {item.likes}
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.date}
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{item.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {item.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {sortedItems.map((item) => (
                    <Card
                      key={item.id}
                      className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${getCategoryBorderColor(item.category)} border-l-4`}
                    >
                      <div className="grid md:grid-cols-4 gap-6 p-6">
                        <div
                          className="relative overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => openLightbox(item)}
                        >
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            width={300}
                            height={200}
                            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/90 rounded-full p-2">
                                <Play className="h-6 w-6 text-gray-800 ml-0.5" />
                              </div>
                            </div>
                          )}
                          <div className="absolute top-2 left-2">
                            <Badge className={`${getCategoryColor(item.category)} text-white text-xs`}>
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="md:col-span-3">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {item.date}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {item.location}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {item.participants}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Eye className="h-4 w-4" />
                                {item.views}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Heart className="h-4 w-4" />
                                {item.likes}
                              </div>
                              <Button variant="outline" size="sm">
                                <ZoomIn className="h-4 w-4 mr-2" />
                                View
                              </Button>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Load More Button */}
              {sortedItems.length > 0 && (
                <div className="text-center pt-8">
                  <Button size="lg" variant="outline" className="px-8 bg-transparent">
                    Load More Media
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* No Results */}
              {sortedItems.length === 0 && (
                <div className="text-center py-12">
                  <Camera className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No media found</h3>
                  <p className="text-gray-600">
                    {searchQuery
                      ? `No results found for "${searchQuery}". Try adjusting your search terms.`
                      : "No media available in this category yet."}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-black">
            <div className="relative h-full">
              {/* Navigation */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <DialogHeader>
                  <DialogTitle className="text-white text-lg">
                    {currentImageIndex + 1} of {galleryItems.length}
                  </DialogTitle>
                </DialogHeader>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedItem(null)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Image */}
              <div className="relative h-[70vh] flex items-center justify-center">
                <Image
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              {/* Details */}
              <div className="bg-white p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${getCategoryColor(selectedItem.category)} text-white`}>
                        {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {selectedItem.views.toLocaleString()} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {selectedItem.likes} likes
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                    <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedItem.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {selectedItem.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {selectedItem.participants}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
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
            alt="Community members supporting media documentation and storytelling"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">Be Part of Our Visual Story</h2>
            <p className="text-xl text-blue-100">
              Join us in creating positive change in Ethiopian communities. Your involvement helps us capture more
              moments of hope and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/volunteer">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Involved
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Share Your Photos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
