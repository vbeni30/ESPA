import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Twitter, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/team-hero-bg.jpg"
            alt="ESPA team collaboration"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">Our Team</h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Meet the dedicated professionals and volunteers who drive ESPA's mission to promote human rights,
              democracy, and social justice across Ethiopia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Users className="mr-2 h-5 w-5" />
                Join Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-indigo-600 border-white hover:bg-indigo-50 hover:text-indigo-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Leadership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leaders guide ESPA's strategic direction and ensure effective implementation of our
              programs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Executive Director */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="relative mb-6">
                  <Image
                    src="/images/dr-sarah-alemayehu-team.jpg"
                    alt="Dr. Sarah Alemayehu"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">Dr. Sarah Alemayehu</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Executive Director</CardDescription>
                <Badge className="mt-2 bg-blue-100 text-blue-800">15+ Years Experience</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dr. Alemayehu brings over 15 years of experience in human rights advocacy and organizational
                  leadership. She holds a PhD in International Relations and has worked with various international NGOs.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>sarah@espa-ethiopia.org</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+251 911 123 456</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-3 pt-4">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                </div>
                <div className="pt-4 space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Responsibilities:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Strategic planning and organizational leadership</li>
                    <li>• Partnership development and stakeholder relations</li>
                    <li>• Policy advocacy and government relations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Program Director */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="relative mb-6">
                  <Image
                    src="/images/mr-dawit-tekle-team.jpg"
                    alt="Mr. Dawit Tekle"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">Mr. Dawit Tekle</CardTitle>
                <CardDescription className="text-green-600 font-medium">Program Director</CardDescription>
                <Badge className="mt-2 bg-green-100 text-green-800">12+ Years Experience</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mr. Tekle oversees all program development and implementation. He has extensive experience in
                  community development, education, and project management across rural and urban Ethiopia.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>dawit@espa-ethiopia.org</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+251 911 234 567</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-3 pt-4">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                </div>
                <div className="pt-4 space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Responsibilities:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Program design and implementation</li>
                    <li>• Community engagement and outreach</li>
                    <li>• Training and capacity building</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Advocacy Coordinator */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="relative mb-6">
                  <Image
                    src="/images/ms-hanan-mohammed-team.jpg"
                    alt="Ms. Hanan Mohammed"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">Ms. Hanan Mohammed</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Advocacy Coordinator</CardDescription>
                <Badge className="mt-2 bg-purple-100 text-purple-800">10+ Years Experience</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ms. Mohammed leads our advocacy efforts with a background in law and human rights. She specializes in
                  policy analysis, legal advocacy, and campaign development.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>hanan@espa-ethiopia.org</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+251 911 345 678</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-3 pt-4">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                </div>
                <div className="pt-4 space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Responsibilities:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Policy advocacy and legal support</li>
                    <li>• Human rights campaign development</li>
                    <li>• Government and stakeholder relations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Staff</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated program staff work directly with communities to implement our initiatives
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Program Staff Members */}
            {[
              {
                name: "Ms. Tigist Haile",
                role: "Education Program Manager",
                email: "tigist@espa-ethiopia.org",
                phone: "+251 911 456 789",
                image: "/images/program-staff-tigist.jpg",
              },
              {
                name: "Mr. Yohannes Desta",
                role: "Community Outreach Coordinator",
                email: "yohannes@espa-ethiopia.org",
                phone: "+251 911 567 890",
                image: "/images/program-staff-yohannes.jpg",
              },
              {
                name: "Ms. Meron Tadesse",
                role: "Women's Empowerment Specialist",
                email: "meron@espa-ethiopia.org",
                phone: "+251 911 678 901",
                image: "/images/program-staff-meron.jpg",
              },
              {
                name: "Mr. Getachew Bekele",
                role: "Election Monitoring Coordinator",
                email: "getachew@espa-ethiopia.org",
                phone: "+251 911 789 012",
                image: "/images/program-staff-getachew.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-xs">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our board provides strategic oversight and governance to ensure ESPA's mission is fulfilled effectively
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Mehari Taddele Maru",
                role: "Board Chairperson",
                bio: "International relations expert and former AU official",
                expertise: "Governance, International Relations",
                image: "/images/board-mehari.jpg",
              },
              {
                name: "Prof. Seble Kassaye",
                role: "Vice Chairperson",
                bio: "Human rights lawyer and academic",
                expertise: "Human Rights Law, Legal Advocacy",
                image: "/images/board-seble.jpg",
              },
              {
                name: "Mr. Alemayehu Fentaw",
                role: "Treasurer",
                bio: "Financial management and development expert",
                expertise: "Financial Management, Development",
                image: "/images/board-alemayehu.jpg",
              },
              {
                name: "Dr. Rahel Dawit",
                role: "Secretary",
                bio: "Public health and community development specialist",
                expertise: "Public Health, Community Development",
                image: "/images/board-rahel.jpg",
              },
              {
                name: "Mr. Teshome Adugna",
                role: "Board Member",
                bio: "Civil society and democracy advocate",
                expertise: "Civil Society, Democracy",
                image: "/images/board-teshome.jpg",
              },
              {
                name: "Ms. Birtukan Ayano",
                role: "Board Member",
                bio: "Women's rights and gender equality expert",
                expertise: "Women's Rights, Gender Equality",
                image: "/images/board-birtukan.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-lg text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      {member.expertise}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="relative py-16 bg-indigo-600 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/team-volunteers.jpg"
            alt="ESPA volunteers working with community"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Are you passionate about human rights and democracy? We're always looking for dedicated individuals to
              join our mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-indigo-600 border-white hover:bg-indigo-50 hover:text-indigo-700"
              >
                Volunteer Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
