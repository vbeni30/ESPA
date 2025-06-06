import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Scale, Heart, Globe, Target, ArrowRight, CheckCircle, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-blue-600 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Our Programs</h1>
            <p className="mt-6 text-lg text-blue-100">
              Comprehensive initiatives designed to promote democracy, protect human rights, and support marginalized
              communities across Ethiopia through advocacy, education, and direct service.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Areas</h2>
            <p className="text-lg text-gray-600">
              Our programs are built on three core principles: Advocacy, Education, and Service
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Democratic Education</CardTitle>
                <CardDescription>Building democratic understanding and civic engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive educational programs designed to ensure understanding of democratic thoughts and
                  concepts for Ethiopian society.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Workshops on democratic principles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Civic education seminars</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Think tank groups formation</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Peaceful Coexistence</CardTitle>
                <CardDescription>Promoting harmony among diverse communities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Programs focused on educating citizens to create a culture of peaceful coexistence among different
                  people groups.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Community dialogue facilitation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Conflict resolution training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Inter-group collaboration projects</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Human Rights Advocacy</CardTitle>
                <CardDescription>Protecting and promoting fundamental rights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive advocacy programs working to confirm and protect the human rights of all citizens.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Legal support services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rights awareness campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Policy advocacy initiatives</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Disaster Response</CardTitle>
                <CardDescription>Emergency support and community resilience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Providing support and working with stakeholders concerning natural and man-made disasters.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Emergency relief coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Community resilience building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recovery program implementation</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Election Observation</CardTitle>
                <CardDescription>Ensuring democratic electoral processes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Diligently observing national elections and creating awareness about the essence of democratic
                  participation.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Election monitoring programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Voter education campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Electoral integrity advocacy</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Vulnerable Groups Support</CardTitle>
                <CardDescription>Empowering marginalized communities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Working to improve conditions for women, disabled individuals, and other marginalized groups in
                  society.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Women empowerment programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Disability rights advocacy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Skills development training</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Featured Program</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Democratic Education Initiative</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our flagship program focuses on ensuring understanding of democratic thoughts and concepts for Ethiopian
                society. Through workshops, seminars, and community engagement, we educate citizens about their
                democratic rights and responsibilities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Workshops</h3>
                    <p className="text-gray-600">
                      Interactive sessions on democratic principles, civic participation, and constitutional rights
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Think Tank Formation</h3>
                    <p className="text-gray-600">
                      Establishing intellectual centers to promote democratic discourse and policy development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Media Partnerships</h3>
                    <p className="text-gray-600">
                      Collaborating with media institutions to spread awareness about democracy and human rights
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Join This Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=500&fit=crop"
                alt="Democratic education workshop"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Programs</h2>
            <p className="text-lg text-gray-600">
              Join our upcoming initiatives and make a difference in your community
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
                  alt="Human rights workshop"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 20, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Addis Ababa</span>
                </div>
                <CardTitle>Human Rights Awareness Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A comprehensive workshop on understanding and protecting human rights in Ethiopian communities.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Register Now
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop"
                  alt="Women empowerment program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 5, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bahir Dar</span>
                </div>
                <CardTitle>Women Leadership Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Empowering women through leadership skills development and advocacy training programs.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Register Now
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop"
                  alt="Election observation training"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 15, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Hawassa</span>
                </div>
                <CardTitle>Election Observer Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Training volunteers on election observation techniques and democratic monitoring processes.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Register Now
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-lg text-gray-600">Measuring the positive change our programs create in communities</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-blue-600">5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Citizens educated through our democratic education programs</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-green-600">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Workshops and training sessions conducted across Ethiopia</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-purple-600">15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Partnerships with local and international organizations</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-red-600">1,200+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Vulnerable individuals supported through our programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved in Our Programs</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join us in making a difference through our comprehensive programs that promote human rights, democracy,
              and social justice across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Volunteer with Us
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Support Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
