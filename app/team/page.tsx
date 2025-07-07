"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Twitter, Users, Award, BookOpen, MapPin, Calendar, Star, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Team member card component with enhanced interactivity
function TeamMemberCard({
  member,
  isExpanded,
  onToggle,
}: {
  member: any
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <Card
      className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden ${
        isExpanded ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge className={`bg-${member.color}-100 text-${member.color}-800`}>{member.experience}</Badge>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className={`w-12 h-12 bg-${member.color}-600 rounded-full flex items-center justify-center mb-2`}>
              <member.icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <CardDescription className={`text-${member.color}-600 font-medium text-lg`}>{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-gray-600 leading-relaxed">{member.description}</p>
        {isExpanded && (
          <div className="space-y-4 text-left">
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{member.phone}</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Responsibilities:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {member.responsibilities?.map((resp: string, index: number) => (
                  <li key={index}>• {resp}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="flex justify-center space-x-3 pt-4">
          <Link
            href="#"
            className={`w-8 h-8 bg-${member.color}-600 rounded-full flex items-center justify-center text-white hover:bg-${member.color}-700 transition-colors`}
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onToggle}
          className={`group-hover:bg-${member.color}-50 transition-colors`}
        >
          {isExpanded ? "Show Less" : "View Profile"}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState("leadership")

  const leadershipTeam = [
    {
      name: "Dr. Sarah Alemayehu",
      role: "Executive Director",
      experience: "15+ Years Experience",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
      description:
        "Leading ESPA's mission with extensive experience in international relations and human rights advocacy.",
      email: "sarah@espa-ethiopia.org",
      phone: "+251 911 123 456",
      color: "blue",
      icon: Award,
      responsibilities: [
        "Strategic planning and organizational leadership",
        "Partnership development and stakeholder relations",
        "Policy advocacy and government relations",
        "International cooperation and funding",
      ],
    },
    {
      name: "Mr. Dawit Tekle",
      role: "Program Director",
      experience: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      description: "Overseeing program development with expertise in community development and project management.",
      email: "dawit@espa-ethiopia.org",
      phone: "+251 911 234 567",
      color: "emerald",
      icon: BookOpen,
      responsibilities: [
        "Program design and implementation",
        "Community engagement and outreach",
        "Training and capacity building",
        "Field operations coordination",
      ],
    },
    {
      name: "Ms. Hanan Mohammed",
      role: "Advocacy Coordinator",
      experience: "10+ Years Experience",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop",
      description: "Leading advocacy efforts with background in law and human rights, specializing in policy analysis.",
      email: "hanan@espa-ethiopia.org",
      phone: "+251 911 345 678",
      color: "purple",
      icon: Users,
      responsibilities: [
        "Policy advocacy and legal support",
        "Human rights campaign development",
        "Government and stakeholder relations",
        "Legal research and analysis",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="ESPA team collaboration and leadership"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-800/60 to-pink-800/40"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
                <Users className="mr-2 h-5 w-5" />
                Meet Our People
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-12 leading-relaxed">
                Meet the dedicated professionals and volunteers who drive ESPA's mission to promote human rights,
                democracy, and social justice across Ethiopia
              </p>
              <div className="flex items-center justify-center space-x-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-indigo-200">Team Members</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-indigo-200">Regions</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-indigo-200">Years Combined Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Navigation */}
      <section className="py-12 bg-gray-50 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "leadership", label: "Leadership Team", icon: Award },
              { id: "program", label: "Program Staff", icon: BookOpen },
              { id: "board", label: "Board of Directors", icon: Users },
              { id: "volunteers", label: "Volunteers", icon: Heart },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === id
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                }`}
              >
                <Icon className="mr-2 h-5 w-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {activeSection === "leadership" && (
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-indigo-100 text-indigo-800 text-lg px-6 py-3">Leadership</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our experienced leaders guide ESPA's strategic direction and ensure effective implementation of our
                  programs across Ethiopia
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {leadershipTeam.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    member={member}
                    isExpanded={expandedMember === index}
                    onToggle={() => setExpandedMember(expandedMember === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Program Staff */}
      {activeSection === "program" && (
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Program Team</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Program Staff</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our dedicated program staff work directly with communities to implement our initiatives and create
                  lasting impact
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Ms. Tigist Haile",
                    role: "Education Program Manager",
                    email: "tigist@espa-ethiopia.org",
                    phone: "+251 911 456 789",
                    image:
                      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&auto=format&fit=crop",
                    location: "Addis Ababa",
                    experience: "8 Years",
                  },
                  {
                    name: "Mr. Yohannes Desta",
                    role: "Community Outreach Coordinator",
                    email: "yohannes@espa-ethiopia.org",
                    phone: "+251 911 567 890",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                    location: "Oromia Region",
                    experience: "6 Years",
                  },
                  {
                    name: "Ms. Meron Tadesse",
                    role: "Women's Empowerment Specialist",
                    email: "meron@espa-ethiopia.org",
                    phone: "+251 911 678 901",
                    image:
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
                    location: "Amhara Region",
                    experience: "7 Years",
                  },
                  {
                    name: "Mr. Daniel Worku",
                    role: "Research & Documentation Officer",
                    email: "daniel@espa-ethiopia.org",
                    phone: "+251 911 789 012",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                    location: "Tigray Region",
                    experience: "5 Years",
                  },
                ].map((staff, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={staff.image || "/placeholder.svg"}
                        alt={staff.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <Badge className="bg-emerald-600 text-white text-xs mb-1">{staff.experience}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-1">{staff.name}</h3>
                      <p className="text-emerald-600 text-sm font-medium mb-2">{staff.role}</p>
                      <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
                        <MapPin className="h-3 w-3 mr-1" />
                        {staff.location}
                      </div>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center justify-center">
                          <Mail className="h-3 w-3 mr-1" />
                          <span className="truncate">{staff.email}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Phone className="h-3 w-3 mr-1" />
                          <span>{staff.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Board of Directors */}
      {activeSection === "board" && (
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Governance</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Board of Directors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our board provides strategic oversight and governance, ensuring ESPA maintains its mission and values
                  while achieving sustainable impact
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Dr. Mehari Taddele Maru",
                    role: "Board Chairperson",
                    credentials: "PhD in Political Science",
                    experience: "20+ Years in Governance",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                    expertise: ["Governance", "Policy Analysis", "International Relations"],
                  },
                  {
                    name: "Ms. Bethlehem Tilahun",
                    role: "Vice Chairperson",
                    credentials: "LLM in Human Rights Law",
                    experience: "15+ Years in Legal Practice",
                    image:
                      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop",
                    expertise: ["Human Rights Law", "Legal Advocacy", "Women's Rights"],
                  },
                  {
                    name: "Mr. Getachew Assefa",
                    role: "Treasurer",
                    credentials: "CPA, MBA Finance",
                    experience: "18+ Years in Finance",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                    expertise: ["Financial Management", "Audit", "Risk Management"],
                  },
                  {
                    name: "Dr. Seble Kassaye",
                    role: "Secretary",
                    credentials: "PhD in Development Studies",
                    experience: "12+ Years in Development",
                    image:
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
                    expertise: ["Community Development", "Research", "Program Evaluation"],
                  },
                  {
                    name: "Mr. Alemayehu Fentaw",
                    role: "Board Member",
                    credentials: "MA in Public Administration",
                    experience: "16+ Years in Civil Society",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                    expertise: ["Civil Society", "Advocacy", "Capacity Building"],
                  },
                  {
                    name: "Ms. Rahel Gizaw",
                    role: "Board Member",
                    credentials: "MSc in Social Work",
                    experience: "14+ Years in Social Services",
                    image:
                      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop",
                    expertise: ["Social Work", "Community Organizing", "Vulnerable Groups"],
                  },
                ].map((member, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge className="bg-purple-600 text-white mb-2">{member.experience}</Badge>
                      </div>
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
                      <p className="text-sm text-gray-500">{member.credentials}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Areas of Expertise:</h4>
                        <div className="flex flex-wrap justify-center gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Volunteers Section */}
      {activeSection === "volunteers" && (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-pink-100 text-pink-800 text-lg px-6 py-3">Community</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Volunteers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The heart of ESPA's work is powered by dedicated volunteers who contribute their time, skills, and
                  passion to advance our mission
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Volunteer Community</h3>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Our volunteers are the backbone of ESPA's community impact. From university students to retired
                      professionals, our diverse volunteer base brings unique skills and perspectives to our work.
                    </p>
                    <p>
                      Whether you can contribute a few hours a month or several days a week, there are meaningful ways
                      to get involved and make a difference in promoting human rights and democracy in Ethiopia.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-2">150+</div>
                      <div className="text-gray-600">Active Volunteers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-2">2,000+</div>
                      <div className="text-gray-600">Volunteer Hours/Month</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
                    alt="ESPA volunteers working together in community programs"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Volunteer Impact</div>
                        <div className="text-sm text-gray-600">Making a difference</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteer Opportunities */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Community Education",
                    description: "Help facilitate workshops on democratic rights and human rights awareness",
                    icon: BookOpen,
                    color: "blue",
                    commitment: "4-6 hours/month",
                  },
                  {
                    title: "Event Support",
                    description: "Assist with organizing and running community events and awareness campaigns",
                    icon: Calendar,
                    color: "green",
                    commitment: "2-4 hours/month",
                  },
                  {
                    title: "Research & Documentation",
                    description: "Support research activities and help document program outcomes and impact",
                    icon: BookOpen,
                    color: "purple",
                    commitment: "6-8 hours/month",
                  },
                  {
                    title: "Translation Services",
                    description: "Help translate materials into local languages to reach more communities",
                    icon: Users,
                    color: "orange",
                    commitment: "3-5 hours/month",
                  },
                  {
                    title: "Digital Outreach",
                    description: "Manage social media and help create digital content for awareness campaigns",
                    icon: Star,
                    color: "pink",
                    commitment: "2-3 hours/week",
                  },
                  {
                    title: "Administrative Support",
                    description: "Provide office support, data entry, and help with organizational tasks",
                    icon: Award,
                    color: "indigo",
                    commitment: "4-6 hours/month",
                  },
                ].map((opportunity, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${opportunity.color}-500 to-${opportunity.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <opportunity.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                      <Badge variant="outline" className="w-fit text-xs">
                        {opportunity.commitment}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{opportunity.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-16">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 text-lg h-auto"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Join Our Team CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="ESPA team collaboration representing opportunities to join"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
              Join Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h2>
            <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
              Are you passionate about human rights, democracy, and social justice? Join our team of dedicated
              professionals and volunteers working to create positive change across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-indigo-600 border-white hover:bg-indigo-50 hover:text-indigo-700 px-8 py-4 text-lg h-auto"
              >
                Volunteer With Us
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
