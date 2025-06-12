import { useState } from 'react'
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function PopularWorkflows({ workflows }) {
  const [expandedWorkflow, setExpandedWorkflow] = useState(null)

  const handleToolClick = (toolName, toolUrl, workflowId) => {
    // Analytics tracking (you can add Google Analytics here)
    console.log(`Tool clicked: ${toolName} from ${workflowId}`)
    window.open(toolUrl, '_blank', 'noopener,noreferrer')
  }

  const toggleWorkflow = (workflowId) => {
    setExpandedWorkflow(expandedWorkflow === workflowId ? null : workflowId)
  }

  return (
    <section id="workflows" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🔥 Popular Workflows
          </h2>
          <p className="text-xl text-gray-600">
            Choose a workflow and start creating in minutes
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="grid gap-6">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="workflow-card">
              {/* Workflow Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{workflow.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {workflow.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{workflow.description}</p>
                    
                    {/* Workflow Meta */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="mr-1">⏰</span>
                        {workflow.timeEstimate}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">🎯</span>
                        {workflow.difficulty}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">💰</span>
                        {workflow.cost}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleWorkflow(workflow.id)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {expandedWorkflow === workflow.id ? 'HIDE' : 'START'}
                  {expandedWorkflow === workflow.id ? 
                    <FiChevronUp className="ml-2" /> : 
                    <FiChevronDown className="ml-2" />
                  }
                </button>
              </div>

              {/* Tools Overview */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">🛠️ Tools you'll use:</h4>
                <div className="flex flex-wrap gap-2">
                  {workflow.tools.map((tool, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleToolClick(tool.name, tool.url, workflow.id)}
                      className="tool-link text-sm"
                    >
                      {tool.name}
                      <FiExternalLink className="ml-1 w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Expected Outputs */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">✨ What you'll get:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-600">
                  {workflow.outputs.map((output, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expanded Content - Step by Step */}
              {expandedWorkflow === workflow.id && (
                <div className="border-t pt-6 mt-6">
                  <h4 className="font-bold text-gray-900 mb-4">📋 Step-by-Step Guide:</h4>
                  
                  <div className="space-y-6">
                    {workflow.steps.map((step, idx) => (
                      <div key={idx} className="step-card">
                        {/* Step Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">
                              Step {step.stepNumber}: {step.title}
                            </h5>
                            <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>⏱️ {step.timeEstimate}</span>
                              <span>🛠️ {step.tool}</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => handleToolClick(step.tool, step.toolUrl, workflow.id)}
                            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                          >
                            Open {step.tool}
                            <FiExternalLink className="inline ml-1 w-3 h-3" />
                          </button>
                        </div>

                        {/* Instructions */}
                        <div className="mb-4">
                          <h6 className="font-medium text-gray-800 mb-2">📝 What to do:</h6>
                          <ol className="space-y-1 text-sm text-gray-600">
                            {step.instructions.map((instruction, instIdx) => (
                              <li key={instIdx} className="flex items-start">
                                <span className="text-blue-500 mr-2 font-mono text-xs mt-1">
                                  {instIdx + 1}.
                                </span>
                                {instruction}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Prompt Template (if exists) */}
                        {step.promptTemplate && (
                          <div className="mb-4">
                            <h6 className="font-medium text-gray-800 mb-2">💡 Copy this prompt:</h6>
                            <div className="bg-gray-100 p-3 rounded text-sm text-gray-700 relative">
                              <pre className="whitespace-pre-wrap">{step.promptTemplate}</pre>
                              <button
                                onClick={() => navigator.clipboard.writeText(step.promptTemplate)}
                                className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                              >
                                Copy
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Tips */}
                        {step.tips && (
                          <div>
                            <h6 className="font-medium text-gray-800 mb-2">💡 Pro tips:</h6>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {step.tips.map((tip, tipIdx) => (
                                <li key={tipIdx} className="flex items-start">
                                  <span className="text-yellow-500 mr-2">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
