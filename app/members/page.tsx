import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Crown, Shield, Star, CheckCircle, ArrowRight, Award, Target, Handshake, UserPlus } from "lucide-react"
import Image from "next/image"

export default function MembersPage() {
  const membershipTiers = [
    {
      id: 1,
      name: "Individual Member",
      price: "Free",
      description: "Perfect for individuals who want to support our mission",
      features: [
        "Access to newsletters and updates",
        "Invitation to public events",
        "Voting rights in general assemblies",
        "Access to member resources",
        "Community forum participation",
      ],
      icon: Users,
      color: "blue",
      popular: false,
    },
    {
      id: 2,
      name: "Supporting Member",
      price: "$25/year",
      description: "Enhanced membership with additional benefits",
      features: [
        "All Individual Member benefits",
        "Priority event registration",
        "Quarterly impact reports",
        "Member-only webinars",
        "Direct communication with leadership",
        "Recognition in annual report",
      ],
      icon: Star,
      color: "green",
      popular: true,
    },
    {
      id: 3,
      name: "Organizational Member",
      price: "$100/year",
      description: "For organizations aligned with our mission",
      features: [
        "All Supporting Member benefits",
        "Partnership opportunities",
        "Co-branding possibilities",
        "Dedicated account manager",
        "Custom collaboration projects",
        "Board meeting invitations",
      ],
      icon: Crown,
      color: "purple",
      popular: false,
    },
  ]

  const memberBenefits = [
    {
      icon: Shield,
      title: "Advocacy Voice",
      description: "Your membership strengthens our collective voice in advocating for human rights and democracy.",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with like-minded individuals and organizations working toward social change.",
    },
    {
      icon: Award,
      title: "Exclusive Access",
      description: "Get early access to reports, events, and educational resources.",
    },
    {
      icon: Target,
      title: "Direct Impact",
      description: "Your membership directly supports our programs and community initiatives.",
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Collaborate on projects and initiatives that align with your interests.",
    },
    {
      icon: CheckCircle,
      title: "Recognition",
      description: "Be recognized as a supporter of human rights and democratic values.",
    },
  ]

  const currentMembers = [
    {
      name: "Dr. Almaz Bekele",
      role: "Human Rights Advocate",
      organization: "Ethiopian Women Lawyers Association",
      memberSince: "2020",
      image: "/placeholder.svg?height=80&width=80",
      quote: "ESPA membership has connected me with a powerful network of advocates working for positive change.",
    },
    {
      name: "Tadesse Girma",
      role: "Community Leader",
      organization: "Addis Ababa Community Council",
      memberSince: "2019",
      image: "/placeholder.svg?height=80&width=80",
      quote: "Being an ESPA member has enhanced my ability to serve my community effectively.",
    },
    {
      name: "Hanan Ahmed",
      role: "Civil Society Coordinator",
      organization: "Youth Development Network",
      memberSince: "2021",
      image: "/placeholder.svg?height=80&width=80",
      quote: "The resources and support from ESPA have been invaluable for our youth programs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Users className="h-3 w-3 mr-1" />
                  Membership
                </Badge>
                <Badge className="bg-yellow-500 text-black font-medium">
                  <Star className="h-3 w-3 mr-1" />
                  500+ Members
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Join Our <span className="text-yellow-300">Community</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Become a member of ESPA and join a growing community of advocates, activists, and organizations working
                to advance human rights and democracy in Ethiopia.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-200 text-sm">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                  <div className="text-blue-200 text-sm">Partner Organizations</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Become a Member
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Users className="h-5 w-5 mr-2" />
                  View Benefits
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="ESPA Members Community"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-xs text-gray-600">Membership Tiers</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">95%</div>
                    <div className="text-xs text-gray-600">Member Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Membership Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the membership level that best fits your commitment and involvement with our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "ring-2 ring-green-500 scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-${tier.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <tier.icon className={`h-8 w-8 text-${tier.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${tier.popular ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
                  >
                    {tier.price === "Free" ? "Join Now" : "Subscribe"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Member Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the exclusive benefits and opportunities available to ESPA members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our community members about their experience with ESPA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.organization}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        Member since {member.memberSince}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{member.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Application */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join ESPA Today</h2>
              <p className="text-lg text-gray-600">Complete the form below to begin your membership application</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Membership Application</CardTitle>
                <CardDescription>Please provide your information to join our community</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="individual" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="individual">Individual</TabsTrigger>
                    <TabsTrigger value="organization">Organization</TabsTrigger>
                  </TabsList>

                  <TabsContent value="individual" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name *</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name *</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Profession/Occupation</label>
                      <Input placeholder="Enter your profession" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Areas of Interest</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="human-rights" />
                          <label htmlFor="human-rights" className="text-sm">
                            Human Rights
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="democracy" />
                          <label htmlFor="democracy" className="text-sm">
                            Democracy
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="community" />
                          <label htmlFor="community" className="text-sm">
                            Community Development
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="advocacy" />
                          <label htmlFor="advocacy" className="text-sm">
                            Advocacy
                          </label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="organization" className="space-y-6 mt-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Organization Name *</label>
                      <Input placeholder="Enter organization name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Contact Person *</label>
                        <Input placeholder="Full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Position/Title *</label>
                        <Input placeholder="Job title" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input type="email" placeholder="contact@organization.org" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Organization Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ngo">NGO/Non-profit</SelectItem>
                          <SelectItem value="academic">Academic Institution</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="private">Private Sector</SelectItem>
                          <SelectItem value="community">Community Organization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Organization Mission</label>
                      <Textarea placeholder="Briefly describe your organization's mission and activities..." rows={3} />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Membership Tier *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership tier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Member (Free)</SelectItem>
                        <SelectItem value="supporting">Supporting Member ($25/year)</SelectItem>
                        <SelectItem value="organizational">Organizational Member ($100/year)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Why do you want to join ESPA?</label>
                    <Textarea
                      placeholder="Tell us about your motivation for joining and how you hope to contribute..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">
                      I agree to ESPA's membership terms and conditions *
                    </label>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Submit Application
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Be part of a movement that's making a real difference in Ethiopian communities. Your membership matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Active Members</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Partner Organizations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Member Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
