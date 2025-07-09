"use client"

import type React from "react"
import "@/app/globals.css"
import { Inter, Poppins } from "next/font/google"
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
  Home,
} from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] })

interface ClientLayoutProps {
  children: React.ReactNode
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const menuItems = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
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
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-white shadow-md aspect-square">
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
          <Link href="/donate">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 h-9 text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="h-3.5 w-3.5 mr-1.5" />
              Support Us
            </Button>
          </Link>
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
              className={`flex items-center justify-center rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-200 aspect-square ${
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
              <p
                className={`text-gray-600 leading-tight whitespace-nowrap ${isScrolled ? "text-xs" : "text-xs md:text-sm"}`}
              >
                Ethiopian Social Partnership Advocacy
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center ml-32 lg:ml-40 xl:ml-48 2xl:ml-56 space-x-3">
          {/* Home */}
          <Link
            href="/"
            className="px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600"
          >
            Home
          </Link>
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
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap">
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
            <button className="flex items-center px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap">
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
          <Link href="/donate">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 h-9 text-sm transition-all duration-300 shadow-md hover:shadow-lg">
              <Heart className="h-3.5 w-3.5 mr-1.5" />
              Support Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [pathname])

  return null
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    const handleLoad = () => {
      setIsLoading(false)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("load", handleLoad)

    // Fallback timeout for loading state
    const timeout = setTimeout(() => setIsLoading(false), 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("load", handleLoad)
      clearTimeout(timeout)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <html lang="en" className={cn(inter.variable, poppins.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta
          name="description"
          content="Ethiopian Social Partnership Advocacy - Empowering communities through human rights advocacy, democratic education, and social justice initiatives across Ethiopia."
        />
        <meta property="og:title" content="Ethiopian Social Partnership Advocacy (ESPA)" />
        <meta
          property="og:description"
          content="Advocating for human rights, promoting democracy, and empowering communities across Ethiopia through education, advocacy, and service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://espa-ethiopia.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/espa-logo.jpg" />
        <link rel="preload" as="image" href="/espa-logo.jpg" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Skip to main content
          </a>

          {/* Loading Screen */}
          {isLoading && (
            <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                  <img src="/espa-logo.jpg" alt="ESPA Logo" className="w-full h-full object-contain" />
                </div>
                <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading ESPA...</p>
              </div>
            </div>
          )}

          <div className="flex flex-col min-h-screen">
            <Navigation />

            <main id="main-content" className="flex-1 pt-16 lg:pt-20" role="main">
              {children}
            </main>

            <Footer />
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            size="icon"
            className={cn(
              "fixed bottom-6 right-6 z-40 shadow-xl hover:shadow-2xl transition-all duration-300 bg-blue-600 hover:bg-blue-700",
              showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
