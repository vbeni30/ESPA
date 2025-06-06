import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  Building,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">Get in Touch</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We're here to answer your questions, discuss partnerships, and explore how we can work together to advance
              human rights and democracy in Ethiopia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Please provide as much detail as possible so we can assist you effectively
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">First Name *</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name *</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                    <Input placeholder="+251 XXX XXX XXX" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Organization (Optional)</label>
                    <Input placeholder="Your organization name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Subject *</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="volunteer">Volunteer Interest</option>
                      <option value="media">Media Inquiry</option>
                      <option value="donation">Donation Information</option>
                      <option value="program">Program Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message *</label>
                    <Textarea
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                      className="resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      I would like to receive updates about ESPA's work and programs
                    </label>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of these channels. We're always ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                        <p className="text-gray-600 mb-2">
                          Addis Ababa, Ethiopia
                          <br />
                          Bole Sub-City
                          <br />
                          Woreda 03, House No. 123
                        </p>
                        <Button variant="outline" size="sm">
                          <MapPin className="mr-2 h-4 w-4" />
                          View on Map
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Main Office: +251 11 XXX XXXX</p>
                          <p>Emergency: +251 9XX XXX XXX</p>
                          <p>WhatsApp: +251 9XX XXX XXX</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email Addresses</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>General: info@espa-ethiopia.org</p>
                          <p>Programs: programs@espa-ethiopia.org</p>
                          <p>Media: media@espa-ethiopia.org</p>
                          <p>Partnerships: partnerships@espa-ethiopia.org</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-sm text-orange-600 mt-2">Emergency contact available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect directly with our team members for specific inquiries and specialized support
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Executive Director"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Dr. Sarah Alemayehu</CardTitle>
                <CardDescription>Executive Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Strategic leadership, partnerships, and organizational development
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>sarah@espa-ethiopia.org</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>+251 9XX XXX XXX</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Program Director"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Mr. Dawit Tekle</CardTitle>
                <CardDescription>Program Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Program development, implementation, and community engagement
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>dawit@espa-ethiopia.org</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>+251 9XX XXX XXX</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Advocacy Coordinator"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Ms. Hanan Mohammed</CardTitle>
                <CardDescription>Advocacy Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Policy advocacy, human rights campaigns, and legal support</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>hanan@espa-ethiopia.org</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>+251 9XX XXX XXX</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-lg text-gray-600">Looking for something specific? These quick links might help</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Users className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Volunteer with Us</CardTitle>
                <CardDescription>Join our team of dedicated volunteers</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" size="sm" className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Building className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle>Partner with ESPA</CardTitle>
                <CardDescription>Explore partnership opportunities</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" size="sm" className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Globe className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle>Media Inquiries</CardTitle>
                <CardDescription>Press and media information</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" size="sm" className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Media Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <MessageSquare className="h-8 w-8 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle>Emergency Contact</CardTitle>
                <CardDescription>Urgent human rights issues</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find quick answers to common questions about ESPA and our work</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How can I volunteer with ESPA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can apply to volunteer through our website or contact our volunteer coordinator directly. We offer
                  various opportunities including program support, event assistance, and advocacy work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What areas does ESPA work in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ESPA operates across Ethiopia with programs in democratic education, human rights advocacy, peaceful
                  coexistence, election observation, and support for vulnerable groups.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How can organizations partner with ESPA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We welcome partnerships with organizations that share our values. Contact our partnerships team to
                  discuss collaboration opportunities in advocacy, education, or service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How can I support ESPA's work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can support us through donations, volunteering, spreading awareness about our work, or
                  participating in our programs and events. Every contribution makes a difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join us in our mission to promote human rights, democracy, and social justice across Ethiopia. Together,
              we can create lasting positive change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get Involved Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700"
              >
                Learn About Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
