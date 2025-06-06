import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Search, Filter, Share2, BookOpen, Users, Scale } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay informed about our latest activities, program updates, and impact stories from communities across
              Ethiopia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search news..."
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

      {/* Featured Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Featured Story</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Headlines</h2>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
                  alt="ESPA Democratic Education Workshop"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Breaking News</Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 18, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>ESPA Team</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ESPA Launches Comprehensive Democratic Education Initiative Across Five Regions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ethiopian Social Partnership Advocacy has officially launched its most ambitious democratic education
                  program to date, reaching over 2,000 community leaders across Addis Ababa, Oromia, Amhara, SNNP, and
                  Tigray regions. The initiative focuses on constitutional rights awareness and civic participation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Democracy
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Education
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Community
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button>
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find news that matters to you</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Program Updates</CardTitle>
                <CardDescription>Latest news from our ongoing programs and initiatives</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="bg-blue-100 text-blue-800">12 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Users className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle>Community Stories</CardTitle>
                <CardDescription>Impact stories and testimonials from communities we serve</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="bg-green-100 text-green-800">8 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Scale className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle>Policy & Advocacy</CardTitle>
                <CardDescription>Updates on policy changes and advocacy efforts</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="bg-purple-100 text-purple-800">6 Articles</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent News</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="ghost" size="sm">
                Programs
              </Button>
              <Button variant="ghost" size="sm">
                Events
              </Button>
              <Button variant="ghost" size="sm">
                Reports
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* News Article 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop"
                    alt="Women empowerment workshop"
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">Program Update</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>Dec 15, 2024</span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    Women Leadership Training Program Graduates 150 Participants
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Our latest women empowerment initiative has successfully trained 150 women leaders across rural
                    communities, focusing on advocacy skills and economic empowerment.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Women
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Training
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop"
                    alt="Election observation training"
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Training</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>Dec 12, 2024</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    Election Observer Training Prepares 200 Volunteers for Upcoming Elections
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    ESPA conducted comprehensive election observation training for 200 volunteers, enhancing democratic
                    monitoring capabilities across multiple constituencies.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Elections
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Democracy
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
                    alt="Human rights workshop"
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">Advocacy</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>Dec 10, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    Human Rights Day: ESPA Launches Awareness Campaign
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    On International Human Rights Day, ESPA launched a nationwide awareness campaign reaching over
                    10,000 citizens through digital and community outreach programs.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Human Rights
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Campaign
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop"
                    alt="Community dialogue session"
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white">Community</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>Dec 8, 2024</span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    Peaceful Coexistence Dialogue Brings Together 500 Community Leaders
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    A groundbreaking inter-community dialogue session facilitated peaceful discussions among diverse
                    ethnic and religious groups, promoting unity and understanding.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Peace
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Dialogue
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
                    alt="Partnership announcement"
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-indigo-600 text-white">Partnership</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>Dec 5, 2024</span>
                    <span>•</span>
                    <span>2 min read</span>
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    ESPA Partners with International Human Rights Organizations
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    New strategic partnerships with three international organizations will expand ESPA's capacity to
                    advocate for human rights and democratic values across Ethiopia.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Partnership
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      International
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop"
                    alt="Annual report release"
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">Report</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>Dec 1, 2024</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    ESPA Releases 2024 Annual Impact Report
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Our comprehensive annual report highlights significant achievements in democratic education, human
                    rights advocacy, and community empowerment throughout 2024.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Report
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Impact
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and never miss important updates about our work and impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
