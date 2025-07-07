"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Target, ArrowRight, CheckCircle, Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Timeline item component with animation
function TimelineItem({
  year,
  title,
  description,
  achievements,
  image,
  color,
  isActive,
  onClick,
}: {
  year: string
  title: string
  description: string
  achievements: string[]
  image: string
  color: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div className={`relative transition-all duration-500 ${isActive ? "scale-105" : ""}`}>
      <div
        className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
          isActive
            ? `bg-${color}-50 border-2 border-${color}-200 shadow-xl`
            : "bg-white border border-gray-200 hover:shadow-lg"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-full flex items-center justify-center mr-4`}
          >
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <Badge className={`bg-${color}-100 text-${color}-800 mb-1`}>{year}</Badge>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {achievements.slice(0, isActive ? achievements.length : 2).map((achievement, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className={`h-4 w-4 text-${color}-500 mr-2 flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-gray-600">{achievement}</span>
            </div>
          ))}
          {!isActive && achievements.length > 2 && (
            <div className="text-sm text-gray-400">+{achievements.length - 2} more achievements</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HistoryPage() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)
  const [visibleStats, setVisibleStats] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const timelineData = [
    {
      year: "2022",
      title: "Organization Founded",
      description: "April 19, 2022 - Official establishment of ESPA",
      achievements: [
        "Official registration as non-profit organization",
        "Establishment of founding board of directors",
        "Development of organizational mission and values",
        "Initial team recruitment and training",
      ],
      image: "/images/timeline-foundation.jpg",
      color: "amber",
    },
    {
      year: "Late 2022",
      title: "First Programs Launched",
      description: "June - December 2022 - Initial program implementation",
      achievements: [
        "Democratic education workshops in Addis Ababa",
        "Human rights awareness campaigns",
        "Community dialogue facilitation training",
        "Partnership with 3 local organizations",
      ],
      image: "/images/timeline-first-programs.jpg",
      color: "blue",
    },
    {
      year: "2023",
      title: "Regional Expansion",
      description: "Throughout 2023 - Scaling operations across Ethiopia",
      achievements: [
        "Programs extended to 5 regions",
        "Partnership with 10 local organizations",
        "Trained over 3,000 community members",
        "Established regional coordination offices",
      ],
      image: "/images/timeline-expansion.jpg",
      color: "green",
    },
    {
      year: "2024",
      title: "Recognition & Growth",
      description: "Current Year - Achieving national recognition",
      achievements: [
        "International partnership agreements signed",
        "Recognition by Ethiopian Human Rights Commission",
        "Launch of women empowerment initiative",
        "Digital platform development for wider reach",
      ],
      image: "/images/timeline-recognition.jpg",
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=1920&auto=format&fit=crop"
            alt="Ethiopian community gathering representing our historical journey"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-orange-800/60 to-red-800/40"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
                <Clock className="mr-2 h-5 w-5" />
                Our Journey Since 2022
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  History
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-12 leading-relaxed">
                From humble beginnings to impactful advocacy - discover the journey of Ethiopian Social Partnership
                Advocacy and our commitment to human rights and democracy
              </p>
              <div className="flex items-center justify-center space-x-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-amber-200">Years</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5,000+</div>
                  <div className="text-amber-200">Lives Impacted</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-amber-200">Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Story with Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-6 bg-amber-100 text-amber-800 text-lg px-6 py-3">Our Beginning</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  The Foundation of ESPA
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Ethiopian Social Partnership Advocacy (ESPA) was founded on April 19, 2022, by a group of dedicated
                    human rights advocates, legal professionals, and community leaders who recognized the urgent need
                    for an organization focused on promoting democratic values and protecting human rights in Ethiopia.
                  </p>
                  <p>
                    The founding members came together during a period of significant political and social
                    transformation in Ethiopia, recognizing that sustainable change required grassroots education,
                    advocacy, and community empowerment.
                  </p>
                  <p className="font-medium text-gray-900">
                    What started as informal discussions among concerned citizens evolved into a structured organization
                    with a clear mission: to ensure human rights, promote democratic values, and provide holistic
                    support to marginalized communities.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mb-2">12</div>
                    <div className="text-gray-600 font-medium">Founding Members</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                    <div className="text-gray-600 font-medium">Starting Location</div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517486430290-35657bdcef51?q=80&w=600&auto=format&fit=crop"
                    alt="ESPA founding ceremony with community leaders and advocates"
                    width={600}
                    height={700}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-amber-600 text-white text-sm px-3 py-1">April 19, 2022</Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-lg font-semibold mb-1">Foundation Ceremony</h3>
                    <p className="text-sm opacity-90">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Timeline of Growth</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones and achievements that have shaped ESPA's growth and impact over the years
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Timeline Navigation */}
              <div className="space-y-6">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    achievements={item.achievements}
                    image={item.image}
                    color={item.color}
                    isActive={activeTimelineItem === index}
                    onClick={() => setActiveTimelineItem(index)}
                  />
                ))}
              </div>

              {/* Active Timeline Details */}
              <div className="lg:sticky lg:top-8">
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div
                    className={`h-2 bg-gradient-to-r from-${timelineData[activeTimelineItem].color}-500 to-${timelineData[activeTimelineItem].color}-600`}
                  ></div>
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
                      alt={`${timelineData[activeTimelineItem].title} visual representation`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className={`bg-${timelineData[activeTimelineItem].color}-600 text-white mb-2`}>
                        {timelineData[activeTimelineItem].year}
                      </Badge>
                      <h3 className="text-xl font-bold">{timelineData[activeTimelineItem].title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {timelineData[activeTimelineItem].description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-lg">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {timelineData[activeTimelineItem].achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle
                              className={`h-5 w-5 text-${timelineData[activeTimelineItem].color}-500 mr-3 flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Key Achievements */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-100 text-green-800 text-lg px-6 py-3">Milestones</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Significant milestones that demonstrate our impact and growth over the years
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  number: "5,000+",
                  label: "Citizens educated about democratic rights and human rights principles",
                  color: "amber",
                  delay: 0,
                },
                {
                  icon: Target,
                  number: "25+",
                  label: "Educational programs and workshops conducted across Ethiopia",
                  color: "blue",
                  delay: 200,
                },
                {
                  icon: Award,
                  number: "15+",
                  label: "Strategic partnerships with local and international organizations",
                  color: "green",
                  delay: 400,
                },
                {
                  icon: Calendar,
                  number: "2+",
                  label: "Years of dedicated service to Ethiopian communities and human rights",
                  color: "purple",
                  delay: 600,
                },
              ].map((achievement, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group ${
                    visibleStats ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${achievement.delay}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br from-${achievement.color}-500 to-${achievement.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className={`text-4xl font-bold text-${achievement.color}-600 mb-4`}>
                      {achievement.number}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Principles with Enhanced Visual Design */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Foundation</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Founding Principles</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  ESPA was built on fundamental principles that continue to guide our work and decision-making
                  processes. These principles reflect our commitment to democratic values and human rights.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Grassroots Approach",
                      description:
                        "Working directly with communities to understand their needs and empower local leadership.",
                      color: "amber",
                    },
                    {
                      title: "Inclusive Participation",
                      description:
                        "Ensuring all voices are heard, especially those of marginalized and vulnerable groups.",
                      color: "blue",
                    },
                    {
                      title: "Evidence-Based Advocacy",
                      description: "Using research and data to inform our advocacy efforts and policy recommendations.",
                      color: "green",
                    },
                    {
                      title: "Collaborative Partnerships",
                      description: "Building strong alliances with like-minded organizations and stakeholders.",
                      color: "purple",
                    },
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${principle.color}-500 to-${principle.color}-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-lg">{principle.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop"
                    alt="ESPA founding principles in action through community engagement"
                    width={600}
                    height={700}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                {/* Floating principle badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <Star className="h-6 w-6 text-amber-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-500">
                  <Award className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision with Enhanced CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Ethiopian community members working together toward a bright future"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
              Looking Ahead
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Future of ESPA</h2>
            <p className="text-xl text-amber-100 mb-12 leading-relaxed">
              As we continue our journey, ESPA remains committed to expanding our impact, deepening our community
              engagement, and advancing human rights and democratic values across Ethiopia and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                <Target className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Our Strategic Plan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-amber-600 border-white hover:bg-amber-50 hover:text-amber-700 px-8 py-4 text-lg h-auto"
              >
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
