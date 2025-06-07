import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Medical Student",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "PurpleMate helped me find study partners for my MCAT prep. The accountability and support made all the difference!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Nomad",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As a remote developer, I was struggling with isolation. Now I have regular co-working sessions that keep me motivated.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "MBA Student",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The subject-based groups are amazing! I found my finance study group and we meet every week at the library.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Freelance Designer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Love the flexibility of choosing between silent focus sessions and collaborative work. Perfect for different projects!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            People just like you are focusing together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students and professionals who've transformed their productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 font-poppins">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
