import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
                <li><span className="font-bold">* All orders must be placed at least 24 hours in advance</span> to ensure timely preparation and delivery.</li>
                <li>* Full payment must be made 100% in advance at the time of booking.</li>
                <li>* Tiffin delivery will be provided <span className="font-bold">only up to the 1st floor</span> of any building. Customers on higher floors are requested to coordinate accordingly.</li>
                <li>* Customers are required to return the previous day's <span className="font-bold">empty tiffin</span> box at the time of receiving the new one.</li>
                <li><span className="font-bold">* Service Days:</span> 25 Days is for a Month Package & 6 Days for a Week Package; This excludes Sundays and Public Holidays.</li>
                <li>* Refer to the <span className="font-bold">Holidays list</span> in "About" section on our website for the full list of non-service days.</li>
                <li><span className="font-bold">* Delivery Timings:</span> Lunch: 11:00 AM – 1:30 PM & Dinner: 7:00 PM – 9:30 PM</li>
                <li>* In case <span className="font-bold">company is unable to deliver</span> on a scheduled day, the same will be intimated in advance & will compensate the meal by extending the service period accordingly.</li>
                <li>* Tiffin packages are available on a <span className="font-bold">Weekly, Monthly Subscription & Walk-In Take-Away</span> (From Cloud Kitchen Location) basis.</li>
              </ul>
              <div className="text-right text-xs text-gray-500 mt-8 border-t pt-4">Last Updated: 7/18/2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 