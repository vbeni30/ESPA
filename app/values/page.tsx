import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Scale, Users, BookOpen, Shield, Lightbulb, Target, CheckCircle, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Core Values | Ethiopian Social Partnership Advocacy (ESPA)",
  description:
    "Discover the core values that guide ESPA's work in human rights advocacy, democratic education, and community empowerment. Learn about our commitment to integrity, justice, and service.",
  keywords:
    "ESPA values, organizational values, human rights principles, democratic values, social justice ethics, Ethiopian NGO values, integrity, accountability",
  openGraph: {
    title: "Core Values | Ethiopian Social Partnership Advocacy (ESPA)",
    description:
      "The core values that guide ESPA's work in human rights advocacy, democratic education, and community empowerment.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Values | Ethiopian Social Partnership Advocacy (ESPA)",
    description: "Discover the core values that guide ESPA's mission and work in Ethiopia.",
  },
  alternates: {
    canonical: "/values",
  },
}

export default function ValuesPage() {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We conduct our work with the highest ethical standards, maintaining transparency, honesty, and accountability in all our actions and decisions.",
      icon: Shield,
      color: "blue",
      principles: [
        "Transparent financial management and reporting",
        "Honest communication with all stakeholders",
        "Ethical decision-making processes",
        "Accountability to communities we serve",
      ],
      quote: "Integrity is the foundation of trust, and trust is the foundation of effective advocacy.",
    },
    {
      title: "Justice",
      description:
        "We are committed to promoting fairness, equality, and human rights for all, with special attention to marginalized and vulnerable populations.",
      icon: Scale,
      color: "emerald",
      principles: [
        "Equal treatment regardless of background",
        "Advocacy for the most vulnerable",
        "Fair distribution of resources and opportunities",
        "Protection of fundamental human rights",
      ],
      quote:
        "Justice delayed is justice denied, and we work tirelessly to ensure timely access to rights and opportunities.",
    },
    {
      title: "Compassion",
      description:
        "We approach our work with empathy and understanding, recognizing the dignity and worth of every individual we serve.",
      icon: Heart,
      color: "pink",
      principles: [
        "Empathetic listening and understanding",
        "Dignified treatment of all individuals",
        "Culturally sensitive service delivery",
        "Holistic support for human needs",
      ],
      quote: "Compassion drives us to see beyond statistics to the human stories that inspire our work.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of partnership and work together with communities, organizations, and stakeholders to achieve common goals.",
      icon: Users,
      color: "purple",
      principles: [
        "Community-led development approaches",
        "Strategic partnerships with like-minded organizations",
        "Inclusive decision-making processes",
        "Shared learning and knowledge exchange",
      ],
      quote: "Together we can achieve what none of us can accomplish alone.",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest quality in our programs, services, and advocacy efforts, continuously learning and improving our impact.",
      icon: Star,
      color: "orange",
      principles: [
        "Continuous learning and professional development",
        "Evidence-based program design and implementation",
        "Regular monitoring and evaluation",
        "Innovation in service delivery methods",
      ],
      quote: "Excellence is not a destination but a journey of continuous improvement and learning.",
    },
    {
      title: "Empowerment",
      description:
        "We work to build the capacity of individuals and communities to advocate for themselves and create sustainable change.",
      icon: Lightbulb,
      color: "green",
      principles: [
        "Capacity building and skills development",
        "Leadership development programs",
        "Knowledge transfer and education",
        "Sustainable community-driven solutions",
      ],
      quote: "True change comes when communities have the tools and knowledge to advocate for themselves.",
    },
  ]

  const colorMap = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-500",
      text: "text-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      topBar: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-500",
      text: "text-emerald-500",
      bgGradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      topBar: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    },
    pink: {
      gradient: "from-pink-500 to-pink-600",
      bg: "bg-pink-500",
      text: "text-pink-500",
      bgGradient: "bg-gradient-to-br from-pink-500 to-pink-600",
      topBar: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-500",
      text: "text-purple-500",
      bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      topBar: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      bg: "bg-orange-500",
      text: "text-orange-500",
      bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600",
      topBar: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
    green: {
      gradient: "from-green-500 to-green-600",
      bg: "bg-green-500",
      text: "text-green-500",
      bgGradient: "bg-gradient-to-br from-green-500 to-green-600",
      topBar: "bg-gradient-to-r from-green-500 to-green-600",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
            alt="Diverse group of people holding hands in unity, representing ESPA's core values of collaboration and inclusion"
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
                <Heart className="mr-2 h-5 w-5" />
                Our Foundation
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Values
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                The fundamental principles that guide our work, shape our culture, and define our commitment to creating
                positive change in Ethiopia and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Introduction */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-purple-100 text-purple-800 text-lg px-6 py-3">Our Foundation</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Values-Driven Impact
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-xl font-medium text-purple-600">
                    Our values are not just words on a wall—they are the living principles that guide every decision,
                    every program, and every interaction we have.
                  </p>
                  <p>
                    At ESPA, we believe that sustainable change can only be achieved when our work is grounded in strong
                    ethical foundations. These core values shape our organizational culture and ensure that our impact
                    aligns with our mission.
                  </p>
                  <p className="font-medium text-gray-900">
                    Every team member, volunteer, and partner is expected to embody these values in their work and
                    interactions with the communities we serve.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Purpose</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Integrity</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">Impact</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
                    alt="ESPA team members working together, demonstrating collaborative values in action"
                    width={600}
                    height={700}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 text-lg px-6 py-3">Our Principles</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Six Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These values form the bedrock of our organization and guide us in creating meaningful, sustainable
                change
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, index) => {
                const colorClasses = colorMap[value.color as keyof typeof colorMap]
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full"
                  >
                    <div className={`h-2 ${colorClasses.topBar}`}></div>
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-20 h-20 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Principles:</h4>
                        <ul className="space-y-2">
                          {value.principles.map((principle, principleIndex) => (
                            <li key={principleIndex} className="flex items-start">
                              <CheckCircle className={`h-5 w-5 ${colorClasses.text} mr-3 flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-600">{principle}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <blockquote className="italic text-gray-600 text-sm">"{value.quote}"</blockquote>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 text-lg px-6 py-3">Living Our Values</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Values in Action</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our core values translate into concrete actions and measurable impact in our daily work
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Integrity in Financial Management",
                  description:
                    "We maintain complete transparency in our financial operations, publishing annual reports and ensuring every donation is used effectively for our mission.",
                  icon: Shield,
                  color: "blue",
                  metrics: ["100% Financial Transparency", "Annual Public Reports", "Third-party Audits"],
                },
                {
                  title: "Justice Through Legal Advocacy",
                  description:
                    "Our legal advocacy programs have supported over 150 cases, ensuring access to justice for marginalized communities and vulnerable individuals.",
                  icon: Scale,
                  color: "emerald",
                  metrics: ["150+ Legal Cases", "85% Success Rate", "Free Legal Support"],
                },
                {
                  title: "Compassionate Service Delivery",
                  description:
                    "Every program is designed with empathy and cultural sensitivity, ensuring dignified treatment and holistic support for all beneficiaries.",
                  icon: Heart,
                  color: "pink",
                  metrics: ["Culturally Sensitive Programs", "Holistic Support", "Dignified Treatment"],
                },
                {
                  title: "Collaborative Partnerships",
                  description:
                    "We work with 25+ partner organizations and engage communities as equal partners in designing and implementing programs.",
                  icon: Users,
                  color: "purple",
                  metrics: ["25+ Partners", "Community-Led Design", "Shared Decision Making"],
                },
              ].map((action, index) => {
                const colorClasses = colorMap[action.color as keyof typeof colorMap]
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    <div className={`h-2 ${colorClasses.topBar}`}></div>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <action.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{action.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {action.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm font-medium text-gray-900">{metric}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Integration */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-orange-100 text-orange-800 text-lg px-6 py-3">Our Commitment</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Living Our Values Daily</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    At ESPA, our values are not just aspirational statements—they are integrated into every aspect of
                    our operations, from strategic planning to daily interactions with communities.
                  </p>
                  <p>
                    We regularly assess how well we're living up to these values through feedback from communities,
                    partner evaluations, and internal reflection processes.
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
                    title: "Staff Training",
                    description: "Regular values-based training sessions for all team members",
                    icon: BookOpen,
                    color: "blue",
                  },
                  {
                    title: "Community Feedback",
                    description: "Systematic collection of feedback to ensure values alignment",
                    icon: Users,
                    color: "emerald",
                  },
                  {
                    title: "Partner Evaluation",
                    description: "Regular assessment of how well we embody our values in partnerships",
                    icon: Scale,
                    color: "purple",
                  },
                  {
                    title: "Impact Measurement",
                    description: "Measuring not just what we do, but how we do it",
                    icon: Target,
                    color: "orange",
                  },
                ].map((integration, index) => {
                  const colorClasses = colorMap[integration.color as keyof typeof colorMap]
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 ${colorClasses.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <integration.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-lg">{integration.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">{integration.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
            alt="Team members working together in unity"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Values-Driven Mission</h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              If these values resonate with you, we invite you to join us in creating positive change across Ethiopia.
              Together, we can build a more just and equitable society.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg h-auto group">
                  <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Become a Volunteer
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-4 text-lg h-auto"
                >
                  Get in Touch
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
              "ESPA is guided by six core values: Integrity, Justice, Compassion, Collaboration, Excellence, and Empowerment. These values shape our organizational culture and ensure our impact aligns with our mission.",
            url: "https://espa-ethiopia.org",
            logo: "https://espa-ethiopia.org/espa-logo.jpg",
            foundingLocation: {
              "@type": "Place",
              name: "Addis Ababa, Ethiopia",
            },
            areaServed: "Ethiopia",
            knowsAbout: ["Human Rights", "Democratic Education", "Social Advocacy", "Community Development"],
            values: [
              "Integrity - Conducting work with highest ethical standards",
              "Justice - Promoting fairness and equality for all",
              "Compassion - Approaching work with empathy and understanding",
              "Collaboration - Working in partnership with communities",
              "Excellence - Striving for highest quality in all programs",
              "Empowerment - Building capacity for sustainable change",
            ],
          }),
        }}
      />
    </div>
  )
}
