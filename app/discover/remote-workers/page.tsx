"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, MapPin, Calendar, Clock, Users, Star, Briefcase, Coffee, Globe, Zap } from "lucide-react"
import Header from "../../components/Header"
import Breadcrumbs from "../../components/Breadcrumbs"

export default function RemoteWorkersDiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedWorkType, setSelectedWorkType] = useState("All Types")
  const [selectedTime, setSelectedTime] = useState("Any Time")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [filters, setFilters] = useState({
    workTypes: [] as string[],
    experienceLevels: [] as string[],
    sessionTypes: [] as string[],
    locations: [] as string[],
    timeSlots: [] as string[],
  })

  const workTypes = [
    "Software Development",
    "Design & Creative",
    "Marketing & Sales",
    "Writing & Content",
    "Consulting",
    "Data Analysis",
    "Project Management",
    "Customer Support",
  ]

  const experienceLevels = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"]

  const sessionTypes = ["Silent Co-working", "Collaborative", "Brainstorming", "Accountability", "Networking"]

  const locations = ["Virtual", "Coffee Shops", "Co-working Spaces", "Libraries", "Outdoor Spaces"]

  const timeSlots = ["Morning (6-12)", "Afternoon (12-18)", "Evening (18-24)", "Late Night (24-6)"]

  const sessions = [
    {
      id: 1,
      title: "Morning Productivity Sprint",
      host: "Sarah Chen",
      time: "Today, 9:00 AM",
      duration: "3 hours",
      location: "Virtual",
      participants: 8,
      maxParticipants: 12,
      tags: ["Deep Work", "Silent", "Productivity"],
      rating: 4.9,
      type: "Work",
      workType: "Software Development",
      description: "Join us for a focused morning session. Perfect for tackling your most important tasks.",
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      host: "Marcus Johnson",
      time: "Tomorrow, 2:00 PM",
      duration: "2 hours",
      location: "WeWork Downtown",
      participants: 5,
      maxParticipants: 8,
      tags: ["Design", "Brainstorming", "Creative"],
      rating: 4.8,
      type: "Work",
      workType: "Design & Creative",
      description: "Collaborative design session for UX/UI professionals and creative minds.",
    },
    {
      id: 3,
      title: "Freelancer Accountability Circle",
      host: "Emma Rodriguez",
      time: "Tomorrow, 10:00 AM",
      duration: "4 hours",
      location: "Virtual",
      participants: 6,
      maxParticipants: 10,
      tags: ["Freelance", "Accountability", "Goals"],
      rating: 4.9,
      type: "Work",
      workType: "Consulting",
      description: "Weekly accountability session for freelancers to share goals and progress.",
    },
    {
      id: 4,
      title: "Startup Co-working Session",
      host: "Alex Kim",
      time: "Friday, 1:00 PM",
      duration: "3 hours",
      location: "TechHub Cafe",
      participants: 7,
      maxParticipants: 12,
      tags: ["Startup", "Networking", "Innovation"],
      rating: 4.7,
      type: "Work",
      workType: "Project Management",
      description: "Connect with fellow entrepreneurs and startup professionals.",
    },
    {
      id: 5,
      title: "Content Creation Focus",
      host: "Lisa Park",
      time: "Saturday, 11:00 AM",
      duration: "2.5 hours",
      location: "Central Library",
      participants: 4,
      maxParticipants: 8,
      tags: ["Writing", "Content", "Marketing"],
      rating: 4.8,
      type: "Work",
      workType: "Writing & Content",
      description: "Dedicated time for content creators, writers, and marketers.",
    },
    {
      id: 6,
      title: "Data Analysis Deep Dive",
      host: "Michael Zhang",
      time: "Monday, 3:00 PM",
      duration: "4 hours",
      location: "Virtual",
      participants: 3,
      maxParticipants: 6,
      tags: ["Data", "Analysis", "Python"],
      rating: 4.9,
      type: "Work",
      workType: "Data Analysis",
      description: "Silent focus session for data professionals working on complex analysis.",
    },
  ]

  const handleFilterChange = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  const clearFilters = () => {
    setFilters({
      workTypes: [],
      experienceLevels: [],
      sessionTypes: [],
      locations: [],
      timeSlots: [],
    })
  }

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      session.workType.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesWorkType = filters.workTypes.length === 0 || filters.workTypes.includes(session.workType)
    const matchesSessionType =
      filters.sessionTypes.length === 0 ||
      filters.sessionTypes.some((type) => session.tags.some((tag) => tag.toLowerCase().includes(type.toLowerCase())))
    const matchesLocation = filters.locations.length === 0 || filters.locations.includes(session.location)

    return matchesSearch && matchesWorkType && matchesSessionType && matchesLocation
  })

  // Custom breadcrumbs for this page
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "For Remote Workers", href: "/remote-workers" },
    { label: "Co-working Sessions", href: "/discover/remote-workers", active: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Briefcase className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-700">Remote Workers</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Discover{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Co-working Sessions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find the perfect co-working sessions to boost your productivity and connect with fellow remote
              professionals
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search co-working sessions, skills, or work types..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap lg:flex-nowrap gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-12 px-4 rounded-xl border-gray-200">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedLocation}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedLocation("All Locations")}>
                    All Locations
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedLocation("Virtual")}>Virtual</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedLocation("In-Person")}>In-Person</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-12 px-4 rounded-xl border-gray-200">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {selectedWorkType}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedWorkType("All Types")}>All Types</DropdownMenuItem>
                  {workTypes.map((type) => (
                    <DropdownMenuItem key={type} onClick={() => setSelectedWorkType(type)}>
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-12 px-4 rounded-xl border-gray-200">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedTime}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedTime("Any Time")}>Any Time</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTime("Today")}>Today</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTime("Tomorrow")}>Tomorrow</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedTime("This Week")}>This Week</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Advanced Filters */}
              <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-12 px-4 rounded-xl border-gray-200">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Filter Co-working Sessions</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Work Types */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Work Types</h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {workTypes.map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={type}
                              checked={filters.workTypes.includes(type)}
                              onCheckedChange={() => handleFilterChange("workTypes", type)}
                            />
                            <label htmlFor={type} className="text-sm text-gray-700 cursor-pointer">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience Levels */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Experience Level</h3>
                      <div className="space-y-2">
                        {experienceLevels.map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox
                              id={level}
                              checked={filters.experienceLevels.includes(level)}
                              onCheckedChange={() => handleFilterChange("experienceLevels", level)}
                            />
                            <label htmlFor={level} className="text-sm text-gray-700 cursor-pointer">
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Session Types */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Session Types</h3>
                      <div className="space-y-2">
                        {sessionTypes.map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={type}
                              checked={filters.sessionTypes.includes(type)}
                              onCheckedChange={() => handleFilterChange("sessionTypes", type)}
                            />
                            <label htmlFor={type} className="text-sm text-gray-700 cursor-pointer">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Locations */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Location Types</h3>
                      <div className="space-y-2">
                        {locations.map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox
                              id={location}
                              checked={filters.locations.includes(location)}
                              onCheckedChange={() => handleFilterChange("locations", location)}
                            />
                            <label htmlFor={location} className="text-sm text-gray-700 cursor-pointer">
                              {location}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Time Slots</h3>
                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <div key={slot} className="flex items-center space-x-2">
                            <Checkbox
                              id={slot}
                              checked={filters.timeSlots.includes(slot)}
                              onCheckedChange={() => handleFilterChange("timeSlots", slot)}
                            />
                            <label htmlFor={slot} className="text-sm text-gray-700 cursor-pointer">
                              {slot}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button onClick={clearFilters} variant="outline" className="flex-1">
                        Clear All
                      </Button>
                      <Button
                        onClick={() => setIsFilterOpen(false)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-blue-600"
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/host">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              Host New Session
            </Button>
          </Link>
          <Button variant="outline" className="rounded-full">
            <Globe className="w-4 h-4 mr-2" />
            Browse Virtual Sessions
          </Button>
          <Button variant="outline" className="rounded-full">
            <Coffee className="w-4 h-4 mr-2" />
            Browse In-Person Sessions
          </Button>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 font-poppins">
            {filteredSessions.length} Co-working Sessions
          </h2>
          <div className="text-sm text-gray-600">
            Showing {filteredSessions.length} of {sessions.length} sessions
          </div>
        </div>

        {/* Session Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => (
            <Link key={session.id} href={`/session/${session.id}`}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-700">
                    <Briefcase className="w-3 h-3 mr-1" />
                    {session.type}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{session.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-2 font-poppins group-hover:text-green-600 transition-colors">
                  {session.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">by {session.host}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{session.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {session.location === "Virtual" ? <Globe className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {session.participants}/{session.maxParticipants} joined
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {session.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {session.workType}
                  </Badge>
                  <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    Join Session
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
