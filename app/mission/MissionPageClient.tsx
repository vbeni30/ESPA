"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Heart, CheckCircle, Target, Globe, ArrowRight, Lightbulb, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Color class mappings for Tailwind
const colorClassMap = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-500",
    text: "text-blue-500",
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    progressBar: "bg-gradient-to-r from-blue-500 to-blue-600",
    topBar: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-500",
    text: "text-emerald-500",
    bgGradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    progressBar: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    topBar: "bg-gradient-to-r from-emerald-500 to-emerald-600",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-500",
    text: "text-purple-500",
    bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    progressBar: "bg-gradient-to-r from-purple-500 to-purple-600",
    topBar: "bg-gradient-to-r from-purple-500 to-purple-600",
  },
  orange: {
    gradient: "from-orange-500 to-orange-600",
    bg: "bg-orange-500",
    text: "text-orange-500",
    bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    progressBar: "bg-gradient-to-r from-orange-500 to-orange-600",
    topBar: "bg-gradient-to-r from-orange-500 to-orange-600",
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    bg: "bg-pink-500",
    text: "text-pink-500",
    bgGradient: "bg-gradient-to-br from-pink-500 to-pink-600",
    progressBar: "bg-gradient-to-r from-pink-500 to-pink-600",
    topBar: "bg-gradient-to-r from-pink-500 to-pink-600",
  },
  indigo: {
    gradient: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-500",
    text: "text-indigo-500",
    bgGradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    progressBar: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    topBar: "bg-gradient-to-r from-indigo-500 to-indigo-600",
  },
}

