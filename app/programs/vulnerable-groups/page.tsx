"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Baby, Calendar, MapPin, CheckCircle, Phone, Target, Briefcase } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function VulnerableGroupsPage() {
  const [activeInitiative, setActiveInitiative] = useState(0)

  const initiatives = [
    {
      title: "Women's Cooperative",
      description: "Supporting women's economic cooperatives across regions",
      icon: Users,
      color: "pink",
      cooperatives: 25,
      womenInvolved: 750,
      details: [
        "Microfinance and business training",
        "Market access facilitation",
        "Leadership development programs",
        "Peer support networks",
      ],
    },
    {
      title: "Child Protection",
      description: "Comprehensive child protection and education support",
      icon: Baby,
      color: "blue",
      cooperatives: 1200,
      womenInvolved: 15,
      details: [
        "Educational scholarships",
        "Child abuse prevention",
        "Family support services",
        "Community awareness programs",
      ],
    },
    {
      title: "Accessibility Project",
      description: "Making public spaces accessible for persons with disabilities",
      icon: Shield,
      color: "emerald",
      cooperatives: 50,
      womenInvolved: 20,
      details: [
        "Infrastructure assessments",
        "Accessibility improvements",
        "Advocacy for inclusive policies",
        "Disability awareness training",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&auto=format&fit=crop"
            alt="Women empowerment program participants working together in a supportive environment"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-purple-700/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-lg px-6 py-3">
                  <Heart className="h-4 w-4 mr-2" />
                  Vulnerable Groups Support
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Protecting the
                  <span className="text-purple-300 block">Most Vulnerable</span>
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
                  Dedicated support and advocacy for women, children, elderly, persons with disabilities, and other
                  marginalized communities in Ethiopia.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Users className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Volunteer
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Women empowerment program in action"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Program Overview</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Support for Vulnerable Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our Vulnerable Groups Program provides targeted support, advocacy, and empowerment services to ensure that
              the most marginalized members of society have access to their rights and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Women's Empowerment",
                description: "Economic empowerment, leadership training, and protection from gender-based violence.",
                icon: Users,
                color: "pink",
                stats: "850 women trained",
              },
              {
                title: "Child Protection",
                description: "Safeguarding children's rights, education support, and protection from exploitation.",
                icon: Baby,
                color: "blue",
                stats: "1,200+ children helped",
              },
              {
                title: "Disability Rights",
                description:
                  "Accessibility advocacy, inclusive services, and rights protection for persons with disabilities.",
                icon: Shield,
                color: "emerald",
                stats: "50 buildings assessed",
              },
              {
                title: "Elderly Care",
                description: "Healthcare access, social support, and dignity preservation for elderly citizens.",
                icon: Heart,
                color: "orange",
                stats: "300+ seniors supported",
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
                      className={`mx-auto bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 p-3 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <Badge className={`bg-${item.color}-100 text-${item.color}-800 text-xs`}>{item.stats}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Our Programs</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Comprehensive Support Services</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Economic Empowerment",
                    description:
                      "Microfinance, skills training, and business development support for women and marginalized groups.",
                    icon: Briefcase,
                  },
                  {
                    title: "Legal Protection",
                    description:
                      "Legal aid and advocacy for vulnerable groups facing discrimination or rights violations.",
                    icon: Shield,
                  },
                  {
                    title: "Healthcare Access",
                    description:
                      "Facilitating access to healthcare services and advocating for inclusive health policies.",
                    icon: Heart,
                  },
                  {
                    title: "Education Support",
                    description: "Scholarships, school supplies, and advocacy for inclusive education policies.",
                    icon: Target,
                  },
                ].map((program, index) => {
                  const IconComponent = program.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-lg">{program.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{program.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
                  alt="Community support program participants working together"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Current Initiatives */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Current Initiatives</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Active Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Active programs and ongoing support for vulnerable communities making real difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Initiative Navigation */}
            <div className="space-y-4">
              {initiatives.map((initiative, index) => {
                const IconComponent = initiative.icon
                return (
                  <div
                    key={index}
                    onClick={() => setActiveInitiative(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeInitiative === index
                        ? "bg-white shadow-xl scale-105"
                        : "bg-gray-50 hover:bg-white hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${initiative.color}-500 to-${initiative.color}-600 rounded-full flex items-center justify-center mr-4`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{initiative.title}</h3>
                        <p className="text-sm text-gray-600">
                          {initiative.title === "Women's Cooperative"
                            ? `${initiative.cooperatives} cooperatives • ${initiative.womenInvolved}+ women`
                            : initiative.title === "Child Protection"
                              ? `${initiative.cooperatives}+ children • ${initiative.womenInvolved} schools`
                              : `${initiative.cooperatives} assessments • ${initiative.womenInvolved} improvements`}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">{initiative.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Active Initiative Details */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div
                  className={`h-2 bg-gradient-to-r from-${initiatives[activeInitiative].color}-500 to-${initiatives[activeInitiative].color}-600`}
                ></div>
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${initiatives[activeInitiative].color}-500 to-${initiatives[activeInitiative].color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    {(() => {
                      const ActiveIcon = initiatives[activeInitiative].icon
                      return <ActiveIcon className="h-10 w-10 text-white" />
                    })()}
                  </div>
                  <CardTitle className="text-2xl mb-4">{initiatives[activeInitiative].title}</CardTitle>
                  <Badge
                    className={`bg-${initiatives[activeInitiative].color}-100 text-${initiatives[activeInitiative].color}-800`}
                  >
                    Active Initiative
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{initiatives[activeInitiative].description}</p>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className={`text-3xl font-bold text-${initiatives[activeInitiative].color}-600`}>
                        {initiatives[activeInitiative].cooperatives}
                      </div>
                      <div className="text-sm text-gray-600">
                        {initiatives[activeInitiative].title === "Women's Cooperative"
                          ? "Cooperatives"
                          : initiatives[activeInitiative].title === "Child Protection"
                            ? "Children Helped"
                            : "Buildings Assessed"}
                      </div>
                    </div>
                    <div>
                      <div className={`text-3xl font-bold text-${initiatives[activeInitiative].color}-600`}>
                        {initiatives[activeInitiative].womenInvolved}
                        {initiatives[activeInitiative].title === "Women's Cooperative" ? "+" : ""}
                      </div>
                      <div className="text-sm text-gray-600">
                        {initiatives[activeInitiative].title === "Women's Cooperative"
                          ? "Women Involved"
                          : initiatives[activeInitiative].title === "Child Protection"
                            ? "Schools Supported"
                            : "Improvements Made"}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Program Activities:</h4>
                    <ul className="space-y-3">
                      {initiatives[activeInitiative].details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle
                            className={`h-5 w-5 text-${initiatives[activeInitiative].color}-500 mr-3 flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full bg-${initiatives[activeInitiative].color}-600 hover:bg-${initiatives[activeInitiative].color}-700`}
                  >
                    Support This Initiative
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Transformation Story</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Lives Transformed</h2>
            <p className="text-xl text-gray-600">How our support changed lives and empowered communities</p>
          </div>

          <Card className="max-w-5xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8 items-center p-8 lg:p-12">
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop"
                    alt="Fatuma Ahmed - Small Business Owner & Mother"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Fatuma Ahmed</h3>
                  <p className="text-purple-600 font-medium text-lg">Small Business Owner & Mother, Harar</p>
                </div>
                <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                  "As a single mother with a disability, I faced many challenges. ESPA's program provided me with
                  microfinance to start my tailoring business and advocacy support when I faced discrimination. Today, I
                  employ three other women and my children are in school."
                </blockquote>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Harar
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Program Beneficiary 2022
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-600 font-medium">Now employs 3 women and supports her family</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members supporting vulnerable groups and working together"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">Stand With the Vulnerable</h2>
            <p className="text-xl text-purple-100">
              Every person deserves dignity, respect, and equal opportunities. Join us in creating a more inclusive
              Ethiopia where vulnerable groups are protected, empowered, and celebrated.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-lg h-auto group"
              >
                <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
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
