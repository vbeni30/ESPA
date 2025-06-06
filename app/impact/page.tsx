import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  BookOpen,
  Scale,
  Heart,
  Globe,
  TrendingUp,
  Award,
  Target,
  CheckCircle,
  BarChart3,
  PieChart,
  Calendar,
} from "lucide-react"
import Image from "next/image"

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 via-pink-700 to-purple-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">Our Impact</h1>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Measuring the positive change we've created in communities across Ethiopia through our advocacy,
              education, and service programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Full Report
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-rose-600 border-white hover:bg-rose-50 hover:text-rose-700"
              >
                <PieChart className="mr-2 h-5 w-5" />
                Impact Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Since our establishment in 2022, we've made significant strides in advancing human rights and democracy
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-blue-600">5,247</CardTitle>
                <CardDescription>Citizens Educated</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  People reached through our democratic education and human rights awareness programs
                </p>
                <div className="mt-4">
                  <Progress value={87} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">87% of annual target</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-green-600">28</CardTitle>
                <CardDescription>Programs Conducted</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Educational workshops, training sessions, and advocacy programs across Ethiopia
                </p>
                <div className="mt-4">
                  <Progress value={93} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">93% of planned programs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-purple-600">18</CardTitle>
                <CardDescription>Partnerships Formed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Strategic alliances with local and international organizations</p>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">75% growth from last year</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-4xl font-bold text-red-600">1,340</CardTitle>
                <CardDescription>Vulnerable Individuals Supported</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Women, disabled individuals, and marginalized community members assisted
                </p>
                <div className="mt-4">
                  <Progress value={89} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">89% increase from 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of our impact across different program areas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Democratic Education Impact */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Democratic Education</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">Core Program</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">2,150</p>
                    <p className="text-xs text-gray-500">Workshop Participants</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">15</p>
                    <p className="text-xs text-gray-500">Regions Covered</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Knowledge Retention</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Participant Satisfaction</span>
                    <span>96%</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>85% of participants report increased civic engagement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>78% became community advocates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Human Rights Advocacy Impact */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Human Rights Advocacy</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800 text-xs">Core Program</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">1,890</p>
                    <p className="text-xs text-gray-500">Cases Supported</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">73%</p>
                    <p className="text-xs text-gray-500">Success Rate</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Legal Support Effectiveness</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Policy Influence</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>3 policy changes influenced</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>12 legal precedents established</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Women Empowerment Impact */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Women Empowerment</CardTitle>
                    <Badge className="bg-pink-100 text-pink-800 text-xs">Special Initiative</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-pink-600">850</p>
                    <p className="text-xs text-gray-500">Women Trained</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-600">67%</p>
                    <p className="text-xs text-gray-500">Leadership Roles</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Economic Empowerment</span>
                    <span>81%</span>
                  </div>
                  <Progress value={81} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Leadership Development</span>
                    <span>74%</span>
                  </div>
                  <Progress value={74} className="h-2" />
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>45% income increase on average</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>120 women in leadership positions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geographic Impact */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographic Reach</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our programs have reached communities across Ethiopia, with a focus on both urban and rural areas where
                the need for human rights education and advocacy is greatest.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Addis Ababa</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={95} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">1,250 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Oromia Region</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={78} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">980 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Amhara Region</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={65} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">820 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">SNNP Region</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={58} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">730 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tigray Region</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={42} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">530 people</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Ethiopia map showing ESPA's reach"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-rose-600 text-white">15 Regions Covered</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from communities and individuals whose lives have been transformed through our programs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Community leader success story"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Democratic Education</Badge>
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">March 2024</span>
                </div>
                <CardTitle className="text-lg">From Participant to Community Leader</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  "After attending ESPA's democratic education workshop, I gained the confidence to run for local
                  office. Today, I represent my community and advocate for their rights at the regional level."
                </p>
                <p className="text-sm font-medium text-gray-900">- Almaz Tadesse, Community Leader, Bahir Dar</p>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">Elected to local council with 78% of votes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Women's rights advocate"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-pink-100 text-pink-800 text-xs">Women Empowerment</Badge>
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">June 2024</span>
                </div>
                <CardTitle className="text-lg">Breaking Barriers in Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  "ESPA's women empowerment program taught me about my rights and gave me business skills. I now run a
                  successful cooperative that employs 15 other women in my village."
                </p>
                <p className="text-sm font-medium text-gray-900">- Hawa Ibrahim, Entrepreneur, Hawassa</p>
                <div className="mt-4 flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-yellow-600">Regional Women Entrepreneur Award 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Human rights defender"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-purple-100 text-purple-800 text-xs">Human Rights</Badge>
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">August 2024</span>
                </div>
                <CardTitle className="text-lg">Defending Rights, Changing Lives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  "With ESPA's legal support training, I've been able to help over 50 families in my community
                  understand and exercise their rights. Knowledge truly is power."
                </p>
                <p className="text-sm font-medium text-gray-900">- Getnet Worku, Paralegal, Mekelle</p>
                <div className="mt-4 flex items-center space-x-2">
                  <Scale className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-purple-600">50+ families supported with legal guidance</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead: 2025 Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ambitious targets for expanding impact and reaching more communities in need
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">10,000</CardTitle>
                <CardDescription>Citizens to be educated</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={52} className="mb-2" />
                <p className="text-sm text-gray-500">52% progress toward 2025 goal</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">25</CardTitle>
                <CardDescription>New partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={72} className="mb-2" />
                <p className="text-sm text-gray-500">72% progress toward 2025 goal</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">50</CardTitle>
                <CardDescription>Programs to conduct</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={56} className="mb-2" />
                <p className="text-sm text-gray-500">56% progress toward 2025 goal</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">3,000</CardTitle>
                <CardDescription>Vulnerable individuals to support</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={45} className="mb-2" />
                <p className="text-sm text-gray-500">45% progress toward 2025 goal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Impact</h2>
            <p className="text-xl text-rose-100 mb-8">
              Your support helps us reach more communities, educate more citizens, and create lasting change. Join us in
              building a more democratic and just Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Support Our Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-rose-600 border-white hover:bg-rose-50 hover:text-rose-700"
              >
                Download Impact Report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
