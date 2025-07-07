import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Camera,
  Video,
  FileText,
  Download,
  Share2,
  ArrowRight,
  Play,
  ImageIcon,
  Newspaper,
  Mic,
  Eye,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Headphones,
  Tv,
  Monitor,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mediaStats = [
  { label: "Photos", count: "500+", icon: ImageIcon, color: "text-blue-600" },
  { label: "Videos", count: "50+", icon: Video, color: "text-purple-600" },
  { label: "Press Releases", count: "25+", icon: Newspaper, color: "text-green-600" },
  { label: "Media Coverage", count: "100+", icon: Globe, color: "text-orange-600" },
]

const featuredContent = [
  {
    id: 1,
    type: "video",
    title: "Voices of Change: ESPA's Impact Documentary",
    description:
      "An in-depth documentary showcasing how ESPA's democratic education programs are transforming communities across Ethiopia.",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    duration: "15:42",
    views: 12500,
    date: "December 2024",
    category: "Documentary",
    featured: true,
  },
  {
    id: 2,
    type: "image",
    title: "Women Leadership Training Program",
    description: "Empowering women through leadership skills and economic opportunities in rural communities.",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    views: 980,
    date: "March 2024",
    category: "Program",
    featured: true,
  },
  {
    id: 3,
    type: "audio",
    title: "Community Voices Podcast Series",
    description: "Listen to stories from community members whose lives have been transformed through ESPA's programs.",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    duration: "25:30",
    views: 1500,
    date: "November 2024",
    category: "Podcast",
    featured: false,
  },
]

const mediaChannels = [
  {
    name: "YouTube Channel",
    description: "Watch our documentaries, program highlights, and community stories",
    icon: Tv,
    subscribers: "2.5K",
    videos: "45",
    color: "bg-red-100 text-red-600",
    link: "#",
  },
  {
    name: "Photo Gallery",
    description: "Browse high-resolution images from our programs and events",
    icon: Camera,
    photos: "500+",
    albums: "25",
    color: "bg-blue-100 text-blue-600",
    link: "/gallery",
  },
  {
    name: "Podcast Series",
    description: "Listen to community voices and expert discussions",
    icon: Headphones,
    episodes: "12",
    listeners: "1.2K",
    color: "bg-purple-100 text-purple-600",
    link: "#",
  },
  {
    name: "Press Center",
    description: "Access official statements, press releases, and media kits",
    icon: Newspaper,
    releases: "25+",
    coverage: "100+",
    color: "bg-green-100 text-green-600",
    link: "/media/press",
  },
]

