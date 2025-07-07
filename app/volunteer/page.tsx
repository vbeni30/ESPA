import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users, Clock, MapPin, Star, CheckCircle, ArrowRight, Award, Target, Handshake } from "lucide-react"
import Image from "next/image"

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      id: 1,
      title: "Community Education Facilitator",
      description: "Lead democratic education workshops in local communities",
      location: "Addis Ababa",
      timeCommitment: "4-6 hours/week",
      skills: ["Public Speaking", "Community Engagement", "Amharic/English"],
      urgent: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Human Rights Documentation Assistant",
      description: "Help document and research human rights cases",
      location: "Remote/Flexible",
      timeCommitment: "3-5 hours/week",
      skills: ["Research", "Documentation", "Attention to Detail"],
      urgent: false,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Event Coordination Support",
      description: "Assist with organizing community events and workshops",
      location: "Various Locations",
      timeCommitment: "2-4 hours/week",
      skills: ["Organization", "Communication", "Event Planning"],
      urgent: false,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Digital Content Creator",
      description: "Create engaging content for social media and website",
      location: "Remote",
      timeCommitment: "3-4 hours/week",
      skills: ["Content Creation", "Social Media", "Design"],
      urgent: false,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Translation Specialist",
      description: "Translate materials between Amharic, English, and local languages",
      location: "Remote/Flexible",
      timeCommitment: "2-5 hours/week",
      skills: ["Multilingual", "Translation", "Cultural Sensitivity"],
      urgent: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Legal Research Assistant",
      description: "Support legal research and case documentation",
      location: "Addis Ababa",
      timeCommitment: "5-8 hours/week",
      skills: ["Legal Research", "Analysis", "Documentation"],
      urgent: false,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const volunteerBenefits = [
    {
      icon: Heart,
      title: "Make Real Impact",
      description: "Directly contribute to positive change in Ethiopian communities",
    },
    {
      icon: Users,
      title: "Build Networks",
      description: "Connect with like-minded individuals and professional networks",
    },
    {
      icon: Star,
      title: "Develop Skills",
      description: "Gain valuable experience in advocacy, community work, and leadership",
    },
    {
      icon: CheckCircle,
      title: "Recognition",
      description: "Receive certificates and references for your volunteer contributions",
    },
    {
      icon: Award,
      title: "Training Opportunities",
      description: "Access to specialized training programs and workshops",
    },
    {
      icon: Target,
      title: "Flexible Commitment",
      description: "Choose opportunities that fit your schedule and interests",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Alemayehu",
      role: "Community Education Volunteer",
      quote:
        "Volunteering with ESPA has been incredibly rewarding. I've helped educate over 200 community members about their democratic rights.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Tadesse",
      role: "Human Rights Documentation Volunteer",
      quote:
        "The training and support provided by ESPA helped me develop valuable research skills while contributing to important human rights work.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Hanan Mohammed",
      role: "Event Coordination Volunteer",
      quote:
        "Being part of ESPA's volunteer team has connected me with amazing people and given me hands-on experience in event management.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
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
                  <Heart className="h-3 w-3 mr-1" />
                  Get Involved
                </Badge>
                <Badge className="bg-yellow-500 text-black font-medium">
                  <Star className="h-3 w-3 mr-1" />
                  250+ Active Volunteers
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Volunteer With <span className="text-yellow-300">ESPA</span>
              </h1>

              <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
                Join our mission to advance human rights and democracy in Ethiopia. Your time and skills can make a
                meaningful difference in communities across the country.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">15K+</div>
                  <div className="text-red-200 text-sm">Volunteer Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                  <div className="text-red-200 text-sm">Communities Served</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                  <Heart className="h-5 w-5 mr-2" />
                  Start Volunteering
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Users className="h-5 w-5 mr-2" />
                  View Opportunities
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="ESPA Volunteers in Action"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Handshake className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">6</div>
                    <div className="text-xs text-gray-600">Open Positions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Current Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore volunteer positions that match your skills and interests. All positions include comprehensive
              training and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {opportunity.urgent && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white">Urgent</Badge>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-lg font-bold leading-tight">{opportunity.title}</h3>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardDescription className="text-sm">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {opportunity.timeCommitment}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Volunteer With ESPA?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the benefits and rewards of volunteering with our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-red-600" />
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

      {/* Volunteer Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Volunteer Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our volunteers about their experiences and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Apply to Volunteer</h2>
              <p className="text-lg text-gray-600">Fill out the form below to start your volunteer journey with ESPA</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
                <CardDescription>Please provide your information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                  <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                  <Input placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location/City *</label>
                  <Input placeholder="Enter your city" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Areas of Interest *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Democratic Education</SelectItem>
                      <SelectItem value="human-rights">Human Rights Advocacy</SelectItem>
                      <SelectItem value="community">Community Engagement</SelectItem>
                      <SelectItem value="events">Event Organization</SelectItem>
                      <SelectItem value="research">Research & Documentation</SelectItem>
                      <SelectItem value="admin">Administrative Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Availability *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 hours per week</SelectItem>
                      <SelectItem value="4-6">4-6 hours per week</SelectItem>
                      <SelectItem value="7-10">7-10 hours per week</SelectItem>
                      <SelectItem value="10+">More than 10 hours per week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Skills & Experience</label>
                  <Textarea
                    placeholder="Tell us about your relevant skills, experience, and what motivates you to volunteer with ESPA..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Languages Spoken</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="amharic" />
                      <label htmlFor="amharic" className="text-sm">
                        Amharic
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="english" />
                      <label htmlFor="english" className="text-sm">
                        English
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="oromo" />
                      <label htmlFor="oromo" className="text-sm">
                        Oromo
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tigrinya" />
                      <label htmlFor="tigrinya" className="text-sm">
                        Tigrinya
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I agree to ESPA's volunteer terms and conditions *
                  </label>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                  Submit Application
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed">
              Join hundreds of volunteers who are already making an impact in Ethiopian communities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">250+</div>
                <div className="text-red-100">Active Volunteers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15K+</div>
                <div className="text-red-100">Volunteer Hours</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-red-100">Communities Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
