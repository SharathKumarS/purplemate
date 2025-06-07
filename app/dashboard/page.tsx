"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  Calendar,
  Clock,
  Users,
  MapPin,
  Star,
  Zap,
  Target,
  BookOpen,
  Briefcase,
  MessageCircle,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingSessions = [
    {
      id: 1,
      title: "JavaScript Study Group",
      type: "Study",
      time: "Today, 2:00 PM",
      duration: "2 hours",
      location: "Virtual",
      participants: 4,
      maxParticipants: 6,
      host: "Sarah Chen",
      tags: ["JavaScript", "Web Dev"],
    },
    {
      id: 2,
      title: "Silent Focus Session",
      type: "Work",
      time: "Tomorrow, 9:00 AM",
      duration: "3 hours",
      location: "Central Library",
      participants: 2,
      maxParticipants: 8,
      host: "You",
      tags: ["Silent", "Deep Work"],
    },
  ]

  const stats = {
    streak: 7,
    focusScore: 85,
    totalSessions: 23,
    hoursCompleted: 67,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 font-poppins">PurpleMate</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Host Session
              </Button>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">Welcome back, John! 👋</h2>
          <p className="text-gray-600">Ready to get things done?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.streak}</p>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.focusScore}</p>
                <p className="text-sm text-gray-600">Focus Score</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSessions}</p>
                <p className="text-sm text-gray-600">Sessions</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.hoursCompleted}</p>
                <p className="text-sm text-gray-600">Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Discover</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Plus className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Host</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Join Room</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Messages</span>
                </Button>
              </div>
            </div>

            {/* My Sessions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 font-poppins">My Sessions</h3>
                <div className="flex space-x-1 mt-4">
                  {["upcoming", "past", "hosted", "saved"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-purple-100 text-purple-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === "upcoming" && (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div
                        key={session.id}
                        className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{session.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{session.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{session.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{session.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant={session.type === "Study" ? "default" : "secondary"}>{session.type}</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>
                                {session.participants}/{session.maxParticipants}
                              </span>
                            </div>
                            <div className="flex space-x-1">
                              {session.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            {session.host === "You" ? "Manage" : "Join"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Suggested Sessions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Suggested for You</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">React Study Group</p>
                      <p className="text-xs text-gray-600">Today, 3:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">Morning Co-work</p>
                      <p className="text-xs text-gray-600">Tomorrow, 8:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <p className="font-medium mb-2">"Success is the sum of small efforts repeated day in and day out."</p>
                <p className="text-sm opacity-80">- Robert Collier</p>
              </div>
            </div>

            {/* Who's Focused Now */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Who's Focused Now</h3>
              <div className="space-y-3">
                {[
                  { name: "Sarah", activity: "Studying Physics", time: "2h 15m" },
                  { name: "Mike", activity: "Deep Work", time: "45m" },
                  { name: "Emma", activity: "Design Sprint", time: "1h 30m" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                      <p className="text-xs text-gray-600">{user.activity}</p>
                    </div>
                    <span className="text-xs text-gray-500">{user.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
