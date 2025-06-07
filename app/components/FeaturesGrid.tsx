import { Check, Search, Brain, Target, Lock, MapPin, RefreshCw } from "lucide-react"

export default function FeaturesGrid() {
  const features = [
    {
      icon: Check,
      title: "Host or Join Sessions",
      description: "Create your own productivity sessions or join existing ones based on time and topic preferences.",
    },
    {
      icon: Search,
      title: "Discover Users Nearby",
      description: "Find like-minded people in your area who share similar goals and study/work schedules.",
    },
    {
      icon: Brain,
      title: "Multiple Focus Modes",
      description: "Choose from Silent focus, Discussion groups, or Sprint sessions to match your working style.",
    },
    {
      icon: Target,
      title: "Smart Suggestions",
      description: "Get personalized recommendations based on your vibe, schedule, and productivity patterns.",
    },
    {
      icon: Lock,
      title: "Private or Public Sessions",
      description: "Control your privacy with options for private groups or open public sessions.",
    },
    {
      icon: MapPin,
      title: "Location Tags",
      description: "Tag your favorite spots and discover new productive locations recommended by the community.",
    },
    {
      icon: RefreshCw,
      title: "Recurring Groups",
      description: "Create ongoing study or co-work groups that meet regularly to build lasting connections.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Everything You Need to Stay Productive
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you focus, connect, and achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
