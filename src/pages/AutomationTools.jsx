import React, { useState } from 'react';
import {
  FaRobot,
  FaCode,
  FaRocket,
  FaFileAlt,
  FaGitAlt,
  FaPlay,
  FaCog,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaDownload,
  FaUpload,
  FaSync,
  FaTerminal,
  FaDatabase,
  FaServer,
  FaCloud
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const AutomationTools = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTool, setSelectedTool] = useState(null);
  const [automationStatus, setAutomationStatus] = useState({});

  const automationCategories = [
    {
      id: 'code',
      title: 'Code Automation',
      icon: FaCode,
      color: 'text-blue-500',
      description: 'Automate code generation, formatting, and refactoring',
      tools: [
        {
          name: 'Auto Code Formatter',
          description: 'Automatically format and beautify your code',
          status: 'ready',
          features: ['Multi-language support', 'Custom rules', 'Batch processing']
        },
        {
          name: 'Code Refactor Assistant',
          description: 'AI-powered code refactoring suggestions',
          status: 'ready',
          features: ['Pattern recognition', 'Performance optimization', 'Best practices']
        },
        {
          name: 'Import Organizer',
          description: 'Automatically organize and optimize imports',
          status: 'ready',
          features: ['Unused import removal', 'Alphabetical sorting', 'Module optimization']
        }
      ]
    },
    {
      id: 'build',
      title: 'Build Automation',
      icon: FaCog,
      color: 'text-green-500',
      description: 'Automate build processes and CI/CD pipelines',
      tools: [
        {
          name: 'Build Script Generator',
          description: 'Generate build scripts for various platforms',
          status: 'ready',
          features: ['Multi-platform support', 'Dependency management', 'Optimization']
        },
        {
          name: 'CI/CD Pipeline Builder',
          description: 'Create automated deployment pipelines',
          status: 'ready',
          features: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Docker integration']
        },
        {
          name: 'Dependency Updater',
          description: 'Automatically update project dependencies',
          status: 'ready',
          features: ['Security updates', 'Version management', 'Compatibility checks']
        }
      ]
    },
    {
      id: 'testing',
      title: 'Testing Automation',
      icon: FaCheckCircle,
      color: 'text-purple-500',
      description: 'Automate testing processes and quality assurance',
      tools: [
        {
          name: 'Test Case Generator',
          description: 'Generate comprehensive test cases automatically',
          status: 'ready',
          features: ['Unit tests', 'Integration tests', 'Edge case coverage']
        },
        {
          name: 'Test Runner',
          description: 'Automated test execution and reporting',
          status: 'ready',
          features: ['Parallel execution', 'Coverage reports', 'Performance metrics']
        },
        {
          name: 'Regression Tester',
          description: 'Automated regression testing suite',
          status: 'ready',
          features: ['Historical comparison', 'Failure analysis', 'Trend monitoring']
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment Automation',
      icon: FaRocket,
      color: 'text-orange-500',
      description: 'Automate deployment and infrastructure management',
      tools: [
        {
          name: 'Docker Containerizer',
          description: 'Automatically create Docker containers',
          status: 'ready',
          features: ['Multi-stage builds', 'Security scanning', 'Optimization']
        },
        {
          name: 'Cloud Deployer',
          description: 'Deploy to cloud platforms automatically',
          status: 'ready',
          features: ['AWS', 'Azure', 'GCP', 'Kubernetes support']
        },
        {
          name: 'Infrastructure as Code',
          description: 'Generate IaC templates automatically',
          status: 'ready',
          features: ['Terraform', 'CloudFormation', 'ARM templates']
        }
      ]
    },
    {
      id: 'git',
      title: 'Git Automation',
      icon: FaGitAlt,
      color: 'text-red-500',
      description: 'Automate version control and collaboration workflows',
      tools: [
        {
          name: 'Commit Message Generator',
          description: 'Generate meaningful commit messages',
          status: 'ready',
          features: ['Conventional commits', 'AI analysis', 'Template support']
        },
        {
          name: 'Branch Manager',
          description: 'Automated branch management and cleanup',
          status: 'ready',
          features: ['Branch naming', 'Merge strategies', 'Cleanup policies']
        },
        {
          name: 'PR Automation',
          description: 'Automate pull request workflows',
          status: 'ready',
          features: ['Review assignments', 'Label management', 'Merge automation']
        }
      ]
    }
  ];

  const runAutomation = (categoryId, toolName) => {
    setAutomationStatus(prev => ({
      ...prev,
      [`${categoryId}-${toolName}`]: 'running'
    }));

    // Simulate automation process
    setTimeout(() => {
      setAutomationStatus(prev => ({
        ...prev,
        [`${categoryId}-${toolName}`]: 'completed'
      }));
    }, 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-yellow-500';
      case 'completed': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return <FaSync className="animate-spin" />;
      case 'completed': return <FaCheckCircle />;
      default: return <FaClock />;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaRobot className="text-4xl text-indigo-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Automation Tools</h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Streamline your development workflow with intelligent automation tools that handle repetitive tasks,
            boost productivity, and ensure consistency across your projects.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'overview'
                  ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                  : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-300'}`
              }`}
            >
              <FaRobot className="inline mr-2" />
              Overview
            </button>
            {automationCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === category.id
                      ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                      : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-300'}`
                  }`}
                >
                  <Icon className={`inline mr-2 ${category.color}`} />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-16 px-4">
        <div className="container mx-auto">

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className={`${
                      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    } rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
                    onClick={() => setActiveTab(category.id)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                        <Icon className={`text-2xl ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{category.title}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {category.tools.length} tools available
                        </p>
                      </div>
                    </div>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.slice(0, 2).map((tool, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tool.name}
                        </span>
                      ))}
                      {category.tools.length > 2 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          +{category.tools.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Category Tabs */}
          {automationCategories.map((category) => (
            activeTab === category.id && (
              <div key={category.id}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <category.icon className={`text-2xl ${category.color}`} />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <p className={`text-lg mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className={`${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      } rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">{tool.name}</h3>
                        <div className={`flex items-center gap-2 ${getStatusColor(automationStatus[`${category.id}-${tool.name}`])}`}>
                          {getStatusIcon(automationStatus[`${category.id}-${tool.name}`])}
                          <span className="text-sm capitalize">
                            {automationStatus[`${category.id}-${tool.name}`] || 'ready'}
                          </span>
                        </div>
                      </div>

                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                        {tool.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className={`text-sm flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => runAutomation(category.id, tool.name)}
                        disabled={automationStatus[`${category.id}-${tool.name}`] === 'running'}
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                          automationStatus[`${category.id}-${tool.name}`] === 'running'
                            ? 'bg-gray-500 cursor-not-allowed'
                            : automationStatus[`${category.id}-${tool.name}`] === 'completed'
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-indigo-500 hover:bg-indigo-600'
                        } text-white shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100`}
                      >
                        {automationStatus[`${category.id}-${tool.name}`] === 'running' && (
                          <>
                            <FaSync className="inline mr-2 animate-spin" />
                            Running Automation...
                          </>
                        )}
                        {automationStatus[`${category.id}-${tool.name}`] === 'completed' && (
                          <>
                            <FaCheckCircle className="inline mr-2" />
                            Automation Complete!
                          </>
                        )}
                        {!automationStatus[`${category.id}-${tool.name}`] && (
                          <>
                            <FaPlay className="inline mr-2" />
                            Run Automation
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationTools;