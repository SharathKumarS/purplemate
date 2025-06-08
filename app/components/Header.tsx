"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthModal from "./AuthModal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: "login" | "signup" }>({
    isOpen: false,
    mode: "login",
  })

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthModal({ isOpen: true, mode })
  }

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: "login" })
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="https://res.cloudinary.com/haceitmedia/image/upload/v1749391246/coffeemate_logo_luoonh.png" alt="PurpleMate Logo" className="w-8 h-8" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/students" className="text-gray-600 hover:text-purple-600 transition-colors">
                For Students
              </Link>
              <Link href="/remote-workers" className="text-gray-600 hover:text-purple-600 transition-colors">
                For Remote Workers
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                onClick={() => openAuthModal("login")}
                className="text-gray-600 hover:text-purple-600"
              >
                Sign In
              </Button>
              <Button
                onClick={() => openAuthModal("signup")}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="/students" className="text-gray-600 hover:text-purple-600 transition-colors">
                  For Students
                </Link>
                <Link href="/remote-workers" className="text-gray-600 hover:text-purple-600 transition-colors">
                  For Remote Workers
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <Button variant="outline" onClick={() => openAuthModal("login")} className="w-full">
                    Sign In
                  </Button>
                  <Button
                    onClick={() => openAuthModal("signup")}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white w-full"
                  >
                    Join Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={authModal.isOpen} onClose={closeAuthModal} defaultMode={authModal.mode} />
    </>
  )
}
