import { useState } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import PopularWorkflows from '../components/PopularWorkflows'
import HowItWorks from '../components/HowItWorks'
import SuccessStory from '../components/SuccessStory'
import FinalCTA from '../components/FinalCTA'

// Import workflows data
import workflowsData from '../data/workflows.json'

export default function Home() {
  const [searchResults, setSearchResults] = useState(null)

  const handleSearch = (query) => {
    const results = workflowsData.workflows.filter(workflow => 
      workflow.keywords.some(keyword => 
        keyword.toLowerCase().includes(query.toLowerCase())
      ) || 
      workflow.title.toLowerCase().includes(query.toLowerCase()) ||
      workflow.description.toLowerCase().includes(query.toLowerCase())
    )
    
    if (results.length > 0) {
      // Scroll to workflows section
      const workflowsSection = document.getElementById('workflows')
      if (workflowsSection) {
        workflowsSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      alert(`No workflows found for "${query}". Try "logo design", "blog writing", or "social media"`)
    }
  }

  return (
    <Layout title="AIWorkflowHub - Stop Tool Hunting. Start Creating.">
      <HeroSection onSearch={handleSearch} />
      <WhyChooseUs />
      <PopularWorkflows workflows={workflowsData.workflows} />
      <HowItWorks />
      <SuccessStory />
      <FinalCTA onSearch={handleSearch} />
    </Layout>
  )
}
