import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  FaRobot,
  FaLightbulb,
  FaFileAlt,
  FaVial,
  FaMagic,
  FaBug,
  FaTachometerAlt,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaStar,
  FaClock,
  FaUsers,
  FaCode,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa';

function CodeTools() {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combined tools from services and toolsData
  const allTools = [
    {
      id: 1,
      title: "Code Generator",
      description: "Generate clean, efficient code in multiple languages based on your requirements. Perfect for boilerplate code, algorithms, and common patterns.",
      href: "/codegenerator",
      icon: FaRobot,
      category: "generation",
      iconColor: "text-blue-500",
      popularity: 95,
      users: "10K+",
      featured: true
    },
    {
      id: 2,
      title: "Code Optimizer",
      description: "Improve your code's performance, readability, and maintainability with AI-powered suggestions and best practices.",
      href: "/optimiser",
      icon: FaLightbulb,
      category: "optimization",
      iconColor: "text-yellow-500",
      popularity: 88,
      users: "8K+",
      featured: true
    },
    {
      id: 3,
      title: "Content Summarizer",
      description: "Extract key information from various sources including text, images, PDFs, and YouTube videos with our AI summarization tool.",
      href: "/content-summarizer",
      icon: FaFileAlt,
      category: "analysis",
      iconColor: "text-green-500",
      popularity: 82,
      users: "6K+",
      featured: true
    },
    {
      id: 4,
      title: "Test Case Generator",
      description: "Automatically generate comprehensive test cases for your code.",
      href: "/test-case-generator",
      icon: FaVial,
      category: "testing",
      iconColor: "text-purple-500",
      popularity: 76,
      users: "5K+",
      featured: false
    },
    {
      id: 5,
      title: "Code Beautifier",
      description: "Transform messy code into clean, well-structured code that follows best practices.",
      href: "/code-beautifier",
      icon: FaMagic,
      category: "formatting",
      iconColor: "text-pink-500",
      popularity: 79,
      users: "7K+",
      featured: false
    },
    {
      id: 6,
      title: "Error Debugger",
      description: "Identify and fix bugs, syntax errors, and logical issues in your code.",
      href: "/error-debugger",
      icon: FaBug,
      category: "debugging",
      iconColor: "text-red-500",
      popularity: 84,
      users: "9K+",
      featured: false
    },
    {
      id: 7,
      title: "Performance Analyzer",
      description: "Analyze execution time and memory usage of your code and get optimization recommendations.",
      href: "/performance-analyzer",
      icon: FaTachometerAlt,
      category: "analysis",
      iconColor: "text-orange-500",
      popularity: 71,
      users: "4K+",
      featured: false
    },
    {
      id: 8,
      title: "Security Scanner",
      description: "Scan your code for security vulnerabilities and get detailed reports with fix recommendations.",
      href: "/security-scanner",
      icon: FaShieldAlt,
      category: "security",
      iconColor: "text-indigo-500",
      popularity: 67,
      users: "3K+",
      featured: false
    },
    {
      id: 9,
      title: "Code Complexity Analyzer",
      description: "Analyze code complexity, maintainability, and technical debt with detailed metrics.",
      href: "/codecomplexity",
      icon: FaCode,
      category: "analysis",
      iconColor: "text-teal-500",
      popularity: 73,
      users: "4.5K+",
      featured: false
    },
    {
      id: 10,
      title: "Code Compare",
      description: "Compare two code snippets or files to identify differences and similarities.",
      href: "/codecompare",
      icon: FaRocket,
      category: "comparison",
      iconColor: "text-cyan-500",
      popularity: 69,
      users: "3.5K+",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: FaCode },
    { id: 'generation', name: 'Code Generation', icon: FaRobot },
    { id: 'optimization', name: 'Optimization', icon: FaLightbulb },
    { id: 'analysis', name: 'Analysis', icon: FaSearch },
    { id: 'testing', name: 'Testing', icon: FaVial },
    { id: 'debugging', name: 'Debugging', icon: FaBug },
    { id: 'formatting', name: 'Formatting', icon: FaMagic },
    { id: 'security', name: 'Security', icon: FaShieldAlt },
    { id: 'comparison', name: 'Comparison', icon: FaRocket }
  ];

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTools = allTools.filter(tool => tool.featured);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaCode className="text-4xl text-indigo-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Code Tools</h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Discover our comprehensive suite of AI-powered development tools designed to enhance your coding experience
            and boost productivity.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                        : `${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
                    }`}
                  >
                    <Icon className="text-sm" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tools Section */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    to={tool.href}
                    className={`${
                      isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
                    } rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className={`text-3xl ${tool.iconColor}`} />
                      </div>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-sm font-semibold">{tool.popularity}%</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                      {tool.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                      {tool.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaUsers className="mr-1" />
                        {tool.users} users
                      </div>
                      <div className="flex items-center text-indigo-500 font-semibold group-hover:translate-x-1 transition-transform">
                        Try Now <FaArrowRight className="ml-2 text-sm" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* All Tools Grid */}
      <div className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === 'all' ? 'All Tools' : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
              {searchTerm && ` - "${searchTerm}"`}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <FaSearch className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    to={tool.href}
                    className={`${
                      isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
                    } rounded-xl p-6 shadow-md border hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} group-hover:scale-105 transition-transform duration-200`}>
                        <Icon className={`text-2xl ${tool.iconColor}`} />
                      </div>
                      {tool.featured && (
                        <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-500 transition-colors line-clamp-2">
                      {tool.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 line-clamp-3`}>
                      {tool.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <FaUsers className="mr-1 text-xs" />
                        {tool.users}
                      </div>
                      <div className="flex items-center text-indigo-500 font-medium group-hover:translate-x-1 transition-transform">
                        Use Tool <FaArrowRight className="ml-1 text-xs" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-500 mb-2">{allTools.length}</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">1M+</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Codes Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">99.9%</div>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeTools;
