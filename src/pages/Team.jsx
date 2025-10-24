import React from 'react';
import { useState, useEffect } from 'react';
import { FaCode, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import Loader from "../components/Loader"

const Team = () => {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
 

  // Team member data (updated to reflect the 4-person team)
  const teamMembers = [
    {
      id: 1,
      name: 'Prathyun Gupta',
      role: 'Lead / Major Contributor',
      bio: 'Led the development and implementation of the core OMEX features and architecture, driving the project from idea to working prototype.',
      image: 'https://ui-avatars.com/api/?name=Prathyun+Gupta&background=0D8ABC&color=fff',
      social: {
        linkedin: 'https://www.linkedin.com/in/c-sai-prathyun-gupta-817758314/',
        github: 'https://github.com/Gupta-02'
      }
    },
    {
      id: 2,
      name: 'Venkatesh',
      role: 'Frontend Engineer',
      bio: 'Focused on UI implementation, responsive layouts, and accessibility improvements to ensure a smooth developer experience.',
      image: 'https://ui-avatars.com/api/?name=Venkatesh&background=4C51BF&color=fff',
      social: {
        linkedin: 'https://www.linkedin.com/in/venkatesh-devarakonda-96b389329/',
        github: 'https://github.com/VenkateshDevarakonda0706'
      }
    },
    {
      id: 3,
      name: 'Hansika Vardini',
      role: 'UX Designer',
      bio: 'Designed the user flows, visual language, and components to make OMEX intuitive and visually appealing.',
      image: 'https://ui-avatars.com/api/?name=Hansika&background=DD6B20&color=fff',
      social: {
        linkedin: 'https://www.linkedin.com/in/hansika-vardini-mula-918ba3351/',
        github: 'https://github.com/hansikavardini'
      }
    },
    {
      id: 4,
      name: 'Spandana Reddy',
      role: 'QA & Documentation',
      bio: 'Handled testing, quality assurance processes, and documentation to keep the project stable and easy to contribute to.',
      image: 'https://ui-avatars.com/api/?name=Spandana&background=15803D&color=fff',
      social: {
        linkedin: 'https://www.linkedin.com/in/spandana-reddy-banka-66a711336/',
        github: 'https://github.com/spandanareddyb'
      }
    }
  ];

  // Team member card component
  const MemberCard = ({ member }) => (
    <div className={`rounded-2xl backdrop-blur-lg ${
      isDark
        ? 'bg-gray-900/40 border border-gray-700/50'
        : 'bg-white border border-gray-300 shadow-md'
    } relative transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="flex flex-col md:flex-row relative z-10">
        {/* Image Section */}
        <div className="md:w-2/5 flex items-center justify-center p-6">
          <div className="relative">
            {/* Circular Image with Border */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden relative mx-auto
                border-4 border-white/20 shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circular Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-md -z-10"></div>

            {/* Decorative Rings */}
            <div className="absolute -inset-3 border border-blue-400/30 rounded-full"></div>
            <div className="absolute -inset-6 border border-purple-400/20 rounded-full"></div>

            {/* Mobile Name/Role */}
            <div className="mt-4 text-center md:hidden">
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className={`text-blue-400 font-medium`}>{member.role}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:w-3/5 relative">
          {/* Desktop Name/Role */}
          <div className="hidden md:block mb-6">
            <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{member.name}</h3>
            <p className={`text-blue-400 font-medium`}>{member.role}</p>
          </div>

          {/* Bio */}
          <div className="relative z-10">
            <div className={`mb-6 p-5 rounded-xl ${
              isDark
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
                : 'bg-gray-100 border border-gray-300 shadow-sm'
            }`}>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {member.bio}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${member.name} on LinkedIn`}
                  aria-label={`${member.name} on LinkedIn`}
                  className={`p-3 rounded-full ${
                    isDark
                      ? 'bg-gray-800/70 hover:bg-blue-900/50'
                      : 'bg-gray-200 hover:bg-blue-100'
                  } backdrop-blur-sm transition duration-200 hover:scale-110 shadow-md`}
                >
                  <FaLinkedin size={20} className="text-blue-500" />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${member.name} on GitHub`}
                  aria-label={`${member.name} on GitHub`}
                  className={`p-3 rounded-full ${
                    isDark
                      ? 'bg-gray-800/70 hover:bg-gray-900/50'
                      : 'bg-gray-200 hover:bg-gray-300'
                  } backdrop-blur-sm transition duration-200 hover:scale-110 shadow-md`}
                >
                  <FaGithub size={20} className={isDark ? 'text-white' : 'text-gray-800'} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <Loader fullscreen size="xl" color="purple" text="Our Team..." />
      </div>
    );
  }
  return (
    <div className={`min-h-screen w-full ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>

        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className={`p-5 rounded-full ${
              isDark
                ? 'bg-gray-800/70 border border-gray-700/50'
                : 'bg-white/70 border border-white/50'
            } shadow-lg backdrop-blur-sm`}>
              <FaCode className="text-blue-500 text-4xl" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our Team</h1>
          <div className={`max-w-2xl mx-auto p-5 rounded-xl ${
            isDark
              ? 'bg-gray-900/40 border border-gray-700/50'
              : 'bg-white/30 border border-white/50'
          } backdrop-blur-sm`}>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              OMEX is developed and maintained by a small team of four contributors, led by Prathyun Gupta.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Meet the Team</h2>
          <div className="flex flex-col space-y-10 max-w-5xl mx-auto">
            {teamMembers.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={`max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-lg ${
          isDark
            ? 'bg-gray-900/40 border border-gray-700/50'
            : 'bg-white/30 border border-white/50'
        } relative overflow-hidden shadow-xl`}>
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-full ${
                isDark
                  ? 'bg-gray-800/70 border border-gray-700/50'
                  : 'bg-white/70 border border-white/50'
              } shadow-lg backdrop-blur-sm`}>
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Get in Touch</h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Have questions, feedback, or ideas for collaboration? I'd love to hear from you! Feel free to reach out through the contact form.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
