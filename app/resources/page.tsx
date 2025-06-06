import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Play,
  FileDown,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Resources & Publications
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Access our comprehensive collection of reports, guides, training materials, and multimedia content to
              support your advocacy and educational efforts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button variant="secondary" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Resources</h2>
                <p className="text-lg text-gray-600">Find the materials you need to support your work</p>
              </div>
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-6 mt-6 lg:mt-0">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-12">
              {/* Featured Resources */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
                        alt="Annual Impact Report 2024"
                        width={400}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white">New Release</Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-black/70 text-white">PDF • 2.4 MB</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>December 2024</span>
                        <span>•</span>
                        <Eye className="h-4 w-4" />
                        <span>1,247 views</span>
                      </div>
                      <CardTitle className="text-xl">ESPA Annual Impact Report 2024</CardTitle>
                      <CardDescription>
                        Comprehensive overview of our achievements, challenges, and impact across all program areas
                        throughout 2024, including detailed statistics and community testimonials.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant="outline">Annual Report</Badge>
                          <Badge variant="outline">Impact</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop"
                        alt="Democratic Education Toolkit"
                        width={400}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">Popular</Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-black/70 text-white">PDF • 5.1 MB</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>November 2024</span>
                        <span>•</span>
                        <Eye className="h-4 w-4" />
                        <span>3,892 views</span>
                      </div>
                      <CardTitle className="text-xl">Democratic Education Toolkit</CardTitle>
                      <CardDescription>
                        Complete guide for community educators and trainers, including lesson plans, activities, and
                        assessment tools for democratic education programs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Badge variant="outline">Education</Badge>
                          <Badge variant="outline">Toolkit</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Resource Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Resource 1 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs">
                            Research Report
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Human Rights Situation Analysis 2024</CardTitle>
                      <CardDescription>
                        In-depth analysis of human rights challenges and progress in Ethiopian communities.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>PDF • 1.8 MB</span>
                        <span>Oct 2024</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Resource 2 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs">
                            Training Manual
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Election Observer Training Manual</CardTitle>
                      <CardDescription>
                        Comprehensive guide for training election observers and monitoring democratic processes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>PDF • 3.2 MB</span>
                        <span>Sep 2024</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Resource 3 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Video className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs">
                            Video Series
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Women's Rights Advocacy Series</CardTitle>
                      <CardDescription>
                        Educational video series covering women's rights, empowerment, and advocacy strategies.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>6 Videos • 45 min</span>
                        <span>Aug 2024</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Series
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Resource 4 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Headphones className="h-5 w-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs">
                            Podcast
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Democracy Dialogues Podcast</CardTitle>
                      <CardDescription>
                        Monthly podcast featuring discussions on democracy, human rights, and social justice.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>12 Episodes</span>
                        <span>Ongoing</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Listen Now
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Resource 5 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs">
                            Infographics
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Human Rights Awareness Posters</CardTitle>
                      <CardDescription>
                        Collection of educational posters and infographics for community awareness campaigns.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>ZIP • 15.3 MB</span>
                        <span>Jul 2024</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Pack
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Resource 6 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <FileDown className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs">
                            Policy Brief
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Democratic Governance Policy Brief</CardTitle>
                      <CardDescription>
                        Policy recommendations for strengthening democratic institutions and governance.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>PDF • 890 KB</span>
                        <span>Jun 2024</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Reports content would go here */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Research Reports</CardTitle>
                    <CardDescription>In-depth analysis and research findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Access our comprehensive research reports and analysis.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Guides content would go here */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Educational Guides</CardTitle>
                    <CardDescription>Step-by-step guides and manuals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Practical guides for advocacy and education.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="training">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Training content would go here */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Training Materials</CardTitle>
                    <CardDescription>Resources for trainers and educators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Complete training packages and materials.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="media">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Media content would go here */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Multimedia Resources</CardTitle>
                    <CardDescription>Videos, podcasts, and visual materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Engaging multimedia content for education and advocacy.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Tools content would go here */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Advocacy Tools</CardTitle>
                    <CardDescription>Templates, checklists, and practical tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Ready-to-use tools for advocacy and organizing.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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
              <Button size="lg">
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
    </div>
  )
}
