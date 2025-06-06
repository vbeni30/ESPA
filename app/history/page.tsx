import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Target, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/history-hero-bg.jpg"
            alt="Ethiopian community gathering"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">Our History</h1>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              From humble beginnings to impactful advocacy - discover the journey of Ethiopian Social Partnership
              Advocacy and our commitment to human rights and democracy
            </p>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              <Calendar className="mr-2 h-5 w-5" />
              Established April 19, 2022
            </Badge>
          </div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">Our Beginning</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Foundation of ESPA</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ethiopian Social Partnership Advocacy (ESPA) was founded on April 19, 2022, by a group of dedicated
                human rights advocates, legal professionals, and community leaders who recognized the urgent need for an
                organization focused on promoting democratic values and protecting human rights in Ethiopia.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The founding members came together during a period of significant political and social transformation in
                Ethiopia, recognizing that sustainable change required grassroots education, advocacy, and community
                empowerment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as informal discussions among concerned citizens evolved into a structured organization
                with a clear mission: to ensure human rights, promote democratic values, and provide holistic support to
                marginalized communities.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/espa-foundation-2022.jpg"
                alt="ESPA founding ceremony"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-600 text-white">April 19, 2022</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones and achievements that have shaped ESPA's growth and impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-red-600 hidden lg:block"></div>

            <div className="space-y-12">
              {/* 2022 - Foundation */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between lg:justify-end">
                        <Badge className="bg-amber-100 text-amber-800">2022</Badge>
                      </div>
                      <CardTitle>Organization Founded</CardTitle>
                      <CardDescription>April 19, 2022</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start lg:justify-end">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-0.5" />
                          <span>Official registration as non-profit organization</span>
                        </li>
                        <li className="flex items-start lg:justify-end">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-0.5" />
                          <span>Establishment of founding board of directors</span>
                        </li>
                        <li className="flex items-start lg:justify-end">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-0.5" />
                          <span>Development of organizational mission and values</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative lg:pl-8">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  <Image
                    src="/images/timeline-foundation.jpg"
                    alt="ESPA foundation"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2022 - First Programs */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-blue-100 text-blue-800">Late 2022</Badge>
                      </div>
                      <CardTitle>First Programs Launched</CardTitle>
                      <CardDescription>June - December 2022</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Democratic education workshops in Addis Ababa</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Human rights awareness campaigns</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Community dialogue facilitation training</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative lg:pr-8 lg:order-1">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  <Image
                    src="/images/timeline-first-programs.jpg"
                    alt="First programs"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2023 - Expansion */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between lg:justify-end">
                        <Badge className="bg-green-100 text-green-800">2023</Badge>
                      </div>
                      <CardTitle>Regional Expansion</CardTitle>
                      <CardDescription>Throughout 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start lg:justify-end">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-0.5" />
                          <span>Programs extended to 5 regions</span>
                        </li>
                        <li className="flex items-start lg:justify-end">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-0.5" />
                          <span>Partnership with 10 local organizations</span>
                        </li>
                        <li className="flex items-start lg:justify-end">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 lg:ml-2 lg:mr-0 flex-shrink-0 mt-0.5" />
                          <span>Trained over 3,000 community members</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative lg:pl-8">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  <Image
                    src="/images/timeline-expansion.jpg"
                    alt="Regional expansion"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2024 - Recognition */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-purple-100 text-purple-800">2024</Badge>
                      </div>
                      <CardTitle>Recognition & Growth</CardTitle>
                      <CardDescription>Current Year Achievements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>International partnership agreements signed</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Recognition by Ethiopian Human Rights Commission</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Launch of women empowerment initiative</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative lg:pr-8 lg:order-1">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  <Image
                    src="/images/timeline-recognition.jpg"
                    alt="Recognition and growth"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Significant milestones that demonstrate our impact and growth over the years
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-amber-600">5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Citizens educated about democratic rights and human rights principles</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-blue-600">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Educational programs and workshops conducted across Ethiopia</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-green-600">15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic partnerships with local and international organizations</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-purple-600">2+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Years of dedicated service to Ethiopian communities and human rights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Founding Principles</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ESPA was built on fundamental principles that continue to guide our work and decision-making processes.
                These principles reflect our commitment to democratic values and human rights.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Grassroots Approach</h3>
                    <p className="text-gray-600">
                      Working directly with communities to understand their needs and empower local leadership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Inclusive Participation</h3>
                    <p className="text-gray-600">
                      Ensuring all voices are heard, especially those of marginalized and vulnerable groups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based Advocacy</h3>
                    <p className="text-gray-600">
                      Using research and data to inform our advocacy efforts and policy recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collaborative Partnerships</h3>
                    <p className="text-gray-600">
                      Building strong alliances with like-minded organizations and stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/founding-principles.jpg"
                alt="ESPA founding principles"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 md:py-24 bg-amber-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl text-amber-100 mb-8">
              As we continue our journey, ESPA remains committed to expanding our impact, deepening our community
              engagement, and advancing human rights and democratic values across Ethiopia and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Our Strategic Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-amber-600 border-white hover:bg-amber-50 hover:text-amber-700"
              >
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
