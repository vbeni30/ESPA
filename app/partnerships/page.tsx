"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Handshake,
  Building,
  Globe,
  Users,
  ArrowRight,
  Mail,
  CheckCircle,
  Target,
  Award,
  Network,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PartnershipsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const partnershipTypes = [
    {
      icon: Building,
      title: "Government Collaboration",
      description: "Work with government agencies to influence policy and implementation",
      benefits: ["Policy advocacy", "Training programs", "Research collaboration", "Public consultations"],
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "NGO Partnerships",
      description: "Collaborate with local and international NGOs to expand program reach",
      benefits: ["Joint program implementation", "Resource sharing", "Capacity building", "Advocacy coordination"],
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: Globe,
      title: "Corporate Social Responsibility",
      description: "Partner with businesses committed to social impact and community development",
      benefits: ["Funding support", "Employee volunteering", "Skills-based partnerships", "Technology support"],
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Award,
      title: "Academic Institutions",
      description: "Collaborate with universities and research institutions for evidence-based programs",
      benefits: ["Research partnerships", "Student internships", "Curriculum development", "Knowledge exchange"],
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ]

  const allPartners = [
    {
      name: "Ethiopian Human Rights Commission",
      type: "Government",
      description: "Collaborative efforts on human rights education and policy advocacy across Ethiopia.",
      focus: "Policy & Advocacy",
      duration: "Since 2019",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "15 joint initiatives",
      category: "government",
    },
    {
      name: "Addis Ababa University",
      type: "Academic",
      description: "Research collaboration and student internship programs in democratic governance studies.",
      focus: "Research & Education",
      duration: "Since 2020",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "50+ student interns",
      category: "academic",
    },
    {
      name: "UN Women Ethiopia",
      type: "International",
      description: "Joint programs on women's empowerment and gender equality initiatives.",
      focus: "Women's Rights",
      duration: "Since 2018",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "8 joint programs",
      category: "international",
    },
    {
      name: "Ethiopian Women Lawyers Association",
      type: "Local NGO",
      description: "Legal support services and advocacy for women's rights and gender-based violence prevention.",
      focus: "Legal Support",
      duration: "Since 2021",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "200+ cases supported",
      category: "ngo",
    },
    {
      name: "Transparency International Ethiopia",
      type: "National NGO",
      description: "Anti-corruption advocacy and transparency promotion in governance and public institutions.",
      focus: "Transparency",
      duration: "Since 2020",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "12 advocacy campaigns",
      category: "ngo",
    },
    {
      name: "Save the Children Ethiopia",
      type: "International NGO",
      description: "Child protection programs and advocacy for children's rights and welfare.",
      focus: "Child Protection",
      duration: "Since 2019",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "5,000+ children reached",
      category: "international",
    },
    {
      name: "Ministry of Women and Social Affairs",
      type: "Government",
      description: "Collaborative programs on women's empowerment and social protection initiatives.",
      focus: "Social Protection",
      duration: "Since 2020",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "25 joint programs",
      category: "government",
    },
    {
      name: "Jimma University",
      type: "Academic",
      description: "Research partnerships in human rights education and community development studies.",
      focus: "Community Development",
      duration: "Since 2021",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "30+ research projects",
      category: "academic",
    },
    {
      name: "UNICEF Ethiopia",
      type: "International",
      description: "Child rights advocacy and protection programs across Ethiopian communities.",
      focus: "Child Rights",
      duration: "Since 2019",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "10,000+ children reached",
      category: "international",
    },
    {
      name: "Ethiopian Civil Society Organizations Forum",
      type: "Local NGO",
      description: "Coordination and capacity building for civil society organizations nationwide.",
      focus: "Civil Society",
      duration: "Since 2018",
      logo: "/placeholder.svg?height=80&width=80",
      impact: "100+ CSOs supported",
      category: "ngo",
    },
  ]

  const getFilteredPartners = () => {
    if (activeTab === "all") return allPartners
    return allPartners.filter((partner) => partner.category === activeTab)
  }

  const partnershipBenefits = [
    {
      icon: Network,
      title: "Expanded Reach",
      description: "Access new communities and beneficiaries through partner networks",
    },
    {
      icon: Zap,
      title: "Enhanced Impact",
      description: "Amplify program effectiveness through collaborative approaches",
    },
    {
      icon: TrendingUp,
      title: "Shared Resources",
      description: "Pool expertise, funding, and infrastructure for greater efficiency",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Share challenges and reduce operational risks through collaboration",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Unique Hero Section with Split Design */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="partnership-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="#f97316" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#partnership-pattern)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 container px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Handshake className="h-4 w-4" />
                <span>Strategic Partnerships</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Building <span className="text-orange-600">Alliances</span> for Change
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in the power of collaboration. Through strategic partnerships, we amplify our impact and
                create lasting change across Ethiopian communities.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Active Partners</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Joint Projects</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
                <div className="text-sm text-gray-600">People Reached</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Handshake className="h-5 w-5 mr-2" />
                Partner With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Building className="h-5 w-5 mr-2" />
                View Partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types - Unique Card Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with various types of organizations to maximize our impact and reach more communities
                across Ethiopia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`h-2 ${type.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${type.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <type.icon className={`h-6 w-6 ${type.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-orange-600 transition-colors">
                          {type.title}
                        </CardTitle>
                        <CardDescription className="text-base">{type.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners - Masonry Style Layout with Working Filters */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Current Partners</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're proud to work alongside these organizations in our mission to promote human rights and democracy.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12 bg-gray-100">
                <TabsTrigger value="all">All Partners ({allPartners.length})</TabsTrigger>
                <TabsTrigger value="government">
                  Government ({allPartners.filter((p) => p.category === "government").length})
                </TabsTrigger>
                <TabsTrigger value="academic">
                  Academic ({allPartners.filter((p) => p.category === "academic").length})
                </TabsTrigger>
                <TabsTrigger value="ngo">NGOs ({allPartners.filter((p) => p.category === "ngo").length})</TabsTrigger>
                <TabsTrigger value="international">
                  International ({allPartners.filter((p) => p.category === "international").length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFilteredPartners().map((partner, index) => (
                    <Card
                      key={index}
                      className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4 mb-4">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                          <div className="flex-1">
                            <Badge variant="outline" className="text-xs mb-2">
                              {partner.type}
                            </Badge>
                            <CardTitle className="text-lg leading-tight group-hover:text-orange-600 transition-colors">
                              {partner.name}
                            </CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-sm">{partner.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Focus Area:</span>
                            <Badge variant="secondary" className="text-xs">
                              {partner.focus}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Partnership:</span>
                            <span className="font-medium">{partner.duration}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Impact:</span>
                            <span className="font-medium text-orange-600">{partner.impact}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {getFilteredPartners().length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No partners found in this category.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Partnership Benefits - Horizontal Layout */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Partner With ESPA?</h2>
              <p className="text-lg text-orange-100 max-w-3xl mx-auto">
                Discover the mutual benefits of collaborating with our organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-orange-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Application - Unique Form Design */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start a Partnership</h2>
              <p className="text-lg text-gray-600">
                Ready to collaborate? Tell us about your organization and how we can work together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Partnership Application</CardTitle>
                    <CardDescription>Tell us about your organization and partnership goals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                        <Input placeholder="Enter organization name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ngo">NGO/Non-profit</SelectItem>
                            <SelectItem value="government">Government Agency</SelectItem>
                            <SelectItem value="academic">Academic Institution</SelectItem>
                            <SelectItem value="corporate">Corporate/Business</SelectItem>
                            <SelectItem value="international">International Organization</SelectItem>
                            <SelectItem value="community">Community Organization</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                        <Input placeholder="Full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title *</label>
                        <Input placeholder="Job title" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input type="email" placeholder="contact@organization.org" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input type="tel" placeholder="+251 XXX XXX XXX" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization Website</label>
                      <Input placeholder="https://www.organization.org" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Mission & Focus Areas *
                      </label>
                      <Textarea placeholder="Describe your organization's mission and main focus areas..." rows={4} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Proposed Partnership Areas *
                      </label>
                      <Textarea
                        placeholder="How would you like to collaborate with ESPA? What areas of partnership interest you?"
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resources You Can Contribute
                      </label>
                      <Textarea
                        placeholder="What resources, expertise, or support can your organization contribute?"
                        rows={3}
                      />
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                      Submit Partnership Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Partnership Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-orange-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Application</h4>
                          <p className="text-sm text-gray-600">Submit your partnership application</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-orange-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Review</h4>
                          <p className="text-sm text-gray-600">We review and assess alignment</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-orange-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Meeting</h4>
                          <p className="text-sm text-gray-600">Initial consultation meeting</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-orange-600">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Agreement</h4>
                          <p className="text-sm text-gray-600">Formalize partnership terms</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">partnerships@espa-ethiopia.org</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Partnership Department</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stronger Together</h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed">
              Through strategic partnerships, we can amplify our impact and create lasting change in Ethiopian
              communities. Let's work together to build a more just and democratic society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                <Handshake className="mr-2 h-5 w-5" />
                Start a Partnership
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-orange-600 border-white hover:bg-orange-50 hover:text-orange-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
