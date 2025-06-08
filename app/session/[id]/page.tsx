"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  BookOpen,
  Briefcase,
  MessageCircle,
  Zap,
  Share2,
  Heart,
  Flag,
  CheckCircle,
} from "lucide-react"
import Header from "../../components/Header"
import Breadcrumbs from "../../components/Breadcrumbs"

export default function SessionDetailPage() {
  const params = useParams()
  const sessionId = params.id
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [joinStep, setJoinStep] = useState(1)

  // Mock session data - in real app, fetch based on sessionId
  const session = {
    id: sessionId,
    title: "JavaScript Fundamentals Study Group",
    type: "Study",
    host: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      sessionsHosted: 23,
      bio: "Computer Science student at Stanford. Passionate about helping others learn programming.",
    },
    time: "Today, 2:00 PM",
    duration: "2 hours",
    location: "Virtual",
    participants: 4,
    maxParticipants: 8,
    tags: ["JavaScript", "Web Dev", "Beginner"],
    description:
      "Learn JavaScript basics together with hands-on coding exercises. Perfect for beginners who want to understand fundamentals through collaborative learning. We'll cover variables, functions, loops, and basic DOM manipulation.",
    requirements: [
      "Basic computer skills",
      "Text editor (VS Code recommended)",
      "Stable internet connection",
      "Willingness to participate actively",
    ],
    agenda: [
      "Introduction and setup (15 min)",
      "Variables and data types (30 min)",
      "Functions and scope (30 min)",
      "Break (10 min)",
      "Loops and conditionals (25 min)",
      "DOM basics and practice (30 min)",
    ],
    rating: 4.8,
    attendees: [
      { name: "Mike Johnson", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Emma Davis", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Alex Wilson", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Lisa Park", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    reviews: [
      {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Sarah is an excellent teacher! The session was well-structured and interactive.",
        date: "2 days ago",
      },
      {
        name: "Emma Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Great learning environment. Everyone was supportive and helpful.",
        date: "1 week ago",
      },
    ],
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

  const handleJoin = () => {
    setShowJoinModal(true)
    setJoinStep(1)
  }

  const nextStep = () => {
    if (joinStep < 3) {
      setJoinStep(joinStep + 1)
    } else {
      // Complete join process
      setShowJoinModal(false)
      // Redirect to session or dashboard
    }
  }

  const TypeIcon = getTypeIcon(session.type)

  // Custom breadcrumbs for this page
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Discover Sessions", href: "/discover" },
    { label: session.title, href: `/session/${sessionId}`, active: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Session Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <Badge className={getTypeColor(session.type)}>
                  <TypeIcon className="w-4 h-4 mr-1" />
                  {session.type}
                </Badge>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">{session.title}</h1>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{session.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{session.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {session.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{session.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 font-poppins">What You'll Need</h2>
              <ul className="space-y-2">
                {session.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agenda */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Session Agenda</h2>
              <div className="space-y-3">
                {session.agenda.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-purple-600">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Reviews</h2>
              <div className="space-y-4">
                {session.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">{review.name}</span>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-lg font-bold text-gray-900">
                    {session.participants}/{session.maxParticipants}
                  </span>
                </div>
                <p className="text-sm text-gray-600">participants</p>
              </div>

              <Button
                onClick={handleJoin}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-xl font-medium mb-4"
              >
                Join Session
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">Free to join</p>
              </div>
            </div>

            {/* Host Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Host</h3>
              <div className="flex items-start space-x-3">
                <img
                  src={session.host.avatar || "/placeholder.svg"}
                  alt={session.host.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{session.host.name}</h4>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{session.host.rating}</span>
                    <span className="text-sm text-gray-500">• {session.host.sessionsHosted} sessions</span>
                  </div>
                  <p className="text-sm text-gray-600">{session.host.bio}</p>
                </div>
              </div>
            </div>

            {/* Attendees */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Who's Joining</h3>
              <div className="space-y-3">
                {session.attendees.map((attendee, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={attendee.avatar || "/placeholder.svg"}
                      alt={attendee.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-700">{attendee.name}</span>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <span className="text-sm text-gray-500">
                    +{session.maxParticipants - session.participants} spots available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Modal */}
      <Dialog open={showJoinModal} onOpenChange={setShowJoinModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Session</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {joinStep === 1 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to join?</h3>
                <p className="text-gray-600 mb-6">You'll receive session details and connection info via email.</p>
                <Button onClick={nextStep} className="w-full">
                  Confirm Join
                </Button>
              </div>
            )}

            {joinStep === 2 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">You're in!</h3>
                <p className="text-gray-600 mb-6">Session details have been sent to your email. See you there!</p>
                <Button onClick={nextStep} className="w-full">
                  View My Sessions
                </Button>
              </div>
            )}
          </div>
          <Button
            onClick={() => setShowJoinModal(false)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
