"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Timer, VolumeX, Volume2, Users, Settings, Clock, Play, Pause, MoreVertical } from "lucide-react"

export default function GroupChatPage() {
  const [message, setMessage] = useState("")
  const [isMuted, setIsMuted] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds

  const sessionInfo = {
    title: "JavaScript Study Group",
    host: "Sarah Chen",
    duration: "2 hours",
    timeLeft: "1h 23m",
    participants: 4,
  }

  const participants = [
    { id: 1, name: "Sarah Chen", avatar: "/placeholder.svg?height=32&width=32", status: "host", isActive: true },
    { id: 2, name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32", status: "member", isActive: true },
    { id: 3, name: "Emma Davis", avatar: "/placeholder.svg?height=32&width=32", status: "member", isActive: false },
    { id: 4, name: "You", avatar: "/placeholder.svg?height=32&width=32", status: "member", isActive: true },
  ]

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "Welcome everyone! Let's start with JavaScript fundamentals today.",
      time: "2:00 PM",
      isHost: true,
    },
    {
      id: 2,
      sender: "Mike Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "Great! I've been struggling with async/await concepts.",
      time: "2:01 PM",
      isHost: false,
    },
    {
      id: 3,
      sender: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "Same here! Looking forward to learning together.",
      time: "2:02 PM",
      isHost: false,
      isYou: true,
    },
    {
      id: 4,
      sender: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "Perfect! I'll share some resources in a moment. Let's start with a 25-minute focus session.",
      time: "2:03 PM",
      isHost: true,
    },
  ]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle sending message
      setMessage("")
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-lg font-bold text-gray-900 font-poppins">{sessionInfo.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Hosted by {sessionInfo.host}</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{sessionInfo.timeLeft} left</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{sessionInfo.participants} participants</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMuted(!isMuted)}
              className={isMuted ? "bg-red-50 border-red-200 text-red-700" : ""}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              {isMuted ? "Unmute" : "Mute"}
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Focus Timer Bar */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Timer className="w-5 h-5" />
                  <span className="font-bold text-lg">{formatTime(timeLeft)}</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Pomodoro Focus
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isTimerRunning ? "Pause" : "Start"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${msg.isYou ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img src={msg.avatar || "/placeholder.svg"} alt={msg.sender} className="w-full h-full object-cover" />
                </div>
                <div className={`flex-1 ${msg.isYou ? "text-right" : ""}`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-sm font-medium ${msg.isHost ? "text-purple-600" : "text-gray-900"}`}>
                      {msg.sender}
                      {msg.isHost && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Host
                        </Badge>
                      )}
                    </span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <div
                    className={`inline-block p-3 rounded-2xl max-w-xs lg:max-w-md ${
                      msg.isYou
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-white border border-gray-200 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <Input
                placeholder={isMuted ? "Chat is muted" : "Type a message..."}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isMuted}
                className="flex-1 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
              <Button
                type="submit"
                disabled={!message.trim() || isMuted}
                className="h-12 px-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Participants Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 font-poppins">Participants</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={participant.avatar || "/placeholder.svg"}
                        alt={participant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        participant.isActive ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900 text-sm">{participant.name}</p>
                      {participant.status === "host" && (
                        <Badge variant="outline" className="text-xs">
                          Host
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{participant.isActive ? "Active" : "Away"}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Timer className="w-4 h-4 mr-2" />
              Start Break Timer
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Invite Others
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
