import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Globe, Award, Target, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1920&auto=format&fit=crop"
            alt="Ethiopian rural landscape with traditional homes and community gathering"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge className="mb-4 md:mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
              Established April 19, 2022
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              About ESPA
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
              Ethiopian Social Partnership Advocacy is an indigenous non-profit organization committed to ensuring human
              rights, promoting democratic values, and providing holistic support to marginalized communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement - Responsive */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              We advocate for all citizens, educate about rights and democracy, and provide holistic assistance to those
              in need
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Creating opportunities to improve lives is what we stand for—we stand for the oppressed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Responsive Split */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517486430290-35657bdcef51?q=80&w=640&auto=format&fit=crop"
                  alt="Community workshop with participants engaged in discussion and learning"
                  width={640}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-2 text-xs md:text-sm">
                    April 19, 2022
                  </Badge>
                  <p className="text-xs md:text-sm opacity-90">Foundation ceremony</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Story</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4 md:mb-6">
                  ESPA was founded by a group of dedicated human rights advocates and legal professionals who recognized
                  the need for an organization focused on promoting democratic values and protecting human rights in
                  Ethiopia.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                  Since our establishment, we have worked tirelessly to build partnerships with local communities,
                  government agencies, and international organizations to advance our mission of advocacy, education,
                  and service.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Our organization has grown from a small group of dedicated volunteers to a structured non-profit with
                  professional staff and extensive community networks throughout Ethiopia.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                  <div className="text-gray-600 text-sm md:text-base">Citizens Educated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600 text-sm md:text-base">Programs Conducted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Responsive Cards */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Vision & Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our work and define our impact in Ethiopian communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src="https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=600&auto=format&fit=crop"
                  alt="Young students in a classroom raising hands, representing education and future opportunities"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                    <Target className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Our Vision</h3>
                </div>
              </div>
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We envision an Ethiopia where all citizens understand and exercise their democratic rights, where
                  diverse communities coexist peacefully, and where marginalized groups have equal opportunities and
                  representation in society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop"
                  alt="Group of women in a community meeting discussing local issues and solutions"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                    <Scale className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Our Mission</h3>
                </div>
              </div>
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  ESPA is committed to ensuring human rights, promoting democratic values, and providing holistic
                  support to marginalized communities through advocacy, education, and service initiatives that create
                  lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - Responsive Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental beliefs that guide our actions and decisions in every aspect of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop"
                  alt="Young man speaking at a community gathering, representing freedom of expression"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                    <Globe className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Liberty</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We believe in and advocate for the freedom and liberty of all citizens to live, work, worship, and
                  express themselves without undue restriction or oppression.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop"
                  alt="Community members joining hands in a circle, symbolizing unity and solidarity"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Fraternity</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We promote unity, mutual support, and solidarity among all people, recognizing our shared humanity and
                  the strength that comes from working together.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop"
                  alt="Professional woman in a leadership position, representing equal opportunities"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2 md:mb-3">
                    <Scale className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Equality</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We believe in and advocate for equal rights, opportunities, and treatment for all citizens regardless
                  of ethnicity, gender, religion, or socioeconomic status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team - Responsive */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Leadership Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders dedicated to advancing human rights and democratic values across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <Card className="border-0 shadow-xl text-center group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-3 md:pb-4">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=128&auto=format&fit=crop"
                      alt="Dr. Sarah Alemayehu, Executive Director"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl">Dr. Sarah Alemayehu</CardTitle>
                <CardDescription className="text-blue-600 font-medium text-base md:text-lg">
                  Executive Director
                </CardDescription>
                <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs md:text-sm">15+ Years Experience</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                  Leading ESPA's mission to advocate for human rights and democratic values across Ethiopian communities
                  with extensive experience in international relations.
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-blue-50 text-xs md:text-sm">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-3 md:pb-4">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=crop"
                      alt="Mr. Dawit Tekle, Program Director"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl">Mr. Dawit Tekle</CardTitle>
                <CardDescription className="text-green-600 font-medium text-base md:text-lg">
                  Program Director
                </CardDescription>
                <Badge className="mt-2 bg-green-100 text-green-800 text-xs md:text-sm">12+ Years Experience</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                  Overseeing program development and implementation with expertise in community development and project
                  management across Ethiopia.
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-green-50 text-xs md:text-sm">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center group hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-3 md:pb-4">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=128&auto=format&fit=crop"
                      alt="Ms. Hanan Mohammed, Advocacy Coordinator"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl">Ms. Hanan Mohammed</CardTitle>
                <CardDescription className="text-purple-600 font-medium text-base md:text-lg">
                  Advocacy Coordinator
                </CardDescription>
                <Badge className="mt-2 bg-purple-100 text-purple-800 text-xs md:text-sm">10+ Years Experience</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                  Leading advocacy efforts with background in law and human rights, specializing in policy analysis and
                  campaign development.
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-purple-50 text-xs md:text-sm">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/team">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Meet Our Full Team
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements - Responsive Stats */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Achievements</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Making a measurable difference in communities across Ethiopia through our dedicated work
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-blue-600 transition-colors">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-blue-600">5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Citizens educated about their democratic rights through our workshops and seminars
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-green-600 transition-colors">
                  <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-green-600">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Educational programs conducted across different regions of Ethiopia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-purple-600 transition-colors">
                  <Globe className="h-8 w-8 md:h-10 md:w-10 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-purple-600">15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Partnerships established with local and international organizations
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300 group col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-red-100 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-red-600 transition-colors">
                  <Award className="h-8 w-8 md:h-10 md:w-10 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-red-600">10+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Community initiatives supporting marginalized groups and promoting equality
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Responsive Full Width */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="African community members gathered for a collaborative project"
            width={1920}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-600/80"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">Join Us in Our Mission</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-12 leading-relaxed">
              Together, we can make a difference in promoting human rights, democracy, and equality across Ethiopia.
              Your support helps us reach more communities and create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto">
                Support Our Work
              </Button>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
                >
                  Learn About Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
