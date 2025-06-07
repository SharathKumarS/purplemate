import { Button } from "@/components/ui/button"
import { Smartphone, QrCode, TrendingUp } from "lucide-react"

export default function CTASection() {
  const trendingGroups = [
    { name: "MCAT Study Group", location: "San Francisco", members: 12 },
    { name: "Remote Dev Co-work", location: "Austin", members: 8 },
    { name: "MBA Finance Prep", location: "New York", members: 15 },
    { name: "Design Sprint Session", location: "Los Angeles", members: 6 },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Join your first Focus Meetup today
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Download PurpleMate and start connecting with productive people in your area
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Smartphone className="w-5 h-5 mr-2" />
              Get on App Store
            </Button>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Smartphone className="w-5 h-5 mr-2" />
              Get on Play Store
            </Button>
          </div>

          {/* QR Code */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white p-4 rounded-2xl shadow-lg">
              <QrCode className="w-24 h-24 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Scan to download</p>
            </div>
          </div>

          {/* Trending Groups */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white mr-2" />
              <h3 className="text-xl font-bold text-white font-poppins">Trending Groups Near You</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {trendingGroups.map((group, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-white mb-1">{group.name}</h4>
                  <p className="text-purple-100 text-sm mb-2">{group.location}</p>
                  <p className="text-purple-200 text-sm">{group.members} members</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
