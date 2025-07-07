"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Calendar, MapPin, CheckCircle, Heart, Phone, Target } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function DemocracyPage() {
  const [activeComponent, setActiveComponent] = useState(0)

  const components = [
    {
      title: "Community Workshops",
      description: "Interactive sessions covering democratic principles, governance structures, and citizen rights.",
      icon: Users,
      color: "blue",
      details: [
        "Monthly workshops in 15 regions",
        "Average 50 participants per session",
        "92% knowledge retention rate",
        "Available in local languages",
      ],
    },
    {
      title: "Leadership Training",
      description: "Developing local leaders with skills in democratic governance and community mobilization.",
      icon: Target,
      color: "emerald",
      details: [
        "6-month comprehensive program",
        "Focus on women and youth leaders",
        "Mentorship and ongoing support",
        "Certificate upon completion",
      ],
    },
    {
      title: "Educational Materials",
      description: "Developing and distributing resources in local languages to enhance accessibility.",
      icon: BookOpen,
      color: "purple",
      details: [
        "Materials in Amharic and Oromo",
        "Digital and print formats",
        "Community-specific content",
        "Regular updates and revisions",
      ],
    },
    {
      title: "Youth Engagement",
      description: "Special programs targeting young people to foster democratic values from an early age.",
      icon: Heart,
      color: "pink",
      details: [
        "School-based programs",
        "Youth parliament simulations",
        "Peer-to-peer education",
        "Social media campaigns",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1920&auto=format&fit=crop"
            alt="Democratic education workshop with community members learning about civic engagement"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-700/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-6 py-3">
                  <Scale className="h-4 w-4 mr-2" />
                  Democratic Education Program
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Building Democratic
                  <span className="text-blue-300 block">Foundations</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Empowering Ethiopian communities with knowledge, skills, and tools to participate meaningfully in
                  democratic processes and governance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Users className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Join Our Workshops
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Download Resources
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
                  alt="Democratic education workshop participants engaged in learning"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Program Overview</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Strengthening Democratic Participation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our Democratic Education Program focuses on building civic knowledge, promoting democratic values, and
              enhancing citizen participation in governance processes across Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Civic Education",
                description:
                  "Comprehensive training on democratic principles, constitutional rights, and civic responsibilities for all citizens.",
                icon: BookOpen,
                color: "blue",
                stats: "2,150 participants",
              },
              {
                title: "Community Dialogues",
                description:
                  "Facilitating open discussions between citizens and local leaders to strengthen democratic engagement.",
                icon: Users,
                color: "emerald",
                stats: "85 dialogues held",
              },
              {
                title: "Electoral Education",
                description:
                  "Training on electoral processes, voting rights, and the importance of free and fair elections.",
                icon: Scale,
                color: "purple",
                stats: "15 regions covered",
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600`}></div>
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <Badge className={`bg-${item.color}-100 text-${item.color}-800`}>{item.stats}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Key Components */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Program Components</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Make Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the key components of our democratic education program and see how each element contributes to
              building stronger democratic communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Component Navigation */}
            <div className="space-y-4">
              {components.map((component, index) => {
                const IconComponent = component.icon
                return (
                  <div
                    key={index}
                    onClick={() => setActiveComponent(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeComponent === index
                        ? "bg-white shadow-xl scale-105"
                        : "bg-gray-50 hover:bg-white hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${component.color}-500 to-${component.color}-600 rounded-full flex items-center justify-center mr-4`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{component.title}</h3>
                        <p className="text-sm text-gray-600">{component.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Active Component Details */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div
                  className={`h-2 bg-gradient-to-r from-${components[activeComponent].color}-500 to-${components[activeComponent].color}-600`}
                ></div>
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${components[activeComponent].color}-500 to-${components[activeComponent].color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    {(() => {
                      const ActiveIcon = components[activeComponent].icon
                      return <ActiveIcon className="h-10 w-10 text-white" />
                    })()}
                  </div>
                  <CardTitle className="text-2xl">{components[activeComponent].title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{components[activeComponent].description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {components[activeComponent].details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle
                            className={`h-5 w-5 text-${components[activeComponent].color}-500 mr-3 flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`w-full bg-${components[activeComponent].color}-600 hover:bg-${components[activeComponent].color}-700`}
                  >
                    Learn More About This Component
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Success Story</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Impact Story</h2>
            <p className="text-xl text-gray-600">Real stories of democratic transformation in Ethiopian communities</p>
          </div>

          <Card className="max-w-5xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8 items-center p-8 lg:p-12">
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop"
                    alt="Almaz Tadesse - Community Leader"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Almaz Tadesse</h3>
                  <p className="text-blue-600 font-medium text-lg">Community Leader, Addis Ababa</p>
                </div>
                <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                  "Before joining ESPA's democratic education program, I felt disconnected from local governance. Now, I
                  actively participate in community meetings, advocate for women's representation, and have even been
                  elected to our local council. The training gave me the confidence and knowledge to make a real
                  difference."
                </blockquote>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Addis Ababa
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Program Graduate 2023
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-600 font-medium">Elected to local council with 78% of votes</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Current Initiatives</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Active Programs</h2>
            <p className="text-xl text-gray-600">
              Ongoing projects and upcoming events in our democratic education program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regional Workshops",
                description: "Monthly civic education workshops across 5 regions",
                status: "Ongoing",
                statusColor: "green",
                nextSession: "March 15, 2024",
                location: "Bahir Dar",
                icon: Calendar,
              },
              {
                title: "Digital Platform",
                description: "Online civic education resources and courses",
                status: "New",
                statusColor: "blue",
                nextSession: "April 2024",
                location: "Amharic, Oromo",
                icon: BookOpen,
              },
              {
                title: "Youth Parliament",
                description: "Mock parliament sessions for young citizens",
                status: "Planning",
                statusColor: "purple",
                nextSession: "16-25 years",
                location: "3 months",
                icon: Users,
              },
            ].map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-${initiative.statusColor}-100 text-${initiative.statusColor}-800`}>
                        {initiative.status}
                      </Badge>
                      <IconComponent className="h-5 w-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                    <CardDescription>{initiative.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next Session:</span>
                        <span className="font-medium">{initiative.nextSession}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{initiative.location}</span>
                      </div>
                      <Button className="w-full mt-4" size="sm">
                        {initiative.status === "Ongoing"
                          ? "Register Now"
                          : initiative.status === "New"
                            ? "Learn More"
                            : "Express Interest"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members working together for democratic change"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">Join the Democratic Movement</h2>
            <p className="text-xl text-blue-100">
              Be part of building a stronger democratic Ethiopia. Whether you're an individual, organization, or
              community leader, there's a place for you in our program.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg h-auto group"
              >
                <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Volunteer With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
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
