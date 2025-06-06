import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Download, Calendar, TrendingUp, Search, Filter, Eye } from "lucide-react"
import Image from "next/image"

export default function ReportsPage() {
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
      image: "/images/report-annual-2023.jpg",
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
      image: "/images/report-democracy-eval.jpg",
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
      image: "/images/report-hr-assessment.jpg",
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
      image: "/images/report-community-q3.jpg",
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
      image: "/images/report-women-leadership.jpg",
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
      image: "/images/report-partnership-impact.jpg",
    },
  ]

  const featuredReports = reports.filter((report) => report.featured)
  const regularReports = reports.filter((report) => !report.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Reports & Analytics</h1>
            <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              Detailed reports and data-driven insights on our programs, impact assessments, and organizational
              performance across all initiatives.
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
                <Input placeholder="Search reports..." className="pl-10 h-12" />
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
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Reports</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our most comprehensive and impactful reports showcasing organizational achievements and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredReports.map((report) => (
              <Card
                key={report.id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    width={600}
                    height={375}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white font-medium">Featured</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {report.category}
                    </Badge>
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight">{report.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-sm md:text-base">{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(report.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      {report.pages} pages
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {report.downloads} downloads
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {report.views} views
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Reports</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete archive of our organizational reports and analytical documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularReports.map((report) => (
              <Card
                key={report.id}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {report.year}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                      <TrendingUp className="h-3 w-3 inline mr-1" />
                      {report.views}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {report.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors line-clamp-2">
                    {report.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{report.pages} pages</span>
                    <span>{report.downloads} downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group-hover:bg-green-50 group-hover:border-green-200"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-green-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">Report Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-green-100">Reports Published</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15K+</div>
                <div className="text-green-100">Total Downloads</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">35K+</div>
                <div className="text-green-100">Report Views</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
