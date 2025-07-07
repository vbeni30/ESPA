import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Scale,
  Shield,
  Lightbulb,
  Globe,
  CheckCircle,
  ArrowRight,
  Handshake,
  BookOpen,
  Target,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Core Values | Ethiopian Social Partnership Advocacy (ESPA)",
  description:
    "Discover the fundamental values that guide ESPA's work in human rights advocacy, democratic education, and community empowerment across Ethiopia.",
  keywords:
    "ESPA values, human rights values, democratic principles, social justice, community empowerment, Ethiopian NGO values",
  openGraph: {
    title: "Our Core Values | Ethiopian Social Partnership Advocacy (ESPA)",
    description:
      "The fundamental values that guide our work in human rights advocacy, democratic education, and community empowerment.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Core Values | Ethiopian Social Partnership Advocacy (ESPA)",
    description: "The fundamental values that guide our work in human rights advocacy and community empowerment.",
  },
  alternates: {
    canonical: "/values",
  },
}

export default function ValuesPage() {
  const coreValues = [
    {
      title: "Human Dignity",
      description:
        "We believe in the inherent worth and dignity of every human being, regardless of their background, circumstances, or social status.",
      icon: Heart,
      color: "red",
      principles: [
        "Respect for individual rights and freedoms",
        "Protection of vulnerable populations",
        "Promotion of equal opportunities for all",
        "Advocacy against discrimination and marginalization",
      ],
    },
    {
      title: "Social Justice",
      description:
        "We are committed to creating a fair and equitable society where everyone has access to opportunities and resources.",
      icon: Scale,
      color: "blue",
      principles: [
        "Equal access to education and healthcare",
        "Fair distribution of resources and opportunities",
        "Protection of minority rights",
        "Advocacy for systemic change",
      ],
    },
    {
      title: "Democratic Participation",
      description:
        "We promote active citizen engagement in democratic processes and decision-making that affects their lives.",
      icon: Users,
      color: "emerald",
      principles: [
        "Civic education and awareness",
        "Community participation in governance",
        "Transparent and accountable institutions",
        "Protection of democratic rights and freedoms",
      ],
    },
    {
      title: "Integrity",
      description:
        "We maintain the highest standards of honesty, transparency, and ethical conduct in all our activities and relationships.",
      icon: Shield,
      color: "purple",
      principles: [
        "Transparent financial management",
        "Honest communication with stakeholders",
        "Ethical decision-making processes",
        "Accountability to communities we serve",
      ],
    },
    {
      title: "Innovation",
      description:
        "We embrace creative and innovative approaches to address complex social challenges and create lasting change.",
      icon: Lightbulb,
      color: "orange",
      principles: [
        "Creative problem-solving approaches",
        "Technology integration for social good",
        "Adaptive program design and implementation",
        "Learning from best practices globally",
      ],
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of partnerships and collective action to achieve greater impact and sustainable change.",
      icon: Handshake,
      color: "indigo",
      principles: [
        "Building strategic partnerships",
        "Community-led development initiatives",
        "Cross-sector collaboration",
        "Knowledge sharing and capacity building",
      ],
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920&auto=format&fit=crop"
              alt="Diverse group of people holding hands in unity, representing core values and community solidarity"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-800/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-3">
                  <Award className="mr-2 h-5 w-5" />
                  Our Foundation
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Values
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  The fundamental principles that guide our work, shape our decisions, and define our commitment to
                  creating positive change in Ethiopian communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Introduction */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Our Foundation</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Values That Drive Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our core values are not just words on a page—they are the living principles that guide every decision we
                make, every program we implement, and every relationship we build. These values ensure that our work
                remains authentic, impactful, and aligned with the needs of the communities we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {coreValues.map((value, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full"
                  >
                    <div className={`h-2 bg-gradient-to-r from-${value.color}-500 to-${value.color}-600`}></div>
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-1 flex flex-col">
                      <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>

                      <div className="space-y-3 flex-1">
                        <h4 className="font-semibold text-gray-900">Key Principles:</h4>
                        <ul className="space-y-2">
                          {value.principles.map((principle, principleIndex) => (
                            <li key={principleIndex} className="flex items-start">
                              <CheckCircle className={`h-5 w-5 text-${value.color}-500 mr-3 flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-600">{principle}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values in Action */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Implementation</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Values in Action</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how our core values translate into concrete actions and measurable impact in the communities we
                  serve
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Living Our Values Daily</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our values are integrated into every aspect of our organization, from strategic planning to daily
                      operations. We regularly assess our alignment with these principles and make adjustments to ensure
                      authenticity in our work.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Staff Training & Development",
                        description: "Regular values-based training for all team members and volunteers",
                        icon: BookOpen,
                      },
                      {
                        title: "Program Design",
                        description: "Values integration in all program planning and implementation",
                        icon: Target,
                      },
                      {
                        title: "Community Feedback",
                        description: "Regular community input to ensure values alignment",
                        icon: Users,
                      },
                      {
                        title: "Annual Assessment",
                        description: "Yearly organizational reflection and values evaluation",
                        icon: Award,
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
                      alt="ESPA team members working together in community outreach, demonstrating values in action"
                      width={600}
                      height={700}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Measurable Impact</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Values-Driven Results</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our commitment to our values has produced tangible results in the communities we serve
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "15,000+", label: "Lives Impacted", icon: Heart },
                  { number: "50+", label: "Communities Served", icon: Globe },
                  { number: "200+", label: "Volunteers Trained", icon: Users },
                  { number: "25+", label: "Partner Organizations", icon: Handshake },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1920&auto=format&fit=crop"
              alt="Community members celebrating together, representing shared values and collective action"
              width={1920}
              height={800}
              className="object-cover w-full h-full"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"></div>
          </div>

          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Share Our Values</h2>
              <p className="text-xl text-purple-100 mb-12 leading-relaxed">
                Join us in building a more just, equitable, and democratic Ethiopia. Your support helps us live our
                values and create lasting change in communities across the country.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/volunteer">
                  <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                    <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Join Our Team
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg h-auto"
                  >
                    Explore Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Core Values - Ethiopian Social Partnership Advocacy",
            description:
              "The fundamental values that guide ESPA's work in human rights advocacy, democratic education, and community empowerment across Ethiopia.",
            url: "https://espa-ethiopia.org/values",
            mainEntity: {
              "@type": "Organization",
              name: "Ethiopian Social Partnership Advocacy",
              alternateName: "ESPA",
              values: [
                "Human Dignity",
                "Social Justice",
                "Democratic Participation",
                "Integrity",
                "Innovation",
                "Collaboration",
              ],
            },
          }),
        }}
      />
    </>
  )
}
