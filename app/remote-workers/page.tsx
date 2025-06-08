"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Briefcase,
  Laptop,
  Users,
  Clock,
  Target,
  Star,
  Coffee,
  Home,
  Zap,
  TrendingUp,
  Shield,
  Search,
  Filter,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AuthModal from "../components/AuthModal"
import Breadcrumbs from "../components/Breadcrumbs"

export default function RemoteWorkersPage() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: "login" | "signup" }>({
    isOpen: false,
    mode: "signup",
  })

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthModal({ isOpen: true, mode })
  }

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: "signup" })
  }

  const features = [
    {
      icon: Users,
      title: "Co-working Sessions",
      description:
        "Join virtual or in-person co-working sessions with other remote professionals to stay motivated and productive.",
    },
    {
      icon: Target,
      title: "Accountability Partners",
      description: "Find accountability partners who help you stay on track with your goals and deadlines.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Work sessions that fit your schedule, whether you're an early bird or night owl.",
    },
    {
      icon: Coffee,
      title: "Location Variety",
      description: "Meet at cafes, libraries, co-working spaces, or join virtual sessions from anywhere.",
    },
    {
      icon: Zap,
      title: "Productivity Boost",
      description: "Remote workers report 60% increased productivity when working alongside focused peers.",
    },
    {
      icon: Shield,
      title: "Professional Network",
      description: "Build meaningful professional relationships with like-minded remote workers and freelancers.",
    },
  ]

  const workTypes = [
    "Software Development",
    "Design & Creative",
    "Marketing & Sales",
    "Writing & Content",
    "Consulting",
    "Data Analysis",
    "Project Management",
    "Customer Support",
    "Finance & Accounting",
    "HR & Recruiting",
    "Legal Services",
    "Education & Training",
  ]

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      company: "Freelance",
      quote:
        "Working alone from home was killing my motivation. PurpleMate's co-working sessions brought back the energy I had in an office environment.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Maria Garcia",
      role: "UX Designer",
      company: "Remote at Spotify",
      quote:
        "The design brainstorming sessions are incredible. Getting fresh perspectives from other creatives has elevated my work significantly.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Park",
      role: "Marketing Consultant",
      company: "Independent",
      quote:
        "Found my accountability group through PurpleMate. We check in daily and it's transformed how I approach client projects.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const benefits = [
    {
      title: "Combat Isolation",
      description: "Break free from the loneliness of remote work by connecting with other professionals.",
      icon: Users,
    },
    {
      title: "Increase Focus",
      description: "Body doubling effect helps you stay focused and avoid distractions while working.",
      icon: Target,
    },
    {
      title: "Build Routine",
      description: "Regular co-working sessions help establish healthy work routines and boundaries.",
      icon: Clock,
    },
    {
      title: "Expand Network",
      description: "Meet professionals from different industries and expand your professional network.",
      icon: TrendingUp,
    },
  ]

  const workingStyles = [
    {
      title: "Silent Co-working",
      description: "Focused work sessions with minimal interaction, perfect for deep work.",
      icon: "🤫",
    },
    {
      title: "Collaborative Sessions",
      description: "Interactive sessions for brainstorming, feedback, and problem-solving.",
      icon: "💡",
    },
    {
      title: "Accountability Check-ins",
      description: "Regular sessions to share goals, progress, and stay accountable.",
      icon: "✅",
    },
    {
      title: "Skill Sharing",
      description: "Sessions focused on learning new skills and sharing expertise.",
      icon: "🎓",
    },
  ]

  // Sample work sessions for remote workers
  const workSessions = [
    {
      id: 1,
      title: "Morning Deep Work Session",
      host: "Sarah Chen",
      time: "Today, 9:00 AM",
      duration: "3 hours",
      location: "Virtual",
      participants: 8,
      maxParticipants: 12,
      tags: ["Deep Work", "Silent", "Productivity"],
      rating: 4.9,
      type: "Work",
    },
    {
      id: 2,
      title: "Design Sprint Planning",
      host: "Marcus Johnson",
      time: "Tomorrow, 2:00 PM",
      duration: "2 hours",
      location: "WeWork Downtown",
      participants: 5,
      maxParticipants: 8,
      tags: ["Design", "Brainstorming", "Creative"],
      rating: 4.8,
      type: "Work",
    },
    {
      id: 3,
      title: "Freelancer Accountability",
      host: "Emma Rodriguez",
      time: "Tomorrow, 10:00 AM",
      duration: "4 hours",
      location: "Virtual",
      participants: 6,
      maxParticipants: 10,
      tags: ["Freelance", "Accountability", "Goals"],
      rating: 4.9,
      type: "Work",
    },
    {
      id: 4,
      title: "Startup Co-working",
      host: "Alex Kim",
      time: "Friday, 1:00 PM",
      duration: "3 hours",
      location: "TechHub Cafe",
      participants: 7,
      maxParticipants: 12,
      tags: ["Startup", "Networking", "Innovation"],
      rating: 4.7,
      type: "Work",
    },
  ]

  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance"]
  const experienceLevels = ["Entry-level", "Mid-level", "Senior", "Executive"]
  const locations = ["Remote - Global", "Remote - US", "Remote - EU", "Remote - Americas", "Remote - Asia"]

  const filteredSessions = workSessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesSearch
  })

  const handleJobTypeChange = (jobType: string, checked: boolean) => {
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, jobType])
    } else {
      setSelectedJobTypes(selectedJobTypes.filter((type) => type !== jobType))
    }
  }

  const handleExperienceChange = (experience: string, checked: boolean) => {
    if (checked) {
      setSelectedExperience([...selectedExperience, experience])
    } else {
      setSelectedExperience(selectedExperience.filter((exp) => exp !== experience))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location))
    }
  }

  const clearAllFilters = () => {
    setSelectedJobTypes([])
    setSelectedExperience([])
    setSelectedLocations([])
    setSearchTerm("")
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Remote Workers", href: "/remote-workers" },
            ]}
          />

          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32 rounded-3xl mb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Briefcase className="w-8 h-8 text-green-600" />
                    <Badge className="bg-green-100 text-green-700">For Remote Workers</Badge>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
                    Work{" "}
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      Together
                    </span>
                    , Remotely
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Combat remote work isolation and boost productivity by connecting with other professionals. Find
                    co-working partners, accountability buddies, and build meaningful work relationships.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => openAuthModal("signup")}
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg"
                    >
                      Start Co-working Today
                    </Button>
                    <Link href="/discover/remote-workers">
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg"
                      >
                        Find Work Sessions
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Laptop className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">Morning Co-work Session</h3>
                          <p className="text-sm text-gray-600">8 professionals • 3 hours</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>Today, 9:00 AM</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Home className="w-4 h-4" />
                          <span>Virtual Session</span>
                        </div>
                      </div>
                      <div className="flex space-x-1 mb-4">
                        <Badge variant="outline" className="text-xs">
                          Deep Work
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Silent
                        </Badge>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white">
                        Join Session
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Remote Workers Section */}
          <section className="py-12 text-center">
            <h1 className="text-4xl font-bold mb-6">Remote Workers</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with other remote professionals, join co-working sessions, and boost your productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => openAuthModal("signup")} className="bg-purple-600 hover:bg-purple-700">
                Join Now
              </Button>
              <Link href="/discover/remote-workers">
                <Button variant="outline">Browse Sessions</Button>
              </Link>
            </div>
          </section>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search sessions, hosts, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="participants">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-12 px-6">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                    {selectedJobTypes.length + selectedExperience.length + selectedLocations.length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedJobTypes.length + selectedExperience.length + selectedLocations.length}
                      </Badge>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Filter Sessions</DialogTitle>
                    <DialogDescription>Refine your search with these filters</DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    {/* Session Type Filter */}
                    <div>
                      <h4 className="font-medium mb-3">Session Type</h4>
                      <div className="space-y-2">
                        {jobTypes.map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                              id={`session-type-${type}`}
                              checked={selectedJobTypes.includes(type)}
                              onCheckedChange={(checked) => handleJobTypeChange(type, checked as boolean)}
                            />
                            <Label htmlFor={`session-type-${type}`} className="text-sm">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Experience Level Filter */}
                    <div>
                      <h4 className="font-medium mb-3">Experience Level</h4>
                      <div className="space-y-2">
                        {experienceLevels.map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox
                              id={`experience-${level}`}
                              checked={selectedExperience.includes(level)}
                              onCheckedChange={(checked) => handleExperienceChange(level, checked as boolean)}
                            />
                            <Label htmlFor={`experience-${level}`} className="text-sm">
                              {level}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Location Filter */}
                    <div>
                      <h4 className="font-medium mb-3">Location</h4>
                      <div className="space-y-2">
                        {locations.map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox
                              id={`location-${location}`}
                              checked={selectedLocations.includes(location)}
                              onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
                            />
                            <Label htmlFor={`location-${location}`} className="text-sm">
                              {location}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button onClick={clearAllFilters} variant="outline" className="flex-1">
                        Clear All
                      </Button>
                      <Button onClick={() => setIsFilterOpen(false)} className="flex-1">
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Featured Work Sessions */}
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Sessions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg p-4 shadow-sm">
                  <Badge className="mb-2">Remote Work</Badge>
                  <h3 className="font-bold mb-2">Co-working Session {i}</h3>
                  <div className="text-sm text-gray-500 space-y-1 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Today, 9:00 AM</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>8/12 joined</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    Join Session
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  Everything Remote Workers Need
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Powerful features designed to enhance remote work productivity and professional connections
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Types */}
          <section className="py-20 bg-gray-50 rounded-3xl mb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  All Types of Remote Work
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Connect with professionals from every industry and work type
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {workTypes.map((type, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Working Styles */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  Choose Your Working Style
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Different session types to match your work preferences and goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workingStyles.map((style, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                    <div className="text-4xl mb-4">{style.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">{style.title}</h3>
                    <p className="text-gray-600 text-sm">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-gray-50 rounded-3xl mb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  Why Remote Workers Love PurpleMate
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The key benefits that make remote work more productive and enjoyable
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  Remote Worker Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how professionals are thriving with PurpleMate's co-working community
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-green-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
                Ready to Transform Your Remote Work?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join thousands of remote workers who are already more productive and connected with PurpleMate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => openAuthModal("signup")}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium"
                >
                  Start Free Today
                </Button>
                <Link href="/discover/remote-workers">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium"
                  >
                    Browse Co-working Sessions
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <AuthModal isOpen={authModal.isOpen} onClose={closeAuthModal} defaultMode={authModal.mode} />
    </>
  )
}
