import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Users, Target, Shield, Heart, BookOpen, Globe, Award } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in the power of studying and working together. Our platform connects like-minded individuals who share similar goals and aspirations.",
    },
    {
      icon: Target,
      title: "Focus & Productivity",
      description:
        "Every feature is designed to enhance focus and boost productivity. From Pomodoro timers to accountability partners, we help you achieve more.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Your safety is our priority. We verify users, moderate sessions, and provide tools to ensure positive, productive interactions.",
    },
    {
      icon: Heart,
      title: "Inclusive Environment",
      description:
        "PurpleMate welcomes everyone regardless of background, field of study, or work type. Diversity makes our community stronger.",
    },
  ]

  const stats = [
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "500+", label: "Cities Worldwide", icon: Globe },
    { number: "1M+", label: "Study Hours", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Award },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Google PM with a passion for education technology. Stanford MBA.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack engineer with 10+ years experience. MIT Computer Science.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Emily Watson",
      role: "Head of Community",
      bio: "Community building expert. Previously at Discord and Slack.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Kim",
      role: "Head of Design",
      bio: "UX designer focused on productivity tools. RISD graduate.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                PurpleMate
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to eliminate isolation in learning and work by connecting people who want to focus
              together, stay accountable, and achieve their goals as a community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center font-poppins">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                PurpleMate was born from a simple observation: people are more productive and motivated when they're not
                alone. Whether you're a student cramming for exams or a remote worker tackling a big project, having
                others around who share your commitment to focus makes all the difference.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2023 by a team of former students and remote workers, we experienced firsthand the challenges
                of staying motivated while studying or working in isolation. We tried coffee shops, libraries, and
                co-working spaces, but we wanted something more intentional – a way to connect with people who shared
                our goals and work ethic.
              </p>
              <p className="text-lg leading-relaxed">
                Today, PurpleMate serves thousands of students and professionals worldwide, helping them find their
                perfect study or work companions. From silent focus sessions to collaborative brainstorming, we're
                building a global community of people who believe that together, we can achieve more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at PurpleMate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">Impact by Numbers</h2>
            <p className="text-xl text-gray-600">See how our community is growing and thriving</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people building the future of collaborative productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-poppins">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">Ready to Join Our Community?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start your journey towards more productive and connected learning and working today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium">
                Get Started Free
              </Button>
            </Link>
            <Link href="/discover">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium"
              >
                Explore Sessions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
