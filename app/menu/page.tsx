import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Heart, Shield, Truck, CheckCircle, Star, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MenuPage() {
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
              <Link href="/#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
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
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Menu Hero Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Complete Menu</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of meal plans designed to suit different preferences and budgets
            </p>
          </div>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-2xl mb-12 text-center">
            <div className="text-2xl font-bold mb-2">🎉 SPECIAL LAUNCH OFFER</div>
            <div className="text-4xl font-black text-yellow-300 mb-2">Your First Meal for just ₹69!</div>
            <div className="text-lg opacity-90">One-time offer for the first week only</div>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Row 1: Vegetarian Plans */}
            
            {/* Card 1: Veg Promo */}
            <Card className="border-2 border-orange-300 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-4 relative">
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-red-500 text-white px-3 py-1 text-xs font-bold">LIMITED OFFER</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">(Veg Promo) Price ₹69</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• 3 Chapathi</li>
                  <li>• Rice</li>
                  <li>• 1 Bhaji</li>
                  <li>• 1 Dal/Kadi</li>
                  <li>• Salad/Papad/Pickle</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <div className="text-sm font-semibold text-gray-700 mb-1">1 Week, only 1 Time offer</div>
                  <div className="text-sm text-gray-600">Weekly (one-time offer) ₹414</div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Veg Normal */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-green-600 mb-2">(Veg Normal) Price ₹75</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• Chapathis</li>
                  <li>• Rice</li>
                  <li>• Bhaji</li>
                  <li>• Dal/Kadi</li>
                  <li>• Salad/Papad/Pickle</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center space-y-1">
                  <div className="text-sm text-gray-700">One-Day Takeaway ₹85</div>
                  <div className="text-sm text-gray-700">Weekly ₹450</div>
                  <div className="text-sm text-gray-700">Monthly ₹1825</div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Veg Special */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-green-600 mb-2">(Veg Special) Price ₹85</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• Chapathis (May be combined)</li>
                  <li>• Rice</li>
                  <li>• Bhaji</li>
                  <li>• Dal/Kadi</li>
                  <li>• Salad/Papad/Pickle</li>
                  <li>• Compliment</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center space-y-1">
                  <div className="text-sm text-gray-700">One-Day Takeaway ₹95</div>
                  <div className="text-sm text-gray-700">Weekly ₹510</div>
                  <div className="text-sm text-gray-700">Monthly ₹2075</div>
                </div>
              </CardContent>
            </Card>

            {/* Row 2: Combo & Non-Veg Plans */}
            
            {/* Card 4: Combo Normal NV + Veg */}
            <Card className="border-2 border-red-200 bg-gradient-to-b from-red-50 to-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-red-600 mb-2">(Combo Normal NV + Veg) Price ₹110</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• Chapathi</li>
                  <li>• Rice</li>
                  <li>• <span className="text-red-600 font-semibold">Special Chicken Curry</span></li>
                  <li>• Salad/Papad/Pickle</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center space-y-1">
                  <div className="text-sm text-gray-700">Weekly ₹485</div>
                  <div className="text-sm text-gray-700">Monthly ₹1965</div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Combo Special NV + Veg */}
            <Card className="border-2 border-red-200 bg-gradient-to-b from-red-50 to-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-red-600 mb-2">(Combo Special NV + Veg) Price ₹120</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• Chapathi</li>
                  <li>• Rice</li>
                  <li>• <span className="text-red-600 font-semibold">Special Chicken Curry</span></li>
                  <li>• Salad/Papad/Pickle</li>
                  <li>• Compliment</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center space-y-1">
                  <div className="text-sm text-gray-700">Weekly ₹545</div>
                  <div className="text-sm text-gray-700">Monthly ₹2215</div>
                </div>
              </CardContent>
            </Card>

            {/* Card 6: Normal Non-Veg */}
            <Card className="border-2 border-red-200 bg-gradient-to-b from-red-50 to-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Normal Non-Veg</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• Chapathi</li>
                  <li>• Rice</li>
                  <li>• <span className="text-red-600 font-semibold">Special Chicken Curry</span></li>
                  <li>• Salad/Papad/Pickle</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-700">One-Day Takeaway ₹120</div>
                </div>
              </CardContent>
            </Card>

            {/* Row 3: Special Non-Veg & Future Plans */}
            
            {/* Card 7: Special Non-Veg */}
            <Card className="border-2 border-red-200 bg-gradient-to-b from-red-50 to-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Special Non-Veg</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>• Chapathi</li>
                  <li>• Rice</li>
                  <li>• <span className="text-red-600 font-semibold">Special Chicken Curry</span></li>
                  <li>• Salad/Papad/Pickle</li>
                  <li>• Compliment</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-700">One-Day Takeaway ₹130</div>
                </div>
              </CardContent>
            </Card>



            {/* Card 9: More Plans Coming Soon */}
            <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-2xl">🚀</div>
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">More plans are coming soon</h3>
                  <p className="text-orange-600 text-sm font-medium mb-3">Stay tuned for exciting new meal options!</p>
                  <div className="bg-white/70 p-3 rounded-lg border border-orange-200">
                    <div className="text-xs text-orange-700 font-semibold">New flavors, new experiences</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">1</div>
                  <p className="text-gray-700 text-lg">Bhaji will change daily — enjoy a mix of homely seasonal curries throughout the month!</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">2</div>
                  <p className="text-gray-700 text-lg">One Time Refundable Security Deposit ₹299/- to be paid towards Tiffin Box</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">3</div>
                  <p className="text-gray-700 text-lg">Promo plans are one-time offers only.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">4</div>
                  <p className="text-gray-700 text-lg">No service on Sundays and public holidays.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">5</div>
                  <p className="text-gray-700 text-lg">Weekly = 6 days, Monthly = 25 days.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5">6</div>
                  <p className="text-gray-700 text-lg">Combo pack have 1 day (Wednesday) Chicken and remaining 5 days Veg</p>
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
                className="h-12 w-auto mb-4 brightness-0 invert"
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
                  <Link href="/#about" className="text-gray-300 hover:text-orange-400 transition-colors">
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