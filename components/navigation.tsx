"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  ChevronDown,
  Heart,
  Users,
  BookOpen,
  Calendar,
  Camera,
  FileText,
  Phone,
  Info,
  Target,
  Award,
  UserCheck,
  Handshake,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "About",
    href: "/about",
    icon: Info,
    submenu: [
      { title: "Mission", href: "/mission", icon: Target },
      { title: "Values", href: "/values", icon: Award },
      { title: "History", href: "/history", icon: BookOpen },
      { title: "Team", href: "/team", icon: UserCheck },
    ],
  },
  {
    title: "Programs",
    href: "/programs",
    icon: BookOpen,
    submenu: [
      { title: "Democratic Education", href: "/programs/democracy", icon: Users },
      { title: "Human Rights", href: "/programs/human-rights", icon: Heart },
      { title: "Vulnerable Groups", href: "/programs/vulnerable-groups", icon: Handshake },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    icon: FileText,
    submenu: [
      { title: "Publications", href: "/resources/publications", icon: BookOpen },
      { title: "Policy Papers", href: "/resources/policy", icon: FileText },
      { title: "Reports", href: "/resources/reports", icon: Award },
    ],
  },
  { title: "News", href: "/news", icon: FileText },
  { title: "Events", href: "/events", icon: Calendar },
  { title: "Gallery", href: "/gallery", icon: Camera },
  { title: "Contact", href: "/contact", icon: Phone },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-white",
      )}
    >
      <nav className="container mx-auto px-4 md:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
            aria-label="ESPA Home"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/espa-logo.jpg"
                alt="ESPA Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                ESPA
              </span>
              <span className="text-xs lg:text-sm text-gray-600 leading-tight max-w-[200px] hidden sm:block">
                Ethiopian Social Partnership Advocacy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.title}
                      onKeyDown={(e) =>
                        handleKeyDown(e, () => setActiveDropdown(activeDropdown === item.title ? null : item.title))
                      }
                    >
                      <item.icon className="w-4 h-4" aria-hidden="true" />
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.title && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:bg-blue-50 focus:text-blue-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <subItem.icon className="w-4 h-4" aria-hidden="true" />
                            <span>{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <item.icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/volunteer">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-200">
                <Users className="w-4 h-4 mr-2" />
                Volunteer
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src="/espa-logo.jpg"
                        alt="ESPA Logo"
                        width={32}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-lg text-gray-900">ESPA</span>
                    </div>
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="space-y-2 px-6">
                    {navigationItems.map((item) => (
                      <div key={item.title}>
                        {item.submenu ? (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3 py-3 text-gray-700 font-medium">
                              <item.icon className="w-5 h-5" />
                              <span>{item.title}</span>
                            </div>
                            <div className="ml-8 space-y-1">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="flex items-center space-x-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  <subItem.icon className="w-4 h-4" />
                                  <span>{subItem.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center space-x-3 py-3 text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-gray-200 p-6 space-y-3">
                  <Link href="/volunteer" onClick={() => setIsMobileOpen(false)}>
                    <Button variant="outline" className="w-full justify-center">
                      <Users className="w-4 h-4 mr-2" />
                      Volunteer
                    </Button>
                  </Link>
                  <Link href="/donate" onClick={() => setIsMobileOpen(false)}>
                    <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700">
                      <Heart className="w-4 h-4 mr-2" />
                      Donate
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
