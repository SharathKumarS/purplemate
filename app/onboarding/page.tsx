"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Briefcase, Search, Users, Lightbulb, Volume2, ArrowRight, ArrowLeft } from "lucide-react"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    intent: "",
    sessionType: "",
    availability: {
      days: [] as string[],
      timePreference: "",
      duration: "",
    },
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleIntentSelect = (intent: string) => {
    setFormData({ ...formData, intent })
  }

  const handleSessionTypeSelect = (sessionType: string) => {
    setFormData({ ...formData, sessionType })
  }

  const handleDayToggle = (day: string) => {
    const days = formData.availability.days.includes(day)
      ? formData.availability.days.filter((d) => d !== day)
      : [...formData.availability.days, day]
    setFormData({
      ...formData,
      availability: { ...formData.availability, days },
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 font-poppins">Welcome to PurpleMate</h1>
              <span className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1: Choose Intent */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2 font-poppins">What brings you here?</h2>
                <p className="text-gray-600">Help us personalize your experience</p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    id: "study",
                    icon: BookOpen,
                    title: "Study",
                    description: "I want to find study partners and groups",
                  },
                  {
                    id: "work",
                    icon: Briefcase,
                    title: "Remote Work",
                    description: "I need co-working sessions and accountability",
                  },
                  {
                    id: "explore",
                    icon: Search,
                    title: "Just Exploring",
                    description: "I'm curious about productive communities",
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleIntentSelect(option.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      formData.intent === option.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl ${
                          formData.intent === option.id ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <option.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{option.title}</h3>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Session Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Preferred Session Type</h2>
                <p className="text-gray-600">What kind of sessions interest you most?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: "silent", icon: Volume2, title: "Silent Focus", description: "Quiet, focused work sessions" },
                  { id: "group", icon: Users, title: "Study Group", description: "Interactive learning with others" },
                  {
                    id: "cowork",
                    icon: Briefcase,
                    title: "Virtual Co-Work",
                    description: "Online productivity sessions",
                  },
                  {
                    id: "brainstorm",
                    icon: Lightbulb,
                    title: "Brainstorming",
                    description: "Creative collaboration sessions",
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSessionTypeSelect(option.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      formData.sessionType === option.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className={`p-3 rounded-xl mx-auto mb-3 w-fit ${
                          formData.sessionType === option.id ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <option.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{option.title}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Availability */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Your Availability</h2>
                <p className="text-gray-600">When are you usually available for sessions?</p>
              </div>

              <div className="space-y-6">
                {/* Days of Week */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Days of the week</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <button
                        key={day}
                        onClick={() => handleDayToggle(day)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          formData.availability.days.includes(day)
                            ? "bg-purple-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-purple-100"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Preference */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Time preference</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "morning", label: "Morning (6AM - 12PM)" },
                      { id: "afternoon", label: "Afternoon (12PM - 6PM)" },
                      { id: "evening", label: "Evening (6PM - 10PM)" },
                      { id: "flexible", label: "Flexible" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            availability: { ...formData.availability, timePreference: option.id },
                          })
                        }
                        className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          formData.availability.timePreference === option.id
                            ? "bg-purple-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-purple-100"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Session duration</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "30min", label: "30 min" },
                      { id: "1hour", label: "1 hour" },
                      { id: "2hours", label: "2 hours" },
                      { id: "3hours", label: "3+ hours" },
                      { id: "flexible", label: "Flexible" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            availability: { ...formData.availability, duration: option.id },
                          })
                        }
                        className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          formData.availability.duration === option.id
                            ? "bg-purple-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-purple-100"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>

            <Button
              onClick={currentStep === totalSteps ? () => (window.location.href = "/dashboard") : nextStep}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white flex items-center space-x-2"
            >
              <span>{currentStep === totalSteps ? "Get Started" : "Next"}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
