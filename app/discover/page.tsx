"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Users,
  Plus,
  Star,
  BookOpen,
  Briefcase,
  MessageCircle,
  Zap,
  X,
  SlidersHorizontal,
} from "lucide-react"
import Header from "../components/Header"
import Breadcrumbs from "../components/Breadcrumbs"

const sessions = [
  {
    id: 1,
    title: "JavaScript Fundamentals Study Group",
    type: "Study",
    host: "Sarah Chen",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Today, 2:00 PM",
    duration: "2 hours",
    location: "Virtual",
    participants: 4,
    maxParticipants: 8,
    tags: ["JavaScript", "Web Dev", "Beginner"],
    description:
      "Learn JavaScript basics together with hands-on coding exercises. Perfect for beginners who want to understand fundamentals through collaborative learning.",
    rating: 4.8,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    category: "study",
  },
  {
    id: 2,
    title: "Silent Deep Work Session",
    type: "Work",
    host: "Marcus Rodriguez",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Today, 4:00 PM",
    duration: "3 hours",
    location: "Central Library, Downtown",
    participants: 6,
    maxParticipants: 12,
    tags: ["Silent", "Deep Work", "Productivity"],
    description:
      "Focused work session in a quiet environment. Perfect for getting things done without distractions. Bring your laptop and projects.",
    rating: 4.9,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    category: "work",
  },
  {
    id: 3,
    title: "MBA Finance Exam Prep",
    type: "Study",
    host: "Emily Watson",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Tomorrow, 10:00 AM",
    duration: "4 hours",
    location: "Business Library, Campus",
    participants: 3,
    maxParticipants: 6,
    tags: ["MBA", "Finance", "Exam Prep"],
    description:
      "Intensive study session for upcoming finance exam. We'll cover financial modeling, valuation, and case studies. Bring your textbooks!",
    rating: 4.7,
    attendees: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
    category: "study",
  },
  {
    id: 4,
    title: "Design Brainstorming Session",
    type: "Brainstorm",
    host: "David Kim",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Tomorrow, 2:00 PM",
    duration: "1.5 hours",
    location: "Virtual",
    participants: 2,
    maxParticipants: 5,
    tags: ["Design", "UX", "Brainstorming"],
    description:
      "Collaborative session to generate creative ideas for design projects. Share your work, get feedback, and brainstorm solutions together.",
    rating: 4.6,
    attendees: ["/placeholder.svg?height=32&width=32"],
    category: "work",
  },
]

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [filteredSessions, setFilteredSessions] = useState(sessions)

  const filterOptions = [
    { id: "virtual", label: "Virtual", count: 12, category: "location" },
    { id: "in-person", label: "In-Person", count: 8, category: "location" },
    { id: "study", label: "Study", count: 15, category: "type" },
    { id: "work", label: "Work", count: 10, category: "type" },
    { id: "brainstorm", label: "Brainstorm", count: 5, category: "type" },
    { id: "silent", label: "Silent", count: 7, category: "style" },
    { id: "today", label: "Today", count: 6, category: "time" },
    { id: "tomorrow", label: "Tomorrow", count: 8, category: "time" },
    { id: "this-week", label: "This Week", count: 20, category: "time" },
  ]

  const toggleFilter = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter((f) => f !== filterId)
      : [...selectedFilters, filterId]

    setSelectedFilters(newFilters)

    // Apply filters
    let filtered = sessions

    if (newFilters.length > 0) {
      filtered = sessions.filter((session) => {
        return newFilters.some((filter) => {
          const filterOption = filterOptions.find((opt) => opt.id === filter)
          if (!filterOption) return false

          switch (filterOption.category) {
            case "location":
              return session.location.toLowerCase().includes(filter === "virtual" ? "virtual" : "library")
            case "type":
              return session.type.toLowerCase() === filter
            case "style":
              return session.tags.some((tag) => tag.toLowerCase().includes(filter))
            case "time":
              return session.time.toLowerCase().includes(filter === "today" ? "today" : "tomorrow")
            default:
              return false
          }
        })
      })
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(
        (session) =>
          session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          session.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          session.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredSessions(filtered)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    let filtered = sessions

    // Apply search
    if (query) {
      filtered = filtered.filter(
        (session) =>
          session.title.toLowerCase().includes(query.toLowerCase()) ||
          session.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
          session.location.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Apply existing filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((session) => {
        return selectedFilters.some((filter) => {
          const filterOption = filterOptions.find((opt) => opt.id === filter)
          if (!filterOption) return false

          switch (filterOption.category) {
            case "location":
              return session.location.toLowerCase().includes(filter === "virtual" ? "virtual" : "library")
            case "type":
              return session.type.toLowerCase() === filter
            case "style":
              return session.tags.some((tag) => tag.toLowerCase().includes(filter))
            case "time":
              return session.time.toLowerCase().includes(filter === "today" ? "today" : "tomorrow")
            default:
              return false
          }
        })
      })
    }

    setFilteredSessions(filtered)
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setSearchQuery("")
    setFilteredSessions(sessions)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Study":
        return BookOpen
      case "Work":
        return Briefcase
      case "Brainstorm":
        return MessageCircle
      default:
        return Zap
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Study":
        return "bg-blue-100 text-blue-700"
      case "Work":
        return "bg-green-100 text-green-700"
      case "Brainstorm":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs />
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">Discover Sessions</h1>
          <p className="text-gray-600">Find the perfect study or work session to boost your productivity</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search sessions, topics, or locations..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilterModal(true)} className="h-12 px-6">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
              {selectedFilters.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {selectedFilters.length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedFilters.map((filterId) => {
                const filter = filterOptions.find((f) => f.id === filterId)
                return (
                  <Badge key={filterId} variant="secondary" className="flex items-center gap-1">
                    {filter?.label}
                    <button onClick={() => toggleFilter(filterId)} className="ml-1 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )
              })}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-purple-600 hover:text-purple-700"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSessions.length} of {sessions.length} sessions
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => {
            const TypeIcon = getTypeIcon(session.type)
            return (
              <Link key={session.id} href={`/session/${session.id}`}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full overflow-hidden">
                          <img
                            src={session.hostAvatar || "/placeholder.svg"}
                            alt={session.host}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{session.host}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600">{session.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getTypeColor(session.type)}>
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {session.type}
                      </Badge>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 font-poppins">{session.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{session.description}</p>

                    {/* Session Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{session.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{session.location}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {session.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Participants */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>
                            {session.participants}/{session.maxParticipants}
                          </span>
                        </div>
                        <div className="flex -space-x-2">
                          {session.attendees.map((avatar, index) => (
                            <div key={index} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                              <img
                                src={avatar || "/placeholder.svg"}
                                alt="Attendee"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* No Results */}
        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <Button onClick={clearFilters} variant="outline">
              Clear filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredSessions.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Load More Sessions
            </Button>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <Link href="/host">
        <div className="fixed bottom-6 right-6">
          <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </Link>

      {/* Filter Modal */}
      <Dialog open={showFilterModal} onOpenChange={setShowFilterModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Filter Sessions</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Location */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Location</h3>
              <div className="space-y-2">
                {filterOptions
                  .filter((f) => f.category === "location")
                  .map((filter) => (
                    <label key={filter.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter.id)}
                        onChange={() => toggleFilter(filter.id)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">
                        {filter.label} ({filter.count})
                      </span>
                    </label>
                  ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Session Type</h3>
              <div className="space-y-2">
                {filterOptions
                  .filter((f) => f.category === "type")
                  .map((filter) => (
                    <label key={filter.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter.id)}
                        onChange={() => toggleFilter(filter.id)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">
                        {filter.label} ({filter.count})
                      </span>
                    </label>
                  ))}
              </div>
            </div>

            {/* Time */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Time</h3>
              <div className="space-y-2">
                {filterOptions
                  .filter((f) => f.category === "time")
                  .map((filter) => (
                    <label key={filter.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter.id)}
                        onChange={() => toggleFilter(filter.id)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">
                        {filter.label} ({filter.count})
                      </span>
                    </label>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button variant="outline" onClick={clearFilters} className="flex-1">
              Clear All
            </Button>
            <Button
              onClick={() => setShowFilterModal(false)}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Apply Filters
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
