"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Scale,
  Globe,
  Calendar,
  ArrowRight,
  Quote,
  Star,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Head from "next/head"

const stats = [
  { number: "5,000+", label: "Citizens Educated", icon: Users, color: "text-blue-600" },
  { number: "25+", label: "Programs Conducted", icon: CheckCircle, color: "text-green-600" },
  { number: "15+", label: "Partnerships Formed", icon: TrendingUp, color: "text-purple-600" },
  { number: "98%", label: "Community Satisfaction", icon: Star, color: "text-yellow-600" },
]

const values = [
  {
    icon: Globe,
    title: "Liberty",
    description: "Freedom for all citizens to live, work, worship, and express themselves without oppression.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Fraternity",
    description: "Unity and solidarity among all people, recognizing our shared humanity.",
    color: "green",
  },
  {
    icon: Scale,
    title: "Equality",
    description: "Equal rights and opportunities for all, regardless of background or status.",
    color: "purple",
  },
]

const programs = [
  {
    title: "Democratic Education",
    description: "Ensuring understanding of democratic principles and constitutional rights for all citizens",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&q=75",
    stats: "2,150+ participants",
    color: "blue",
    href: "/programs/democracy",
  },
  {
    title: "Human Rights Advocacy",
    description: "Protecting and promoting fundamental rights through legal support and policy advocacy",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&q=75",
    stats: "1,890+ cases supported",
    color: "purple",
    href: "/programs/human-rights",
  },
  {
    title: "Women Empowerment",
    description: "Supporting women through leadership training, economic opportunities, and advocacy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&q=75",
    stats: "850+ women trained",
    color: "pink",
    href: "/programs/vulnerable-groups",
  },
]

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return count
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Ethiopian Social Partnership Advocacy (ESPA)</title>
        <meta
          name="description"
          content="Empowering communities through human rights advocacy, democratic education, and social justice initiatives across Ethiopia."
        />
        <meta property="og:title" content="Ethiopian Social Partnership Advocacy (ESPA)" />
        <meta
          property="og:description"
          content="Advocating for human rights, promoting democracy, and empowering communities across Ethiopia through education, advocacy, and service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://espa-ethiopia.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/espa-logo.jpg" />
        <link rel="preload" as="image" href="/espa-logo.jpg" />
      </Head>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1629753908080-e8551ac57b8d?q=75&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Every human has rights poster - human rights advocacy"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse",
                  i === 0 && "top-1/4 left-1/4 animation-delay-0",
                  i === 1 && "top-1/3 right-1/4 animation-delay-1000",
                  i === 2 && "bottom-1/4 left-1/3 animation-delay-2000",
                  i === 3 && "bottom-1/3 right-1/3 animation-delay-3000",
                  i === 4 && "top-2/3 left-2/3 animation-delay-4000",
                )}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 container px-4 md:px-6 text-center">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/30 transition-colors duration-300">
              <Calendar className="mr-2 h-4 w-4" />
              Established April 19, 2022
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advocating for
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Human Rights
              </span>
              <span className="block">& Democracy</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ethiopian Social Partnership Advocacy empowers communities through education, advocacy, and
              service—building a more just and democratic Ethiopia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/impact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Discover Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Cause
                </Button>
              </Link>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center transition-all duration-1000 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    `delay-${(index + 1) * 200}`,
                  )}
                >
                  <div className={cn("text-2xl sm:text-3xl md:text-4xl font-bold mb-2", stat.color)}>
                    {stat.number.includes("+") || stat.number.includes("%") ? (
                      <>
                        <AnimatedCounter end={Number.parseInt(stat.number.replace(/\D/g, ""))} />
                        {stat.number.replace(/\d/g, "")}
                      </>
                    ) : (
                      stat.number
                    )}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Enhanced */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Our Mission</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We stand for the oppressed and marginalized
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Through advocacy, education, and service, we create opportunities for all Ethiopian citizens to
                understand their rights, participate in democracy, and build stronger communities.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                        stat.color === "text-blue-600" && "bg-blue-100",
                        stat.color === "text-green-600" && "bg-green-100",
                        stat.color === "text-purple-600" && "bg-purple-100",
                        stat.color === "text-yellow-600" && "bg-yellow-100",
                      )}
                    >
                      <stat.icon className={cn("w-8 h-8", stat.color)} />
                    </div>
                    <div className={cn("text-3xl font-bold mb-2", stat.color)}>{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Redesigned */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Our Foundation</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built on Timeless Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Three fundamental principles guide everything we do, rooted in the universal ideals of human dignity and
                democratic participation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
                >
                  <CardContent className="p-8">
                    <div
                      className={cn(
                        "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110",
                        value.color === "blue" && "bg-blue-100 group-hover:bg-blue-200",
                        value.color === "green" && "bg-green-100 group-hover:bg-green-200",
                        value.color === "purple" && "bg-purple-100 group-hover:bg-purple-200",
                      )}
                    >
                      <value.icon
                        className={cn(
                          "w-10 h-10",
                          value.color === "blue" && "text-blue-600",
                          value.color === "green" && "text-green-600",
                          value.color === "purple" && "text-purple-600",
                        )}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/values">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 bg-transparent"
                >
                  Explore Our Values
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">What We Do</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transformative Programs</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive initiatives that promote democracy, protect human rights, and empower communities across
                Ethiopia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={program.title}
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={cn(
                          "text-white font-semibold",
                          program.color === "blue" && "bg-blue-600",
                          program.color === "purple" && "bg-purple-600",
                          program.color === "pink" && "bg-pink-600",
                        )}
                      >
                        Core Program
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white text-sm font-medium mb-1">{program.stats}</div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle
                      className={cn(
                        "text-xl font-bold transition-colors duration-300",
                        program.color === "blue" && "group-hover:text-blue-600",
                        program.color === "purple" && "group-hover:text-purple-600",
                        program.color === "pink" && "group-hover:text-pink-600",
                      )}
                    >
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{program.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Link href={program.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "p-0 h-auto font-semibold transition-colors",
                          program.color === "blue" && "text-blue-600 hover:text-blue-700 hover:bg-blue-50",
                          program.color === "purple" && "text-purple-600 hover:text-purple-700 hover:bg-purple-50",
                          program.color === "pink" && "text-pink-600 hover:text-pink-700 hover:bg-pink-50",
                        )}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story - Enhanced */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=800&fit=crop"
            alt="Community celebration after successful program"
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <Quote className="h-10 w-10 text-blue-400" />
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "ESPA's democratic education program transformed our community. We now understand our rights and actively
              participate in local governance. The change is remarkable."
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
                  alt="Almaz Tadesse"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-lg">Almaz Tadesse</div>
                <div className="text-blue-200">Community Leader, Bahir Dar</div>
                <div className="flex items-center justify-center sm:justify-start mt-2 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Maintained viewport height optimization */}
      <section className="news-section-height flex flex-col overflow-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto flex-1 flex flex-col min-h-0">
          <div className="news-header-compact flex-shrink-0">
            <div className="text-center">
              <Badge className="mb-4 bg-red-100 text-red-800 px-4 py-2">Latest Updates</Badge>
              <h2 className="text-section-title">Breaking News & Stories</h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col news-grid-gap min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-12 news-grid-gap flex-[13] min-h-0">
              <div className="relative overflow-hidden rounded-xl md:col-span-8 h-full min-h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
                  alt="ESPA launches comprehensive democratic education initiative"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 news-card-padding-large">
                  <div className="bg-blue-600 text-white news-badge mb-2 md:mb-3 inline-block rounded">
                    FEATURED NEWS
                  </div>
                  <h3 className="text-white news-title-large mb-1 md:mb-2 line-clamp-2">
                    ESPA Launches Democratic Education Initiative Across Five Regions
                  </h3>
                  <p className="text-gray-200 news-description line-clamp-2 max-w-lg">
                    A comprehensive program reaching over 2,000 citizens in rural communities, focusing on
                    constitutional rights and democratic participation.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl md:col-span-4 h-full min-h-[150px]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop"
                  alt="Women leadership training graduation ceremony"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 news-card-padding">
                  <div className="bg-pink-600 text-white news-badge mb-2 inline-block rounded">EMPOWERMENT</div>
                  <h3 className="text-white news-title-medium line-clamp-2">
                    150 Women Graduate from Leadership Training Program
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 news-grid-gap flex-[7] min-h-0">
              <div className="relative overflow-hidden rounded-xl md:col-span-5 h-full min-h-[120px]">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=400&fit=crop"
                  alt="Human rights awareness campaign launch"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 news-card-padding">
                  <div className="bg-purple-600 text-white news-badge mb-1 md:mb-2 inline-block rounded">CAMPAIGN</div>
                  <h3 className="text-white news-title-small line-clamp-2 mb-1">
                    Human Rights Day Campaign Reaches Over 10,000 Citizens
                  </h3>
                  <p className="text-gray-200 news-description line-clamp-1">
                    Nationwide awareness initiative promotes understanding of fundamental rights.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl md:col-span-7 h-full min-h-[120px]">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&h=400&fit=crop"
                  alt="Community partnership agreement signing"
                  width={700}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 news-card-padding">
                  <div className="bg-green-600 text-white news-badge mb-1 md:mb-2 inline-block rounded">
                    PARTNERSHIPS
                  </div>
                  <h3 className="text-white news-title-medium line-clamp-2 mb-1">
                    New Community Partnerships Formed to Expand Reach and Impact
                  </h3>
                  <p className="text-gray-200 news-description line-clamp-1 max-w-md">
                    Strategic alliances with local organizations strengthen our capacity to serve vulnerable
                    populations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="news-footer-compact flex-shrink-0 text-center">
            <Link href="/news">
              <Button size="sm" variant="outline" className="bg-white hover:bg-gray-50 text-xs sm:text-sm">
                View All News & Updates
                <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Redesigned */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="h-10 w-10 text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Join Our Mission for Change</h2>

              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Your support helps us reach more communities, educate more citizens, and create lasting change.
                Together, we can build a more democratic and just Ethiopia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Make a Donation
                  </Button>
                </Link>
                <Link href="/volunteer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Become a Volunteer
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2 text-blue-100">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Registered NGO</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Transparent Operations</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <Star className="w-5 h-5" />
                  <span className="text-sm">Community Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
