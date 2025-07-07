import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileText,
  Download,
  Calendar,
  AlertCircle,
  Search,
  Filter,
  ExternalLink,
  Eye,
  BookOpen,
  Scale,
  Gavel,
} from "lucide-react"
import Image from "next/image"

export default function PolicyDocumentsPage() {
  const policyCategories = [
    {
      title: "Legal Frameworks",
      count: 8,
      icon: Scale,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Policy Analyses",
      count: 6,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Implementation Guides",
      count: 4,
      icon: BookOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const policyDocuments = [
    {
      id: 1,
      title: "Ethiopian Civil Society Organizations Proclamation Analysis",
      description:
        "Comprehensive analysis of Proclamation No. 1113/2019 and its implications for civil society operations.",
      category: "Legal Analysis",
      status: "Current",
      date: "2024-01-10",
      pages: 42,
      downloads: 1850,
      priority: "high",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["CSO Law", "Legal Framework", "Civil Society"],
    },
    {
      id: 2,
      title: "Human Rights Policy Framework Guidelines",
      description: "Guidelines for implementing human rights policies at community and institutional levels.",
      category: "Implementation Guide",
      status: "Current",
      date: "2023-11-25",
      pages: 58,
      downloads: 1420,
      priority: "high",
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Human Rights", "Implementation", "Guidelines"],
    },
    {
      id: 3,
      title: "Democratic Participation Policy Recommendations",
      description: "Policy recommendations for enhancing citizen participation in democratic processes.",
      category: "Policy Brief",
      status: "Current",
      date: "2023-09-15",
      pages: 28,
      downloads: 980,
      priority: "medium",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Democracy", "Participation", "Policy Brief"],
    },
    {
      id: 4,
      title: "Gender Equality in Governance Policy Paper",
      description: "Policy framework for promoting gender equality in governance and decision-making processes.",
      category: "Policy Paper",
      status: "Current",
      date: "2023-07-20",
      pages: 35,
      downloads: 760,
      priority: "medium",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Gender", "Governance", "Equality"],
    },
    {
      id: 5,
      title: "Community Engagement Standards Document",
      description: "Standards and best practices for meaningful community engagement in development programs.",
      category: "Standards",
      status: "Current",
      date: "2023-05-30",
      pages: 46,
      downloads: 650,
      priority: "medium",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Community", "Standards", "Engagement"],
    },
    {
      id: 6,
      title: "Youth Participation Policy Framework",
      description: "Framework for integrating youth perspectives and participation in policy development.",
      category: "Framework",
      status: "Draft",
      date: "2023-04-12",
      pages: 39,
      downloads: 420,
      priority: "low",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Youth", "Participation", "Framework"],
    },
  ]

  const featuredDocuments = policyDocuments.filter((doc) => doc.featured)
  const regularDocuments = policyDocuments.filter((doc) => !doc.featured)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current":
        return "bg-green-100 text-green-800"
      case "Draft":
        return "bg-yellow-100 text-yellow-800"
      case "Archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Unique Hero with Document Showcase */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Gavel className="h-4 w-4 text-white" />
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">Policy Documents</Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Legal <span className="text-purple-400">Frameworks</span> & Policy Analysis
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Access our comprehensive collection of policy analyses, legal frameworks, and governance documents
                  that shape human rights and democratic practices in Ethiopia.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {policyCategories.map((category, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{category.count}</div>
                      <div className="text-sm text-gray-400">{category.title}</div>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <FileText className="h-5 w-5 mr-2" />
                  Browse Documents
                </Button>
              </div>

              {/* Right Content - Document Preview */}
              <div className="relative">
                <div className="relative">
                  {/* Main Document Card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <Badge className="bg-red-100 text-red-800 text-xs">High Priority</Badge>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">CSO Proclamation Analysis</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Comprehensive legal analysis of civil society regulations...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>42 pages</span>
                      <span>1,850 downloads</span>
                    </div>
                  </div>

                  {/* Background Document Cards */}
                  <div className="absolute -top-4 -left-4 bg-white/80 rounded-2xl shadow-lg p-6 transform -rotate-3 -z-10">
                    <div className="w-full h-32 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white/60 rounded-2xl shadow-lg p-6 transform rotate-6 -z-20">
                    <div className="w-full h-32 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter - Compact Design */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search policy documents..." className="pl-10 h-12 border-gray-200" />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="legal">Legal Analysis</SelectItem>
                    <SelectItem value="implementation">Implementation Guide</SelectItem>
                    <SelectItem value="brief">Policy Brief</SelectItem>
                    <SelectItem value="paper">Policy Paper</SelectItem>
                    <SelectItem value="standards">Standards</SelectItem>
                    <SelectItem value="framework">Framework</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-40 h-12">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="current">Current</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documents - Magazine Style */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Policy Documents</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential policy documents and frameworks for understanding current legal and governance landscapes
              </p>
            </div>

            <div className="space-y-12">
              {featuredDocuments.map((document, index) => (
                <Card
                  key={document.id}
                  className={`border-0 shadow-xl overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/2">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={document.image || "/placeholder.svg"}
                          alt={document.title}
                          width={600}
                          height={450}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-purple-500 text-white">Featured</Badge>
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(document.priority)}`}></div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className={getStatusColor(document.status)}>{document.status}</Badge>
                        <Badge variant="outline">{document.category}</Badge>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {document.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{document.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {document.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(document.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {document.pages} pages
                          </span>
                        </div>
                        <span>{document.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
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

      {/* All Documents - Grid Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">All Policy Documents</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete library of policy analyses, frameworks, and governance documents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularDocuments.map((document) => (
                <Card
                  key={document.id}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={document.image || "/placeholder.svg"}
                      alt={document.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge className={getStatusColor(document.status)} variant="secondary">
                        {document.status}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(document.priority)}`}></div>
                    </div>
                    {document.priority === "high" && (
                      <div className="absolute top-3 right-3">
                        <AlertCircle className="h-4 w-4 text-red-400" />
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {document.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{new Date(document.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors line-clamp-2">
                      {document.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{document.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {document.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{document.pages} pages</span>
                      <span>{document.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group-hover:bg-purple-50 group-hover:border-purple-200 bg-transparent"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Impact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Policy Impact & Advocacy</h2>
            <p className="text-lg md:text-xl text-purple-100 mb-12 leading-relaxed">
              Our policy documents have influenced legislative discussions and informed advocacy efforts across
              Ethiopia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-12">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">18</div>
                <div className="text-purple-100 text-sm">Policy Documents</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">8K+</div>
                <div className="text-purple-100 text-sm">Total Downloads</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">12</div>
                <div className="text-purple-100 text-sm">Policy Adoptions</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-purple-100 text-sm">Stakeholder Consultations</div>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <FileText className="h-4 w-4 mr-2" />
              Request Policy Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
