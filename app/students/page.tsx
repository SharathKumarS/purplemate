"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Target,
  Star,
  CheckCircle,
  MessageCircle,
  Calendar,
  Award,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AuthModal from "../components/AuthModal"
import Breadcrumbs from "../components/Breadcrumbs"

export default function StudentsPage() {
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

  const features = [
    {
      icon: Users,
      title: "Study Groups",
      description: "Join subject-specific study groups with fellow students preparing for the same exams or courses.",
    },
    {
      icon: BookOpen,
      title: "Subject Matching",
      description: "Find study partners based on your specific subjects - from Physics to MBA prep to Medical studies.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Study sessions that fit your class schedule, whether early morning or late night.",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set study goals, track progress, and celebrate achievements with your study community.",
    },
    {
      icon: MessageCircle,
      title: "Study Modes",
      description:
        "Choose between silent focus sessions or interactive discussion groups based on your learning style.",
    },
    {
      icon: Award,
      title: "Academic Success",
      description:
        "Students using PurpleMate report 40% better retention and higher grades through collaborative learning.",
    },
  ]

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Engineering",
    "Business",
    "Economics",
    "Psychology",
    "History",
    "Literature",
    "Languages",
    "Medicine",
    "Law",
    "Architecture",
    "Art & Design",
    "Music",
    "Philosophy",
  ]

  const testimonials = [
    {
      name: "Emma Rodriguez",
      major: "Pre-Med Student",
      university: "Stanford University",
      quote:
        "PurpleMate helped me find the perfect MCAT study group. We met every day for 3 months and all scored in the 95th percentile!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "James Chen",
      major: "Computer Science",
      university: "MIT",
      quote:
        "The algorithm study sessions were incredible. Having peers to work through problems with made complex concepts so much clearer.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sofia Martinez",
      major: "MBA Student",
      university: "Wharton",
      quote:
        "Found my finance study group through PurpleMate. We're still meeting weekly and it's been a game-changer for understanding complex concepts.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const studyTips = [
    {
      tip: "Join groups 2-3 weeks before major exams",
      description: "Give yourself enough time to build study relationships and establish routines.",
    },
    {
      tip: "Mix silent and discussion sessions",
      description: "Use silent sessions for individual work and discussion groups for concept review.",
    },
    {
      tip: "Set clear session goals",
      description: "Define what you want to accomplish in each study session for maximum productivity.",
    },
    {
      tip: "Use the Pomodoro technique",
      description: "25-minute focused study blocks with 5-minute breaks work great in group settings.",
    },
  ]

  // Sample study sessions for students
  const studySessions = [
    {
      id: 1,
      title: "Calculus II Problem Solving",
      host: "Michael Zhang",
      time: "Today, 3:00 PM",
      duration: "2 hours",
      location: "Math Library, Room 204",
      participants: 5,
      maxParticipants: 8,
      tags: ["Calculus", "Mathematics", "Problem Solving"],
      rating: 4.9,
      type: "Study",
    },
    {
      id: 2,
      title: "Organic Chemistry Study Group",
      host: "Sarah Johnson",
      time: "Tomorrow, 10:00 AM",
      duration: "3 hours",
      location: "Chemistry Building, Lab 3",
      participants: 6,
      maxParticipants: 10,
      tags: ["Chemistry", "Organic", "Exam Prep"],
      rating: 4.8,
      type: "Study",
    },
    {
      id: 3,
      title: "MCAT Prep - Biology Focus",
      host: "David Kim",
      time: "Tomorrow, 2:00 PM",
      duration: "4 hours",
      location: "Virtual",
      participants: 8,
      maxParticipants: 12,
      tags: ["MCAT", "Biology", "Medical School"],
      rating: 4.9,
      type: "Study",
    },
    {
      id: 4,
      title: "Computer Science Algorithms",
      host: "Lisa Chen",
      time: "Friday, 1:00 PM",
      duration: "2.5 hours",
      location: "CS Building, Room 101",
      participants: 4,
      maxParticipants: 6,
      tags: ["Computer Science", "Algorithms", "Coding"],
      rating: 4.7,
      type: "Study",
    },
  ]

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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-700">For Students</Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
                  Study{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Together
                  </span>
                  , Achieve More
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with fellow students, join study groups, and boost your academic performance through
                  collaborative learning. From exam prep to project work, find your perfect study companions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => openAuthModal("signup")}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg"
                  >
                    Start Studying Together
                  </Button>
                  <Link href="/discover/students">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg"
                    >
                      Find Study Groups
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Physics Study Group</h3>
                        <p className="text-sm text-gray-600">5 students • 2 hours</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Today, 3:00 PM</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>Library Study Room B</span>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      <Badge variant="outline" className="text-xs">
                        Quantum Mechanics
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Exam Prep
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Join Study Group
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Study Sessions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">Popular Study Sessions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join these trending study groups happening near you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {studySessions.map((session) => (
                <Link key={session.id} href={`/session/${session.id}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-blue-100 text-blue-700">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {session.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{session.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 font-poppins text-sm">{session.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {session.host}</p>

                    <div className="space-y-1 mb-4 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{session.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>
                          {session.participants}/{session.maxParticipants} joined
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {session.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/discover/students">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                  Browse All Study Sessions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                Everything You Need for Academic Success
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features designed specifically for students to enhance learning and collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">Study Any Subject</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find study groups for virtually any subject or field of study
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {subjects.map((subject, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                Student Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how students are achieving their academic goals with PurpleMate
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
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
                      <p className="text-sm text-gray-600">{testimonial.major}</p>
                      <p className="text-sm text-blue-600">{testimonial.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">Study Tips for Success</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert advice to maximize your study group effectiveness
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {studyTips.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.tip}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
              Ready to Transform Your Study Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already studying smarter, not harder, with PurpleMate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openAuthModal("signup")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium"
              >
                Start Free Today
              </Button>
              <Link href="/discover/students">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium"
                >
                  Browse Study Groups
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <AuthModal isOpen={authModal.isOpen} onClose={closeAuthModal} defaultMode={authModal.mode} />
    </>
  )
}
