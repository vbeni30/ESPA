"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Users,
  Heart,
  BookOpen,
  Scale,
  Globe,
  TrendingUp,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
} from "lucide-react"
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
    floatingBg: "bg-blue-500",
    floatingBg2: "bg-blue-400",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-500",
    text: "text-emerald-500",
    bgGradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    progressBar: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    topBar: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    floatingBg: "bg-emerald-500",
    floatingBg2: "bg-emerald-400",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-500",
    text: "text-purple-500",
    bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    progressBar: "bg-gradient-to-r from-purple-500 to-purple-600",
    topBar: "bg-gradient-to-r from-purple-500 to-purple-600",
    floatingBg: "bg-purple-500",
    floatingBg2: "bg-purple-400",
  },
  orange: {
    gradient: "from-orange-500 to-orange-600",
    bg: "bg-orange-500",
    text: "text-orange-500",
    bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    progressBar: "bg-gradient-to-r from-orange-500 to-orange-600",
    topBar: "bg-gradient-to-r from-orange-500 to-orange-600",
    floatingBg: "bg-orange-500",
    floatingBg2: "bg-orange-400",
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    bg: "bg-pink-500",
    text: "text-pink-500",
    bgGradient: "bg-gradient-to-br from-pink-500 to-pink-600",
    progressBar: "bg-gradient-to-r from-pink-500 to-pink-600",
    topBar: "bg-gradient-to-r from-pink-500 to-pink-600",
    floatingBg: "bg-pink-500",
    floatingBg2: "bg-pink-400",
  },
  green: {
    gradient: "from-green-500 to-green-600",
    bg: "bg-green-500",
    text: "text-green-500",
    bgGradient: "bg-gradient-to-br from-green-500 to-green-600",
    progressBar: "bg-gradient-to-r from-green-500 to-green-600",
    topBar: "bg-gradient-to-r from-green-500 to-green-600",
    floatingBg: "bg-green-500",
    floatingBg2: "bg-green-400",
  },
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function ImpactPageClient() {
  const [activeTab, setActiveTab] = useState("overview")

  const impactAreas = [
    {
      title: "Human Rights Advocacy",
      description: "Protecting and promoting fundamental human rights across Ethiopia",
      icon: Scale,
      color: "blue" as keyof typeof colorClassMap,
      stats: [
        { label: "Legal Cases Supported", value: 150, suffix: "+" },
        { label: "Rights Violations Addressed", value: 300, suffix: "+" },
        { label: "Advocacy Campaigns", value: 25, suffix: "" },
        { label: "Policy Changes Influenced", value: 8, suffix: "" },
      ],
      achievements: [
        "Successfully advocated for policy changes protecting vulnerable groups",
        "Provided legal support to 150+ individuals facing rights violations",
        "Conducted 25 major advocacy campaigns reaching national audiences",
        "Established partnerships with 15 international human rights organizations",
      ],
    },
    {
      title: "Democratic Education",
      description: "Building democratic understanding and civic engagement",
      icon: BookOpen,
      color: "emerald" as keyof typeof colorClassMap,
      stats: [
        { label: "Citizens Educated", value: 12000, suffix: "+" },
        { label: "Workshops Conducted", value: 200, suffix: "+" },
        { label: "Training Materials Distributed", value: 5000, suffix: "+" },
        { label: "Civic Leaders Trained", value: 500, suffix: "+" },
      ],
      achievements: [
        "Educated over 12,000 citizens on democratic rights and responsibilities",
        "Developed comprehensive civic education curriculum",
        "Trained 500+ community leaders in democratic governance",
        "Established civic education programs in 30+ schools",
      ],
    },
    {
      title: "Community Empowerment",
      description: "Supporting marginalized communities and vulnerable groups",
      icon: Users,
      color: "purple" as keyof typeof colorClassMap,
      stats: [
        { label: "Communities Served", value: 75, suffix: "+" },
        { label: "Women Empowered", value: 3000, suffix: "+" },
        { label: "Disabled Individuals Supported", value: 800, suffix: "+" },
        { label: "Youth Programs Participants", value: 2500, suffix: "+" },
      ],
      achievements: [
        "Empowered 3,000+ women through skills training and advocacy",
        "Provided comprehensive support to 800+ disabled individuals",
        "Established community development programs in 75+ locations",
        "Created economic opportunities for 1,500+ marginalized individuals",
      ],
    },
  ]

  const regionalImpact = [
    { region: "Addis Ababa", communities: 25, beneficiaries: 8500, programs: 15 },
    { region: "Oromia", communities: 30, beneficiaries: 12000, programs: 18 },
    { region: "Amhara", communities: 20, beneficiaries: 6800, programs: 12 },
    { region: "SNNPR", communities: 15, beneficiaries: 4200, programs: 10 },
    { region: "Tigray", communities: 12, beneficiaries: 3500, programs: 8 },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920&auto=format&fit=crop"
              alt="Community members celebrating achievements and positive impact, representing ESPA's successful programs"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-blue-800/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Measurable Results
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                    Impact
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Transforming lives and communities across Ethiopia through measurable, sustainable change in human
                  rights, democratic participation, and social justice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Overview */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Overall Impact</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Creating Lasting Change
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Since our founding, ESPA has made significant strides in advancing human rights, promoting democratic
                  values, and empowering marginalized communities across Ethiopia.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { icon: Users, label: "Lives Impacted", value: 25000, color: "blue" as keyof typeof colorClassMap },
                  {
                    icon: MapPin,
                    label: "Communities Served",
                    value: 102,
                    color: "emerald" as keyof typeof colorClassMap,
                  },
                  {
                    icon: BookOpen,
                    label: "Programs Delivered",
                    value: 63,
                    color: "purple" as keyof typeof colorClassMap,
                  },
                  { icon: Award, label: "Years of Service", value: 8, color: "orange" as keyof typeof colorClassMap },
                ].map((stat, index) => {
                  const colorClasses = colorClassMap[stat.color]
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                    >
                      <CardContent className="pt-8">
                        <div
                          className={`w-16 h-16 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter end={stat.value} suffix={stat.value > 100 ? "+" : ""} />
                        </div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Focus Areas</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Areas of Impact</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our work spans multiple interconnected areas, each contributing to our overall mission of creating a
                  more just and equitable Ethiopia.
                </p>
              </div>

              <div className="space-y-16">
                {impactAreas.map((area, index) => {
                  const colorClasses = colorClassMap[area.color]
                  return (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-16 h-16 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center`}
                            >
                              <area.icon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900">{area.title}</h3>
                              <p className="text-gray-600">{area.description}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {area.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {area.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start">
                                  <CheckCircle className={`h-5 w-5 ${colorClasses.text} mr-3 flex-shrink-0 mt-0.5`} />
                                  <span className="text-gray-700">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                        <div className="relative">
                          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                              src={`https://images.unsplash.com/photo-${
                                index === 0
                                  ? "1589156280159-27698a70f29e"
                                  : index === 1
                                    ? "1544476915-ed1370594142"
                                    : "1559027615-cd4628902d4a"
                              }?q=80&w=600&auto=format&fit=crop`}
                              alt={`${area.title} impact visualization showing community engagement and positive outcomes`}
                              width={600}
                              height={400}
                              className="object-cover w-full h-full"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          </div>
                          <div
                            className={`absolute -top-6 -right-6 w-24 h-24 ${colorClasses.floatingBg} rounded-full opacity-20 animate-pulse`}
                          ></div>
                          <div
                            className={`absolute -bottom-6 -left-6 w-32 h-32 ${colorClasses.floatingBg2} rounded-full opacity-20 animate-pulse delay-1000`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Impact */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Geographic Reach</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Regional Impact</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our programs reach communities across multiple regions of Ethiopia, adapting to local needs while
                  maintaining our core mission.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regionalImpact.map((region, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{region.region}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{region.communities}</div>
                          <div className="text-xs text-gray-600">Communities</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {region.beneficiaries.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">Beneficiaries</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{region.programs}</div>
                          <div className="text-xs text-gray-600">Programs</div>
                        </div>
                      </div>
                      <Progress value={(region.beneficiaries / 12000) * 100} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-orange-100 text-orange-800 text-lg px-6 py-3">Success Stories</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stories of Change</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Behind every statistic is a human story of transformation, empowerment, and hope.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Empowering Women Leaders",
                    story:
                      "Through our women's empowerment program, Almaz became the first female community leader in her village, advocating for women's rights and establishing a cooperative that supports 50+ families.",
                    impact: "50+ families supported",
                    category: "Women's Empowerment",
                    image:
                      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    title: "Democratic Participation",
                    story:
                      "Our civic education program in rural Oromia led to a 300% increase in voter registration and the establishment of community councils that now actively participate in local governance.",
                    impact: "300% increase in participation",
                    category: "Democratic Education",
                    image: "https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    title: "Disability Rights Advocacy",
                    story:
                      "Working with disabled individuals in Addis Ababa, we successfully advocated for accessible infrastructure in 15 public buildings and established support groups serving 200+ individuals.",
                    impact: "200+ individuals supported",
                    category: "Human Rights",
                    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=400&auto=format&fit=crop",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={`Success story: ${story.title}`}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{story.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-blue-600">{story.impact}</div>
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-green-100 text-green-800 text-lg px-6 py-3">Looking Ahead</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Future Impact Goals</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Building on our achievements, we're setting ambitious goals for the next phase of our work.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { goal: "50,000", label: "Lives to Impact by 2030", progress: 50, icon: Users },
                  { goal: "200", label: "Communities to Serve", progress: 51, icon: MapPin },
                  { goal: "100", label: "Programs to Launch", progress: 63, icon: Target },
                  { goal: "15", label: "Regions to Cover", progress: 33, icon: Globe },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{item.goal}</div>
                      <div className="text-gray-600 font-medium mb-4">{item.label}</div>
                      <Progress value={item.progress} className="h-2" />
                      <div className="text-sm text-gray-500 mt-2">{item.progress}% Progress</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
              alt="Community members working together toward positive change"
              width={1920}
              height={800}
              className="object-cover w-full h-full"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-blue-600/90"></div>
          </div>

          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Be Part of Our Impact</h2>
              <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
                Join us in creating measurable, lasting change in communities across Ethiopia. Your support helps us
                expand our reach and deepen our impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/donate">
                  <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                    <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Support Our Work
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg h-auto"
                  >
                    View Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ethiopian Social Partnership Advocacy",
            alternateName: "ESPA",
            description:
              "ESPA has impacted over 25,000 lives across 102 communities in Ethiopia through human rights advocacy, democratic education, and community empowerment programs.",
            url: "https://espa-ethiopia.org",
            logo: "https://espa-ethiopia.org/espa-logo.jpg",
            foundingLocation: {
              "@type": "Place",
              name: "Addis Ababa, Ethiopia",
            },
            areaServed: "Ethiopia",
            knowsAbout: ["Human Rights", "Democratic Education", "Social Advocacy", "Community Development"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "ESPA Programs",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Human Rights Advocacy",
                    description: "Legal support and advocacy for human rights violations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Democratic Education",
                    description: "Civic education and democratic participation training",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Community Empowerment",
                    description: "Support programs for marginalized communities",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
