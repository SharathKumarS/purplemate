"use client"

import type React from "react"

import type { ReactElement } from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Eye, EyeOff, Brain, User, Mail, Lock, GraduationCap, Briefcase, ArrowLeft } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: "login" | "signup"
}

export default function AuthModal({ isOpen, onClose, defaultMode = "login" }: AuthModalProps): ReactElement {
  const [mode, setMode] = useState<"login" | "signup" | "forgot">(defaultMode)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    accountType: "student",
    openToHosting: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === "forgot") {
      setIsSubmitted(true)
    } else {
      // Handle login/signup
      onClose()
      // Redirect to dashboard or onboarding
      if (mode === "signup") {
        window.location.href = "/onboarding"
      } else {
        window.location.href = "/dashboard"
      }
    }
  }

  const resetModal = () => {
    setMode(defaultMode)
    setIsSubmitted(false)
    setShowPassword(false)
    setFormData({
      email: "",
      password: "",
      fullName: "",
      accountType: "student",
      openToHosting: false,
    })
  }

  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode)
      setIsSubmitted(false)
      setShowPassword(false)
    }
  }, [isOpen, defaultMode])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
          setTimeout(resetModal, 100) // Small delay to prevent flashing
        }
      }}
    >
      <DialogContent className="sm:max-w-md max-h-[95vh] overflow-y-auto mx-4">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-bold font-poppins">
            {mode === "login" && "Welcome back"}
            {mode === "signup" && "Join PurpleMate"}
            {mode === "forgot" && !isSubmitted && "Forgot Password?"}
            {mode === "forgot" && isSubmitted && "Check your email"}
          </DialogTitle>
        </DialogHeader>

        {mode === "login" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button type="button" onClick={() => setMode("forgot")} className="text-purple-600 hover:underline">
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Sign In
            </Button>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-purple-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </div>
          </form>
        )}

        {mode === "signup" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Account Type</Label>
              <RadioGroup
                value={formData.accountType}
                onValueChange={(value) => setFormData({ ...formData, accountType: value })}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <RadioGroupItem value="student" id="student" />
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-purple-600" />
                    <Label htmlFor="student" className="cursor-pointer">
                      Student
                    </Label>
                  </div>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <RadioGroupItem value="remote-worker" id="remote-worker" />
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    <Label htmlFor="remote-worker" className="cursor-pointer">
                      Remote Worker
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <Label htmlFor="hosting" className="font-medium">
                  Open to hosting sessions?
                </Label>
                <p className="text-xs text-gray-500">Help others by hosting focus sessions</p>
              </div>
              <Switch
                id="hosting"
                checked={formData.openToHosting}
                onCheckedChange={(checked) => setFormData({ ...formData, openToHosting: checked })}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Create Account
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-purple-600 hover:underline font-medium"
              >
                Sign in
              </button>
            </div>
          </form>
        )}

        {mode === "forgot" && !isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Send Reset Link
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to login
              </button>
            </div>
          </form>
        )}

        {mode === "forgot" && isSubmitted && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600">Password reset link sent to {formData.email}</p>
            <Button onClick={() => setMode("login")} variant="outline" className="w-full">
              Back to Login
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
