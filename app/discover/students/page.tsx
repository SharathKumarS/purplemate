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
  X,
  SlidersHorizontal,
  GraduationCap,
} from "lucide-react"
import Header from "../../components/Header"
import Breadcrumbs from "../../components/Breadcrumbs"

const studySessions = [
  {
    id: 1,
    title: "Calculus II Problem Solving Workshop",
    host: "Michael Zhang",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Today, 3:00 PM",
    duration: "2 hours",
    location: "Math Library, Room 204",
    participants: 5,
    maxParticipants: 8,
    tags: ["Calculus", "Mathematics", "Problem Solving"],
    description:
      "Intensive problem-solving session focusing on integration techniques and series convergence. Perfect for students struggling with Calc II concepts.",
    rating: 4.9,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    subject: "Mathematics",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Organic Chemistry Study Group",
    host: "Sarah Johnson",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Tomorrow, 10:00 AM",
    duration: "3 hours",
    location: "Chemistry Building, Lab 3",
    participants: 6,
    maxParticipants: 10,
    tags: ["Chemistry", "Organic", "Exam Prep"],
    description:
      "Comprehensive review of organic chemistry mechanisms and synthesis. We'll work through practice problems and clarify difficult concepts.",
    rating: 4.8,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    subject: "Chemistry",
    level: "Advanced",
  },
  {
    id: 3,
    title: "MCAT Prep - Biology Focus",
    host: "David Kim",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Tomorrow, 2:00 PM",
    duration: "4 hours",
    location: "Virtual",
    participants: 8,
    maxParticipants: 12,
    tags: ["MCAT", "Biology", "Medical School"],
    description:
      "Focused MCAT biology review covering cell biology, genetics, and physiology. Includes practice questions and test-taking strategies.",
    rating: 4.9,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    subject: "Biology",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Computer Science Algorithms Study",
    host: "Lisa Chen",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Friday, 1:00 PM",
    duration: "2.5 hours",
    location: "CS Building, Room 101",
    participants: 4,
    maxParticipants: 6,
    tags: ["Computer Science", "Algorithms", "Coding"],
    description:
      "Deep dive into sorting algorithms, graph theory, and dynamic programming. Hands-on coding practice with real interview questions.",
    rating: 4.7,
    attendees: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
    subject: "Computer Science",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Physics Quantum Mechanics Group",
    host: "Alex Rodriguez",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Saturday, 11:00 AM",
    duration: "3 hours",
    location: "Physics Building, Room 301",
    participants: 3,
    maxParticipants: 8,
    tags: ["Physics", "Quantum Mechanics", "Theory"],
    description:
      "Explore the fundamentals of quantum mechanics including wave functions, operators, and the Schrödinger equation.",
    rating: 4.6,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    subject: "Physics",
    level: "Advanced",
  },
  {
    id: 6,
    title: "Spanish Conversation Practice",
    host: "Maria Gonzalez",
    hostAvatar: "/placeholder.svg?height=40&width=40",
    time: "Sunday, 4:00 PM",
    duration: "1.5 hours",
    location: "Language Center, Room 205",
    participants: 7,
    maxParticipants: 10,
    tags: ["Spanish", "Language", "Conversation"],
    description:
      "Practice Spanish conversation skills in a supportive environment. All levels welcome, focus on practical communication.",
    rating: 4.8,
    attendees: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
    subject: "Languages",
    level: "Beginner",
  },
]

export default function StudentsDiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [filteredSessions, setFilteredSessions] = useState(studySessions)

  const filterOptions = [
    { id: "virtual", label: "Virtual", count: 12, category: "location" },
    { id: "in-person", label: "In-Person", count: 18, category: "location" },
    { id: "mathematics", label: "Mathematics", count: 8, category: "subject" },
    { id: "chemistry", label: "Chemistry", count: 6, category: "subject" },
    { id: "biology", label: "Biology", count: 10, category: "subject" },
    { id: "physics", label: "Physics", count: 5, category: "subject" },
    { id: "computer-science", label: "Computer Science", count: 12, category: "subject" },
    { id: "languages", label: "Languages", count: 7, category: "subject" },
    { id: "beginner", label: "Beginner", count: 8, category: "level" },
    { id: "intermediate", label: "Intermediate", count: 12, category: "level" },
    { id: "advanced", label: "Advanced", count: 10, category: "level" },
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
    let filtered = studySessions

    if (newFilters.length > 0) {
      filtered = studySessions.filter((session) => {
        return newFilters.some((filter) => {
          const filterOption = filterOptions.find((opt) => opt.id === filter)
          if (!filterOption) return false

          switch (filterOption.category) {
            case "location":
              return session.location.toLowerCase().includes(filter === "virtual" ? "virtual" : "building")
            case "subject":
              return session.subject.toLowerCase().replace(" ", "-") === filter
            case "level":
              return session.level.toLowerCase() === filter
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
          session.subject.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredSessions(filtered)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    let filtered = studySessions

    // Apply search
    if (query) {
      filtered = filtered.filter(
        (session) =>
          session.title.toLowerCase().includes(query.toLowerCase()) ||
          session.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
          session.subject.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Apply existing filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((session) => {
        return selectedFilters.some((filter) => {
          const filterOption = filterOptions.find((f) => f.id === filter)
          if (!filterOption) return false

          switch (filterOption.category) {
            case "location":
              return session.location.toLowerCase().includes(filter === "virtual" ? "virtual" : "building")
            case "subject":
              return session.subject.toLowerCase().replace(" ", "-") === filter
            case "level":
              return session.level.toLowerCase() === filter
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
    setFilteredSessions(studySessions)
  }

  // Custom breadcrumbs for this page
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "For Students", href: "/students" },
    { label: "Study Sessions", href: "/discover/students", active: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <Badge className="bg-blue-100 text-blue-700">For Students</Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">Study Sessions</h1>
          <p className="text-gray-600">Find the perfect study group to boost your academic performance</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search study sessions, subjects, or topics..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
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
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-blue-600 hover:text-blue-700">
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSessions.length} of {studySessions.length} study sessions
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => (
            <Link key={session.id} href={`/session/${session.id}`}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full overflow-hidden">
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
                    <Badge className="bg-blue-100 text-blue-700">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Study
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
                    {session.tags.slice(0, 3).map((tag) => (
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
                    <Badge variant="outline" className="text-xs">
                      {session.level}
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No study sessions found</h3>
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
          <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </Link>

      {/* Filter Modal */}
      <Dialog open={showFilterModal} onOpenChange={setShowFilterModal}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Filter Study Sessions</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
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
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {filter.label} ({filter.count})
                      </span>
                    </label>
                  ))}
              </div>
            </div>

            {/* Subject */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Subject</h3>
              <div className="space-y-2">
                {filterOptions
                  .filter((f) => f.category === "subject")
                  .map((filter) => (
                    <label key={filter.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter.id)}
                        onChange={() => toggleFilter(filter.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {filter.label} ({filter.count})
                      </span>
                    </label>
                  ))}
              </div>
            </div>

            {/* Level */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Level</h3>
              <div className="space-y-2">
                {filterOptions
                  .filter((f) => f.category === "level")
                  .map((filter) => (
                    <label key={filter.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter.id)}
                        onChange={() => toggleFilter(filter.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {filter.label} ({filter.count})
                      </span>
                    </label>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4 border-t border-gray-200 mt-4">
            <Button variant="outline" onClick={clearFilters} className="flex-1">
              Clear All
            </Button>
            <Button
              onClick={() => setShowFilterModal(false)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Apply Filters
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
