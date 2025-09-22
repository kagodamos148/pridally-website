"use client";
import React, { useState } from 'react'
import { Heart, Users, BookOpen, Lightbulb, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

export default function LGBTQPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedTerm, setExpandedTerm] = useState(null)

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Heart },
    { id: 'terminology', label: 'Terminology', icon: BookOpen },
    { id: 'history', label: 'History', icon: Users },
    { id: 'resources', label: 'Resources', icon: Lightbulb }
  ]

  const terminology = [
    {
      term: 'LGBTQ+',
      definition: 'An acronym for Lesbian, Gay, Bisexual, Transgender, Queer/Questioning, and others. The + represents the many other identities within the community.'
    },
    {
      term: 'Sexual Orientation',
      definition: 'A person\'s emotional, romantic, and/or sexual attraction to others. Examples include heterosexual, homosexual, bisexual, pansexual, and asexual.'
    },
    {
      term: 'Gender Identity',
      definition: 'A person\'s internal sense of their own gender, which may or may not correspond to the sex assigned at birth.'
    },
    {
      term: 'Transgender',
      definition: 'A person whose gender identity differs from the sex they were assigned at birth.'
    },
    {
      term: 'Cisgender',
      definition: 'A person whose gender identity matches the sex they were assigned at birth.'
    },
    {
      term: 'Non-binary',
      definition: 'A gender identity that doesn\'t fit within the traditional binary of male or female.'
    },
    {
      term: 'Pronouns',
      definition: 'Words used to refer to someone in the third person. Common pronouns include he/him, she/her, they/them, and others.'
    },
    {
      term: 'Ally',
      definition: 'A person who supports and advocates for LGBTQ+ rights and inclusion, typically someone who is not LGBTQ+ themselves.'
    }
  ]

  const milestones = [
    {
      year: '1969',
      event: 'Stonewall Riots',
      description: 'A series of protests that marked a turning point in the LGBTQ+ rights movement in the United States.'
    },
    {
      year: '1973',
      event: 'APA Declassification',
      description: 'The American Psychiatric Association removed homosexuality from its list of mental disorders.'
    },
    {
      year: '2003',
      event: 'Lawrence v. Texas',
      description: 'U.S. Supreme Court struck down sodomy laws, decriminalizing same-sex intimate conduct.'
    },
    {
      year: '2015',
      event: 'Marriage Equality',
      description: 'Obergefell v. Hodges legalized same-sex marriage nationwide in the United States.'
    }
  ]

  const resources = [
    {
      name: 'The Trevor Project',
      description: 'Crisis intervention and suicide prevention for LGBTQ+ youth',
      type: 'Crisis Support'
    },
    {
      name: 'GLAAD',
      description: 'Media advocacy organization working to accelerate LGBTQ+ acceptance',
      type: 'Advocacy'
    },
    {
      name: 'Human Rights Campaign',
      description: 'America\'s largest LGBTQ+ civil rights organization',
      type: 'Civil Rights'
    },
    {
      name: 'PFLAG',
      description: 'Support, education, and advocacy for LGBTQ+ people and their families',
      type: 'Family Support'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Understanding LGBTQ+
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive guide to understanding LGBTQ+ identities, history, and building inclusive communities
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <nav className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="font-semibold text-gray-800 mb-4">Navigate</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">What is LGBTQ+?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        LGBTQ+ is an acronym that represents a diverse community of people with different sexual orientations and gender identities. The community includes lesbian, gay, bisexual, transgender, queer/questioning individuals, and many others.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Each letter represents a different identity, and the '+' symbol acknowledges that there are many other identities within this vibrant and diverse community.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Core Principles</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Respect for all identities</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Equality and human rights</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Celebration of diversity</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Building inclusive communities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 border-2 border-purple-200 rounded-lg">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Love is Love</h3>
                      <p className="text-gray-600 text-sm">Everyone deserves to love and be loved, regardless of sexual orientation.</p>
                    </div>
                    
                    <div className="text-center p-6 border-2 border-pink-200 rounded-lg">
                      <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Identity Matters</h3>
                      <p className="text-gray-600 text-sm">Gender identity and expression are fundamental aspects of human diversity.</p>
                    </div>
                    
                    <div className="text-center p-6 border-2 border-blue-200 rounded-lg">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lightbulb className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Education & Understanding</h3>
                      <p className="text-gray-600 text-sm">Knowledge and empathy help build more inclusive communities.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminology Section */}
              {activeSection === 'terminology' && (
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Terminology</h2>
                  <p className="text-gray-700 mb-8">
                    Understanding terminology is essential for respectful communication. Here are important terms and their definitions:
                  </p>
                  
                  <div className="space-y-4">
                    {terminology.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedTerm(expandedTerm === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-800">{item.term}</span>
                          {expandedTerm === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {expandedTerm === index && (
                          <div className="px-4 pb-4 border-t border-gray-100">
                            <p className="text-gray-700 pt-4">{item.definition}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* History Section */}
              {activeSection === 'history' && (
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Historical Milestones</h2>
                  <p className="text-gray-700 mb-8">
                    The LGBTQ+ rights movement has achieved significant milestones over the decades. Here are some key moments:
                  </p>
                  
                  <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{milestone.year}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                          <p className="text-gray-700">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Section */}
              {activeSection === 'resources' && (
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Support & Resources</h2>
                  <p className="text-gray-700 mb-8">
                    There are many organizations providing support, advocacy, and resources for the LGBTQ+ community:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {resources.map((resource, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-gray-800">{resource.name}</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{resource.description}</p>
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                          <span>Learn more</span>
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-red-100 via-orange-100 via-yellow-100 via-green-100 via-blue-100 via-indigo-100 to-purple-100 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-gray-800 mb-3">Crisis Support</h3>
                    <p className="text-gray-700 mb-4">
                      If you or someone you know is in crisis, please reach out for help:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Trevor Lifeline:</strong> 1-866-488-7386 (24/7 crisis support for LGBTQ+ youth)</p>
                      <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                      <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">Building understanding, promoting equality, celebrating diversity.</p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>🏳️‍🌈 Pride</span>
            <span>🏳️‍⚧️ Trans Rights</span>
            <span>❤️ Love Wins</span>
            <span>✊ Equality</span>
          </div>
        </div>
      </footer>
    </div>
  )
}