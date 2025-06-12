import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function HeroSection({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const quickSearches = [
    "design a logo",
    "write a blog post",
    "social media graphics",
    "email newsletter"
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Stop Tool Hunting.
          <span className="gradient-text block">Start Creating.</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Get step-by-step AI workflows for any creative task. 
          <strong> 100% free tools only.</strong>
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you want to create today?"
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <FiSearch className="w-6 h-6" />
            </button>
          </div>
        </form>

        {/* Quick Search Options */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="text-gray-500 text-sm">💡 Try:</span>
          {quickSearches.map((query, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(query)
                onSearch(query)
              }}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm"
            >
              "{query}"
            </button>
          ))}
        </div>

        {/* Social Proof */}
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🎉</span>
            <span>Join 1,000+ creators</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">⏰</span>
            <span>Save 2+ hours</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">💰</span>
            <span>$0 cost</span>
          </div>
        </div>
      </div>
    </section>
  )
}
