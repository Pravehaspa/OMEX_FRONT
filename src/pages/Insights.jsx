import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLightbulb, FaRobot, FaChartLine, FaCode, FaRocket, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Insights = () => {
  const { isDark } = useTheme();
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Insights', icon: FaLightbulb, color: 'text-yellow-500' },
    { id: 'productivity', name: 'Productivity', icon: FaRocket, color: 'text-green-500' },
    { id: 'security', name: 'Security', icon: FaShieldAlt, color: 'text-red-500' },
    { id: 'performance', name: 'Performance', icon: FaChartLine, color: 'text-blue-500' },
    { id: 'best-practices', name: 'Best Practices', icon: FaStar, color: 'text-purple-500' },
  ];

  const generateInsights = async () => {
    setLoading(true);
    try {
      const agentId = '691876e534fa533a0e572615';
      const apiKey = 'sk-default-WgWHzpB4GQcKWnKkthMsDWSFHpDoMYwB';
      const userId = 'gupta44000000@gmail.com';
      const sessionId = agentId + '-' + Math.random().toString(36).substr(2, 9);

      const prompts = [
        "Provide 3 productivity tips for developers using OMEX tools",
        "Share 3 security best practices for modern web development",
        "Give 3 performance optimization recommendations for React applications",
        "List 3 coding best practices that every developer should follow",
        "Suggest 3 ways to improve code quality using AI tools"
      ];

      const insightsPromises = prompts.map(async (prompt, index) => {
        const response = await axios.post('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
          user_id: userId,
          agent_id: agentId,
          session_id: sessionId + `-${index}`,
          message: prompt
        }, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          }
        });

        const categoryMap = {
          0: 'productivity',
          1: 'security',
          2: 'performance',
          3: 'best-practices',
          4: 'productivity'
        };

        return {
          id: index + 1,
          category: categoryMap[index],
          title: prompt.split(' ').slice(1, 4).join(' ') + '...',
          content: response.data.response || 'Insight not available',
          icon: categories.find(cat => cat.id === categoryMap[index])?.icon || FaLightbulb,
          color: categories.find(cat => cat.id === categoryMap[index])?.color || 'text-gray-500',
          timestamp: new Date().toLocaleDateString()
        };
      });

      const generatedInsights = await Promise.all(insightsPromises);
      setInsights(generatedInsights);
    } catch (error) {
      console.error('Error generating insights:', error);
      // Fallback insights
      setInsights([
        {
          id: 1,
          category: 'productivity',
          title: 'Boost Your Coding Speed',
          content: 'Use OMEX Code Generator to create boilerplate code instantly. This can save you up to 30% of development time on repetitive tasks.',
          icon: FaRocket,
          color: 'text-green-500',
          timestamp: new Date().toLocaleDateString()
        },
        {
          id: 2,
          category: 'security',
          title: 'Secure Your Applications',
          content: 'Always use OMEX Security Scanner before deploying. It can detect vulnerabilities that traditional tools might miss.',
          icon: FaShieldAlt,
          color: 'text-red-500',
          timestamp: new Date().toLocaleDateString()
        },
        {
          id: 3,
          category: 'performance',
          title: 'Optimize Performance',
          content: 'Run your code through OMEX Performance Analyzer regularly. Small optimizations can lead to significant speed improvements.',
          icon: FaChartLine,
          color: 'text-blue-500',
          timestamp: new Date().toLocaleDateString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateInsights();
  }, []);

  const filteredInsights = selectedCategory === 'all'
    ? insights
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaRobot className="text-4xl text-indigo-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">AI-Powered Insights</h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Discover smart recommendations, best practices, and expert tips powered by advanced AI to enhance your development workflow.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                      : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-300'}`
                  }`}
                >
                  <Icon className={category.color} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="pb-16 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Generating AI insights...
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={insight.id}
                    className={`${
                      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    } rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                        <Icon className={`text-2xl ${insight.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{insight.title}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {insight.timestamp}
                        </p>
                      </div>
                    </div>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                      {insight.content}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        insight.category === 'productivity' ? 'bg-green-100 text-green-800' :
                        insight.category === 'security' ? 'bg-red-100 text-red-800' :
                        insight.category === 'performance' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {categories.find(cat => cat.id === insight.category)?.name}
                      </span>
                      <FaLightbulb className="text-yellow-500 opacity-50" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && (
            <div className="text-center mt-12">
              <button
                onClick={generateInsights}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaRobot className="inline mr-2" />
                Generate New Insights
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Insights;