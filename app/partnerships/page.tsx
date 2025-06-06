import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Handshake, Building, Globe, Users, Heart, ArrowRight, Mail, CheckCircle, Target, Award } from "lucide-react"
import Link from "next/link"

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white overflow-hidden">
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
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Handshake className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Our Partnerships</h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building strategic alliances to amplify our impact and create lasting change across Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-orange-600 border-white hover:bg-orange-50 hover:text-orange-700"
            >
              <Building className="mr-2 h-5 w-5" />
              View Partners
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with various organizations to maximize our impact and reach more communities across
              Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NGO Partnerships */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">NGO Partnerships</CardTitle>
                <CardDescription>Collaborate with local and international NGOs to expand program reach</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Joint program implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Resource sharing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Capacity building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Advocacy coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Government Partnerships */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Government Collaboration</CardTitle>
                <CardDescription>Work with government agencies to influence policy and implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Policy advocacy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Training programs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Research collaboration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Public consultations
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Corporate Partnerships */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Corporate Social Responsibility</CardTitle>
                <CardDescription>
                  Partner with businesses committed to social impact and community development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Funding support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Employee volunteering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Skills-based partnerships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Technology support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Academic Partnerships */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Academic Institutions</CardTitle>
                <CardDescription>
                  Collaborate with universities and research institutions for evidence-based programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Research partnerships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Student internships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Curriculum development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Knowledge exchange
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* International Partnerships */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">International Organizations</CardTitle>
                <CardDescription>Connect with global networks to share best practices and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Global advocacy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Best practice sharing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Capacity building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Funding opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Partnerships */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Heart className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Community Organizations</CardTitle>
                <CardDescription>
                  Partner with grassroots organizations to ensure community-driven solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Local program delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Community mobilization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Cultural adaptation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Sustainability planning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Current Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to work alongside these organizations in our mission to promote human rights and democracy.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full lg:w-auto grid-cols-4 gap-1 mx-auto mb-8">
              <TabsTrigger value="all" className="text-sm">
                All Partners
              </TabsTrigger>
              <TabsTrigger value="local" className="text-sm">
                Local
              </TabsTrigger>
              <TabsTrigger value="national" className="text-sm">
                National
              </TabsTrigger>
              <TabsTrigger value="international" className="text-sm">
                International
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Partner 1 */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Ethiopian Human Rights Commission</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800 w-fit mx-auto">Government</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Collaborative efforts on human rights education and policy advocacy across Ethiopia.
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Target className="h-4 w-4 mr-1" />
                      <span>Policy & Advocacy</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Partner 2 */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Addis Ababa University</CardTitle>
                    <Badge className="bg-green-100 text-green-800 w-fit mx-auto">Academic</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Research collaboration and student internship programs in democratic governance studies.
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Award className="h-4 w-4 mr-1" />
                      <span>Research & Education</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Partner 3 */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-10 w-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">UN Women Ethiopia</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800 w-fit mx-auto">International</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Joint programs on women's empowerment and gender equality initiatives.
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>Women's Rights</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Partner 4 */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">Ethiopian Women Lawyers Association</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800 w-fit mx-auto">Local NGO</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Legal support services and advocacy for women's rights and gender-based violence prevention.
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Legal Support</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Partner 5 */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-10 w-10 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">Transparency International Ethiopia</CardTitle>
                    <Badge className="bg-red-100 text-red-800 w-fit mx-auto">National NGO</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Anti-corruption advocacy and transparency promotion in governance and public institutions.
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Target className="h-4 w-4 mr-1" />
                      <span>Transparency</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Partner 6 */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">Save the Children Ethiopia</CardTitle>
                    <Badge className="bg-indigo-100 text-indigo-800 w-fit mx-auto">International NGO</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Child protection programs and advocacy for children's rights and welfare.
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>Child Protection</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="local">
              <div className="text-center py-12">
                <p className="text-gray-600">Local partner organizations would be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="national">
              <div className="text-center py-12">
                <p className="text-gray-600">National partner organizations would be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="international">
              <div className="text-center py-12">
                <p className="text-gray-600">International partner organizations would be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partnership Application */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partner With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our network of partners working to promote human rights, democracy, and social justice across
              Ethiopia.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Partnership Application</CardTitle>
              <CardDescription>Tell us about your organization and how we can work together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                  <Input placeholder="Enter organization name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>NGO/Non-profit</option>
                    <option>Government Agency</option>
                    <option>Academic Institution</option>
                    <option>Corporate/Business</option>
                    <option>International Organization</option>
                    <option>Community Organization</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <Input placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title</label>
                  <Input placeholder="Job title" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="contact@organization.org" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+251 XXX XXX XXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Website</label>
                <Input placeholder="https://www.organization.org" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Mission & Focus Areas
                </label>
                <Textarea placeholder="Describe your organization's mission and main focus areas..." rows={4} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Proposed Partnership Areas</label>
                <Textarea
                  placeholder="How would you like to collaborate with ESPA? What areas of partnership interest you?"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resources You Can Contribute</label>
                <Textarea
                  placeholder="What resources, expertise, or support can your organization contribute to the partnership?"
                  rows={3}
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                Submit Partnership Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stronger Together</h2>
          <p className="text-lg text-orange-100 mb-8 leading-relaxed">
            Through strategic partnerships, we can amplify our impact and create lasting change in Ethiopian
            communities. Let's work together to build a more just and democratic society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Handshake className="mr-2 h-5 w-5" />
              Start a Partnership
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-orange-600 border-white hover:bg-orange-50 hover:text-orange-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
