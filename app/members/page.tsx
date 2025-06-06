import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Users, Heart, ArrowRight, Mail, Award, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
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
              <UserPlus className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Join Our Community</h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Become a member of ESPA and help us build a more democratic and just Ethiopia together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <UserPlus className="mr-2 h-5 w-5" />
              Become a Member
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700"
            >
              <Users className="mr-2 h-5 w-5" />
              Invite a Friend
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Join ESPA?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a member, you'll be part of a community dedicated to promoting human rights, democracy, and social
              justice across Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Exclusive Access</CardTitle>
                <CardDescription>
                  Get priority access to workshops, training sessions, and special events
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Community Network</CardTitle>
                <CardDescription>Connect with like-minded individuals and build lasting relationships</CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Recognition</CardTitle>
                <CardDescription>
                  Receive certificates and recognition for your contributions to the community
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Leadership Opportunities</CardTitle>
                <CardDescription>Take on leadership roles and help shape our programs and initiatives</CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Make an Impact</CardTitle>
                <CardDescription>Directly contribute to positive change in Ethiopian communities</CardDescription>
              </CardHeader>
            </Card>

            {/* Benefit 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Regular Updates</CardTitle>
                <CardDescription>Stay informed with monthly newsletters and impact reports</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Types & Application */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <Tabs defaultValue="types" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Membership Options</h2>
              <TabsList className="grid w-full lg:w-auto grid-cols-2 gap-1 mx-auto">
                <TabsTrigger value="types" className="text-sm">
                  Membership Types
                </TabsTrigger>
                <TabsTrigger value="apply" className="text-sm">
                  Apply Now
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="types" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* General Member */}
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <Badge className="bg-blue-100 text-blue-800 w-fit mx-auto mb-4">Most Popular</Badge>
                    <CardTitle className="text-2xl">General Member</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-900">Free</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Access to public events</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Monthly newsletter</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Community forum access</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Volunteer opportunities</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6">Join as General Member</Button>
                  </CardContent>
                </Card>

                {/* Active Member */}
                <Card className="border-2 border-purple-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white">Recommended</Badge>
                  </div>
                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-2xl">Active Member</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-900">$25/year</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">All General Member benefits</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Priority event registration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Exclusive workshops</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Annual impact report</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Member directory access</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-6">Become Active Member</Button>
                  </CardContent>
                </Card>

                {/* Patron Member */}
                <Card className="border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <Badge className="bg-yellow-100 text-yellow-800 w-fit mx-auto mb-4">Premium</Badge>
                    <CardTitle className="text-2xl">Patron Member</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-900">$100/year</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">All Active Member benefits</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">VIP event access</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Direct leadership consultation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Recognition in publications</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-sm">Advisory board invitation</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 mt-6">Become Patron Member</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="apply" className="space-y-8">
              <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Membership Application</CardTitle>
                    <CardDescription>
                      Fill out the form below to join our community of advocates for human rights and democracy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <Input placeholder="City, Region" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Membership Type</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>General Member (Free)</option>
                        <option>Active Member ($25/year)</option>
                        <option>Patron Member ($100/year)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to join ESPA?
                      </label>
                      <Textarea placeholder="Tell us about your interest in human rights and democracy..." rows={4} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Social Media</option>
                        <option>Friend/Family</option>
                        <option>Community Event</option>
                        <option>Website</option>
                        <option>News/Media</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our community members about their experience with ESPA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/almaz-tadesse.jpg"
                    alt="Almaz Tadesse"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Almaz Tadesse</h4>
                    <p className="text-sm text-gray-600">Active Member</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Being a member of ESPA has opened my eyes to the power of community advocacy. The training sessions
                  have equipped me with knowledge I never had before."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/mr-dawit-tekle.jpg"
                    alt="Dawit Tekle"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Dawit Tekle</h4>
                    <p className="text-sm text-gray-600">Patron Member</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The network I've built through ESPA has been invaluable. I've connected with passionate individuals
                  who share my commitment to social justice."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/dr-sarah-alemayehu.jpg"
                    alt="Sarah Alemayehu"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Alemayehu</h4>
                    <p className="text-sm text-gray-600">General Member</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "ESPA has given me a platform to contribute meaningfully to my community. The impact we're making
                  together is truly inspiring."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Join thousands of Ethiopians working together to build a more democratic, just, and equitable society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <UserPlus className="mr-2 h-5 w-5" />
              Join Now
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700"
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
