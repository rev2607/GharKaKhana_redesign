import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Phone, Clock, MapPin } from "lucide-react"

export default function BeforeOrderingPage() {
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
              <Link href="/before-ordering" className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1">
                Before Ordering
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
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

      {/* Main Content */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-orange-800 mb-2">Before Ordering, Make a Note:</h1>
              <p className="text-lg text-gray-700">Please read these important points carefully before using our services.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <ul className="space-y-4 text-base text-gray-900">
                <li><span className="font-bold">* Advance Booking Required:</span> All orders must be placed at least 24 hours in advance to ensure timely preparation and delivery.</li>
                <li><span className="font-bold">* Full Payment in Advance:</span> Full payment must be made 100% in advance at the time of booking.</li>
                <li><span className="font-bold">* Delivery Limitations:</span> Tiffin delivery will be provided only up to the 1st floor of any building. Customers on higher floors are requested to coordinate accordingly.</li>
                <li><span className="font-bold">* Tiffin Box Return Policy:</span> Customers are required to return the previous day's empty tiffin box at the time of receiving the new one.</li>
                <li><span className="font-bold">* Service Days:</span> 25 Days is for a Month Package & 6 Days for a Week Package; This excludes Sundays and Public Holidays.</li>
                <li><span className="font-bold">* Holiday Schedule:</span> Refer to the Holidays list in 'About' section on our website for the full list of non-service days.</li>
                <li><span className="font-bold">* Delivery Timings:</span> Lunch: 11:00 AM – 1:30 PM & Dinner: 7:00 PM - 9:30 PM.</li>
                <li><span className="font-bold">* Service Interruption Policy:</span> In case the company is unable to deliver on a scheduled day, the same will be intimated in advance & will compensate the meal by extending the service period accordingly.</li>
                <li><span className="font-bold">* Package Options:</span> Tiffin packages are available on a Weekly, Monthly Subscription & Walk-In Take-Away (From Cloud Kitchen Location) basis.</li>
                <li><span className="font-bold">* Rajma-Rice Special Note:</span> Considering Rajma-Rice being a very Famous Indian Dish Combination, 'When there is a Rajma; Chapathi would be reduced to two and Rice & Rajma Quantity will be more.'</li>
                <li><span className="font-bold">* Cancellation Policy:</span> If a package is cancelled in between, so far delivered Tiffin prize would be calculated as per Per Day Prize and the remaining amount would be refunded.</li>
                <li><span className="font-bold">* Advance Meal Cancellation:</span> Please inform at least 1 day in advance if you do not need a Meal by the next day; otherwise, the Meal would be calculated for the day.</li>
              </ul>
              <div className="text-right text-xs text-gray-500 mt-8 border-t pt-4">Last Updated: 7/18/2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-blue-50 p-6 border-b border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Important Notice</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  By placing an order, you acknowledge that you have read, understood, and agree to comply with all the terms and conditions stated above. These terms are subject to change, and the most current version will always be available on this page.
                </p>
                <div className="text-center text-sm text-gray-500 mt-6">
                  Last Updated: August 4, 2025
                </div>
              </div>
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