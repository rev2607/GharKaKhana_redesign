"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Heart, Shield, Truck, CheckCircle, Star, ArrowLeft, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MenuPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              <Link href="/menu" className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1">
                Menu
              </Link>
              <Link href="/before-ordering" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Before Ordering
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-orange-100 bg-white">
              <nav className="px-4 py-4 space-y-3">
                <Link 
                  href="/" 
                  className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/menu" 
                  className="block py-3 px-4 text-orange-600 font-semibold border-l-4 border-orange-600 bg-orange-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link 
                  href="/before-ordering" 
                  className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Before Ordering
                </Link>
                <Link 
                  href="/about" 
                  className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Menu Hero Section */}
      <section className="py-4 lg:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Our Complete Menu</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of meal plans designed to suit different preferences and budgets
            </p>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Veg Normal Plan */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <span className="text-2xl">🥗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Veg Normal</h3>
                  <div className="text-3xl font-black text-green-600">₹79</div>
                  <div className="text-sm text-gray-500">per meal</div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Chapathis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Rice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Bhaji</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Dal/Kadi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Salad</span>
                  </div>
                </div>

                <div className="space-y-3 mt-auto pt-6">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Weekly</div>
                      <div className="text-lg font-bold text-green-700">₹474</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Monthly</div>
                      <div className="text-lg font-bold text-green-800">
                        <span className="line-through text-gray-500">₹1975</span> ₹1925
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veg Special Plan */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Veg Special</h3>
                  <div className="text-3xl font-black text-green-600">₹89</div>
                  <div className="text-sm text-gray-500">per meal</div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Chapathis (May be combined)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Rice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Bhaji</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Dal/Kadi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Salad/Papad/Pickle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-semibold text-green-600">Compliment</span>
                  </div>
                </div>

                <div className="space-y-3 mt-auto pt-6">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Weekly</div>
                      <div className="text-lg font-bold text-green-700">₹534</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Monthly</div>
                      <div className="text-lg font-bold text-green-800">
                        <span className="line-through text-gray-500">₹2225</span> ₹2175
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combo Normal NV + Veg Plan */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <span className="text-2xl">🍗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Combo Normal</h3>
                  <div className="text-3xl font-black">
                    <span className="text-red-600">NV</span>
                    <span className="text-gray-600"> + </span>
                    <span className="text-green-600">Veg</span>
                  </div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Chapathi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Rice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-semibold">Wednesday - Chicken Masala Curry & Veg other days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Salad</span>
                  </div>
                </div>

                <div className="space-y-3 mt-auto pt-6">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Weekly</div>
                      <div className="text-lg font-bold text-red-700">₹505</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Monthly</div>
                      <div className="text-lg font-bold text-red-800">
                        <span className="line-through text-gray-500">₹2099</span> ₹2045
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combo Special NV + Veg Plan */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <span className="text-2xl">👑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Combo Special</h3>
                  <div className="text-3xl font-black">
                    <span className="text-red-600">NV</span>
                    <span className="text-gray-600"> + </span>
                    <span className="text-green-600">Veg</span>
                  </div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Chapathi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Rice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-semibold">Wednesday - Chicken Masala Curry & Veg other days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Salad/Papad/Pickle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-semibold text-red-600">Compliment</span>
                  </div>
                </div>

                <div className="space-y-3 mt-auto pt-6">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Weekly</div>
                      <div className="text-lg font-bold text-red-700">₹565</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Monthly</div>
                      <div className="text-lg font-bold text-red-800">
                        <span className="line-through text-gray-500">₹2349</span> ₹2295
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Plans Coming Soon */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
              <div className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full mb-6 shadow-lg">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-3">More Plans Coming Soon</h3>
                  <p className="text-orange-600 mb-6">Stay tuned for exciting new meal options!</p>
                  <div className="bg-white/80 p-4 rounded-xl border border-orange-200">
                    <div className="text-sm font-semibold text-orange-700">New flavors, new experiences</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">1</div>
                  <p className="text-gray-700 text-lg">Bhaji will change daily — enjoy a mix of homely seasonal curries throughout the month!</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">2</div>
                  <p className="text-gray-700 text-lg">No service on Sundays and public holidays.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">3</div>
                  <p className="text-gray-700 text-lg">Weekly = 6 days, Monthly = 25 days.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">4</div>
                  <p className="text-gray-700 text-lg">Combo pack have 1 day (Wednesday) Chicken and remaining 5 days Veg</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">5</div>
                  <p className="text-gray-700 text-lg">₹9/- would be additional charge if 1-Single Delivery Ordered</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Want to Order Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Want to Order?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us to place your order and enjoy authentic home-style meals delivered fresh to your doorstep.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              📞 +91 8108 325 444
            </Button>
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
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Delicious home-cooked meals delivered to your doorstep daily. Taste the love in every bite.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span className="text-lg font-semibold">+91 8108 325 444</span>
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
                  <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
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
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/menu">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold">
                    View Full Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
