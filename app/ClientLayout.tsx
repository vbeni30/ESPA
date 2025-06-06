"use client"

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Scale,
  Menu,
  ChevronDown,
  Heart,
  Users,
  BookOpen,
  Newspaper,
  Phone,
  Info,
  Calendar,
  Camera,
  UserPlus,
  Handshake,
  FileText,
  Target,
  BarChart3,
} from "lucide-react"
import { Suspense, useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const menuItems = [
    {
      title: "About",
      icon: Info,
      items: [
        { title: "About Us", href: "/about" },
        { title: "Our Team", href: "/team" },
        { title: "Our History", href: "/history" },
      ],
    },
    {
      title: "Our Mission",
      icon: Target,
      items: [
        { title: "Core Values", href: "/values" },
        { title: "Our Impact", href: "/impact" },
      ],
    },
    {
      title: "Programs",
      icon: Users,
      items: [
        { title: "All Programs", href: "/programs" },
        { title: "Democratic Education", href: "/programs/democracy" },
        { title: "Human Rights", href: "/programs/human-rights" },
        { title: "Vulnerable Groups", href: "/programs/vulnerable-groups" },
      ],
    },
    {
      title: "Media",
      icon: Camera,
      items: [
        { title: "Gallery", href: "/gallery" },
        { title: "Events", href: "/events" },
        { title: "News", href: "/news" },
      ],
    },
    {
      title: "Get Involved",
      icon: UserPlus,
      items: [
        { title: "Partnerships", href: "/partnerships" },
        { title: "Volunteer", href: "/volunteer" },
        { title: "Become a Member", href: "/members" },
      ],
    },
    {
      title: "Resources",
      icon: BookOpen,
      items: [
        { title: "Publications", href: "/resources/publications" },
        { title: "Reports", href: "/resources/reports" },
        { title: "Policy Documents", href: "/resources/policy" },
      ],
    },
    {
      title: "Contact",
      icon: Phone,
      href: "/contact",
    },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[380px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-white shadow-md">
              <img src="/espa-logo.jpg" alt="ESPA Logo" className="h-full w-full object-contain" />
            </div>
            <span>ESPA Menu</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 mt-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSection(item.title)}
                    className="flex items-center justify-between w-full px-3 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedSections.includes(item.title) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.includes(item.title) && (
                    <div className="ml-7 space-y-1 pb-2">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Sticky Support Button */}
        <div className="pt-4 mt-4 border-t bg-white">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            <Heart className="mr-2 h-4 w-4" />
            Support Us
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-200 ${
        isScrolled ? "shadow-md h-14 md:h-16" : "shadow-sm h-16 md:h-18"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className={`flex items-center justify-center rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-200 ${
                isScrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-12 w-12 md:h-16 md:w-16"
              }`}
            >
              <img
                src="/espa-logo.jpg"
                alt="ESPA Logo"
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
                }`}
              >
                ESPA
              </h1>
              <p className={`text-gray-600 leading-tight ${isScrolled ? "text-xs" : "text-xs md:text-sm"}`}>
                Ethiopian Social Partnership Advocacy
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600">
              About
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-1 w-48 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Link
                href="/about"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Info className="h-3.5 w-3.5 mr-2.5" />
                About Us
              </Link>
              <Link
                href="/team"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Users className="h-3.5 w-3.5 mr-2.5" />
                Our Team
              </Link>
              <Link
                href="/history"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5 mr-2.5" />
                Our History
              </Link>
            </div>
          </div>

          {/* Our Mission Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600">
              Our Mission
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-1 w-48 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Link
                href="/values"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Scale className="h-3.5 w-3.5 mr-2.5" />
                Core Values
              </Link>
              <Link
                href="/impact"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <BarChart3 className="h-3.5 w-3.5 mr-2.5" />
                Our Impact
              </Link>
            </div>
          </div>

          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600">
              Programs
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-1 w-56 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Link
                href="/programs"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5 mr-2.5" />
                All Programs
              </Link>
              <Link
                href="/programs/democracy"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Scale className="h-3.5 w-3.5 mr-2.5" />
                Democratic Education
              </Link>
              <Link
                href="/programs/human-rights"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Heart className="h-3.5 w-3.5 mr-2.5" />
                Human Rights
              </Link>
              <Link
                href="/programs/vulnerable-groups"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Users className="h-3.5 w-3.5 mr-2.5" />
                Vulnerable Groups
              </Link>
            </div>
          </div>

          {/* Media Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600">
              Media
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-1 w-48 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Link
                href="/gallery"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Camera className="h-3.5 w-3.5 mr-2.5" />
                Gallery
              </Link>
              <Link
                href="/events"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Calendar className="h-3.5 w-3.5 mr-2.5" />
                Events
              </Link>
              <Link
                href="/news"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Newspaper className="h-3.5 w-3.5 mr-2.5" />
                News
              </Link>
            </div>
          </div>

          {/* Get Involved Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600">
              Get Involved
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-1 w-52 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Link
                href="/partnerships"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Handshake className="h-3.5 w-3.5 mr-2.5" />
                Partnerships
              </Link>
              <Link
                href="/volunteer"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <Heart className="h-3.5 w-3.5 mr-2.5" />
                Volunteer
              </Link>
              <Link
                href="/members"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <UserPlus className="h-3.5 w-3.5 mr-2.5" />
                Become a Member
              </Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600">
              Resources
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-1 w-52 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <Link
                href="/resources/publications"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5 mr-2.5" />
                Publications
              </Link>
              <Link
                href="/resources/reports"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <BarChart3 className="h-3.5 w-3.5 mr-2.5" />
                Reports
              </Link>
              <Link
                href="/resources/policy"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <FileText className="h-3.5 w-3.5 mr-2.5" />
                Policy Documents
              </Link>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600"
          >
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          <MobileMenu />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 h-9 text-sm transition-all duration-300 shadow-md hover:shadow-lg">
            <Heart className="h-3.5 w-3.5 mr-1.5" />
            Support Us
          </Button>
        </div>
      </div>
    </header>
  )
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
            <Suspense fallback={null}>
              <Navigation />
              <ScrollToTop />
            </Suspense>
            <main className="flex-1 w-full pt-16 md:pt-18">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
