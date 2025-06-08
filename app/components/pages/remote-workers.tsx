"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Search,
  Filter,
  MapPin,
  Clock,
  Users,
  Star,
  Briefcase,
  ChevronRight,
  Building2,
  TrendingUp,
  Award,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Breadcrumbs } from "@/components/Breadcrumbs"

const remoteJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote - US/EU",
    type: "Full-time",
    salary: "$80k - $120k",
    experience: "Senior",
    skills: ["React", "TypeScript", "Next.js"],
    description: "Join our team to build cutting-edge web applications using modern technologies.",
    posted: "2 days ago",
    applicants: 45,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Remote - Global",
    type: "Full-time",
    salary: "$90k - $140k",
    experience: "Mid-level",
    skills: ["Product Strategy", "Analytics", "Agile"],
    description: "Lead product development and strategy for our growing SaaS platform.",
    posted: "1 day ago",
    applicants: 32,
    rating: 4.6,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote - Americas",
    type: "Contract",
    salary: "$60 - $80/hour",
    experience: "Mid-level",
    skills: ["Figma", "User Research", "Prototyping"],
    description: "Create beautiful and intuitive user experiences for mobile and web applications.",
    posted: "3 days ago",
    applicants: 28,
    rating: 4.9,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote - Worldwide",
    type: "Full-time",
    salary: "$85k - $130k",
    experience: "Senior",
    skills: ["AWS", "Docker", "Kubernetes"],
    description: "Build and maintain scalable cloud infrastructure for enterprise clients.",
    posted: "4 days ago",
    applicants: 19,
    rating: 4.7,
  },
  {
    id: 5,
    title: "Content Marketing Manager",
    company: "GrowthCo",
    location: "Remote - US",
    type: "Full-time",
    salary: "$55k - $75k",
    experience: "Mid-level",
    skills: ["Content Strategy", "SEO", "Analytics"],
    description: "Drive content marketing initiatives to increase brand awareness and lead generation.",
    posted: "5 days ago",
    applicants: 41,
    rating: 4.5,
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "DataInsights Ltd",
    location: "Remote - EU",
    type: "Full-time",
    salary: "$75k - $110k",
    experience: "Senior",
    skills: ["Python", "Machine Learning", "SQL"],
    description: "Analyze complex datasets to drive business insights and predictive modeling.",
    posted: "1 week ago",
    applicants: 37,
    rating: 4.8,
  },
]

const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance"]
const experienceLevels = ["Entry-level", "Mid-level", "Senior", "Executive"]
const locations = ["Remote - Global", "Remote - US", "Remote - EU", "Remote - Americas", "Remote - Asia"]

export function RemoteWorkers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredJobs = remoteJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type)
    const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experience)
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location)

    return matchesSearch && matchesJobType && matchesExperience && matchesLocation
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "For Remote Workers", href: "/remote-workers" },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Remote Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Find Your Dream Remote Job
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover amazing remote opportunities from top companies worldwide. Work from anywhere and build your career
            on your terms.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Remote Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search jobs, companies, or skills..."
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
                <SelectItem value="salary-high">Highest Salary</SelectItem>
                <SelectItem value="salary-low">Lowest Salary</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
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
                  <DialogTitle>Filter Jobs</DialogTitle>
                  <DialogDescription>Refine your search with these filters</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Job Type Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Job Type</h4>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={`job-type-${type}`}
                            checked={selectedJobTypes.includes(type)}
                            onCheckedChange={(checked) => handleJobTypeChange(type, checked as boolean)}
                          />
                          <Label htmlFor={`job-type-${type}`} className="text-sm">
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

          {/* Active Filters */}
          {selectedJobTypes.length + selectedExperience.length + selectedLocations.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedJobTypes.map((type) => (
                <Badge
                  key={type}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleJobTypeChange(type, false)}
                >
                  {type} ×
                </Badge>
              ))}
              {selectedExperience.map((exp) => (
                <Badge
                  key={exp}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleExperienceChange(exp, false)}
                >
                  {exp} ×
                </Badge>
              ))}
              {selectedLocations.map((loc) => (
                <Badge
                  key={loc}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleLocationChange(loc, false)}
                >
                  {loc} ×
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {remoteJobs.length} remote jobs
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-600">{job.company}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{job.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 hover:text-purple-600 transition-colors">
                      <Link href={`/job/${job.id}`}>{job.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base">{job.description}</CardDescription>
                  </div>
                  <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>{job.type}</Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {job.experience}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {job.applicants} applicants
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    Posted {job.posted}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Apply Now
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button onClick={clearAllFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
