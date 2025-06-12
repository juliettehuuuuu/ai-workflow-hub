export default function WhyChooseUs() {
  const features = [
    {
      icon: "💰",
      title: "100% Free Tools Only",
      description: "Every tool we recommend has a free tier that gets the job done.",
      benefits: [
        "No hidden costs",
        "No credit cards required",
        "Start immediately"
      ]
    },
    {
      icon: "🎯",
      title: "Task-First Navigation",
      description: "Just tell us what you want to create. We'll handle the tool selection.",
      benefits: [
        "Task → Tools mapping",
        "Step-by-step guidance",
        "Beginner-friendly"
      ]
    },
    {
      icon: "🚀",
      title: "Creator Community Hub",
      description: "Your command center for all creative tasks.",
      benefits: [
        "Proven workflows",
        "Community tested",
        "Time-saving shortcuts"
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Creators Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for creators, by creators. Stop wasting time on tool research.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center justify-center text-sm text-gray-500">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


