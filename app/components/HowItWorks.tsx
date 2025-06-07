"use client"

import { useState } from "react"
import { GraduationCap, Briefcase, Users, MapPin, Clock, MessageCircle } from "lucide-react"

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("students")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">How PurpleMate Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a student or remote worker, we've got you covered
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "students"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <GraduationCap className="w-5 h-5 inline mr-2" />
              For Students
            </button>
            <button
              onClick={() => setActiveTab("remote")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "remote"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Briefcase className="w-5 h-5 inline mr-2" />
              For Remote Workers
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "students" && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Join Study Sessions</h3>
                <p className="text-gray-600">
                  Find local study groups in your area. Connect with students studying the same subjects or preparing
                  for similar exams.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Subject-Based Groups</h3>
                <p className="text-gray-600">
                  Join specialized groups for Physics, MBA prep, Medical studies, or any subject. Get help and stay
                  motivated together.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Silent or Active Study</h3>
                <p className="text-gray-600">
                  Choose between focused silent study sessions or interactive discussion groups based on your learning
                  style.
                </p>
              </div>
            </div>
          )}

          {activeTab === "remote" && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Host Work Meetups</h3>
                <p className="text-gray-600">
                  Create or join co-working sessions with other remote professionals. Stay productive and combat
                  isolation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Choose Locations</h3>
                <p className="text-gray-600">
                  Meet at cafes, libraries, co-working spaces, or even someone's home. Find the perfect environment for
                  productivity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Accountability Partners</h3>
                <p className="text-gray-600">
                  Work alongside others who keep you focused and motivated. Share goals and celebrate achievements
                  together.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
