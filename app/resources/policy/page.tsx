import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Calendar, AlertCircle, Search, Filter, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PolicyDocumentsPage() {
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
      image: "/images/policy-cso-proclamation.jpg",
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
      image: "/images/policy-hr-framework.jpg",
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
      image: "/images/policy-democratic-participation.jpg",
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
      image: "/images/policy-gender-governance.jpg",
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
      image: "/images/policy-community-standards.jpg",
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
      image: "/images/policy-youth-participation.jpg",
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
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Policy Documents</h1>
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive collection of policy analyses, frameworks, and recommendations for advancing
              human rights and democratic governance in Ethiopia.
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
                <Input placeholder="Search policy documents..." className="pl-10 h-12" />
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
      </section>

      {/* Featured Documents */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Policy Documents</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Essential policy documents and frameworks for understanding current legal and governance landscapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredDocuments.map((document) => (
              <Card
                key={document.id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={document.image || "/placeholder.svg"}
                    alt={document.title}
                    width={600}
                    height={375}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-purple-500 text-white font-medium">Featured</Badge>
                    <div
                      className={`w-3 h-3 rounded-full ${getPriorityColor(document.priority)}`}
                      title={`${document.priority} priority`}
                    ></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{document.category}</Badge>
                      <Badge className={getStatusColor(document.status)}>{document.status}</Badge>
                    </div>
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight">{document.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-sm md:text-base">{document.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                    <span>{document.downloads} downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Policy Documents */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Policy Documents</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete library of policy analyses, frameworks, and governance documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularDocuments.map((document) => (
              <Card
                key={document.id}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
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
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{document.pages} pages</span>
                    <span>{document.downloads} downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group-hover:bg-purple-50 group-hover:border-purple-200"
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
      </section>

      {/* Policy Impact Section */}
      <section className="py-16 md:py-24 bg-purple-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Policy Impact & Advocacy</h2>
            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
              Our policy documents have influenced legislative discussions and informed advocacy efforts across
              Ethiopia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">18</div>
                <div className="text-purple-100">Policy Documents</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">8K+</div>
                <div className="text-purple-100">Total Downloads</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">12</div>
                <div className="text-purple-100">Policy Adoptions</div>
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
