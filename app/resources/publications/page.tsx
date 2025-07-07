import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, Calendar, FileText, Search, Filter, Star, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

export default function PublicationsPage() {
  const publicationStats = [
    { label: "Total Publications", value: "25+", icon: BookOpen, color: "text-blue-600" },
    { label: "Downloads", value: "15K+", icon: Download, color: "text-green-600" },
    { label: "Citations", value: "150+", icon: Award, color: "text-purple-600" },
    { label: "Languages", value: "4", icon: Users, color: "text-orange-600" },
  ]

  const publications = [
    {
      id: 1,
      title: "Democratic Participation in Ethiopia: A Comprehensive Guide",
      description: "An in-depth analysis of democratic processes and citizen participation in Ethiopian governance.",
      category: "Democracy",
      type: "Guide",
      date: "2024-01-15",
      pages: 45,
      downloads: 1250,
      featured: true,
      image: "/placeholder.svg?height=400&width=300",
      authors: ["Dr. Almaz Bekele", "Prof. Tadesse Girma"],
      language: "English/Amharic",
      isbn: "978-1-234567-89-0",
    },
    {
      id: 2,
      title: "Human Rights Advocacy Handbook",
      description: "Practical strategies and legal frameworks for effective human rights advocacy in Ethiopia.",
      category: "Human Rights",
      type: "Handbook",
      date: "2023-11-20",
      pages: 68,
      downloads: 890,
      featured: true,
      image: "/placeholder.svg?height=400&width=300",
      authors: ["Hanan Mohammed", "Dr. Sarah Alemayehu"],
      language: "English/Amharic",
      isbn: "978-1-234567-90-6",
    },
    {
      id: 3,
      title: "Community Engagement Best Practices",
      description: "Lessons learned from successful community engagement initiatives across Ethiopian regions.",
      category: "Community",
      type: "Best Practices",
      date: "2023-09-10",
      pages: 32,
      downloads: 675,
      featured: false,
      image: "/placeholder.svg?height=400&width=300",
      authors: ["Michael Tadesse"],
      language: "English/Oromo",
      isbn: "978-1-234567-91-3",
    },
    {
      id: 4,
      title: "Women's Leadership in Democratic Processes",
      description: "Research on women's participation and leadership roles in Ethiopian democratic institutions.",
      category: "Gender",
      type: "Research",
      date: "2023-07-05",
      pages: 56,
      downloads: 543,
      featured: false,
      image: "/placeholder.svg?height=400&width=300",
      authors: ["Dr. Zara Ahmed", "Almaz Tadesse"],
      language: "English",
      isbn: "978-1-234567-92-0",
    },
    {
      id: 5,
      title: "Youth Civic Engagement Manual",
      description: "Strategies for engaging young people in civic activities and democratic participation.",
      category: "Youth",
      type: "Manual",
      date: "2023-05-18",
      pages: 41,
      downloads: 432,
      featured: false,
      image: "/placeholder.svg?height=400&width=300",
      authors: ["Dawit Bekele", "Meron Haile"],
      language: "English/Amharic",
      isbn: "978-1-234567-93-7",
    },
    {
      id: 6,
      title: "Legal Framework for Civil Society Organizations",
      description: "Understanding the legal environment for CSOs operating in Ethiopia.",
      category: "Legal",
      type: "Framework",
      date: "2023-03-22",
      pages: 73,
      downloads: 789,
      featured: false,
      image: "/placeholder.svg?height=400&width=300",
      authors: ["Dr. Getachew Assefa", "Tigist Mekonnen"],
      language: "English/Amharic",
      isbn: "978-1-234567-94-4",
    },
  ]

  const featuredPublications = publications.filter((pub) => pub.featured)
  const regularPublications = publications.filter((pub) => !pub.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Library-Style Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="books" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="2" y="5" width="3" height="12" fill="#f97316" opacity="0.3" />
                  <rect x="6" y="3" width="3" height="14" fill="#ea580c" opacity="0.3" />
                  <rect x="10" y="6" width="3" height="11" fill="#dc2626" opacity="0.3" />
                  <rect x="14" y="4" width="3" height="13" fill="#b91c1c" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#books)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-8">
                <BookOpen className="h-4 w-4" />
                <span>ESPA Publications Library</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Knowledge <span className="text-orange-600">Repository</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Explore our comprehensive collection of research publications, educational guides, and policy documents
                designed to advance human rights and democratic governance in Ethiopia.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {publicationStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div
                      className={`w-12 h-12 ${stat.color === "text-blue-600" ? "bg-blue-100" : stat.color === "text-green-600" ? "bg-green-100" : stat.color === "text-purple-600" ? "bg-purple-100" : "bg-orange-100"} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-2">
                  <div className="flex">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Search publications by title, author, or topic..."
                        className="pl-12 border-0 text-lg h-14 focus:ring-0"
                      />
                    </div>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="democracy">Democracy</SelectItem>
                  <SelectItem value="human-rights">Human Rights</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                  <SelectItem value="gender">Gender</SelectItem>
                  <SelectItem value="youth">Youth</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="guide">Guide</SelectItem>
                  <SelectItem value="handbook">Handbook</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="framework">Framework</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="amharic">Amharic</SelectItem>
                  <SelectItem value="oromo">Oromo</SelectItem>
                  <SelectItem value="multilingual">Multilingual</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-32 h-12">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications - Bookshelf Style */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Publications</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most impactful and widely-accessed publications on key topics
              </p>
            </div>

            <div className="space-y-12">
              {featuredPublications.map((publication, index) => (
                <Card key={publication.id} className="border-0 shadow-2xl overflow-hidden">
                  <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Book Cover */}
                    <div className="lg:w-1/3 relative">
                      <div className="aspect-[3/4] relative group">
                        <Image
                          src={publication.image || "/placeholder.svg"}
                          alt={publication.title}
                          width={300}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-black font-medium">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white text-sm font-medium mb-1">ISBN: {publication.isbn}</div>
                          <div className="text-white/80 text-xs">{publication.language}</div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button variant="secondary" size="lg">
                            <BookOpen className="h-5 w-5 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-orange-100 text-orange-800">{publication.category}</Badge>
                        <Badge variant="outline">{publication.type}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {publication.downloads.toLocaleString()} downloads
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {publication.title}
                      </h3>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{publication.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="font-medium">Authors:</span>
                          <span className="ml-2">{publication.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">Published:</span>
                          <span className="ml-2">{new Date(publication.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FileText className="h-4 w-4 mr-2" />
                          <span className="font-medium">Pages:</span>
                          <span className="ml-2">{publication.pages}</span>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-orange-600 hover:bg-orange-700" size="lg">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent" size="lg">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read Online
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Publications - Library Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Library</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of educational and research materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPublications.map((publication) => (
                <Card
                  key={publication.id}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={publication.image || "/placeholder.svg"}
                      alt={publication.title}
                      width={300}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-100 text-orange-800 text-xs">{publication.type}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white text-xs font-medium">{publication.language}</div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {publication.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{new Date(publication.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors line-clamp-2">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{publication.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4 text-xs text-gray-600">
                      <div>Authors: {publication.authors.join(", ")}</div>
                      <div className="flex items-center justify-between">
                        <span>{publication.pages} pages</span>
                        <span>{publication.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                      <Download className="h-3 w-3 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive notifications about new publications and research updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-orange-200 h-12"
              />
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-orange-200 mt-4">
              Join 5,000+ readers staying informed about our latest research
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
