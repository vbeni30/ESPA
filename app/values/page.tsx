import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Scale, Heart, Shield, Lightbulb, Target, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ValuesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Our Core Values
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              The fundamental beliefs and principles that guide every aspect of our work and define who we are as an
              organization
            </p>
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">Liberty • Fraternity • Equality</Badge>
          </div>
        </div>
      </section>

      {/* Core Values Introduction */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Our Foundation</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Values That Drive Us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At ESPA, our core values are not just words on paper—they are the living principles that guide our
                decisions, shape our programs, and define our relationships with the communities we serve.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These values were carefully chosen by our founders to reflect the universal principles of human dignity,
                democratic participation, and social justice that are essential for building a better Ethiopia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every program we design, every partnership we form, and every action we take is measured against these
                core values to ensure we remain true to our mission and the communities we serve.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="ESPA core values in action"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Three Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our three foundational values form the bedrock of everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Liberty */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Globe className="h-10 w-10 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl">Liberty</CardTitle>
                <CardDescription className="text-lg">Freedom for all citizens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We believe in and advocate for the freedom and liberty of all citizens to live, work, worship, and
                  express themselves without undue restriction or oppression.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">This means:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Freedom of expression and speech</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Religious and cultural freedom</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Freedom from oppression and discrimination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Right to peaceful assembly and association</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Fraternity */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Users className="h-10 w-10 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl">Fraternity (Solidarity)</CardTitle>
                <CardDescription className="text-lg">Unity among all people</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We promote unity, mutual support, and solidarity among all people, recognizing our shared humanity and
                  the strength that comes from working together.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">This means:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Building bridges across communities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Promoting mutual understanding and respect</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Supporting collective action for common good</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Fostering inclusive participation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Equality */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Scale className="h-10 w-10 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl">Equality</CardTitle>
                <CardDescription className="text-lg">Equal rights for everyone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We believe in and advocate for equal rights, opportunities, and treatment for all citizens regardless
                  of ethnicity, gender, religion, or socioeconomic status.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">This means:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Equal access to opportunities and resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Non-discrimination in all forms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Equal representation and participation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Justice and fairness for all</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supporting Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional principles that complement our core values and guide our organizational culture
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Integrity */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We maintain the highest standards of honesty, transparency, and ethical conduct in all our activities
                  and relationships.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Transparent financial management</li>
                  <li>• Honest communication with stakeholders</li>
                  <li>• Ethical decision-making processes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compassion */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We approach our work with empathy and understanding, recognizing the human dignity of every person we
                  serve.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Empathetic community engagement</li>
                  <li>• Respectful treatment of all individuals</li>
                  <li>• Culturally sensitive programming</li>
                </ul>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We embrace creative solutions and new approaches to address complex social challenges and maximize our
                  impact.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Creative program design</li>
                  <li>• Technology-enabled solutions</li>
                  <li>• Adaptive learning approaches</li>
                </ul>
              </CardContent>
            </Card>

            {/* Accountability */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Accountability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We take responsibility for our actions and outcomes, continuously measuring and improving our
                  effectiveness.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Regular impact assessment</li>
                  <li>• Stakeholder feedback integration</li>
                  <li>• Continuous improvement processes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sustainability */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We design programs and initiatives that create lasting change and build local capacity for continued
                  progress.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Long-term impact focus</li>
                  <li>• Local capacity building</li>
                  <li>• Environmental consciousness</li>
                </ul>
              </CardContent>
            </Card>

            {/* Excellence */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We strive for the highest quality in all our work, continuously learning and improving our approaches
                  and outcomes.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quality program delivery</li>
                  <li>• Professional development</li>
                  <li>• Best practice adoption</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Values in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our values translate into real-world impact through our programs and initiatives
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Democratic education workshop"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Democratic Education Programs</CardTitle>
                <CardDescription>Liberty and Equality in Practice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our democratic education workshops embody our values of liberty and equality by ensuring all
                  participants, regardless of background, have equal access to learning about their rights and freedoms.
                </p>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Liberty
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Equality
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Education
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Community dialogue session"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Peaceful Coexistence Dialogues</CardTitle>
                <CardDescription>Fraternity and Compassion in Action</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our community dialogue programs demonstrate fraternity and compassion by bringing together diverse
                  groups to build understanding, empathy, and solidarity across differences.
                </p>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Fraternity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Compassion
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Peace
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Women empowerment program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Women Empowerment Initiative</CardTitle>
                <CardDescription>Equality and Innovation Combined</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our women's empowerment programs showcase our commitment to equality and innovation by creating new
                  opportunities and addressing systemic barriers faced by women.
                </p>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Equality
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Innovation
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Empowerment
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Human rights advocacy"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Human Rights Advocacy</CardTitle>
                <CardDescription>Integrity and Accountability in Advocacy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our advocacy work demonstrates integrity and accountability by using evidence-based approaches and
                  maintaining transparency in our efforts to protect human rights.
                </p>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Integrity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Accountability
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Advocacy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Living Our Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Living Our Values Daily</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our values are not just aspirational statements—they are lived principles that guide how we interact
                with communities, make decisions, and measure our success.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every team member, from leadership to field staff, is trained on these values and held accountable for
                embodying them in their daily work. We regularly assess how well we're living up to these principles and
                make adjustments when necessary.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Regular values-based training for all staff and volunteers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Values integration in all program design and implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Community feedback mechanisms to ensure values alignment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Annual values assessment and organizational reflection</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="ESPA team living values"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Share Our Values</h2>
            <p className="text-xl text-emerald-100 mb-8">
              If these values resonate with you, join us in building a more just, democratic, and equitable Ethiopia.
              Together, we can make these principles a reality for all.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Join Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-emerald-600 border-white hover:bg-emerald-50 hover:text-emerald-700"
              >
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
