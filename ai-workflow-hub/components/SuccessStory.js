export default function SuccessStory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ✨ Success Story
          </h2>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <blockquote className="text-xl text-gray-700 mb-6 text-center italic">
            "I used to spend hours researching tools and watching tutorials. 
            Now I create professional content in minutes. This saved my startup!"
          </blockquote>
          
          <div className="text-center">
            <div className="font-semibold text-gray-900">Sarah K.</div>
            <div className="text-gray-600 text-sm">Tech Founder</div>
          </div>
        </div>

        {/* Results Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="font-bold text-gray-900 mb-1">Results:</div>
            <div className="text-sm text-gray-600">Logo + Brand Kit in 30 minutes</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="font-bold text-gray-900 mb-1">Saved:</div>
            <div className="text-sm text-gray-600">$500 in designer fees</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-2">⏰</div>
            <div className="font-bold text-gray-900 mb-1">Time:</div>
            <div className="text-sm text-gray-600">30 min vs 3 days</div>
          </div>
        </div>
      </div>
    </section>
  )
}
