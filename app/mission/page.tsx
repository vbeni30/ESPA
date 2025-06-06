import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, BookOpen, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-blue-600 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Our Mission</h1>
            <p className="mt-6 text-lg text-blue-100">
              ESPA is committed to ensuring human rights, promoting democratic values, and providing holistic support to
              marginalized communities through advocacy, education, and service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Purpose</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission Statement</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ESPA is an indigenous non-profit organization committed to ensure to advocate on human rights issues.
                Service, support and education for all the citizens of Ethiopia and the world.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to diligently advocate for all citizens, educate the public regarding their rights and
                democracy, and to raise funds so that provide a holistic assistance including the marginalized people
                groups, women, disables and oppressed in great need.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creating opportunities to improve their life is we stand for the oppressed.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="ESPA community outreach"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Principles Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Working Principles</h2>
            <p className="text-lg text-gray-600">The core principles that guide our approach and methodology</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  ESPA advocates for any marginalized and oppressed citizens with stakeholders. We work to amplify the
                  voices of those who are often unheard and ensure their rights are protected.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Policy advocacy with government agencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Legal support for human rights cases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Public awareness campaigns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  ESPA educates people to explore their natural human rights and apply their freedom of living,
                  education, work, worship, democratic rights and so on.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Democratic education workshops</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Human rights awareness training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Community dialogue facilitation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  ESPA provides a holistic service to oppressed and marginalized in different forms including looking
                  for opportunities to assist oppressed and marginalized citizens.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Support programs for vulnerable groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Disaster response coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Community development initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Objectives</h2>
            <p className="text-lg text-gray-600">Key goals that drive our programs and initiatives</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  Democratic Understanding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensure the understanding of democratic thoughts and concepts for Ethiopian society through
                  comprehensive educational programs and public awareness campaigns.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  Peaceful Coexistence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Educate citizens to create the culture of peaceful co-existence among different people groups through
                  dialogue, conflict resolution, and community engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  Human Rights Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work to confirm human rights of all citizens through advocacy, legal support, and partnerships with
                  government and international organizations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  National Consensus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create the culture of national consensus among different thoughts through trainings, seminars, and
                  workshops that promote dialogue and understanding.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  Media Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Give awareness about development, peace, human rights and democracy by establishing media institutions
                  and creating partnerships with media stakeholders.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">6</span>
                  </div>
                  Support for Vulnerable Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work to improve the conditional hurdles of women and the disabled through targeted programs, advocacy,
                  and support services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Measurement Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Approach</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Our Impact</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At ESPA, we believe in accountability and transparency in all our work. We regularly assess the impact
                of our programs to ensure they are effectively advancing our mission and creating positive change in
                communities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our impact measurement framework focuses on both quantitative metrics (such as number of people reached,
                programs conducted) and qualitative outcomes (such as changes in awareness, behavior, and policy).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We share our impact reports with stakeholders and the public to maintain transparency and continuously
                improve our approaches based on evidence and feedback.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle>Community Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Measuring participation and feedback from community members in our programs
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle>Knowledge Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Assessing changes in awareness and understanding of rights and democratic principles
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                    <Scale className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle>Policy Influence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tracking changes in policies and practices that protect human rights</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Community Wellbeing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Evaluating improvements in the lives of marginalized and vulnerable groups
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voices from the Community</h2>
            <p className="text-lg text-gray-600">Hear from those who have been impacted by our work</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-center italic">
                  "ESPA's workshops on democratic rights have transformed our community's understanding of civic
                  participation. We now feel empowered to engage in the democratic process and advocate for our needs."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Community Leader</p>
                  <p className="text-sm text-gray-500">Addis Ababa</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-center italic">
                  "As a woman in a rural community, I've benefited greatly from ESPA's programs. Their support has
                  helped me understand my rights and given me the confidence to pursue educational opportunities."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Program Participant</p>
                  <p className="text-sm text-gray-500">Rural Ethiopia</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 text-center italic">
                  "ESPA's advocacy work has been instrumental in bringing attention to the needs of disabled individuals
                  in our community. Their holistic approach addresses both immediate needs and long-term systemic
                  change."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Partner Organization Representative</p>
                  <p className="text-sm text-gray-500">Disability Rights Group</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              Your contribution helps us continue our work advocating for human rights, promoting democracy, and
              supporting marginalized communities across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" variant="secondary">
                  Make a Donation
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
