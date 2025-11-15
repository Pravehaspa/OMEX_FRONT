import React, { useState } from 'react';
import {
  FaUsers,
  FaShareAlt,
  FaComments,
  FaVideo,
  FaCodeBranch,
  FaUserPlus,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRocket,
  FaHandshake,
  FaSync,
  FaLock,
  FaGlobe,
  FaBell,
  FaFileCode,
  FaGitAlt,
  FaTasks,
  FaCalendarAlt,
  FaUserFriends,
  FaCommentDots,
  FaEye,
  FaEdit,
  FaStar,
  FaThumbsUp
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Collaboration = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [teamMembers] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Senior Developer', avatar: 'AJ', status: 'online', contributions: 245 },
    { id: 2, name: 'Bob Smith', role: 'UI/UX Designer', avatar: 'BS', status: 'away', contributions: 189 },
    { id: 3, name: 'Carol Davis', role: 'Project Manager', avatar: 'CD', status: 'online', contributions: 156 },
    { id: 4, name: 'David Wilson', role: 'DevOps Engineer', avatar: 'DW', status: 'offline', contributions: 98 },
  ]);

  const [activeProjects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform',
      progress: 75,
      members: 8,
      lastActivity: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Mobile App Redesign',
      progress: 45,
      members: 5,
      lastActivity: '1 day ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'API Integration',
      progress: 90,
      members: 3,
      lastActivity: '30 mins ago',
      status: 'review'
    }
  ]);

  const collaborationFeatures = [
    {
      icon: FaShareAlt,
      title: 'Real-time Code Sharing',
      description: 'Share code snippets instantly with your team members',
      benefits: ['Instant sharing', 'Version control', 'Comment threads', 'Access permissions']
    },
    {
      icon: FaComments,
      title: 'Team Communication',
      description: 'Built-in chat and discussion channels for seamless communication',
      benefits: ['Real-time messaging', 'File sharing', 'Voice calls', 'Screen sharing']
    },
    {
      icon: FaVideo,
      title: 'Video Collaboration',
      description: 'Host video meetings and code reviews with integrated tools',
      benefits: ['HD video calls', 'Screen sharing', 'Recording', 'Meeting notes']
    },
    {
      icon: FaCodeBranch,
      title: 'Branch Management',
      description: 'Manage branches, pull requests, and code reviews efficiently',
      benefits: ['Branch protection', 'PR templates', 'Code review workflows', 'Merge strategies']
    },
    {
      icon: FaTasks,
      title: 'Task Management',
      description: 'Assign tasks, track progress, and manage project timelines',
      benefits: ['Task assignment', 'Progress tracking', 'Deadline management', 'Status updates']
    },
    {
      icon: FaCalendarAlt,
      title: 'Project Planning',
      description: 'Plan sprints, milestones, and project timelines collaboratively',
      benefits: ['Sprint planning', 'Milestone tracking', 'Resource allocation', 'Timeline visualization']
    }
  ];

  const recentActivities = [
    { user: 'Alice Johnson', action: 'pushed to main branch', time: '5 mins ago', type: 'git' },
    { user: 'Bob Smith', action: 'commented on PR #42', time: '12 mins ago', type: 'comment' },
    { user: 'Carol Davis', action: 'created new task', time: '1 hour ago', type: 'task' },
    { user: 'David Wilson', action: 'deployed to staging', time: '2 hours ago', type: 'deploy' },
    { user: 'Alice Johnson', action: 'started video call', time: '3 hours ago', type: 'video' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'git': return <FaGitAlt className="text-orange-500" />;
      case 'comment': return <FaCommentDots className="text-blue-500" />;
      case 'task': return <FaTasks className="text-purple-500" />;
      case 'deploy': return <FaRocket className="text-green-500" />;
      case 'video': return <FaVideo className="text-red-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaUsers className="text-4xl text-indigo-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Code Collaboration</h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Work together seamlessly with your development team. Share code, communicate in real-time,
            and collaborate on projects with powerful team tools.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', name: 'Overview', icon: FaEye },
              { id: 'team', name: 'Team', icon: FaUserFriends },
              { id: 'projects', name: 'Projects', icon: FaFileCode },
              { id: 'activity', name: 'Activity', icon: FaBell }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                      : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-300'}`
                  }`}
                >
                  <Icon className="text-lg" />
                  {tab.name}
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
            <div className="space-y-12">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Team Members</p>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                    <FaUsers className="text-3xl text-blue-500" />
                  </div>
                </div>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Active Projects</p>
                      <p className="text-3xl font-bold">8</p>
                    </div>
                    <FaFileCode className="text-3xl text-green-500" />
                  </div>
                </div>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Code Reviews</p>
                      <p className="text-3xl font-bold">24</p>
                    </div>
                    <FaCheckCircle className="text-3xl text-purple-500" />
                  </div>
                </div>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Commits Today</p>
                      <p className="text-3xl font-bold">47</p>
                    </div>
                    <FaGitAlt className="text-3xl text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Collaboration Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborationFeatures.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div
                        key={index}
                        className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300`}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                            <FeatureIcon className="text-2xl text-indigo-500" />
                          </div>
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                        </div>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                          {feature.description}
                        </p>
                        <div className="space-y-2">
                          {feature.benefits.map((benefit, benefitIdx) => (
                            <div key={benefitIdx} className={`text-sm flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0 text-xs" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Team Members</h2>
                <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${isDark ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}>
                  <FaUserPlus className="inline mr-2" />
                  Invite Member
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-lg border`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${member.avatar === 'AJ' ? 'bg-blue-500' : member.avatar === 'BS' ? 'bg-green-500' : member.avatar === 'CD' ? 'bg-purple-500' : 'bg-orange-500'}`}>
                          {member.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 ${isDark ? 'border-gray-800' : 'border-white'} ${getStatusColor(member.status)}`}></div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {member.contributions} contributions
                      </div>
                      <div className="flex gap-2">
                        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}>
                          <FaComments className="text-indigo-500" />
                        </button>
                        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}>
                          <FaVideo className="text-green-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Active Projects</h2>
                <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${isDark ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}>
                  <FaRocket className="inline mr-2" />
                  New Project
                </button>
              </div>

              <div className="space-y-6">
                {activeProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-lg border`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <FaUsers className="mr-1" />
                            {project.members} members
                          </span>
                          <span className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <FaClock className="mr-1" />
                            {project.lastActivity}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'active' ? 'bg-green-100 text-green-800' :
                            project.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}>
                          <FaEdit className="text-blue-500" />
                        </button>
                        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}>
                          <FaShareAlt className="text-green-500" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                      <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 ${isDark ? 'border-gray-800' : 'border-white'} bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white`}>
                            {i}
                          </div>
                        ))}
                        <div className={`w-8 h-8 rounded-full border-2 ${isDark ? 'border-gray-800' : 'border-white'} bg-gray-400 flex items-center justify-center text-xs font-bold text-white`}>
                          +{project.members - 4}
                        </div>
                      </div>
                      <button className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${isDark ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Recent Activity</h2>

              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden`}>
                <div className="p-6">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className={`flex items-center py-4 ${index !== recentActivities.length - 1 ? `border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}` : ''}`}>
                      <div className="flex items-center flex-1">
                        <div className="mr-4">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div>
                          <p className="font-semibold">{activity.user}</p>
                          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{activity.action}</p>
                        </div>
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg text-center`}>
                  <FaGitAlt className="text-3xl text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Commits</h3>
                  <p className="text-3xl font-bold text-orange-500">47</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Today</p>
                </div>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg text-center`}>
                  <FaComments className="text-3xl text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Comments</h3>
                  <p className="text-3xl font-bold text-blue-500">23</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>This Week</p>
                </div>
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg text-center`}>
                  <FaTasks className="text-3xl text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Tasks</h3>
                  <p className="text-3xl font-bold text-purple-500">12</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Completed</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collaboration;