export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      emoji: "🔍",
      title: "Search",
      description: "Tell us your creative goal"
    },
    {
      number: "2", 
      emoji: "📋",
      title: "Follow",
      description: "Our step-by-step free workflow"
    },
    {
      number: "3",
      emoji: "🎉",
      title: "Get Results",
      description: "Professional output in under an hour"
    }
  ]

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 How It Works
          </h2>
          <p className="text-xl text-gray-600">
            From idea to execution in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number Circle */}
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              
              {/* Step Icon */}
              <div className="text-5xl mb-4">{step.emoji}</div>
              
              {/* Step Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
