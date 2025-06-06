import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Scale, Globe, Calendar, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629753908080-e8551ac57b8d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Every human has rights poster on a concrete pillar - human rights advocacy"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 md:mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
              <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Established April 19, 2022
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Advocating for
              <span className="block text-blue-400">Human Rights</span>
              <span className="block">& Democracy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Ethiopian Social Partnership Advocacy empowers communities through education, advocacy, and
              service—building a more just and democratic Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 h-auto"
              >
                Discover Our Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-700 bg-white hover:bg-blue-50 hover:text-blue-800 text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 h-auto"
              >
                <Heart className="mr-2 h-4 w-4" />
                Support Our Cause
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Responsive */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              We stand for the oppressed and marginalized
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
              Through advocacy, education, and service, we create opportunities for all Ethiopian citizens to understand
              their rights, participate in democracy, and build stronger communities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600 text-sm">Citizens Educated</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-gray-600 text-sm">Programs Conducted</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Partnerships Formed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Responsive Split */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=640&h=800&fit=crop"
                  alt="Community members joining hands in solidarity during peaceful coexistence workshop"
                  width={640}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-2 text-xs md:text-sm">
                    Peaceful Coexistence Workshop
                  </Badge>
                  <p className="text-xs md:text-sm opacity-90">Building bridges across communities</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                  Our Core Values
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Three fundamental principles guide everything we do, rooted in the universal ideals of human dignity
                  and democratic participation.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Liberty</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Freedom for all citizens to live, work, worship, and express themselves without oppression.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Fraternity</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Unity and solidarity among all people, recognizing our shared humanity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Equality</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Equal rights and opportunities for all, regardless of background or status.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/values">
                <Button size="lg" variant="outline" className="mt-6 md:mt-8">
                  Explore Our Values
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs - Responsive Grid */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Programs</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives that promote democracy, protect human rights, and empower communities across
              Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Democratic Education */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
                  alt="Citizens learning about democratic rights in community workshop"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <Badge className="bg-blue-600 text-white text-xs md:text-sm">Core Program</Badge>
                </div>
              </div>
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                  Democratic Education
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Ensuring understanding of democratic principles and constitutional rights for all citizens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">2,150+ participants</span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 text-xs md:text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Human Rights Advocacy */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
                  alt="Legal advocate supporting community members with human rights case"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <Badge className="bg-purple-600 text-white text-xs md:text-sm">Core Program</Badge>
                </div>
              </div>
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="text-lg md:text-xl group-hover:text-purple-600 transition-colors">
                  Human Rights Advocacy
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Protecting and promoting fundamental rights through legal support and policy advocacy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">1,890+ cases supported</span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-purple-50 text-xs md:text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Women Empowerment */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                  alt="Women participating in leadership training and empowerment workshop"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <Badge className="bg-pink-600 text-white text-xs md:text-sm">Special Initiative</Badge>
                </div>
              </div>
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="text-lg md:text-xl group-hover:text-pink-600 transition-colors">
                  Women Empowerment
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Supporting women through leadership training, economic opportunities, and advocacy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">850+ women trained</span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-pink-50 text-xs md:text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/programs">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Explore All Programs
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Story - Responsive Full Width */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=800&fit=crop"
            alt="Community celebration after successful democratic education program completion"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Quote className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-6 md:mb-8 text-blue-400" />
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-4 md:mb-6">
              "ESPA's democratic education program transformed our community. We now understand our rights and actively
              participate in local governance. The change is remarkable."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
                  alt="Almaz Tadesse"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-base md:text-lg">Almaz Tadesse</div>
                <div className="text-blue-200 text-sm md:text-base">Community Leader, Bahir Dar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Spotlight - Responsive */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Meet Our Team</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                Dedicated professionals and passionate advocates working tirelessly to advance human rights and
                democratic values across Ethiopia.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face"
                      alt="Dr. Sarah Alemayehu"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-gray-900">Dr. Sarah Alemayehu</h3>
                    <p className="text-blue-600 text-sm md:text-base">Executive Director</p>
                    <p className="text-xs md:text-sm text-gray-600">15+ years in human rights advocacy</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                      alt="Mr. Dawit Tekle"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-gray-900">Mr. Dawit Tekle</h3>
                    <p className="text-green-600 text-sm md:text-base">Program Director</p>
                    <p className="text-xs md:text-sm text-gray-600">Community development expert</p>
                  </div>
                </div>
              </div>

              <Link href="/team">
                <Button size="lg" variant="outline" className="mt-6 md:mt-8">
                  Meet Our Full Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Image Side */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&h=800&fit=crop"
                  alt="ESPA team members collaborating on community outreach strategy"
                  width={640}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats - Responsive */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-4 md:p-6">
                <div className="text-xl md:text-2xl font-bold text-gray-900">25+</div>
                <div className="text-xs md:text-sm text-gray-600">Team Members</div>
              </div>

              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-xl shadow-xl p-4 md:p-6">
                <div className="text-xl md:text-2xl font-bold text-blue-600">100%</div>
                <div className="text-xs md:text-sm text-gray-600">Dedicated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Matching Reference Image Layout */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Latest news</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* First large news item */}
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
                alt="ESPA launches comprehensive democratic education initiative"
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <div className="bg-black text-white text-xs font-bold px-2 py-1 mb-2 inline-block">NEWS</div>
                <h3 className="text-white text-lg md:text-xl font-bold max-w-md">
                  ESPA Launches Democratic Education Initiative Across Five Regions
                </h3>
              </div>
            </div>

            {/* Second large news item */}
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                alt="Women leadership training graduation ceremony"
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <div className="bg-black text-white text-xs font-bold px-2 py-1 mb-2 inline-block">NEWS</div>
                <h3 className="text-white text-lg md:text-xl font-bold max-w-md">
                  150 Women Graduate from Leadership Training Program in Addis Ababa
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Third news item */}
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
                alt="Human rights awareness campaign launch"
                width={400}
                height={300}
                className="w-full h-[220px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="bg-black text-white text-xs font-bold px-2 py-1 mb-2 inline-block">NEWS</div>
                <h3 className="text-white text-sm md:text-base font-bold max-w-xs">
                  Human Rights Day Campaign Reaches Over 10,000 Citizens
                </h3>
              </div>
            </div>

            {/* Fourth news item */}
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                alt="Community partnership agreement signing"
                width={400}
                height={300}
                className="w-full h-[220px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="bg-black text-white text-xs font-bold px-2 py-1 mb-2 inline-block">NEWS</div>
                <h3 className="text-white text-sm md:text-base font-bold max-w-xs">
                  New Community Partnerships Formed to Expand Reach and Impact
                </h3>
              </div>
            </div>

            {/* Fifth news item */}
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
                alt="Youth democracy workshop in rural communities"
                width={400}
                height={300}
                className="w-full h-[220px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="bg-black text-white text-xs font-bold px-2 py-1 mb-2 inline-block">NEWS</div>
                <h3 className="text-white text-sm md:text-base font-bold max-w-xs">
                  Youth Democracy Workshop Series Launches in Rural Communities
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Responsive Split */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 sm:h-80 lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
              alt="Volunteers working together to support community development"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-600/20"></div>
          </div>

          {/* Content Side */}
          <div className="bg-blue-600 text-white p-8 md:p-12 lg:p-16 flex items-center">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">Join Our Mission</h2>
              <p className="text-base md:text-lg text-blue-100 mb-4 md:mb-6 leading-relaxed">
                Your support helps us reach more communities, educate more citizens, and create lasting change.
                Together, we can build a more democratic and just Ethiopia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" variant="secondary" className="flex-1 sm:flex-none">
                  <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Make a Donation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 sm:flex-none bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
                >
                  <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
