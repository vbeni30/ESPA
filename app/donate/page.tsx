"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Heart,
  Users,
  Shield,
  CreditCard,
  DollarSign,
  CheckCircle,
  Star,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Banknote,
  Building,
  User,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const donationAmounts = [
  { amount: 100, label: "100 ETB", description: "Provides educational materials for 1 student" },
  { amount: 500, label: "500 ETB", description: "Supports a community workshop" },
  { amount: 1000, label: "1,000 ETB", description: "Funds legal aid for vulnerable families" },
  { amount: 2500, label: "2,500 ETB", description: "Sponsors a democratic education session" },
  { amount: 5000, label: "5,000 ETB", description: "Supports a full program for 50 participants" },
  { amount: 10000, label: "10,000 ETB", description: "Funds a complete community outreach program" },
]

const impactStats = [
  { icon: Users, number: "5,000+", label: "Citizens Educated", color: "text-blue-600" },
  { icon: CheckCircle, number: "25+", label: "Programs Conducted", color: "text-green-600" },
  { icon: Shield, number: "1,890+", label: "Legal Cases Supported", color: "text-purple-600" },
  { icon: Star, number: "98%", label: "Community Satisfaction", color: "text-yellow-600" },
]

const paymentMethods = [
  { id: "cbe", name: "CBE Birr", icon: Building, description: "Commercial Bank of Ethiopia mobile payment" },
  { id: "telebirr", name: "Telebirr", icon: Phone, description: "Ethio Telecom mobile money service" },
  { id: "bank", name: "Bank Transfer", icon: Banknote, description: "Direct bank transfer to ESPA account" },
  { id: "cash", name: "Cash Donation", icon: DollarSign, description: "Visit our office for cash donations" },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const { toast } = useToast()

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const finalAmount = selectedAmount || Number.parseFloat(customAmount)

    if (!finalAmount || finalAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      })
      return
    }

    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to continue.",
        variant: "destructive",
      })
      return
    }

    if (!isAnonymous && (!formData.firstName || !formData.email)) {
      toast({
        title: "Required Information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      })
      return
    }

    // Simulate donation processing
    toast({
      title: "Thank You!",
      description: `Your donation of ${finalAmount} ETB has been processed. You will receive a confirmation email shortly.`,
    })

    // Reset form
    setSelectedAmount(null)
    setCustomAmount("")
    setPaymentMethod("")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const finalAmount = selectedAmount || Number.parseFloat(customAmount) || 0

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Support Our Mission</h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your donation helps us educate communities, protect human rights, and build a more democratic Ethiopia.
              Every contribution makes a meaningful difference in the lives of those we serve.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2 text-blue-100">
                <Award className="w-5 h-5" />
                <span className="text-sm">Registered NGO</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure Donations</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">100% Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact in Numbers</h2>
              <p className="text-lg text-gray-600">See how your donations are making a difference</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <Card key={stat.label} className="text-center border-0 shadow-lg">
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

      {/* Donation Form */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Make Your Donation</h2>
              <p className="text-lg text-gray-600">Choose your donation amount and payment method</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Donation Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span>Donation Type</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={donationType} onValueChange={setDonationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly donation</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Amount Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Donation Amount</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {donationAmounts.map((option) => (
                      <button
                        key={option.amount}
                        type="button"
                        onClick={() => handleAmountSelect(option.amount)}
                        className={cn(
                          "p-4 border-2 rounded-lg text-left transition-all duration-200 hover:border-blue-300",
                          selectedAmount === option.amount
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:bg-gray-50",
                        )}
                      >
                        <div className="font-bold text-lg text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Or enter a custom amount (ETB)</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount in Ethiopian Birr"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      min="1"
                    />
                  </div>

                  {finalAmount > 0 && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 text-green-800">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Total Donation: {finalAmount.toLocaleString()} ETB</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-purple-600" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="relative">
                          <RadioGroupItem value={method.id} id={method.id} className="peer sr-only" />
                          <Label
                            htmlFor={method.id}
                            className="flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-blue-300"
                          >
                            <method.icon className="w-6 h-6 text-gray-600" />
                            <div>
                              <div className="font-semibold text-gray-900">{method.name}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Donor Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <span>Donor Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                    <Label htmlFor="anonymous">Make this donation anonymous</Label>
                  </div>

                  {!isAnonymous && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required={!isAnonymous}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required={!isAnonymous}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Share why you're supporting ESPA..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  disabled={!finalAmount || !paymentMethod}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate {finalAmount > 0 ? `${finalAmount.toLocaleString()} ETB` : ""}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Support Us</h2>
              <p className="text-lg text-gray-600">Can't donate right now? Here are other ways to help</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
                  <p className="text-gray-600 mb-6">
                    Join our team of dedicated volunteers and contribute your skills to our programs.
                  </p>
                  <Link href="/volunteer">
                    <Button variant="outline" className="w-full bg-transparent">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
                  <p className="text-gray-600 mb-6">
                    Share our mission with your network and help us reach more communities.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Share Our Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Partner with Us</h3>
                  <p className="text-gray-600 mb-6">
                    Explore partnership opportunities to amplify our collective impact.
                  </p>
                  <Link href="/partnerships">
                    <Button variant="outline" className="w-full bg-transparent">
                      Explore Partnerships
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Donating?</h2>
              <p className="text-lg text-gray-600">We're here to help with any questions about your donation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">+251 11 123 4567</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">donate@espa-ethiopia.org</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