const recentNews = [
  {
    title: "ESPA Launches Comprehensive Democratic Education Initiative",
    excerpt: "New program reaches over 2,000 community leaders across five regions",
    date: "December 18, 2024",
    category: "Program Launch",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop",
  },
  {
    title: "Women Leadership Training Graduates 150 Participants",
    excerpt: "Successful completion of women empowerment initiative in rural communities",
    date: "December 15, 2024",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
  },
  {
    title: "International Partnership Announcement",
    excerpt: "Strategic partnerships expand ESPA's capacity for human rights advocacy",
    date: "December 5, 2024",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop",
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
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
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Monitor className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Media Center</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive resource for ESPA's visual stories, press materials, and multimedia content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              Media Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Press Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Media Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive multimedia resources documenting our impact across Ethiopian communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {mediaStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${stat.color === "text-blue-600" ? "bg-blue-100" : stat.color === "text-purple-600" ? "bg-purple-100" : stat.color === "text-green-600" ? "bg-green-100" : "bg-orange-100"}`}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Media Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaChannels.map((channel, index) => (
              <Link key={index} href={channel.link}>
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${channel.color}`}
                    >
                      <channel.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">{channel.name}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-center gap-4 mb-4 text-sm text-gray-600">
                      {channel.subscribers && (
                        <div>
                          <div className="font-semibold">{channel.subscribers}</div>
                          <div className="text-xs">Subscribers</div>
                        </div>
                      )}
                      {channel.videos && (
                        <div>
                          <div className="font-semibold">{channel.videos}</div>
                          <div className="text-xs">Videos</div>
                        </div>
                      )}
                      {channel.photos && (
                        <div>
                          <div className="font-semibold">{channel.photos}</div>
                          <div className="text-xs">Photos</div>
                        </div>
                      )}
                      {channel.albums && (
                        <div>
                          <div className="font-semibold">{channel.albums}</div>
                          <div className="text-xs">Albums</div>
                        </div>
                      )}
                      {channel.episodes && (
                        <div>
                          <div className="font-semibold">{channel.episodes}</div>
                          <div className="text-xs">Episodes</div>
                        </div>
                      )}
                      {channel.listeners && (
                        <div>
                          <div className="font-semibold">{channel.listeners}</div>
                          <div className="text-xs">Listeners</div>
                        </div>
                      )}
                      {channel.releases && (
                        <div>
                          <div className="font-semibold">{channel.releases}</div>
                          <div className="text-xs">Releases</div>
                        </div>
                      )}
                      {channel.coverage && (
                        <div>
                          <div className="font-semibold">{channel.coverage}</div>
                          <div className="text-xs">Coverage</div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      Explore
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Content</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Discover our most impactful stories and recent media coverage
                </p>
              </div>
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-4 gap-1">
                <TabsTrigger value="featured" className="text-sm">
                  Featured
                </TabsTrigger>
                <TabsTrigger value="recent" className="text-sm">
                  Recent
                </TabsTrigger>
                <TabsTrigger value="popular" className="text-sm">
                  Popular
                </TabsTrigger>
                <TabsTrigger value="coverage" className="text-sm">
                  Coverage
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="featured" className="space-y-8">
              {/* Hero Featured Video */}
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredContent[0].thumbnail || "/placeholder.svg"}
                      alt={featuredContent[0].title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors cursor-pointer group">
                        <Play className="h-12 w-12 text-gray-800 ml-1 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">Featured Documentary</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {featuredContent[0].duration}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredContent[0].views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        Trending
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{featuredContent[0].category}</Badge>
                      <span className="text-sm text-gray-500">{featuredContent[0].date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredContent[0].title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredContent[0].description}</p>
                    <div className="flex space-x-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Now
                      </Button>
                      <Button variant="outline">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Featured Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredContent.slice(1).map((item) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`${item.type === "video" ? "bg-red-600" : item.type === "audio" ? "bg-purple-600" : "bg-blue-600"} text-white`}
                        >
                          {item.category}
                        </Badge>
                      </div>

                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors">
                            <Play className="h-8 w-8 text-gray-800 ml-1" />
                          </div>
                        </div>
                      )}

                      {item.type === "audio" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors">
                            <Headphones className="h-8 w-8 text-gray-800" />
                          </div>
                        </div>
                      )}

                      {item.duration && (
                        <div className="absolute bottom-3 right-3">
                          <Badge variant="secondary" className="bg-black/70 text-white">
                            {item.duration}
                          </Badge>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                        <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                          <Eye className="h-3 w-3" />
                          {item.views}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{item.date}</span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentNews.map((news, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-600 text-white">{news.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{news.date}</span>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="text-center py-12">
                <TrendingUp className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Most Popular Content</h3>
                <p className="text-gray-600">Our most viewed and shared media content across all platforms.</p>
              </div>
            </TabsContent>

            <TabsContent value="coverage">
              <div className="text-center py-12">
                <Globe className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Media Coverage</h3>
                <p className="text-gray-600">How news outlets and media partners have covered our work and impact.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to receive our latest media updates, press releases, and exclusive content directly in your
                inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">Join 5,000+ subscribers. No spam, unsubscribe anytime.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Press & Media Inquiries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For interviews, press materials, or media partnerships, please contact our communications team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mic className="h-5 w-5 mr-2 text-blue-600" />
                  Media Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Communications Director</p>
                  <p className="text-gray-600">media@espa-ethiopia.org</p>
                  <p className="text-gray-600">+251-11-XXX-XXXX</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available Monday-Friday, 9:00 AM - 5:00 PM EAT</p>
                </div>
                <Button className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Contact Media Team
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 mr-2 text-green-600" />
                  Quick Downloads
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Media Kit (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Logo Package (ZIP)
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Newspaper className="h-4 w-4 mr-2" />
                  Fact Sheet (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Award className="h-4 w-4 mr-2" />
                  Annual Report (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Our Story</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Help us amplify the voices of change by sharing our content and spreading awareness about our mission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Share2 className="mr-2 h-5 w-5" />
                Partner With Us
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Camera className="mr-2 h-5 w-5" />
                Explore Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
