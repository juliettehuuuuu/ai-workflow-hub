import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = "AIWorkflowHub" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold gradient-text">
                  🚀 AIWorkflowHub
                </span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#workflows" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Workflows
                </Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">🚀 AIWorkflowHub</h3>
              <p className="text-gray-400 mb-6">
                Built for creators, by creators • Stop tool hunting forever
              </p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:hello@aiworkflowhub.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
