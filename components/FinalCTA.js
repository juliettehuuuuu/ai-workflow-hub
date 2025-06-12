import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function FinalCTA({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🚀 Ready to Start?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8">
          Join 1,000+ creators who stopped tool hunting forever
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find your perfect workflow..."
              className="w-full px-6 py-4 text-lg border-2 border-transparent rounded-full focus:border-white focus:outline-none shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 p-2 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FiSearch className="w-6 h-6" />
            </button>
          </div>
        </form>

        <div className="text-blue-100 text-sm">
          💡 Start with any creative task - we'll guide you through it
        </div>
      </div>
    </section>
  )
}

