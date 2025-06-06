import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Calendar, MapPin, CheckCircle, Heart, Phone } from "lucide-react"
import Image from "next/image"

export default function DemocracyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Scale className="h-3 w-3 mr-1" />
                  Democratic Education Program
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Building Democratic
                  <span className="text-blue-200 block">Foundations</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Empowering Ethiopian communities with knowledge, skills, and tools to participate meaningfully in
                  democratic processes and governance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                  <Users className="h-5 w-5 mr-2" />
                  Join Our Workshops
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Download Resources
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/democratic-education.jpg"
                  alt="Democratic education workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5,000+</p>
                    <p className="text-sm text-gray-600">Citizens Trained</p>
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
              Strengthening Democratic Participation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Democratic Education Program focuses on building civic knowledge, promoting democratic values, and
              enhancing citizen participation in governance processes across Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Civic Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Comprehensive training on democratic principles, constitutional rights, and civic responsibilities for
                  all citizens.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Community Dialogues</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Facilitating open discussions between citizens and local leaders to strengthen democratic engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Scale className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Electoral Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Training on electoral processes, voting rights, and the importance of free and fair elections.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Program Components</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Workshops</h3>
                    <p className="text-gray-600">
                      Interactive sessions covering democratic principles, governance structures, and citizen rights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Leadership Training</h3>
                    <p className="text-gray-600">
                      Developing local leaders with skills in democratic governance and community mobilization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Educational Materials</h3>
                    <p className="text-gray-600">
                      Developing and distributing resources in local languages to enhance accessibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Youth Engagement</h3>
                    <p className="text-gray-600">
                      Special programs targeting young people to foster democratic values from an early age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/community-workshop.jpg"
                  alt="Community workshop in progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Impact Story</h2>
            <p className="text-xl text-gray-600">Real stories of democratic transformation in Ethiopian communities</p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                    <Image
                      src="/images/almaz-tadesse.jpg"
                      alt="Almaz Tadesse"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Almaz Tadesse</h3>
                    <p className="text-blue-600 font-medium">Community Leader, Addis Ababa</p>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "Before joining ESPA's democratic education program, I felt disconnected from local governance. Now,
                    I actively participate in community meetings, advocate for women's representation, and have even
                    been elected to our local council. The training gave me the confidence and knowledge to make a real
                    difference."
                  </blockquote>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Addis Ababa
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Program Graduate 2023
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
            <p className="text-xl text-gray-600">
              Ongoing projects and upcoming events in our democratic education program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">Ongoing</Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Regional Workshops</CardTitle>
                <CardDescription>Monthly civic education workshops across 5 regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Next Session:</span>
                    <span className="font-medium">March 15, 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Bahir Dar</span>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">New</Badge>
                  <BookOpen className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Digital Platform</CardTitle>
                <CardDescription>Online civic education resources and courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Launch Date:</span>
                    <span className="font-medium">April 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">Amharic, Oromo</span>
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
                  <Badge className="bg-purple-100 text-purple-800">Planning</Badge>
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl">Youth Parliament</CardTitle>
                <CardDescription>Mock parliament sessions for young citizens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Target Age:</span>
                    <span className="font-medium">16-25 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">3 months</span>
                  </div>
                  <Button className="w-full mt-4" size="sm" variant="outline">
                    Express Interest
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join the Democratic Movement</h2>
            <p className="text-xl text-blue-100">
              Be part of building a stronger democratic Ethiopia. Whether you're an individual, organization, or
              community leader, there's a place for you in our program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                <Heart className="h-5 w-5 mr-2" />
                Volunteer With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Program Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
