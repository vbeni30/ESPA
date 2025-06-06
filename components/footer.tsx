"use client"

import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Heart, ArrowUp, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Newsletter Section */}
        <div className="py-12 md:py-16 border-b border-gray-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get updates on our latest programs, news, and impact stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12 max-w-6xl mx-auto">
            <div className="space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
                  <img src="/espa-logo.jpg" alt="ESPA Logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">ESPA</h3>
                  <p className="text-sm text-gray-400">Ethiopian Social Partnership Advocacy</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advocating for human rights, promoting democracy, and serving marginalized communities across Ethiopia
                with dedication and integrity.
              </p>
              <div className="flex space-x-3 pt-2">
                <Link
                  href="#"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center text-blue-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-sky-500/20 hover:bg-sky-500 rounded-lg flex items-center justify-center text-sky-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-blue-700/20 hover:bg-blue-700 rounded-lg flex items-center justify-center text-blue-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600 rounded-lg flex items-center justify-center text-pink-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-red-600/20 hover:bg-red-600 rounded-lg flex items-center justify-center text-red-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-6 text-white">Get Involved</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/donate"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <Heart className="h-4 w-4 mr-3 text-red-400" />
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Become a Member
                  </Link>
                </li>
                <li>
                  <Link
                    href="/volunteer"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnerships"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm break-all">info@espa-ethiopia.org</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm">+251 XXX XXX XXX</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Ethiopian Social Partnership Advocacy (ESPA). All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
