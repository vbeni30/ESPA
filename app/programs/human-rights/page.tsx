import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Scale, Users, Phone, Calendar, MapPin, CheckCircle, Heart, BookOpen } from "lucide-react"
import Image from "next/image"

export default function HumanRightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Human Rights Advocacy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Defending Human
                  <span className="text-red-200 block">Rights & Dignity</span>
                </h1>
                <p className="text-xl text-red-100 leading-relaxed max-w-2xl">
                  Protecting fundamental rights, providing legal support, and advocating for justice and equality for
                  all Ethiopian citizens.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-900 hover:bg-red-50 font-semibold">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Legal Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-red-600 border-white hover:bg-red-50 hover:text-red-700"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Know Your Rights
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/human-rights-advocacy.jpg"
                  alt="Human rights advocacy meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">2,500+</p>
                    <p className="text-sm text-gray-600">Cases Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Comprehensive Human Rights Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Human Rights Program provides legal support, advocacy, and education to ensure that all Ethiopian
              citizens can enjoy their fundamental rights and freedoms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Scale className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Legal Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Free legal aid and representation for individuals facing human rights violations and injustices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Policy Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Working with government and institutions to strengthen human rights laws and policies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Rights Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Community education programs to raise awareness about human rights and available protections.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Consultation</h3>
                    <p className="text-gray-600">
                      Free legal advice and consultation for individuals facing human rights violations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Court Representation</h3>
                    <p className="text-gray-600">Professional legal representation in courts for human rights cases.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Documentation & Reporting</h3>
                    <p className="text-gray-600">
                      Systematic documentation of human rights violations and advocacy for accountability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Response</h3>
                    <p className="text-gray-600">Rapid response team for urgent human rights situations and crises.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/news-human-rights-campaign.jpg"
                  alt="Human rights campaign"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Success Story</h2>
            <p className="text-xl text-gray-600">How our legal support changed lives and protected rights</p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                    <Image
                      src="/images/dr-sarah-alemayehu.jpg"
                      alt="Meron Haile"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Meron Haile</h3>
                    <p className="text-red-600 font-medium">Small Business Owner, Dire Dawa</p>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "When my business was unfairly shut down by local authorities, I thought I had no recourse. ESPA's
                    legal team not only helped me understand my rights but also represented me in court. Today, my
                    business is thriving again, and I know my rights are protected."
                  </blockquote>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Dire Dawa
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Case Resolved 2023
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Current Campaigns</h2>
            <p className="text-xl text-gray-600">Active advocacy campaigns and ongoing human rights initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-100 text-red-800">Active</Badge>
                  <Shield className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Freedom of Expression</CardTitle>
                <CardDescription>Advocating for press freedom and freedom of speech</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cases Active:</span>
                    <span className="font-medium">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Support Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Ongoing</Badge>
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Women's Rights</CardTitle>
                <CardDescription>Protecting women from discrimination and violence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Women Helped:</span>
                    <span className="font-medium">450+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Legal Wins:</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">New</Badge>
                  <Scale className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Prison Reform</CardTitle>
                <CardDescription>Improving conditions and rights of detained persons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Facilities Visited:</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Reports Filed:</span>
                    <span className="font-medium">8</span>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    View Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Need Immediate Help?</h2>
            <p className="text-xl text-red-100">
              If you or someone you know is facing a human rights violation, don't wait. Our emergency response team is
              available 24/7 to provide immediate assistance and legal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Hotline
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border-white hover:bg-red-50 hover:text-red-700"
              >
                <Heart className="h-5 w-5 mr-2" />
                Report a Violation
              </Button>
            </div>
            <div className="text-red-100">
              <p className="text-sm">Emergency Hotline: +251-11-XXX-XXXX (Available 24/7)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
