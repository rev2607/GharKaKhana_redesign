import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, MapPin, Heart, Shield, Truck, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/images/logo.png" alt="Ghar-Ka-Khana Logo" width={200} height={60} className="h-12 w-auto" />
              <div className="hidden lg:block">
                <div className="text-lg font-bold text-gray-900">Cloud Kitchen</div>
                <div className="text-sm text-gray-600">Free Homely Food Delivery at your Home & Office</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Menu
              </Link>
              <Link href="/before-ordering" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Before Ordering
              </Link>
              <Link href="/about" className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Contact Us
              </Link>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold">
                Login
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors">
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the vision behind Ghar-Ka-Khana, a proud initiative under the future umbrella of Neelam's Group of Industries, dedicated to delivering authentic home-cooked meals with love, care, and the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Ghar-Ka-Khana is a subsidiary of the upcoming Neelam's Group of Industries, officially launching on 29th June, 2025. Founded by Biju Neelam — the Founder, CEO, CTO & Head — the venture is built with a commitment to providing Quality, Authentic, Hygienic, and Homely-Made Food Meal Products to customers across the city.
                  </p>
                  <p>
                    What began as a humble vision has grown into a dependable tiffin service delivering daily meals that bring comfort and nutrition to every doorstep. Our brand stands firm on the promise of highest customer satisfaction, using recipes crafted with care and ingredients sourced for freshness and quality.
                  </p>
                  <p>
                    Whether you're a busy professional, a student, or simply missing the taste of home, Ghar-Ka-Khana brings the warmth of a home-cooked meal straight to you — with love and responsibility.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 text-center">
                  <div className="text-4xl mb-4">👨‍💼</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Biju Neelam</h3>
                  <p className="text-lg text-gray-600">Founder, CEO & CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Ingredients</h3>
                <p className="text-gray-600 leading-relaxed">
                  We source the freshest ingredients from local markets and trusted suppliers to ensure the best flavors in every meal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cooked with Love</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each meal is prepared with care and attention to detail, just as you would expect from your family kitchen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the importance of timely meals, which is why we ensure punctual delivery every single day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Holidays Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Holidays (No Service Days)</h2>
              <p className="text-xl text-gray-600">
                We are closed on the following days to ensure our team gets proper rest
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Date</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Day</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">January 1</td>
                      <td className="border border-gray-300 px-4 py-3">Wednesday</td>
                      <td className="border border-gray-300 px-4 py-3">New Year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">January 14</td>
                      <td className="border border-gray-300 px-4 py-3">Tuesday</td>
                      <td className="border border-gray-300 px-4 py-3">Sankranti</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">March 14</td>
                      <td className="border border-gray-300 px-4 py-3">Friday</td>
                      <td className="border border-gray-300 px-4 py-3">Holi</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">March 31</td>
                      <td className="border border-gray-300 px-4 py-3">Monday</td>
                      <td className="border border-gray-300 px-4 py-3">Id-Ul-Fitr</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">April 14</td>
                      <td className="border border-gray-300 px-4 py-3">Monday</td>
                      <td className="border border-gray-300 px-4 py-3">Ambedkar Jayanti</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">May 12</td>
                      <td className="border border-gray-300 px-4 py-3">Monday</td>
                      <td className="border border-gray-300 px-4 py-3">Buddha Purnima</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">August 9</td>
                      <td className="border border-gray-300 px-4 py-3">Saturday</td>
                      <td className="border border-gray-300 px-4 py-3">Raksha Bandhan</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">August 15</td>
                      <td className="border border-gray-300 px-4 py-3">Friday</td>
                      <td className="border border-gray-300 px-4 py-3">Independence Day</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">October 2</td>
                      <td className="border border-gray-300 px-4 py-3">Thursday</td>
                      <td className="border border-gray-300 px-4 py-3">Gandhi Jayanti</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">October 20</td>
                      <td className="border border-gray-300 px-4 py-3">Monday</td>
                      <td className="border border-gray-300 px-4 py-3">Diwali</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Dec-25</td>
                      <td className="border border-gray-300 px-4 py-3">Thursday</td>
                      <td className="border border-gray-300 px-4 py-3">Christmas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              When you subscribe to Neelam Ghar Ka Khana, you're not just getting meals delivered; you're becoming part of our extended family. Experience the comfort of home-cooked food without the hassle of preparation.
            </p>
            <div className="bg-gray-800 text-white p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-lg italic">
                "Food brings people together on many different levels. It's the universal connector that reminds us of home."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Image
                src="/images/logo.png"
                alt="Ghar-Ka-Khana Logo"
                width={200}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Delicious home-cooked meals delivered to your doorstep daily. Taste the love in every bite.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span className="text-lg font-semibold">+91 81083 25444</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span>Shop 2, Plot Y5, Sector 19, Shahbaaz Gaon, CBD Belapur, Navi Mumbai 400614</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/before-ordering" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Before Ordering
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span className="font-semibold">Monday to Saturday</span>
                </div>
                <div className="text-sm">
                  <div>Day Delivery: 11:00 AM - 1:30 PM</div>
                  <div>Night Delivery: 7:00 PM - 9:30 PM</div>
                </div>
                <div className="text-sm text-gray-400 mt-2">No service on Sundays and public holidays</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 Neelam Ghar Ka Khana. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 