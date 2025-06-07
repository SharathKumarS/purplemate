"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Laptop, Zap, Users } from "lucide-react"
import AuthModal from "./AuthModal"

export default function HeroSection() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: "login" | "signup" }>({
    isOpen: false,
    mode: "signup",
  })

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthModal({ isOpen: true, mode })
  }

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: "signup" })
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-32">
        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 opacity-10">
            <BookOpen className="w-16 h-16 text-purple-600" />
          </div>
          <div className="absolute top-40 right-20 opacity-10">
            <Laptop className="w-20 h-20 text-pink-500" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <Zap className="w-12 h-12 text-purple-600" />
          </div>
          <div className="absolute bottom-40 right-10 opacity-10">
            <Users className="w-18 h-18 text-pink-500" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Find your perfect{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                study or work buddy
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              PurpleMate helps students and remote workers find nearby people to study or co-work with. Focus together,
              stay accountable, and get more done.
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() => openAuthModal("signup")}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Join Now
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-gray-600">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal isOpen={authModal.isOpen} onClose={closeAuthModal} defaultMode={authModal.mode} />
    </>
  )
}
