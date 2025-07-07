"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Globe, Award, Target, ArrowRight, Play, CheckCircle, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1920&auto=format&fit=crop"
            alt="Ethiopian rural landscape with traditional homes and community gathering"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3 hover:bg-white/30 transition-all duration-300">
                <Award className="mr-2 h-5 w-5" />
                Established April 19, 2022
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  ESPA
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
                Ethiopian Social Partnership Advocacy is an indigenous non-profit organization committed to ensuring
                human rights, promoting democratic values, and providing holistic support to marginalized communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg h-auto group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg h-auto"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement with Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-8 bg-blue-100 text-blue-800 text-lg px-6 py-3">Our Purpose</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                We advocate for all citizens, educate about rights and democracy, and provide holistic assistance to
                those
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  {" "}
                  in need
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed">
                Creating opportunities to improve lives is what we stand for—we stand for the oppressed.
              </p>
            </div>

            {/* Interactive Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={5000} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Citizens Educated</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Programs Conducted</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Partnerships</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the story behind ESPA and how we've grown to become a leading voice for human rights in
                Ethiopia
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: "story", label: "Our Story", icon: BookOpen },
                { id: "mission", label: "Mission & Vision", icon: Target },
                { id: "values", label: "Core Values", icon: Heart },
                { id: "impact", label: "Our Impact", icon: Award },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === id
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {activeTab === "story" && (
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      ESPA was founded by a group of dedicated human rights advocates and legal professionals who
                      recognized the need for an organization focused on promoting democratic values and protecting
                      human rights in Ethiopia.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Since our establishment, we have worked tirelessly to build partnerships with local communities,
                      government agencies, and international organizations to advance our mission of advocacy,
                      education, and service.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Founded by experienced human rights advocates</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Built strong community partnerships</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Grown from volunteers to professional organization</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1517486430290-35657bdcef51?q=80&w=640&auto=format&fit=crop"
                      alt="Community workshop with participants engaged in discussion and learning"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-2">
                        April 19, 2022
                      </Badge>
                      <p className="text-sm opacity-90">Foundation ceremony</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "mission" && (
                <div className="p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We envision an Ethiopia where all citizens understand and exercise their democratic rights,
                        where diverse communities coexist peacefully, and where marginalized groups have equal
                        opportunities and representation in society.
                      </p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <Scale className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        ESPA is committed to ensuring human rights, promoting democratic values, and providing holistic
                        support to marginalized communities through advocacy, education, and service initiatives that
                        create lasting positive change.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Liberty</h4>
                      <p className="text-gray-600">
                        We believe in and advocate for the freedom and liberty of all citizens to live, work, worship,
                        and express themselves without undue restriction.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Fraternity</h4>
                      <p className="text-gray-600">
                        We promote unity, mutual support, and solidarity among all people, recognizing our shared
                        humanity and the strength that comes from working together.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scale className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Equality</h4>
                      <p className="text-gray-600">
                        We believe in and advocate for equal rights, opportunities, and treatment for all citizens
                        regardless of ethnicity, gender, religion, or socioeconomic status.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "impact" && (
                <div className="p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">5,000+</div>
                          <div className="text-gray-600">Citizens educated about democratic rights</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                          <BookOpen className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">25+</div>
                          <div className="text-gray-600">Educational programs conducted</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <Globe className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">15+</div>
                          <div className="text-gray-600">Strategic partnerships established</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                          <Award className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">10+</div>
                          <div className="text-gray-600">Community initiatives launched</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to advancing human rights and democratic values across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Dr. Sarah Alemayehu",
                role: "Executive Director",
                experience: "15+ Years",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
                description:
                  "Leading ESPA's mission with extensive experience in international relations and human rights advocacy.",
                color: "blue",
              },
              {
                name: "Mr. Dawit Tekle",
                role: "Program Director",
                experience: "12+ Years",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                description:
                  "Overseeing program development with expertise in community development and project management.",
                color: "emerald",
              },
              {
                name: "Ms. Hanan Mohammed",
                role: "Advocacy Coordinator",
                experience: "10+ Years",
                image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop",
                description:
                  "Leading advocacy efforts with background in law and human rights, specializing in policy analysis.",
                color: "purple",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className={`bg-${leader.color}-100 text-${leader.color}-800 mb-2`}>
                        {leader.experience}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className={`text-${leader.color}-600 font-medium text-lg`}>
                    {leader.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed mb-6">{leader.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-50">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/team">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg h-auto"
              >
                Meet Our Full Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="African community members gathered for a collaborative project"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-emerald-600/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Us in Our Mission</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Together, we can make a difference in promoting human rights, democracy, and equality across Ethiopia.
              Your support helps us reach more communities and create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Support Our Work
              </Button>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700 px-8 py-4 text-lg h-auto"
                >
                  Learn About Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
