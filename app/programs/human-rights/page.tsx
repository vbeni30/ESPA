"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Scale,
  Users,
  Phone,
  Calendar,
  MapPin,
  CheckCircle,
  Heart,
  BookOpen,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HumanRightsPage() {
  const [activeCampaign, setActiveCampaign] = useState(0)

  const campaigns = [
    {
      title: "Freedom of Expression",
      description: "Advocating for press freedom and freedom of speech across Ethiopia",
      icon: Shield,
      color: "red",
      activeCases: 15,
      successRate: 78,
      details: [
        "Legal representation for journalists",
        "Policy advocacy with government",
        "Public awareness campaigns",
        "International advocacy efforts",
      ],
    },
    {
      title: "Women's Rights",
      description: "Protecting women from discrimination and gender-based violence",
      icon: Users,
      color: "blue",
      activeCases: 450,
      successRate: 89,
      details: [
        "Legal aid for survivors",
        "Economic empowerment programs",
        "Awareness and prevention campaigns",
        "Support group facilitation",
      ],
    },
    {
      title: "Prison Reform",
      description: "Improving conditions and rights of detained persons",
      icon: Scale,
      color: "green",
      activeCases: 12,
      successRate: 65,
      details: [
        "Regular facility inspections",
        "Legal advocacy for detainees",
        "Policy reform recommendations",
        "Training for prison staff",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop"
            alt="Human rights advocacy meeting with community members and legal professionals"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/70 to-red-700/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200 text-lg px-6 py-3">
                  <Shield className="h-4 w-4 mr-2" />
                  Human Rights Advocacy
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Defending Human
                  <span className="text-red-300 block">Rights & Dignity</span>
                </h1>
                <p className="text-xl text-red-100 leading-relaxed max-w-2xl">
                  Protecting fundamental rights, providing legal support, and advocating for justice and equality for
                  all Ethiopian citizens.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-red-900 hover:bg-red-50 font-semibold px-8 py-4 text-lg h-auto group"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Legal Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Know Your Rights
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop"
                  alt="Human rights advocacy meeting in progress"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">2,500+</p>
                    <p className="text-sm text-gray-600">Cases Supported</p>
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
            <Badge className="mb-6 bg-red-100 text-red-800 text-lg px-6 py-3">Program Overview</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Human Rights Protection</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our Human Rights Program provides legal support, advocacy, and education to ensure that all Ethiopian
              citizens can enjoy their fundamental rights and freedoms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Legal Support",
                description:
                  "Free legal aid and representation for individuals facing human rights violations and injustices.",
                icon: Scale,
                color: "red",
                stats: "1,890 cases",
              },
              {
                title: "Policy Advocacy",
                description: "Working with government and institutions to strengthen human rights laws and policies.",
                icon: Users,
                color: "blue",
                stats: "12 policy changes",
              },
              {
                title: "Rights Education",
                description:
                  "Community education programs to raise awareness about human rights and available protections.",
                icon: BookOpen,
                color: "emerald",
                stats: "5,000+ educated",
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

      {/* Key Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Our Services</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Comprehensive Legal Support</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Legal Consultation",
                    description: "Free legal advice and consultation for individuals facing human rights violations.",
                    icon: Scale,
                  },
                  {
                    title: "Court Representation",
                    description: "Professional legal representation in courts for human rights cases.",
                    icon: Shield,
                  },
                  {
                    title: "Documentation & Reporting",
                    description: "Systematic documentation of human rights violations and advocacy for accountability.",
                    icon: BookOpen,
                  },
                  {
                    title: "Emergency Response",
                    description: "Rapid response team for urgent human rights situations and crises.",
                    icon: AlertTriangle,
                  },
                ].map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-lg">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600&auto=format&fit=crop"
                  alt="Human rights legal consultation and support services"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Campaigns */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Active Campaigns</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Current Campaigns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Active advocacy campaigns and ongoing human rights initiatives making real impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Campaign Navigation */}
            <div className="space-y-4">
              {campaigns.map((campaign, index) => {
                const IconComponent = campaign.icon
                return (
                  <div
                    key={index}
                    onClick={() => setActiveCampaign(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeCampaign === index
                        ? "bg-white shadow-xl scale-105"
                        : "bg-gray-50 hover:bg-white hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${campaign.color}-500 to-${campaign.color}-600 rounded-full flex items-center justify-center mr-4`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{campaign.title}</h3>
                        <p className="text-sm text-gray-600">
                          {campaign.activeCases} active cases • {campaign.successRate}% success rate
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">{campaign.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Active Campaign Details */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div
                  className={`h-2 bg-gradient-to-r from-${campaigns[activeCampaign].color}-500 to-${campaigns[activeCampaign].color}-600`}
                ></div>
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${campaigns[activeCampaign].color}-500 to-${campaigns[activeCampaign].color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    {(() => {
                      const ActiveIcon = campaigns[activeCampaign].icon
                      return <ActiveIcon className="h-10 w-10 text-white" />
                    })()}
                  </div>
                  <CardTitle className="text-2xl mb-4">{campaigns[activeCampaign].title}</CardTitle>
                  <Badge
                    className={`bg-${campaigns[activeCampaign].color}-100 text-${campaigns[activeCampaign].color}-800`}
                  >
                    Active Campaign
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{campaigns[activeCampaign].description}</p>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className={`text-3xl font-bold text-${campaigns[activeCampaign].color}-600`}>
                        {campaigns[activeCampaign].activeCases}
                      </div>
                      <div className="text-sm text-gray-600">Active Cases</div>
                    </div>
                    <div>
                      <div className={`text-3xl font-bold text-${campaigns[activeCampaign].color}-600`}>
                        {campaigns[activeCampaign].successRate}%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Campaign Activities:</h4>
                    <ul className="space-y-3">
                      {campaigns[activeCampaign].details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle
                            className={`h-5 w-5 text-${campaigns[activeCampaign].color}-500 mr-3 flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full bg-${campaigns[activeCampaign].color}-600 hover:bg-${campaigns[activeCampaign].color}-700`}
                  >
                    Support This Campaign
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-100 text-red-800 text-lg px-6 py-3">Success Story</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Lives Changed Through Justice</h2>
            <p className="text-xl text-gray-600">How our legal support changed lives and protected rights</p>
          </div>

          <Card className="max-w-5xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8 items-center p-8 lg:p-12">
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                    alt="Meron Haile - Small Business Owner"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Meron Haile</h3>
                  <p className="text-red-600 font-medium text-lg">Small Business Owner, Dire Dawa</p>
                </div>
                <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                  "When my business was unfairly shut down by local authorities, I thought I had no recourse. ESPA's
                  legal team not only helped me understand my rights but also represented me in court. Today, my
                  business is thriving again, and I know my rights are protected."
                </blockquote>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Dire Dawa
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Case Resolved 2023
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-600 font-medium">Business reopened with full compensation</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members supporting human rights advocacy"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">Need Immediate Help?</h2>
            <p className="text-xl text-red-100">
              If you or someone you know is facing a human rights violation, don't wait. Our emergency response team is
              available 24/7 to provide immediate assistance and legal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 text-lg h-auto group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Emergency Hotline
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg h-auto"
              >
                <Heart className="h-5 w-5 mr-2" />
                Report a Violation
              </Button>
            </div>
            <div className="text-red-100">
              <p className="text-sm">Emergency Hotline: +251-11-XXX-XXXX (Available 24/7)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
