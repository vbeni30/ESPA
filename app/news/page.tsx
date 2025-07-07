"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Share2,
  BookOpen,
  Users,
  Scale,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  TrendingUp,
  Star,
  Download,
  FileText,
  Newspaper,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const newsArticles = [
  {
    id: 1,
    title: "ESPA Launches Comprehensive Democratic Education Initiative Across Five Regions",
    excerpt:
      "Ethiopian Social Partnership Advocacy has officially launched its most ambitious democratic education program to date, reaching over 2,000 community leaders across multiple regions.",
    content:
      "Ethiopian Social Partnership Advocacy has officially launched its most ambitious democratic education program to date, reaching over 2,000 community leaders across Addis Ababa, Oromia, Amhara, SNNP, and Tigray regions. The initiative focuses on constitutional rights awareness and civic participation, providing comprehensive training modules that cover democratic principles, human rights, and community engagement strategies.",
    category: "programs",
    date: "December 18, 2024",
    author: "ESPA Communications Team",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    tags: ["democracy", "education", "community", "constitutional-rights"],
    featured: true,
    views: 2340,
    likes: 156,
    comments: 23,
    bookmarks: 89,
    trending: true,
  },
  {
    id: 2,
    title: "Women Leadership Training Program Graduates 150 Participants",
    excerpt:
      "Our latest women empowerment initiative has successfully trained 150 women leaders across rural communities, focusing on advocacy skills and economic empowerment.",
    content:
      "ESPA's Women Leadership Training Program has achieved a significant milestone with the graduation of 150 women leaders from rural communities across Ethiopia. The comprehensive program focused on developing advocacy skills, economic empowerment strategies, and leadership capabilities. Participants received training in public speaking, community organizing, financial literacy, and small business development.",
    category: "programs",
    date: "December 15, 2024",
    author: "Women's Empowerment Division",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    tags: ["women", "leadership", "empowerment", "training"],
    featured: false,
    views: 1890,
    likes: 134,
    comments: 18,
    bookmarks: 67,
    trending: false,
  },
  {
    id: 3,
    title: "Election Observer Training Prepares 200 Volunteers for Upcoming Elections",
    excerpt:
      "ESPA conducted comprehensive election observation training for 200 volunteers, enhancing democratic monitoring capabilities across multiple constituencies.",
    content:
      "In preparation for upcoming elections, ESPA has successfully trained 200 volunteers in election observation techniques and democratic monitoring. The training covered election laws, observation protocols, conflict resolution, and reporting mechanisms. Volunteers will be deployed across various constituencies to ensure transparent and fair electoral processes.",
    category: "democracy",
    date: "December 12, 2024",
    author: "Election Monitoring Unit",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    tags: ["elections", "democracy", "monitoring", "volunteers"],
    featured: false,
    views: 1567,
    likes: 98,
    comments: 15,
    bookmarks: 52,
    trending: true,
  },
  {
    id: 4,
    title: "Human Rights Day: ESPA Launches Awareness Campaign",
    excerpt:
      "On International Human Rights Day, ESPA launched a nationwide awareness campaign reaching over 10,000 citizens through digital and community outreach programs.",
    content:
      "To commemorate International Human Rights Day, ESPA launched a comprehensive awareness campaign that reached over 10,000 citizens across Ethiopia. The campaign utilized digital platforms, community workshops, and educational materials to promote understanding of fundamental human rights and freedoms. The initiative included interactive sessions, educational videos, and distribution of informational materials in local languages.",
    category: "human-rights",
    date: "December 10, 2024",
    author: "Human Rights Division",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    tags: ["human-rights", "campaign", "awareness", "international"],
    featured: true,
    views: 2890,
    likes: 201,
    comments: 34,
    bookmarks: 123,
    trending: true,
  },
  {
    id: 5,
    title: "Peaceful Coexistence Dialogue Brings Together 500 Community Leaders",
    excerpt:
      "A groundbreaking inter-community dialogue session facilitated peaceful discussions among diverse ethnic and religious groups, promoting unity and understanding.",
    content:
      "ESPA facilitated a historic inter-community dialogue session that brought together 500 community leaders from diverse ethnic and religious backgrounds. The dialogue focused on promoting peaceful coexistence, addressing community tensions, and building bridges between different groups. The session resulted in the establishment of five community peace committees and a framework for ongoing dialogue.",
    category: "community",
    date: "December 8, 2024",
    author: "Community Relations Team",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    tags: ["peace", "dialogue", "community", "unity"],
    featured: false,
    views: 1234,
    likes: 87,
    comments: 12,
    bookmarks: 45,
    trending: false,
  },
  {
    id: 6,
    title: "ESPA Partners with International Human Rights Organizations",
    excerpt:
      "New strategic partnerships with three international organizations will expand ESPA's capacity to advocate for human rights and democratic values across Ethiopia.",
    content:
      "ESPA has announced strategic partnerships with three prominent international human rights organizations to strengthen advocacy efforts and expand program reach. These partnerships will provide additional resources, technical expertise, and international support for ESPA's mission to promote democracy and human rights in Ethiopia.",
    category: "partnerships",
    date: "December 5, 2024",
    author: "Partnership Development Team",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tags: ["partnerships", "international", "collaboration", "expansion"],
    featured: false,
    views: 987,
    likes: 65,
    comments: 8,
    bookmarks: 32,
    trending: false,
  },
  {
    id: 7,
    title: "ESPA Releases 2024 Annual Impact Report",
    excerpt:
      "Our comprehensive annual report highlights significant achievements in democratic education, human rights advocacy, and community empowerment throughout 2024.",
    content:
      "ESPA's 2024 Annual Impact Report showcases remarkable achievements across all program areas. The report details the organization's work in democratic education, human rights advocacy, women's empowerment, and community development. Key highlights include training over 5,000 community leaders, conducting 150 workshops, and reaching more than 50,000 citizens through various programs.",
    category: "reports",
    date: "December 1, 2024",
    author: "Research and Evaluation Team",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    tags: ["annual-report", "impact", "achievements", "evaluation"],
    featured: false,
    views: 1456,
    likes: 112,
    comments: 19,
    bookmarks: 78,
    trending: false,
  },
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [selectedArticle, setSelectedArticle] = useState<(typeof newsArticles)[0] | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "liked":
        return b.likes - a.likes
      case "commented":
        return b.comments - a.comments
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      default: // latest
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      programs: "bg-blue-600",
      democracy: "bg-green-600",
      "human-rights": "bg-purple-600",
      community: "bg-orange-600",
      partnerships: "bg-indigo-600",
      reports: "bg-red-600",
    }
    return colors[category as keyof typeof colors] || "bg-gray-600"
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      programs: BookOpen,
      democracy: Scale,
      "human-rights": Users,
      community: Heart,
      partnerships: Users,
      reports: BookOpen,
    }
    const Icon = icons[category as keyof typeof icons] || BookOpen
    return <Icon className="h-4 w-4" />
  }

  // Calculate statistics
  const totalArticles = newsArticles.length
  const totalViews = newsArticles.reduce((sum, article) => sum + article.views, 0)
  const trendingCount = newsArticles.filter((article) => article.trending).length
  const totalComments = newsArticles.reduce((sum, article) => sum + article.comments, 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop"
            alt="ESPA news and updates showcasing community impact and organizational achievements"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-indigo-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-6 py-3">
                  <Newspaper className="h-4 w-4 mr-2" />
                  Latest News & Updates
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  News &<span className="text-blue-300 block">Updates</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Stay informed about our latest activities, program updates, and impact stories from communities across
                  Ethiopia as we work together to promote democracy and human rights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <BookOpen className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Read Latest News
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
                  alt="ESPA team members working on community programs and initiatives"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{totalArticles}</p>
                    <p className="text-sm text-gray-600">Articles</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{trendingCount}</p>
                    <p className="text-sm text-gray-600">Trending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Impact Statistics */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">News Impact</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Information Reach & Engagement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our news and updates keep communities informed and engaged with our mission and impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Total Articles",
                value: totalArticles.toString(),
                description: "News stories and updates published",
                icon: BookOpen,
                color: "blue",
              },
              {
                title: "Total Readership",
                value: totalViews.toLocaleString(),
                description: "People reached through our content",
                icon: Eye,
                color: "green",
              },
              {
                title: "Community Engagement",
                value: totalComments.toString(),
                description: "Comments and discussions generated",
                icon: MessageCircle,
                color: "purple",
              },
              {
                title: "Trending Stories",
                value: trendingCount.toString(),
                description: "Popular articles gaining attention",
                icon: TrendingUp,
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

      {/* News Controls */}
      <section className="py-8 bg-gray-50 border-b sticky top-16 z-40">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="flex-1">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 gap-1">
                <TabsTrigger value="all" className="text-xs">
                  All ({newsArticles.length})
                </TabsTrigger>
                <TabsTrigger value="programs" className="text-xs">
                  Programs ({newsArticles.filter((a) => a.category === "programs").length})
                </TabsTrigger>
                <TabsTrigger value="democracy" className="text-xs">
                  Democracy ({newsArticles.filter((a) => a.category === "democracy").length})
                </TabsTrigger>
                <TabsTrigger value="human-rights" className="text-xs">
                  Rights ({newsArticles.filter((a) => a.category === "human-rights").length})
                </TabsTrigger>
                <TabsTrigger value="community" className="text-xs">
                  Community ({newsArticles.filter((a) => a.category === "community").length})
                </TabsTrigger>
                <TabsTrigger value="partnerships" className="text-xs">
                  Partners ({newsArticles.filter((a) => a.category === "partnerships").length})
                </TabsTrigger>
                <TabsTrigger value="reports" className="text-xs">
                  Reports ({newsArticles.filter((a) => a.category === "reports").length})
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search news..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Viewed</SelectItem>
                  <SelectItem value="liked">Most Liked</SelectItem>
                  <SelectItem value="commented">Most Discussed</SelectItem>
                </SelectContent>
              </Select>
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
                      <SelectItem value="quarter">This quarter</SelectItem>
                      <SelectItem value="year">This year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Author</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All authors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All authors</SelectItem>
                      <SelectItem value="communications">Communications Team</SelectItem>
                      <SelectItem value="programs">Program Teams</SelectItem>
                      <SelectItem value="research">Research Team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Content Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="featured">Featured only</SelectItem>
                      <SelectItem value="trending">Trending only</SelectItem>
                      <SelectItem value="recent">Recent only</SelectItem>
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

      {/* News Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* Featured Story */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
            </div>

            {newsArticles
              .filter((article) => article.featured)
              .slice(0, 1)
              .map((article) => (
                <Card key={article.id} className="border-0 shadow-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-red-600 text-white">Breaking News</Badge>
                        {article.trending && (
                          <Badge className="bg-yellow-500 text-black">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white text-sm">
                        <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                          <Eye className="h-3 w-3" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                          <Heart className="h-3 w-3" />
                          {article.likes}
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                          <MessageCircle className="h-3 w-3" />
                          {article.comments}
                        </div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button onClick={() => setSelectedArticle(article)}>
                                Read Full Story
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing {sortedArticles.length} {sortedArticles.length === 1 ? "article" : "articles"}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>
                Total engagement: {sortedArticles.reduce((sum, article) => sum + article.likes + article.comments, 0)}
              </span>
            </div>
          </div>

          {/* Recent News Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles
              .filter((article) => !article.featured || sortedArticles.indexOf(article) > 0)
              .map((article) => (
                <Card
                  key={article.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={`${getCategoryColor(article.category)} text-white`}>
                          {getCategoryIcon(article.category)}
                          <span className="ml-1 capitalize">{article.category.replace("-", " ")}</span>
                        </Badge>
                        {article.trending && (
                          <Badge className="bg-yellow-500 text-black">
                            <TrendingUp className="h-3 w-3" />
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </div>
                          <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                            <Heart className="h-3 w-3" />
                            {article.likes}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-white hover:bg-white/20">
                            <Bookmark className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-white hover:bg-white/20">
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mb-4">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {article.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{article.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-700 p-0"
                            onClick={() => setSelectedArticle(article)}
                          >
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Load More Button */}
          {sortedArticles.length > 0 && (
            <div className="text-center pt-12">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* No Results */}
          {sortedArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                {searchQuery
                  ? `No results found for "${searchQuery}". Try adjusting your search terms.`
                  : "No articles available in this category yet."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Article Details Modal */}
      {selectedArticle && (
        <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={selectedArticle.image || "/placeholder.svg"}
                  alt={selectedArticle.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${getCategoryColor(selectedArticle.category)} text-white`}>
                    {getCategoryIcon(selectedArticle.category)}
                    <span className="ml-1 capitalize">{selectedArticle.category.replace("-", " ")}</span>
                  </Badge>
                  {selectedArticle.trending && (
                    <Badge className="bg-yellow-500 text-black">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
              </div>
              <DialogTitle className="text-2xl">{selectedArticle.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{selectedArticle.author}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {selectedArticle.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {selectedArticle.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {selectedArticle.comments}
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">{selectedArticle.content}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Like ({selectedArticle.likes})
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Comment ({selectedArticle.comments})
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Newsletter Subscription */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members staying informed through ESPA news and updates"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">Stay Informed with Our Newsletter</h2>
            <p className="text-xl text-blue-100">
              Subscribe to receive the latest news, program updates, and impact stories directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg h-auto group"
              >
                <Download className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200">
              Join over 5,000 subscribers who stay updated on our mission and impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
