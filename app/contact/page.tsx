"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Users,
  Heart,
  Shield,
  CheckCircle,
  AlertCircle,
  Globe,
  Calendar,
  MessageSquare,
  Building,
  ArrowRight,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    priority: "normal",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.subject) newErrors.subject = "Please select a subject"
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
        priority: "normal",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for reaching out to ESPA. We have received your message and will respond within 24 hours during
              business days.
            </p>
            <Button
              onClick={() => setSubmitStatus("idle")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact ESPA
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {"Let's Work Together for"}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Democratic Change
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Reach out to ESPA for advocacy support, partnership opportunities, or to report human rights concerns.
              We're here to listen and act for a better Ethiopia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">24hr</div>
                <div className="text-blue-200">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">1000+</div>
                <div className="text-blue-200">Lives Impacted</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose how you'd like to connect with us. We're here to listen and help build a better Ethiopia.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Send className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                        <p className="text-gray-600">We'll get back to you within 24 hours</p>
                      </div>
                    </div>

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-red-800">
                          Sorry, there was an error sending your message. Please try again or call us directly.
                        </span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className={`h-12 ${errors.firstName ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}
                          />
                          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className={`h-12 ${errors.lastName ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}
                          />
                          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={`h-12 ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                          <Input
                            type="tel"
                            placeholder="+251 XXX XXX XXX"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="h-12 border-gray-200 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Organization and Priority */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Organization</label>
                          <Input
                            placeholder="Your organization (optional)"
                            value={formData.organization}
                            onChange={(e) => handleInputChange("organization", e.target.value)}
                            className="h-12 border-gray-200 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Priority Level</label>
                          <Select
                            value={formData.priority}
                            onValueChange={(value) => handleInputChange("priority", value)}
                          >
                            <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                              <SelectItem value="emergency">Emergency</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                          <SelectTrigger
                            className={`h-12 ${errors.subject ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}
                          >
                            <SelectValue placeholder="What is this regarding?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="volunteer">Volunteer with ESPA</SelectItem>
                            <SelectItem value="training">Training & Capacity Building</SelectItem>
                            <SelectItem value="advocacy">Advocacy & Human Rights</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="emergency">Emergency/Human Rights Violation</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          placeholder="Please provide details about your inquiry, concern, or request for support..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className={`${errors.message ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}
                        />
                        <div className="flex justify-between items-center mt-2">
                          {errors.message ? (
                            <p className="text-red-500 text-sm">{errors.message}</p>
                          ) : (
                            <p className="text-gray-500 text-sm">Minimum 10 characters required</p>
                          )}
                          <span className="text-sm text-gray-400">{formData.message.length}/1000</span>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Building className="h-5 w-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Email Address</h4>
                          <p className="text-gray-700 font-medium">info@espa-ethiopia.org</p>
                          <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Phone Number</h4>
                            <p className="text-gray-700 font-medium">+251 11 123 4567</p>
                            <p className="text-gray-500 text-sm mt-1">Mon-Fri, 8:00 AM - 5:00 PM EAT</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Office Location</h4>
                            <p className="text-gray-700">
                              Bole Sub City, Woreda 03
                              <br />
                              House No. 123
                              <br />
                              Addis Ababa, Ethiopia
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-700"
                            >
                              Get Directions <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Clock className="h-5 w-5 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Monday - Friday</span>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">8:00 AM - 5:00 PM</div>
                          <Badge className="bg-green-100 text-green-800 text-xs mt-1">Open</Badge>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Saturday</span>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">9:00 AM - 1:00 PM</div>
                            <Badge className="bg-green-100 text-green-800 text-xs mt-1">Open</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Sunday</span>
                          <div className="text-right">
                            <div className="text-gray-500">Closed</div>
                            <Badge variant="secondary" className="text-xs mt-1">
                              Closed
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-orange-50 border-red-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Hotline</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      For urgent human rights violations or emergency situations requiring immediate attention.
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="font-semibold text-red-900">24/7 Hotline</p>
                      <p className="text-red-800">+251 90 000 0000</p>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <a
                        href="/volunteer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Volunteer with Us
                      </a>
                      <a
                        href="/programs"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Our Programs
                      </a>
                      <a
                        href="/resources"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Resources
                      </a>
                      <a
                        href="/events"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Upcoming Events
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Located in the heart of Addis Ababa, our office is open to community members, partners, and anyone
                seeking support for human rights and democratic advocacy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Map */}
              <Card className="shadow-xl border-0 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                      <MapPin className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Map</h3>
                    <p className="text-gray-600 mb-6">View our exact location and get directions</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Globe className="h-4 w-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Location Details */}
              <div className="space-y-8">
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Details</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Full Address</h4>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Ethiopian Social Partnership Advocacy (ESPA)</strong>
                            <br />
                            Bole Sub City, Woreda 03
                            <br />
                            House No. 123, Near Bole Medhanialem Church
                            <br />
                            Addis Ababa, Ethiopia
                            <br />
                            P.O. Box 12345
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Transportation</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Light Rail: Mexico Station (10 min walk)</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Bus: Multiple routes to Meskel Square</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Taxi: Easily accessible location</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                          Schedule a Visit
                        </h4>
                        <p className="text-gray-700 mb-4">
                          We encourage scheduling appointments to ensure our team is available to meet with you and
                          provide the best assistance for your needs.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Appointment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
