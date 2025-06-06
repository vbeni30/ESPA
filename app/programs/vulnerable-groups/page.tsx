import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Baby, Calendar, MapPin, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function VulnerableGroupsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  <Heart className="h-3 w-3 mr-1" />
                  Vulnerable Groups Support
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Protecting the
                  <span className="text-purple-200 block">Most Vulnerable</span>
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
                  Dedicated support and advocacy for women, children, elderly, persons with disabilities, and other
                  marginalized communities in Ethiopia.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 font-semibold">
                  <Users className="h-5 w-5 mr-2" />
                  Get Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Volunteer
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/women-empowerment.jpg"
                  alt="Women empowerment program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">3,200+</p>
                    <p className="text-sm text-gray-600">Lives Impacted</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Support for Vulnerable Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Vulnerable Groups Program provides targeted support, advocacy, and empowerment services to ensure that
              the most marginalized members of society have access to their rights and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-pink-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-lg">Women's Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-sm">
                  Economic empowerment, leadership training, and protection from gender-based violence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Baby className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Child Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-sm">
                  Safeguarding children's rights, education support, and protection from exploitation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Disability Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-sm">
                  Accessibility advocacy, inclusive services, and rights protection for persons with disabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Elderly Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-sm">
                  Healthcare access, social support, and dignity preservation for elderly citizens.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Key Programs</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Economic Empowerment</h3>
                    <p className="text-gray-600">
                      Microfinance, skills training, and business development support for women and marginalized groups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Protection</h3>
                    <p className="text-gray-600">
                      Legal aid and advocacy for vulnerable groups facing discrimination or rights violations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Healthcare Access</h3>
                    <p className="text-gray-600">
                      Facilitating access to healthcare services and advocating for inclusive health policies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Education Support</h3>
                    <p className="text-gray-600">
                      Scholarships, school supplies, and advocacy for inclusive education policies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/volunteers-community.jpg"
                  alt="Community support program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transformation Story</h2>
            <p className="text-xl text-gray-600">How our support changed lives and empowered communities</p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                    <Image
                      src="/images/ms-hanan-mohammed-profile.jpg"
                      alt="Fatuma Ahmed"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Fatuma Ahmed</h3>
                    <p className="text-purple-600 font-medium">Small Business Owner & Mother, Harar</p>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "As a single mother with a disability, I faced many challenges. ESPA's program provided me with
                    microfinance to start my tailoring business and advocacy support when I faced discrimination. Today,
                    I employ three other women and my children are in school."
                  </blockquote>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Harar
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Program Beneficiary 2022
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Current Initiatives</h2>
            <p className="text-xl text-gray-600">Active programs and ongoing support for vulnerable communities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-pink-100 text-pink-800">Active</Badge>
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Women's Cooperative</CardTitle>
                <CardDescription>Supporting women's economic cooperatives across regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cooperatives:</span>
                    <span className="font-medium">25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Women Involved:</span>
                    <span className="font-medium">750+</span>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Join Cooperative
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Ongoing</Badge>
                  <Baby className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Child Protection</CardTitle>
                <CardDescription>Comprehensive child protection and education support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Children Helped:</span>
                    <span className="font-medium">1,200+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Schools Supported:</span>
                    <span className="font-medium">15</span>
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
                  <Shield className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Accessibility Project</CardTitle>
                <CardDescription>Making public spaces accessible for persons with disabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Buildings Assessed:</span>
                    <span className="font-medium">50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Improvements Made:</span>
                    <span className="font-medium">20</span>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Support Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Stand With the Vulnerable</h2>
            <p className="text-xl text-purple-100">
              Every person deserves dignity, respect, and equal opportunities. Join us in creating a more inclusive
              Ethiopia where vulnerable groups are protected, empowered, and celebrated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
