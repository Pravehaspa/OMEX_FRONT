import React, { useState, useEffect } from 'react';
import {
  FaChartLine,
  FaCode,
  FaClock,
  FaRocket,
  FaTrophy,
  FaCalendarAlt,
  FaGithub,
  FaStar,
  FaEye,
  FaCodeBranch,
  FaUsers,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaChartBar,
  FaCalendarDay
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const AnalyticsDashboard = () => {
  const { isDark } = useTheme();
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalProjects: 24,
      totalCommits: 156,
      linesOfCode: 45280,
      activeTime: '127h 32m',
      productivityScore: 87,
      streakDays: 12,
      topLanguage: 'JavaScript',
      avgSessionTime: '2h 15m'
    },
    codeMetrics: {
      totalLOC: 45280,
      functions: 1247,
      classes: 89,
      complexity: 3.2,
      duplication: 2.1,
      coverage: 84.5,
      vulnerabilities: 3
    },
    productivity: {
      dailyCommits: [5, 8, 12, 7, 15, 9, 11],
      weeklyHours: [8.5, 9.2, 7.8, 10.1, 8.9, 11.5, 9.3],
      tasksCompleted: 47,
      bugsFixed: 23,
      featuresAdded: 12,
      reviewsDone: 18
    },
    projects: [
      {
        name: 'OMEX Frontend',
        language: 'React',
        commits: 89,
        contributors: 3,
        lastCommit: '2 hours ago',
        status: 'active',
        health: 95
      },
      {
        name: 'API Gateway',
        language: 'Node.js',
        commits: 45,
        contributors: 2,
        lastCommit: '1 day ago',
        status: 'active',
        health: 88
      },
      {
        name: 'Mobile App',
        language: 'React Native',
        commits: 22,
        contributors: 1,
        lastCommit: '3 days ago',
        status: 'maintenance',
        health: 72
      }
    ],
    achievements: [
      {
        title: 'Code Master',
        description: 'Write 10,000+ lines of code',
        progress: 85,
        icon: FaCode,
        color: 'text-blue-500'
      },
      {
        title: 'Bug Hunter',
        description: 'Fix 50 bugs',
        progress: 46,
        icon: FaCheckCircle,
        color: 'text-green-500'
      },
      {
        title: 'Team Player',
        description: 'Complete 25 code reviews',
        progress: 72,
        icon: FaUsers,
        color: 'text-purple-500'
      },
      {
        title: 'Streak Master',
        description: 'Maintain 30-day commit streak',
        progress: 40,
        icon: FaCalendarAlt,
        color: 'text-orange-500'
      }
    ]
  };

  const timeRanges = [
    { value: '1d', label: 'Today' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'code', name: 'Code Metrics', icon: FaCode },
    { id: 'productivity', name: 'Productivity', icon: FaRocket },
    { id: 'projects', name: 'Projects', icon: FaGithub },
    { id: 'achievements', name: 'Achievements', icon: FaTrophy }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'maintenance': return 'text-yellow-500';
      case 'inactive': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getHealthColor = (health) => {
    if (health >= 90) return 'text-green-500';
    if (health >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaChartLine className="text-4xl text-indigo-500 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Analytics Dashboard</h1>
                <p className={`text-xl mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Track your development progress and productivity insights
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                {timeRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedMetric === metric.id
                      ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                      : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-300'}`
                  }`}
                >
                  <Icon className="text-lg" />
                  {metric.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-16 px-4">
        <div className="container mx-auto">

          {/* Overview */}
          {selectedMetric === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Projects</p>
                      <p className="text-3xl font-bold">{analyticsData.overview.totalProjects}</p>
                    </div>
                    <FaGithub className="text-3xl text-blue-500" />
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Commits</p>
                      <p className="text-3xl font-bold">{analyticsData.overview.totalCommits}</p>
                    </div>
                    <FaCodeBranch className="text-3xl text-green-500" />
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Lines of Code</p>
                      <p className="text-3xl font-bold">{analyticsData.overview.linesOfCode.toLocaleString()}</p>
                    </div>
                    <FaCode className="text-3xl text-purple-500" />
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Productivity Score</p>
                      <p className="text-3xl font-bold">{analyticsData.overview.productivityScore}%</p>
                    </div>
                    <FaTrophy className="text-3xl text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold mb-4">Activity Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Active Time</span>
                      <span className="font-semibold">{analyticsData.overview.activeTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Commit Streak</span>
                      <span className="font-semibold">{analyticsData.overview.streakDays} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Top Language</span>
                      <span className="font-semibold">{analyticsData.overview.topLanguage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Avg Session</span>
                      <span className="font-semibold">{analyticsData.overview.avgSessionTime}</span>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
                  <div className="space-y-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{day}</span>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                            <div
                              className="h-2 bg-indigo-500 rounded-full"
                              style={{ width: `${(analyticsData.productivity.dailyCommits[index] / 15) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold w-6 text-right">{analyticsData.productivity.dailyCommits[index]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">{analyticsData.productivity.tasksCompleted}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tasks Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">{analyticsData.productivity.bugsFixed}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Bugs Fixed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-500">{analyticsData.productivity.featuresAdded}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Features Added</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">{analyticsData.productivity.reviewsDone}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Reviews Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Code Metrics */}
          {selectedMetric === 'code' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Code Quality</h3>
                    <FaCode className="text-2xl text-blue-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Total LOC</span>
                      <span className="font-semibold">{analyticsData.codeMetrics.totalLOC.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Functions</span>
                      <span className="font-semibold">{analyticsData.codeMetrics.functions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Classes</span>
                      <span className="font-semibold">{analyticsData.codeMetrics.classes}</span>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Complexity & Quality</h3>
                    <FaChartBar className="text-2xl text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Complexity</span>
                      <span className="font-semibold">{analyticsData.codeMetrics.complexity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Duplication</span>
                      <span className="font-semibold">{analyticsData.codeMetrics.duplication}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Test Coverage</span>
                      <span className="font-semibold">{analyticsData.codeMetrics.coverage}%</span>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Security</h3>
                    <FaExclamationTriangle className="text-2xl text-red-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">{analyticsData.codeMetrics.vulnerabilities}</div>
                    <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Vulnerabilities Found</div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <div className="text-sm mt-1 text-red-500">Needs Attention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Productivity */}
          {selectedMetric === 'productivity' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold mb-4">Daily Commits (Last 7 Days)</h3>
                  <div className="space-y-3">
                    {analyticsData.productivity.dailyCommits.map((commits, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Day {index + 1}</span>
                        <div className="flex items-center">
                          <div className="w-32 h-3 bg-gray-200 rounded-full mr-3">
                            <div
                              className="h-3 bg-indigo-500 rounded-full"
                              style={{ width: `${(commits / 15) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold w-8 text-right">{commits}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold mb-4">Weekly Hours (Last 7 Weeks)</h3>
                  <div className="space-y-3">
                    {analyticsData.productivity.weeklyHours.map((hours, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Week {index + 1}</span>
                        <div className="flex items-center">
                          <div className="w-32 h-3 bg-gray-200 rounded-full mr-3">
                            <div
                              className="h-3 bg-green-500 rounded-full"
                              style={{ width: `${(hours / 12) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold w-10 text-right">{hours}h</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects */}
          {selectedMetric === 'projects' && (
            <div className="space-y-6">
              {analyticsData.projects.map((project, index) => (
                <div key={index} className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.language}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)} ${
                      project.status === 'active' ? 'bg-green-100 text-green-800' :
                      project.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">{project.commits}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Commits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">{project.contributors}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Contributors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-500">{project.health}%</div>
                      <div className={`text-sm ${getHealthColor(project.health)}`}>Health</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-500">{project.lastCommit}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Last Commit</div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        project.health >= 90 ? 'bg-green-500' :
                        project.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${project.health}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {selectedMetric === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analyticsData.achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className={`p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                        <Icon className={`text-2xl ${achievement.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{achievement.title}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{achievement.description}</p>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${achievement.color.replace('text-', 'bg-')}`}
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {achievement.progress < 100 ? `${100 - achievement.progress}% remaining` : 'Completed!'}
                      </span>
                      {achievement.progress === 100 && <FaTrophy className="text-yellow-500" />}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;