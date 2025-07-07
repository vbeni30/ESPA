"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Scale,
  Heart,
  Globe,
  Target,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Section from "@/components/ui/section" // Declare the Section variable

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState(0)

  const programs = [
    {
      title: "Democratic Education",
      description: "Building democratic understanding and civic engagement through comprehensive educational programs",
      icon: BookOpen,
      color: "blue",
      participants: "5,000+",
      regions: "15",
      link: "/programs/democracy",
      features: [
        "Workshops on democratic principles",
        "Civic education seminars",
        "Think tank groups formation",
        "Community dialogue facilitation",
      ],
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Human Rights Advocacy",
      description: "Protecting and promoting fundamental rights through legal support and policy advocacy",
      icon: Scale,
      color: "purple",
      participants: "2,500+",
      regions: "12",
      link: "/programs/human-rights",
      features: [
        "Legal support services",
        "Rights awareness campaigns",
        "Policy advocacy initiatives",
        "Emergency response support",
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Vulnerable Groups Support",
      description: "Empowering marginalized communities through targeted support and advocacy programs",
      icon: Heart,
      color: "pink",
      participants: "3,200+",
      regions: "10",
      link: "/programs/vulnerable-groups",
      features: [
        "Women empowerment programs",
        "Disability rights advocacy",
        "Skills development training",
        "Economic empowerment initiatives",
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <Section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=1920&auto=format&fit=crop"
            alt="Community members participating in ESPA programs and initiatives"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-purple-800/80"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
                <Target className="mr-2 h-5 w-5" />
                Comprehensive Initiatives
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Programs
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
                Comprehensive initiatives designed to promote democracy, protect human rights, and support marginalized
                communities across Ethiopia through advocacy, education, and direct service.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Explore Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join a Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Program Overview */}
      <Section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Three Core Pillars</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our programs are built on three core principles: Advocacy, Education, and Service
              </p>
            </div>

            {/* Interactive Program Showcase */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6">
                {programs.map((program, index) => {
                  const IconComponent = program.icon
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveProgram(index)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeProgram === index
                          ? "bg-white shadow-xl scale-105"
                          : "bg-gray-50 hover:bg-white hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${program.color}-500 to-${program.color}-600 rounded-2xl flex items-center justify-center mr-4`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                          <p className="text-gray-600">
                            {program.participants} participants across {program.regions} regions
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <Link href={program.link}>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )
                })}
              </div>

              {/* Active Program Details */}
              <div className="lg:sticky lg:top-8">
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="relative">
                    <Image
                      src={programs[activeProgram].image || "/placeholder.svg"}
                      alt={programs[activeProgram].title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`bg-${programs[activeProgram].color}-100 text-${programs[activeProgram].color}-800`}
                      >
                        Featured Program
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{programs[activeProgram].title}</CardTitle>
                    <CardDescription className="text-lg">{programs[activeProgram].description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{programs[activeProgram].participants}</div>
                        <div className="text-sm text-gray-600">Participants</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{programs[activeProgram].regions}</div>
                        <div className="text-sm text-gray-600">Regions</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {programs[activeProgram].features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle
                              className={`h-5 w-5 text-${programs[activeProgram].color}-500 mr-3 flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={programs[activeProgram].link}>
                      <Button
                        className={`w-full bg-${programs[activeProgram].color}-600 hover:bg-${programs[activeProgram].color}-700`}
                      >
                        Join This Program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All Programs Grid */}
      <Section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">All Programs</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Program Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore all our programs designed to create lasting positive change in Ethiopian communities
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Democratic Education",
                  description: "Building democratic understanding and civic engagement",
                  icon: BookOpen,
                  color: "blue",
                  link: "/programs/democracy",
                  features: [
                    "Workshops on democratic principles",
                    "Civic education seminars",
                    "Think tank groups formation",
                  ],
                },
                {
                  title: "Peaceful Coexistence",
                  description: "Promoting harmony among diverse communities",
                  icon: Users,
                  color: "emerald",
                  link: "/programs",
                  features: [
                    "Community dialogue facilitation",
                    "Conflict resolution training",
                    "Inter-group collaboration projects",
                  ],
                },
                {
                  title: "Human Rights Advocacy",
                  description: "Protecting and promoting fundamental rights",
                  icon: Scale,
                  color: "purple",
                  link: "/programs/human-rights",
                  features: ["Legal support services", "Rights awareness campaigns", "Policy advocacy initiatives"],
                },
                {
                  title: "Disaster Response",
                  description: "Emergency support and community resilience",
                  icon: Heart,
                  color: "red",
                  link: "/programs",
                  features: [
                    "Emergency relief coordination",
                    "Community resilience building",
                    "Recovery program implementation",
                  ],
                },
                {
                  title: "Election Observation",
                  description: "Ensuring democratic electoral processes",
                  icon: Globe,
                  color: "indigo",
                  link: "/programs",
                  features: [
                    "Election monitoring programs",
                    "Voter education campaigns",
                    "Electoral integrity advocacy",
                  ],
                },
                {
                  title: "Vulnerable Groups Support",
                  description: "Empowering marginalized communities",
                  icon: Target,
                  color: "pink",
                  link: "/programs/vulnerable-groups",
                  features: ["Women empowerment programs", "Disability rights advocacy", "Skills development training"],
                },
              ].map((program, index) => {
                const IconComponent = program.icon
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r from-${program.color}-500 to-${program.color}-600`}></div>
                    <CardHeader>
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${program.color}-500 to-${program.color}-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-500 space-y-2 mb-6">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className={`h-4 w-4 text-${program.color}-500 mr-2 flex-shrink-0 mt-0.5`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={program.link}>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-gray-50">
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Upcoming Programs */}
      <Section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-orange-100 text-orange-800 text-lg px-6 py-3">Coming Soon</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our upcoming initiatives and make a difference in your community
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Human Rights Awareness Workshop",
                  description:
                    "A comprehensive workshop on understanding and protecting human rights in Ethiopian communities.",
                  date: "January 20, 2025",
                  location: "Addis Ababa",
                  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop",
                },
                {
                  title: "Women Leadership Training",
                  description: "Empowering women through leadership skills development and advocacy training programs.",
                  date: "February 5, 2025",
                  location: "Bahir Dar",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
                },
                {
                  title: "Election Observer Training",
                  description:
                    "Training volunteers on election observation techniques and democratic monitoring processes.",
                  date: "February 15, 2025",
                  location: "Hawassa",
                  image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=400&auto=format&fit=crop",
                },
              ].map((event, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="p-0">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="rounded-t-lg object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-4">{event.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-6 pb-6">
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Register Now
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Program Impact Statistics */}
      <Section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Program Impact</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Measuring Our Success</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quantifiable results that demonstrate the positive change our programs create in communities
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Citizens Educated",
                  value: "5,000+",
                  description: "People reached through our democratic education programs",
                  icon: Users,
                  color: "blue",
                },
                {
                  title: "Workshops Conducted",
                  value: "25+",
                  description: "Training sessions and educational workshops across Ethiopia",
                  icon: BookOpen,
                  color: "emerald",
                },
                {
                  title: "Strategic Partnerships",
                  value: "15+",
                  description: "Collaborations with local and international organizations",
                  icon: Globe,
                  color: "purple",
                },
                {
                  title: "Vulnerable Individuals Supported",
                  value: "1,200+",
                  description: "Marginalized community members assisted through our programs",
                  icon: Heart,
                  color: "pink",
                },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-500 group"
                  >
                    <CardHeader>
                      <div
                        className={`mx-auto w-20 h-20 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</CardTitle>
                      <CardDescription className="font-medium text-lg">{stat.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced CTA Section */}
      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members collaborating and participating in programs"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Involved in Our Programs</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join us in making a difference through our comprehensive programs that promote human rights, democracy,
              and social justice across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Volunteer with Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Programs
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
