import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, Calendar, FileText, Search, Filter } from "lucide-react"
import Image from "next/image"

export default function PublicationsPage() {
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
      image: "/images/publication-democracy-guide.jpg",
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
      image: "/images/publication-hr-handbook.jpg",
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
      image: "/images/publication-community-practices.jpg",
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
      image: "/images/publication-women-leadership.jpg",
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
      image: "/images/publication-youth-manual.jpg",
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
      image: "/images/publication-legal-framework.jpg",
    },
  ]

  const featuredPublications = publications.filter((pub) => pub.featured)
  const regularPublications = publications.filter((pub) => !pub.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive collection of research, guides, and educational materials on democracy, human
              rights, and community development in Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search publications..." className="pl-10 h-12" />
              </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Publications</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our most impactful and widely-accessed publications on key topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredPublications.map((publication) => (
              <Card
                key={publication.id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={publication.image || "/placeholder.svg"}
                    alt={publication.title}
                    width={600}
                    height={375}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-black font-medium">Featured</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {publication.category}
                    </Badge>
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight">{publication.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-sm md:text-base">{publication.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(publication.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        {publication.pages} pages
                      </span>
                    </div>
                    <span>{publication.downloads} downloads</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Publications</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of educational and research materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPublications.map((publication) => (
              <Card
                key={publication.id}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={publication.image || "/placeholder.svg"}
                    alt={publication.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {publication.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {publication.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{new Date(publication.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                    {publication.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{publication.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{publication.pages} pages</span>
                    <span>{publication.downloads} downloads</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-200"
                  >
                    <Download className="h-3 w-3 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive notifications about new publications and research updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-blue-200"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
