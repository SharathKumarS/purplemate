"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ScreenshotsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const screenshots = [
    {
      title: "Find Nearby Sessions",
      description: "Discover productivity sessions happening around you",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Host a Meetup",
      description: "Create your own study or work session",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Group Chat",
      description: "Connect and coordinate with your productivity partners",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Pomodoro Timer",
      description: "Built-in focus timer to maximize productivity",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Streaks & Stats",
      description: "Track your progress and maintain momentum",
      image: "/placeholder.svg?height=600&width=300",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">See PurpleMate in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our intuitive interface designed for seamless productivity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Screenshot */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-4 shadow-2xl">
                  <Image
                    src={screenshots[currentSlide].image || "/placeholder.svg"}
                    alt={screenshots[currentSlide].title}
                    width={300}
                    height={600}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button onClick={prevSlide} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-gradient-to-r from-purple-600 to-pink-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button onClick={nextSlide} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Screenshot Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{screenshots[currentSlide].title}</h3>
              <p className="text-gray-600 text-lg">{screenshots[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
