import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Download, Calendar, TrendingUp, Search, Filter, Eye, FileText, Target, Award } from "lucide-react"
import Image from "next/image"

export default function ReportsPage() {
  const reportMetrics = [
    { label: "Total Reports", value: "25+", icon: FileText, trend: "+3 this year" },
    { label: "Downloads", value: "15K+", icon: Download, trend: "+25% this month" },
    { label: "Views", value: "35K+", icon: Eye, trend: "+40% this quarter" },
    { label: "Impact Score", value: "9.2/10", icon: Award, trend: "Excellent rating" },
  ]

  const reports = [
    {
      id: 1,
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of ESPA's achievements, programs, and community impact throughout 2023.",
      category: "Annual Report",
      year: "2023",
      date: "2024-02-01",
      pages: 84,
      downloads: 2150,
      views: 5420,
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["50+ Programs Implemented", "15,000+ People Reached", "25 Partner Organizations"],
      fileSize: "12.5 MB",
    },
    {
      id: 2,
      title: "Democratic Education Program Evaluation",
      description: "In-depth analysis of the effectiveness and reach of our democratic education initiatives.",
      category: "Program Evaluation",
      year: "2023",
      date: "2023-12-15",
      pages: 62,
      downloads: 1340,
      views: 3210,
      featured: true,
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["85% Improvement Rate", "200+ Workshops Conducted", "12 Regions Covered"],
      fileSize: "8.7 MB",
    },
    {
      id: 3,
      title: "Human Rights Situation Assessment",
      description: "Regional assessment of human rights conditions and advocacy needs across Ethiopian communities.",
      category: "Assessment",
      year: "2023",
      date: "2023-10-20",
      pages: 95,
      downloads: 1890,
      views: 4560,
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["500+ Cases Documented", "15 Regional Assessments", "Policy Recommendations"],
      fileSize: "15.2 MB",
    },
    {
      id: 4,
      title: "Community Engagement Metrics Q3 2023",
      description: "Quarterly analysis of community participation and engagement across all ESPA programs.",
      category: "Quarterly Report",
      year: "2023",
      date: "2023-09-30",
      pages: 38,
      downloads: 890,
      views: 2140,
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["75% Engagement Rate", "1,200+ Active Participants", "8 Community Programs"],
      fileSize: "5.4 MB",
    },
    {
      id: 5,
      title: "Women's Leadership Development Study",
      description: "Research findings on women's participation in leadership roles within Ethiopian communities.",
      category: "Research Study",
      year: "2023",
      date: "2023-08-10",
      pages: 71,
      downloads: 1120,
      views: 2890,
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["300+ Women Surveyed", "60% Leadership Increase", "10 Success Stories"],
      fileSize: "9.8 MB",
    },
    {
      id: 6,
      title: "Partnership Impact Analysis 2022-2023",
      description: "Evaluation of collaborative efforts and their effectiveness in achieving shared objectives.",
      category: "Impact Analysis",
      year: "2023",
      date: "2023-06-25",
      pages: 54,
      downloads: 760,
      views: 1980,
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["25 Active Partnerships", "$2M+ Joint Funding", "Collaborative Impact"],
      fileSize: "7.1 MB",
    },
  ]

  const featuredReports = reports.filter((report) => report.featured)
  const regularReports = reports.filter((report) => !report.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Dashboard-Style Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <path d="M0,20 Q50,10 100,20 L100,0 L0,0 Z" fill="#3b82f6" fillOpacity="0.05" />
            <path d="M0,80 Q50,70 100,80 L100,100 L0,100 Z" fill="#6366f1" fillOpacity="0.05" />
          </svg>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8">
                <BarChart3 className="h-4 w-4" />
                <span>Data-Driven Insights</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Reports & <span className="text-blue-600">Analytics</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Detailed reports and data-driven insights on our programs, impact assessments, and organizational
                performance across all initiatives.
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {reportMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${index === 0 ? "bg-blue-100" : index === 1 ? "bg-green-100" : index === 2 ? "bg-purple-100" : "bg-orange-100"} rounded-xl flex items-center justify-center`}
                      >
                        <metric.icon
                          className={`h-6 w-6 ${index === 0 ? "text-blue-600" : index === 1 ? "text-green-600" : index === 2 ? "text-purple-600" : "text-orange-600"}`}
                        />
                      </div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                    <div className="text-xs text-green-600 font-medium">{metric.trend}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search reports by title, category, or year..." className="pl-10 h-12" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full md:w-48 h-12">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="annual">Annual Report</SelectItem>
                        <SelectItem value="evaluation">Program Evaluation</SelectItem>
                        <SelectItem value="assessment">Assessment</SelectItem>
                        <SelectItem value="quarterly">Quarterly Report</SelectItem>
                        <SelectItem value="research">Research Study</SelectItem>
                        <SelectItem value="impact">Impact Analysis</SelectItem>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reports - Infographic Style */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Reports</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most comprehensive and impactful reports showcasing organizational achievements and insights
              </p>
            </div>

            <div className="space-y-12">
              {featuredReports.map((report, index) => (
                <Card key={report.id} className="border-0 shadow-2xl overflow-hidden">
                  <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Visual Section */}
                    <div className="lg:w-2/5 relative">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={report.image || "/placeholder.svg"}
                          alt={report.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-600/80"></div>

                        {/* Overlay Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                          <div>
                            <Badge className="bg-white/20 text-white border-white/30 mb-4">Featured Report</Badge>
                            <div className="text-3xl font-bold mb-2">{report.year}</div>
                            <div className="text-sm opacity-90">{report.category}</div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Downloads</span>
                              <span className="font-bold">{report.downloads.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Views</span>
                              <span className="font-bold">{report.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Pages</span>
                              <span className="font-bold">{report.pages}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <Badge className="bg-blue-100 text-blue-800">{report.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(report.date).toLocaleDateString()}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {report.title}
                      </h3>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{report.description}</p>

                      {/* Key Highlights */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <Target className="h-4 w-4 mr-2" />
                          Key Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {report.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="bg-blue-50 rounded-lg p-4 text-center">
                              <div className="text-sm font-medium text-blue-900">{highlight}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="lg">
                          <Download className="h-4 w-4 mr-2" />
                          Download ({report.fileSize})
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent" size="lg">
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

      {/* All Reports - Data Table Style */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Report Archive</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive collection of organizational reports and analytical documents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularReports.map((report) => (
                <Card
                  key={report.id}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={report.image || "/placeholder.svg"}
                      alt={report.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-100 text-blue-800 text-xs">{report.year}</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {report.views.toLocaleString()}
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white text-xs font-medium">{report.fileSize}</div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {report.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{new Date(report.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {report.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{report.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{report.pages} pages</span>
                        <span>{report.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {report.highlights.slice(0, 2).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight.split(" ")[0]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Eye className="h-3 w-3 mr-1" />
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

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Report Impact & Reach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100 text-sm">Reports Published</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">15K+</div>
                <div className="text-blue-100 text-sm">Total Downloads</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">35K+</div>
                <div className="text-blue-100 text-sm">Report Views</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100 text-sm">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