// Progress bar component for objectives
function ProgressBar({ progress, color = "blue" }: { progress: number; color?: keyof typeof colorClassMap }) {
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCurrentProgress(progress), 500)
    return () => clearTimeout(timer)
  }, [progress])

  const colorClasses = colorClassMap[color] || colorClassMap.blue

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div
        className={`${colorClasses.progressBar} h-2 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  )
}

export default function MissionPageClient() {
  const [activeObjective, setActiveObjective] = useState(0)

  const objectives = [
    {
      title: "Democratic Understanding",
      description:
        "Ensure the understanding of democratic thoughts and concepts for Ethiopian society through comprehensive educational programs and public awareness campaigns.",
      progress: 85,
      color: "blue" as keyof typeof colorClassMap,
      icon: BookOpen,
    },
    {
      title: "Peaceful Coexistence",
      description:
        "Educate citizens to create the culture of peaceful co-existence among different people groups through dialogue, conflict resolution, and community engagement.",
      progress: 78,
      color: "emerald" as keyof typeof colorClassMap,
      icon: Users,
    },
    {
      title: "Human Rights Protection",
      description:
        "Work to confirm human rights of all citizens through advocacy, legal support, and partnerships with government and international organizations.",
      progress: 92,
      color: "purple" as keyof typeof colorClassMap,
      icon: Shield,
    },
    {
      title: "National Consensus",
      description:
        "Create the culture of national consensus among different thoughts through trainings, seminars, and workshops that promote dialogue and understanding.",
      progress: 70,
      color: "orange" as keyof typeof colorClassMap,
      icon: Globe,
    },
    {
      title: "Media Engagement",
      description:
        "Give awareness about development, peace, human rights and democracy by establishing media institutions and creating partnerships with media stakeholders.",
      progress: 65,
      color: "pink" as keyof typeof colorClassMap,
      icon: Lightbulb,
    },
    {
      title: "Support for Vulnerable Groups",
      description:
        "Work to improve the conditional hurdles of women and the disabled through targeted programs, advocacy, and support services.",
      progress: 88,
      color: "indigo" as keyof typeof colorClassMap,
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=1920&auto=format&fit=crop"
            alt="Young students in a classroom raising hands, representing education and future opportunities"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
                <Target className="mr-2 h-5 w-5" />
                Our Purpose & Direction
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Mission
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                ESPA is committed to ensuring human rights, promoting democratic values, and providing holistic support
                to marginalized communities through advocacy, education, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement with Visual Enhancement */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Our Foundation</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Mission Statement</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-xl font-medium text-blue-600">
                    ESPA is an indigenous non-profit organization committed to advocate on human rights issues,
                    providing service, support and education for all the citizens of Ethiopia and the world.
                  </p>
                  <p>
                    Our mission is to diligently advocate for all citizens, educate the public regarding their rights
                    and democracy, and to raise funds to provide holistic assistance including marginalized people
                    groups, women, disabled and oppressed in great need.
                  </p>
                  <p className="font-medium text-gray-900">
                    Creating opportunities to improve their life is what we stand for—we stand for the oppressed.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Advocacy</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Education</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Service</div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop"
                    alt="ESPA community outreach and mission in action"
                    width={600}
                    height={700}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Working Principles */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Our Approach</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Working Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that guide our approach and methodology in creating lasting change
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Advocacy",
                  icon: Scale,
                  color: "blue" as keyof typeof colorClassMap,
                  description:
                    "ESPA advocates for any marginalized and oppressed citizens with stakeholders. We work to amplify the voices of those who are often unheard and ensure their rights are protected.",
                  features: [
                    "Policy advocacy with government agencies",
                    "Legal support for human rights cases",
                    "Public awareness campaigns",
                    "Community mobilization efforts",
                  ],
                },
                {
                  title: "Education",
                  icon: BookOpen,
                  color: "emerald" as keyof typeof colorClassMap,
                  description:
                    "ESPA educates people to explore their natural human rights and apply their freedom of living, education, work, worship, democratic rights and so on.",
                  features: [
                    "Democratic education workshops",
                    "Human rights awareness training",
                    "Community dialogue facilitation",
                    "Civic engagement programs",
                  ],
                },
                {
                  title: "Service",
                  icon: Heart,
                  color: "purple" as keyof typeof colorClassMap,
                  description:
                    "ESPA provides holistic service to oppressed and marginalized in different forms including looking for opportunities to assist oppressed and marginalized citizens.",
                  features: [
                    "Support programs for vulnerable groups",
                    "Disaster response coordination",
                    "Community development initiatives",
                    "Capacity building programs",
                  ],
                },
              ].map((principle, index) => {
                const colorClasses = colorClassMap[principle.color]
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  >
                    <div className={`h-2 ${colorClasses.topBar}`}></div>
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-20 h-20 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <principle.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                        <ul className="space-y-2">
                          {principle.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className={`h-5 w-5 ${colorClasses.text} mr-3 flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Strategic Objectives */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Strategic Goals</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Strategic Objectives</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key goals that drive our programs and initiatives, with measurable progress toward achieving lasting
                impact
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Objectives List */}
              <div className="space-y-4">
                {objectives.map((objective, index) => {
                  const colorClasses = colorClassMap[objective.color]
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveObjective(index)}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeObjective === index
                          ? "bg-white shadow-xl scale-105"
                          : "bg-gray-50 hover:bg-white hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${colorClasses.bgGradient} rounded-full flex items-center justify-center mr-4`}
                        >
                          <objective.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{objective.title}</h3>
                          <div className="text-sm text-gray-500">Progress: {objective.progress}%</div>
                        </div>
                      </div>
                      <ProgressBar progress={objective.progress} color={objective.color} />
                    </div>
                  )
                })}
              </div>

              {/* Active Objective Details */}
              <div className="lg:sticky lg:top-8">
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className={`h-2 ${colorClassMap[objectives[activeObjective].color].topBar}`}></div>
                  <CardHeader className="text-center">
                    <div
                      className={`w-20 h-20 ${colorClassMap[objectives[activeObjective].color].bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      {(() => {
                        const IconComponent = objectives[activeObjective].icon
                        return <IconComponent className="h-10 w-10 text-white" />
                      })()}
                    </div>
                    <CardTitle className="text-2xl">{objectives[activeObjective].title}</CardTitle>
                    <div className="text-lg font-medium text-gray-600">
                      {objectives[activeObjective].progress}% Complete
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{objectives[activeObjective].description}</p>
                    <ProgressBar
                      progress={objectives[activeObjective].progress}
                      color={objectives[activeObjective].color}
                    />
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">2024</div>
                        <div className="text-sm text-gray-600">Target Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">5+</div>
                        <div className="text-sm text-gray-600">Regions</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Measurement */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-orange-100 text-orange-800 text-lg px-6 py-3">Our Approach</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Measuring Our Impact</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    At ESPA, we believe in accountability and transparency in all our work. We regularly assess the
                    impact of our programs to ensure they are effectively advancing our mission and creating positive
                    change in communities.
                  </p>
                  <p>
                    Our impact measurement framework focuses on both quantitative metrics and qualitative outcomes to
                    provide a comprehensive view of our effectiveness.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Regular values-based training for all staff and volunteers",
                    "Values integration in all program design and implementation",
                    "Community feedback mechanisms to ensure values alignment",
                    "Annual values assessment and organizational reflection",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Community Engagement",
                    description: "Measuring participation and feedback from community members in our programs",
                    icon: Users,
                    color: "blue" as keyof typeof colorClassMap,
                  },
                  {
                    title: "Knowledge Transfer",
                    description: "Assessing changes in awareness and understanding of rights and democratic principles",
                    icon: BookOpen,
                    color: "emerald" as keyof typeof colorClassMap,
                  },
                  {
                    title: "Policy Influence",
                    description: "Tracking changes in policies and practices that protect human rights",
                    icon: Scale,
                    color: "purple" as keyof typeof colorClassMap,
                  },
                  {
                    title: "Community Wellbeing",
                    description: "Evaluating improvements in the lives of marginalized and vulnerable groups",
                    icon: Heart,
                    color: "pink" as keyof typeof colorClassMap,
                  },
                ].map((metric, index) => {
                  const colorClasses = colorClassMap[metric.color]
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <metric.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-lg">{metric.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-100 text-green-800 text-lg px-6 py-3">Community Voices</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Voices from the Community</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from those who have been impacted by our work and see the real difference we're making
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "ESPA's workshops on democratic rights have transformed our community's understanding of civic participation. We now feel empowered to engage in the democratic process and advocate for our needs.",
                  author: "Community Leader",
                  location: "Addis Ababa",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
                },
                {
                  quote:
                    "As a woman in a rural community, I've benefited greatly from ESPA's programs. Their support has helped me understand my rights and given me the confidence to pursue educational opportunities.",
                  author: "Program Participant",
                  location: "Rural Ethiopia",
                  image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=150&auto=format&fit=crop",
                },
                {
                  quote:
                    "ESPA's advocacy work has been instrumental in bringing attention to the needs of disabled individuals in our community. Their holistic approach addresses both immediate needs and long-term systemic change.",
                  author: "Partner Organization Representative",
                  location: "Disability Rights Group",
                  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <svg className="h-12 w-12 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-8 text-center italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                        sizes="60px"
                      />
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
            alt="Community members working together"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Support Our Mission</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Your contribution helps us continue our work advocating for human rights, promoting democracy, and
              supporting marginalized communities across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Make a Donation
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg h-auto"
                >
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ethiopian Social Partnership Advocacy",
            alternateName: "ESPA",
            description:
              "ESPA is an indigenous non-profit organization committed to advocate on human rights issues, providing service, support and education for all the citizens of Ethiopia and the world.",
            url: "https://espa-ethiopia.org",
            logo: "https://espa-ethiopia.org/espa-logo.jpg",
            foundingLocation: {
              "@type": "Place",
              name: "Addis Ababa, Ethiopia",
            },
            areaServed: "Ethiopia",
            knowsAbout: ["Human Rights", "Democratic Education", "Social Advocacy", "Community Development"],
            mission:
              "To diligently advocate for all citizens, educate the public regarding their rights and democracy, and to raise funds to provide holistic assistance including marginalized people groups, women, disabled and oppressed in great need.",
          }),
        }}
      />
    </div>
  )
}
