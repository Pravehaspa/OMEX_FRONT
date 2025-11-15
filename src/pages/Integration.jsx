import React, { useState } from 'react';
import {
  FaExchangeAlt,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaSlack,
  FaDiscord,
  FaJira,
  FaTrello,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDocker,
  FaJenkins,
  FaDatabase,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlug,
  FaLink,
  FaUnlink,
  FaCog,
  FaShieldAlt
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Integration = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [connectedServices, setConnectedServices] = useState({
    'github': true,
    'gitlab': false,
    'slack': true,
    'discord': false,
    'jira': true,
    'aws': false,
    'azure': true,
    'gcp': false
  });

  const integrationCategories = [
    {
      id: 'version-control',
      title: 'Version Control',
      icon: FaCode,
      color: 'text-orange-500',
      description: 'Connect with Git platforms and repositories',
      services: [
        {
          name: 'GitHub',
          icon: FaGithub,
          description: 'Connect GitHub repositories for automated workflows',
          status: connectedServices.github ? 'connected' : 'disconnected',
          features: ['Repository sync', 'PR automation', 'Issue tracking', 'Webhook integration']
        },
        {
          name: 'GitLab',
          icon: FaGitlab,
          description: 'Integrate with GitLab for CI/CD and project management',
          status: connectedServices.gitlab ? 'connected' : 'disconnected',
          features: ['Pipeline automation', 'Merge request handling', 'Container registry', 'Security scanning']
        },
        {
          name: 'Bitbucket',
          icon: FaBitbucket,
          description: 'Connect Bitbucket Cloud and Server instances',
          status: 'available',
          features: ['Repository mirroring', 'Pipeline integration', 'Pull request automation', 'Code insights']
        }
      ]
    },
    {
      id: 'communication',
      title: 'Communication',
      icon: FaSlack,
      color: 'text-purple-500',
      description: 'Integrate with team communication platforms',
      services: [
        {
          name: 'Slack',
          icon: FaSlack,
          description: 'Receive notifications and interact via Slack',
          status: connectedServices.slack ? 'connected' : 'disconnected',
          features: ['Real-time notifications', 'Command integration', 'Channel automation', 'File sharing']
        },
        {
          name: 'Discord',
          icon: FaDiscord,
          description: 'Connect Discord servers for team collaboration',
          status: connectedServices.discord ? 'connected' : 'disconnected',
          features: ['Bot commands', 'Voice integration', 'Role management', 'Event notifications']
        }
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: FaTrello,
      color: 'text-blue-500',
      description: 'Sync with project management and issue tracking tools',
      services: [
        {
          name: 'Jira',
          icon: FaJira,
          description: 'Connect Jira for issue tracking and project management',
          status: connectedServices.jira ? 'connected' : 'disconnected',
          features: ['Issue synchronization', 'Sprint planning', 'Time tracking', 'Workflow automation']
        },
        {
          name: 'Trello',
          icon: FaTrello,
          description: 'Integrate Trello boards for task management',
          status: 'available',
          features: ['Board synchronization', 'Card automation', 'Due date tracking', 'Team collaboration']
        }
      ]
    },
    {
      id: 'cloud-platforms',
      title: 'Cloud Platforms',
      icon: FaAws,
      color: 'text-yellow-500',
      description: 'Deploy and manage applications on cloud platforms',
      services: [
        {
          name: 'AWS',
          icon: FaAws,
          description: 'Deploy to Amazon Web Services infrastructure',
          status: connectedServices.aws ? 'connected' : 'disconnected',
          features: ['EC2 deployment', 'S3 storage', 'Lambda functions', 'CloudFormation']
        },
        {
          name: 'Azure',
          icon: FaMicrosoft,
          description: 'Integrate with Microsoft Azure cloud services',
          status: connectedServices.azure ? 'connected' : 'disconnected',
          features: ['App Service deployment', 'Azure Functions', 'Blob storage', 'Resource Manager']
        },
        {
          name: 'Google Cloud',
          icon: FaGoogle,
          description: 'Connect Google Cloud Platform services',
          status: connectedServices.gcp ? 'connected' : 'disconnected',
          features: ['App Engine', 'Cloud Functions', 'Cloud Storage', 'Kubernetes Engine']
        }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      icon: FaRocket,
      color: 'text-green-500',
      description: 'Automate deployment and development workflows',
      services: [
        {
          name: 'Docker',
          icon: FaDocker,
          description: 'Containerize applications with Docker integration',
          status: 'available',
          features: ['Image building', 'Container orchestration', 'Registry integration', 'Security scanning']
        },
        {
          name: 'Jenkins',
          icon: FaJenkins,
          description: 'Connect Jenkins for continuous integration',
          status: 'available',
          features: ['Pipeline execution', 'Build automation', 'Test integration', 'Artifact management']
        }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: FaDatabase,
      color: 'text-indigo-500',
      description: 'Connect to various database systems',
      services: [
        {
          name: 'PostgreSQL',
          icon: FaDatabase,
          description: 'Connect PostgreSQL databases for data operations',
          status: 'available',
          features: ['Query execution', 'Schema management', 'Backup automation', 'Performance monitoring']
        },
        {
          name: 'MongoDB',
          icon: FaDatabase,
          description: 'Integrate MongoDB for NoSQL operations',
          status: 'available',
          features: ['Document operations', 'Aggregation pipelines', 'Indexing', 'Cluster management']
        },
        {
          name: 'Redis',
          icon: FaDatabase,
          description: 'Connect Redis for caching and session management',
          status: 'available',
          features: ['Key-value operations', 'Pub/Sub messaging', 'Data persistence', 'Cluster support']
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', icon: FaExchangeAlt },
    ...integrationCategories.map(cat => ({ id: cat.id, name: cat.title, icon: cat.icon }))
  ];

  const toggleConnection = (serviceName) => {
    setConnectedServices(prev => ({
      ...prev,
      [serviceName.toLowerCase()]: !prev[serviceName.toLowerCase()]
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'text-green-500';
      case 'disconnected': return 'text-red-500';
      case 'available': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected': return <FaCheckCircle className="text-green-500" />;
      case 'disconnected': return <FaUnlink className="text-red-500" />;
      case 'available': return <FaPlug className="text-blue-500" />;
      default: return <FaExclamationTriangle className="text-yellow-500" />;
    }
  };

  const filteredIntegrations = activeCategory === 'all'
    ? integrationCategories
    : integrationCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaExchangeAlt className="text-4xl text-indigo-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Seamless Integrations</h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Connect OMEX with your favorite tools and platforms. Streamline your workflow with
            automated integrations that work seamlessly across your development ecosystem.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? `${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} shadow-lg`
                      : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-300'}`
                  }`}
                >
                  <Icon className="text-lg" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="pb-16 px-4">
        <div className="container mx-auto">
          {filteredIntegrations.map((category) => (
            <div key={category.id} className="mb-12">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} mr-4`}>
                  <category.icon className={`text-2xl ${category.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => {
                  const ServiceIcon = service.icon;
                  const serviceKey = service.name.toLowerCase().replace(' ', '');
                  const isConnected = connectedServices[serviceKey];

                  return (
                    <div
                      key={index}
                      className={`${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      } rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                            <ServiceIcon className="text-2xl text-gray-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{service.name}</h3>
                            <div className="flex items-center">
                              {getStatusIcon(service.status)}
                              <span className={`text-sm ml-2 capitalize ${getStatusColor(service.status)}`}>
                                {service.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.map((feature, featureIdx) => (
                            <div key={featureIdx} className={`text-sm flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0 text-xs" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FaShieldAlt className="text-green-500 mr-2" />
                          <span className="text-sm text-green-500">Secure</span>
                        </div>

                        <button
                          onClick={() => toggleConnection(service.name)}
                          disabled={service.status === 'available'}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                            isConnected
                              ? 'bg-red-500 hover:bg-red-600 text-white'
                              : 'bg-green-500 hover:bg-green-600 text-white'
                          } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {isConnected ? (
                            <>
                              <FaUnlink className="inline mr-2" />
                              Disconnect
                            </>
                          ) : (
                            <>
                              <FaLink className="inline mr-2" />
                              Connect
                            </>
                          )}
                        </button>
                      </div>

                      {service.status === 'available' && (
                        <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="flex items-center text-blue-600 dark:text-blue-400">
                            <FaCog className="mr-2" />
                            <span className="text-sm">Coming Soon</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Integration Status Summary */}
          <div className={`mt-12 p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-4">Integration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {Object.values(connectedServices).filter(Boolean).length}
                </div>
                <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Connected Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {integrationCategories.reduce((acc, cat) => acc + cat.services.filter(s => s.status === 'available').length, 0)}
                </div>
                <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Available Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  {integrationCategories.reduce((acc, cat) => acc + cat.services.length, 0)}
                </div>
                <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Total Integrations</div>
              </div>
            </div>
          </div>

          {/* Setup Guide */}
          <div className={`mt-8 p-6 rounded-2xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-4">Quick Setup Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">1. Choose Your Integration</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Select the tools and platforms you want to connect with OMEX.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Grant Permissions</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Authorize OMEX to access your accounts with the required permissions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Configure Settings</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Customize integration settings to match your workflow preferences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Start Automating</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Enjoy seamless automation across all your connected tools and platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;