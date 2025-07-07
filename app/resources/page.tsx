import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Download,
  Search,
  Filter,
  BookOpen,
  Video,
  Headphones,
  ImageIcon,
  Calendar,
  Eye,
  ArrowRight,
  FileDown,
  ExternalLink,
  BarChart3,
  Users,
  TrendingUp,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Policy Documents",
      description: "Legal frameworks, policy analyses, and governance documents",
      icon: FileText,
      count: 18,
      color: "purple",
      href: "/resources/policy",
    },
    {
      title: "Publications",
      description: "Research papers, guides, and educational materials",
      icon: BookOpen,
      count: 25,
      color: "blue",
      href: "/resources/publications",
    },
    {
      title: "Reports & Analytics",
      description: "Impact reports, assessments, and data-driven insights",
      icon: BarChart3,
      count: 15,
      color: "green",
      href: "/resources/reports",
    },
  ]

  const featuredResources = [
    {
      id: 1,
      title: "ESPA Annual Impact Report 2024",
      description:
        "Comprehensive overview of our achievements, challenges, and impact across all program areas throughout 2024.",
      category: "Annual Report",
      type: "PDF",
      size: "2.4 MB",
      downloads: 1247,
      views: 5420,
      date: "2024-12-01",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Democratic Education Toolkit",
      description: "Complete guide for community educators and trainers, including lesson plans and activities.",
      category: "Education",
      type: "PDF",
      size: "5.1 MB",
      downloads: 3892,
      views: 8210,
      date: "2024-11-15",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Human Rights Advocacy Handbook",
      description: "Practical strategies and legal frameworks for effective human rights advocacy in Ethiopia.",
      category: "Human Rights",
      type: "PDF",
      size: "3.8 MB",
      downloads: 2156,
      views: 6340,
      date: "2024-10-20",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const allResources = [
    {
      id: 4,
      title: "Human Rights Situation Analysis 2024",
      description: "In-depth analysis of human rights challenges and progress in Ethiopian communities.",
      category: "Research Report",
      type: "PDF",
      size: "1.8 MB",
      downloads: 890,
      date: "2024-10-15",
      icon: FileText,
      color: "blue",
    },
    {
      id: 5,
      title: "Election Observer Training Manual",
      description: "Comprehensive guide for training election observers and monitoring democratic processes.",
      category: "Training Manual",
      type: "PDF",
      size: "3.2 MB",
      downloads: 654,
      date: "2024-09-30",
      icon: BookOpen,
      color: "green",
    },
    {
      id: 6,
      title: "Women's Rights Advocacy Series",
      description: "Educational video series covering women's rights, empowerment, and advocacy strategies.",
      category: "Video Series",
      type: "Video",
      size: "6 Videos • 45 min",
      downloads: 432,
      date: "2024-08-25",
      icon: Video,
      color: "purple",
    },
    {
      id: 7,
      title: "Democracy Dialogues Podcast",
      description: "Monthly podcast featuring discussions on democracy, human rights, and social justice.",
      category: "Podcast",
      type: "Audio",
      size: "12 Episodes",
      downloads: 1205,
      date: "2024-08-01",
      icon: Headphones,
      color: "orange",
    },
    {
      id: 8,
      title: "Human Rights Awareness Posters",
      description: "Collection of educational posters and infographics for community awareness campaigns.",
      category: "Infographics",
      type: "ZIP",
      size: "15.3 MB",
      downloads: 789,
      date: "2024-07-15",
      icon: ImageIcon,
      color: "red",
    },
    {
      id: 9,
      title: "Democratic Governance Policy Brief",
      description: "Policy recommendations for strengthening democratic institutions and governance.",
      category: "Policy Brief",
      type: "PDF",
      size: "890 KB",
      downloads: 567,
      date: "2024-06-30",
      icon: FileDown,
      color: "indigo",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Resources
                </Badge>
                <Badge className="bg-yellow-500 text-black font-medium">
                  <Award className="h-3 w-3 mr-1" />
                  58+ Resources
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Knowledge <span className="text-yellow-300">Hub</span>
              </h1>

              <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                Access our comprehensive collection of reports, guides, training materials, and multimedia content to
                support your advocacy and educational efforts.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">25K+</div>
                  <div className="text-emerald-200 text-sm">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">58+</div>
                  <div className="text-emerald-200 text-sm">Resources Available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search resources..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                <Button variant="secondary" size="icon" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="ESPA Resources and Publications"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">45K+</div>
                    <div className="text-xs text-gray-600">Total Views</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">12K+</div>
                    <div className="text-xs text-gray-600">Active Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Resource Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our organized collection of resources across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${category.color}-200 transition-colors`}
                    >
                      <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Badge variant="outline" className="text-sm">
                        {category.count} Resources
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      className="group-hover:bg-emerald-50 group-hover:border-emerald-200 bg-transparent"
                    >
                      Explore Category
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our most popular and impactful resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card
                key={resource.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 text-white font-medium">Featured</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/70 text-white">
                      {resource.type} • {resource.size}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(resource.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <Eye className="h-4 w-4" />
                    <span>{resource.views.toLocaleString()} views</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{resource.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">All Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of educational and research materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResources.map((resource) => (
              <Card key={resource.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 bg-${resource.color}-100 rounded-lg flex items-center justify-center`}>
                      <resource.icon className={`h-5 w-5 text-${resource.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>
                      {resource.type} • {resource.size}
                    </span>
                    <span>{new Date(resource.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-emerald-50 group-hover:border-emerald-200 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Something Specific?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Request specific resources or suggest new materials we should create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Request Resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Suggest Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-emerald-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Resource Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">58+</div>
                <div className="text-emerald-100">Total Resources</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">25K+</div>
                <div className="text-emerald-100">Downloads</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">45K+</div>
                <div className="text-emerald-100">Views</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">12K+</div>
                <div className="text-emerald-100">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
