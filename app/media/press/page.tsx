"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Newspaper,
  Calendar,
  Download,
  Share2,
  ArrowRight,
  Search,
  ExternalLink,
  FileText,
  Clock,
  Eye,
  TrendingUp,
  Globe,
  Mic,
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  BookOpen,
  Target,
} from "lucide-react"
import { useState } from "react"

const pressReleases = [
  {
    id: 1,
    title: "ESPA Launches Comprehensive Democratic Education Initiative Across Five Regions",
    excerpt:
      "Ethiopian Social Partnership Advocacy announces its most ambitious democratic education program to date, reaching over 2,000 community leaders across multiple regions.",
    content:
      "Ethiopian Social Partnership Advocacy has officially launched its most ambitious democratic education program to date, reaching over 2,000 community leaders across Addis Ababa, Oromia, Amhara, SNNP, and Tigray regions. The initiative focuses on constitutional rights awareness and civic participation, representing a significant milestone in ESPA's mission to strengthen democratic institutions and empower communities throughout Ethiopia.",
    date: "December 18, 2024",
    category: "Program Launch",
    readTime: "3 min read",
    featured: true,
    views: 2450,
    downloads: 156,
    tags: ["education", "democracy", "community", "regions"],
  },
  {
    id: 2,
    title: "Women Leadership Training Program Graduates 150 Participants",
    excerpt:
      "ESPA's latest women empowerment initiative successfully trains 150 women leaders across rural communities, focusing on advocacy skills and economic empowerment.",
    content:
      "The Ethiopian Social Partnership Advocacy (ESPA) celebrated the successful graduation of 150 women from its comprehensive leadership training program. The initiative, conducted across rural communities in Ethiopia, focused on developing advocacy skills, economic empowerment strategies, and leadership capabilities among women from diverse backgrounds.",
    date: "December 15, 2024",
    category: "Program Update",
    readTime: "2 min read",
    featured: false,
    views: 1890,
    downloads: 89,
    tags: ["women", "leadership", "empowerment", "graduation"],
  },
  {
    id: 3,
    title: "ESPA Partners with International Human Rights Organizations",
    excerpt:
      "New strategic partnerships with three international organizations will expand ESPA's capacity to advocate for human rights and democratic values across Ethiopia.",
    content:
      "Ethiopian Social Partnership Advocacy has announced strategic partnerships with three prominent international human rights organizations. These collaborations will significantly expand ESPA's capacity to advocate for human rights and promote democratic values throughout Ethiopia, bringing additional resources and expertise to ongoing programs.",
    date: "December 5, 2024",
    category: "Partnership",
    readTime: "4 min read",
    featured: false,
    views: 1567,
    downloads: 234,
    tags: ["partnership", "international", "human-rights", "collaboration"],
  },
  {
    id: 4,
    title: "Human Rights Day: ESPA Launches Nationwide Awareness Campaign",
    excerpt:
      "On International Human Rights Day, ESPA launched a comprehensive awareness campaign reaching over 10,000 citizens through digital and community outreach programs.",
    content:
      "In commemoration of International Human Rights Day, the Ethiopian Social Partnership Advocacy launched a nationwide awareness campaign that reached over 10,000 citizens across Ethiopia. The campaign utilized both digital platforms and community outreach programs to educate citizens about their fundamental rights and the importance of human rights protection.",
    date: "December 10, 2024",
    category: "Campaign",
    readTime: "3 min read",
    featured: true,
    views: 3200,
    downloads: 445,
    tags: ["human-rights", "campaign", "awareness", "nationwide"],
  },
  {
    id: 5,
    title: "ESPA Releases 2024 Annual Impact Report",
    excerpt:
      "Comprehensive annual report highlights significant achievements in democratic education, human rights advocacy, and community empowerment throughout 2024.",
    content:
      "The Ethiopian Social Partnership Advocacy has released its comprehensive 2024 Annual Impact Report, showcasing significant achievements across all program areas. The report details progress in democratic education, human rights advocacy, community empowerment initiatives, and the organization's growing impact on Ethiopian society.",
    date: "December 1, 2024",
    category: "Report",
    readTime: "6 min read",
    featured: false,
    views: 2100,
    downloads: 678,
    tags: ["annual-report", "impact", "achievements", "2024"],
  },
  {
    id: 6,
    title: "Youth Advocacy Program Expands to Three New Regions",
    excerpt:
      "ESPA's successful youth advocacy program extends its reach to Gambela, Benishangul-Gumuz, and Afar regions, training 200 young advocates.",
    content:
      "Following the success of its initial youth advocacy program, ESPA has expanded the initiative to three additional regions: Gambela, Benishangul-Gumuz, and Afar. The expansion will train 200 young advocates in democratic principles, human rights awareness, and community leadership skills.",
    date: "November 28, 2024",
    category: "Program Expansion",
    readTime: "3 min read",
    featured: false,
    views: 1456,
    downloads: 123,
    tags: ["youth", "advocacy", "expansion", "regions"],
  },
]

