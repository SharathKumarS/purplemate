"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, BookOpen, Briefcase, MessageCircle, Volume2, Globe, X } from "lucide-react"
import Header from "../components/Header"
import Breadcrumbs from "../components/Breadcrumbs"

export default function HostSessionPage() {
  const [formData, setFormData] = useState({
    title: "",
    type: "study",
    date: "",
    time: "",
    duration: "1",
    location: "virtual",
    customLocation: "",
    maxParticipants: "6",
    tags: [] as string[],
    description: "",
    isRecurring: false,
  })

  const [newTag, setNewTag] = useState("")

  const sessionTypes = [
    { id: "study", label: "Study", icon: BookOpen, description: "Learning and exam preparation" },
    { id: "work", label: "Work", icon: Briefcase, description: "Focused work and productivity" },
    { id: "brainstorm", label: "Brainstorm", icon: MessageCircle, description: "Creative collaboration" },
    { id: "silent", label: "Silent", icon: Volume2, description: "Quiet focused sessions" },
  ]

  const popularTags = [
    "JavaScript",
    "Python",
    "Design",
    "MBA",
    "Physics",
    "Marketing",
    "Deep Work",
    "Exam Prep",
    "Startup",
    "Writing",
    "Math",
    "Language",
  ]

  const addTag = (tag: string) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData({ ...formData, tags: [...formData.tags, tag] })
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter((tag) => tag !== tagToRemove) })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Session data:", formData)
    // Handle form submission
  }

  // Custom breadcrumbs for this page
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Host a Session", href: "/host", active: true },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header Banner - Similar to Study Session Page */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-purple-100 text-purple-700">Host a Session</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins">
                Create Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Perfect Session
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Host a study group, co-working session, or focus room. Set your preferences and connect with like-minded
                people ready to be productive together.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 font-poppins">Basic Information</h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
                        Session Title
                      </Label>
                      <Input
                        id="title"
                        placeholder="e.g., JavaScript Study Group, Silent Focus Session"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">Session Type</Label>
                      <RadioGroup
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                        className="grid grid-cols-2 gap-4"
                      >
                        {sessionTypes.map((type) => (
                          <div
                            key={type.id}
                            className="flex items-center space-x-2 border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors"
                          >
                            <RadioGroupItem value={type.id} id={type.id} />
                            <div className="flex items-center space-x-3 flex-1">
                              <type.icon className="w-5 h-5 text-purple-600" />
                              <div>
                                <Label htmlFor={type.id} className="font-medium cursor-pointer">
                                  {type.label}
                                </Label>
                                <p className="text-xs text-gray-500">{type.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 font-poppins">Schedule</h2>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2 block">
                        Date
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="time" className="text-sm font-medium text-gray-700 mb-2 block">
                        Time
                      </Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-2 block">
                        Duration (hours)
                      </Label>
                      <Input
                        id="duration"
                        type="number"
                        min="0.5"
                        max="8"
                        step="0.5"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div>
                      <Label htmlFor="recurring" className="text-sm font-medium text-gray-700">
                        Make this a recurring session
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">Repeat weekly at the same time</p>
                    </div>
                    <Switch
                      id="recurring"
                      checked={formData.isRecurring}
                      onCheckedChange={(checked) => setFormData({ ...formData, isRecurring: checked })}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 font-poppins">Location</h2>

                  <RadioGroup
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3 border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
                      <RadioGroupItem value="virtual" id="virtual" />
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-purple-600" />
                        <div>
                          <Label htmlFor="virtual" className="font-medium cursor-pointer">
                            Virtual
                          </Label>
                          <p className="text-xs text-gray-500">Online session via video call</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <div className="flex items-center space-x-3 flex-1">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <div className="flex-1">
                          <Label htmlFor="in-person" className="font-medium cursor-pointer">
                            In-Person
                          </Label>
                          <p className="text-xs text-gray-500 mb-2">Meet at a physical location</p>
                          {formData.location === "in-person" && (
                            <Input
                              placeholder="Enter location (e.g., Central Library, Starbucks Downtown)"
                              value={formData.customLocation}
                              onChange={(e) => setFormData({ ...formData, customLocation: e.target.value })}
                              className="mt-2 h-10 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Participants & Tags */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 font-poppins">Details</h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="maxParticipants" className="text-sm font-medium text-gray-700 mb-2 block">
                        Maximum Participants
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="maxParticipants"
                          type="number"
                          min="2"
                          max="20"
                          value={formData.maxParticipants}
                          onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
                          className="pl-10 h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">Tags</Label>
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Add a tag..."
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag(newTag))}
                            className="flex-1 h-10 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                          <Button type="button" onClick={() => addTag(newTag)} size="sm">
                            Add
                          </Button>
                        </div>

                        {formData.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {formData.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                {tag}
                                <button
                                  type="button"
                                  onClick={() => removeTag(tag)}
                                  className="ml-1 hover:text-red-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div>
                          <p className="text-xs text-gray-500 mb-2">Popular tags:</p>
                          <div className="flex flex-wrap gap-2">
                            {popularTags.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => addTag(tag)}
                                className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what participants can expect from this session..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="min-h-[100px] rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-xl font-medium"
                  >
                    Create Session
                  </Button>
                  <Button type="button" variant="outline" className="px-8 h-12 rounded-xl">
                    Preview
                  </Button>
                </div>
              </form>
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Session Preview</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900">{formData.title || "Session Title"}</h4>
                      <Badge className="mt-2">
                        {sessionTypes.find((t) => t.id === formData.type)?.label || "Study"}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formData.date || "Select date"}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {formData.time || "Select time"} ({formData.duration}h)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {formData.location === "virtual" ? "Virtual" : formData.customLocation || "Location TBD"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Max {formData.maxParticipants} participants</span>
                      </div>
                    </div>

                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {formData.description && (
                      <div>
                        <p className="text-sm text-gray-600 line-clamp-3">{formData.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
