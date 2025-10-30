import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Secure Your Dream Rank in NEET & JEE with
                <span className="text-yellow-400"> JEET SARTHI</span>
              </h1>
              <p className="text-xl mb-8">
                Personalized One-on-One Mentorship from IITians & Doctors Who&apos;ve Already Conquered It
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                  />
                </div>
                <button className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 rounded-md hover:bg-yellow-300 transition-colors">
                  Book Your FREE First Session
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-blue-600">JEET SARTHI</span> Mentorship?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature cards here */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Experience = Your Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stats cards here */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How <span className="text-blue-600">JEET SARTHI</span> Mentorship Works?
          </h2>
          <div className="relative">
            {/* Timeline steps here */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Exclusive <span className="text-blue-600">JEET SARTHI</span> Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefits content here */}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial cards here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Start Your Success Journey With JEET SARTHI
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contact form here */}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}