const mediaContacts = [
  {
    name: "Sarah Johnson",
    title: "Communications Director",
    email: "s.johnson@espa-ethiopia.org",
    phone: "+251-11-XXX-XXXX",
    specialties: ["Press Relations", "Media Strategy"],
  },
  {
    name: "Michael Tadesse",
    title: "Public Relations Manager",
    email: "m.tadesse@espa-ethiopia.org",
    phone: "+251-11-XXX-XXXY",
    specialties: ["Community Outreach", "Event Coverage"],
  },
]

const quickStats = [
  { label: "Press Releases", value: "25+", icon: Newspaper },
  { label: "Media Coverage", value: "100+", icon: Globe },
  { label: "Total Downloads", value: "2.5K+", icon: Download },
  { label: "Media Partners", value: "15+", icon: Users },
]

export default function PressPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  const filteredReleases = pressReleases.filter((release) => {
    const matchesSearch =
      release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" || release.category.toLowerCase().includes(selectedCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })

  const sortedReleases = [...filteredReleases].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "downloads":
        return b.downloads - a.downloads
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      default: // latest
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const featuredReleases = pressReleases.filter((release) => release.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Newspaper className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">Press Center</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Official statements, announcements, and news from Ethiopian Social Partnership Advocacy
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search press releases..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="program">Programs</SelectItem>
                  <SelectItem value="partnership">Partnerships</SelectItem>
                  <SelectItem value="campaign">Campaigns</SelectItem>
                  <SelectItem value="report">Reports</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-white" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-green-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Releases */}
      {featuredReleases.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Featured</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
                <p className="text-lg text-gray-600">Our most important recent news and updates</p>
              </div>
              <div className="flex items-center gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="popular">Most Viewed</SelectItem>
                    <SelectItem value="downloads">Most Downloaded</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-8">
              {featuredReleases.map((release) => (
                <Card key={release.id} className="border-0 shadow-2xl overflow-hidden">
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <Badge className="bg-blue-100 text-blue-800">{release.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{release.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{release.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{release.views.toLocaleString()} views</span>
                          </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{release.title}</h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{release.content}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {release.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="lg:ml-8 flex flex-col gap-3">
                        <Button className="bg-green-600 hover:bg-green-700">
                          Read Full Release
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button variant="outline">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{release.downloads} downloads</span>
                        <span>•</span>
                        <span>Available in English and Amharic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">Trending</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Press Releases</h2>
              <p className="text-gray-600">
                Showing {sortedReleases.length} of {pressReleases.length} releases
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
          </div>

          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="space-y-6">
              {sortedReleases.map((release) => (
                <Card key={release.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <Badge variant="outline">{release.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{release.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{release.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{release.views}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                      {release.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{release.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {release.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                        {release.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{release.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{release.downloads} downloads</span>
                        <Button variant="outline">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedReleases.map((release) => (
                  <Card
                    key={release.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {release.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Eye className="h-3 w-3" />
                          {release.views}
                        </div>
                      </div>
                      <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                        {release.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">{release.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{release.date}</span>
                        <span>{release.readTime}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {release.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{release.downloads} downloads</span>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {sortedReleases.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No press releases found</h3>
              <p className="text-gray-600">
                {searchQuery
                  ? `No results found for "${searchQuery}". Try adjusting your search terms.`
                  : "No press releases available at the moment."}
              </p>
            </div>
          )}

          {sortedReleases.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Releases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Media Resources & Contacts */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media Resources & Contacts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for media coverage and press inquiries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Media Contacts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mic className="h-6 w-6 mr-2 text-blue-600" />
                Media Contacts
              </h3>
              <div className="space-y-6">
                {mediaContacts.map((contact, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900">{contact.name}</h4>
                          <p className="text-blue-600 font-medium">{contact.title}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          {contact.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          {contact.phone}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {contact.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Resources */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Download className="h-6 w-6 mr-2 text-green-600" />
                Quick Resources
              </h3>
              <div className="space-y-4">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Complete Media Kit</h4>
                          <p className="text-sm text-gray-600">Logos, fact sheets, and background info</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                          <Award className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Annual Impact Report</h4>
                          <p className="text-sm text-gray-600">2024 achievements and statistics</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                          <BookOpen className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Program Fact Sheets</h4>
                          <p className="text-sm text-gray-600">Detailed program information</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                          <Target className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Mission & Vision</h4>
                          <p className="text-sm text-gray-600">Organizational overview</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <Card className="border-0 shadow-lg mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Press Office Hours
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM EAT
                    </p>
                    <p>
                      <strong>Emergency Contact:</strong> Available 24/7
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 2 hours during business hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with ESPA News</h2>
            <p className="text-xl text-green-100 mb-8">
              Subscribe to receive our latest press releases and announcements directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <p className="text-sm text-green-200 mt-4">
              Join 2,000+ media professionals. We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
