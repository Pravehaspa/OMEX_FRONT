import {
  FaArrowRight,
  FaBug,
  FaChartLine,
  FaCode,
  FaExchangeAlt,
  FaFileAlt,
  FaLightbulb,
  FaMagic,
  FaRobot,
  FaTools,
  FaUsers,
  FaVial,
  FaTachometerAlt
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import FAQSection from '../components/Faq';
import { Link, useNavigate } from "react-router-dom";
import AuroraText from '../components/AuroraText';
import NeonGradientCard from '../components/NeonGradientCard';
import LightRays from '../components/LightRays';
import { InteractiveHoverButton } from '@/registry/magicui/interactive-hover-button';

function Home() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const services = [
    {
      title: "Code Generator",
      description:
        "Generate clean, efficient code in multiple languages based on your requirements. Perfect for boilerplate code, algorithms, and common patterns.",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2070&q=80",
      link: "/codegenerator",
      icon: FaRobot,
      color: "gray",
    },
    {
      title: "Code Optimizer",
      description:
        "Improve your code's performance, readability, and maintainability with AI-powered suggestions and best practices.",
      img: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=2070&q=80",
      link: "/optimiser",
      icon: FaLightbulb,
      color: "slate",
    },
    {
      title: "Content Summarizer",
      description:
        "Extract key information from various sources including text, images, PDFs, and YouTube videos with our AI summarization tool.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2070&q=80",
      link: "/content-summarizer",
      icon: FaFileAlt,
      color: "zinc",
    },
  ];

  const features = [
    {
      icon: FaLightbulb,
      title: "AI-Powered Insights",
      description: "Get smart recommendations and insights from AI.",
      href: "/insights",
    },
    {
      icon: FaRobot,
      title: "Automation Tools",
      description: "Automate repetitive tasks and save time.",
      href: "/automation",
    },
    {
      icon: FaChartLine,
      title: "Analytics Dashboard",
      description: "Track progress with powerful analytics.",
      href: "/analytics",
    },
    {
      icon: FaUsers,
      title: "Code Collaboration",
      description: "Collaborate seamlessly with your development team.",
      href: "/collaboration",
    },
  ];

  const toolsData = [
    {
      id: 1,
      icon: FaVial,
      title: "Test Case Generator",
      description:
        "Automatically generate comprehensive test cases for your code.",
      href: "/test-case-generator",
      iconColor: "text-gray-400",
    },
    {
      id: 2,
      icon: FaMagic,
      title: "Code Beautifier",
      description:
        "Transform messy code into clean, well-structured code that follows best practices.",
      href: "/code-beautifier",
      iconColor: "text-slate-400",
    },
    {
      id: 3,
      icon: FaBug,
      title: "Error Debugger",
      description:
        "Identify and fix bugs, syntax errors, and logical issues in your code.",
      href: "/error-debugger",
      iconColor: "text-zinc-400",
    },
    {
      id: 4,
      icon: FaTachometerAlt,
      title: "Performance Analyzer",
      description:
        "Analyze execution time and memory usage of your code and get optimization recommendations.",
      href: "/performance-analyzer",
      iconColor: "text-stone-400",
    },
  ];

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden animated-bg">
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`${
              isDark ? "glass-dark" : "glass"
            } rounded-3xl py-12 px-6 max-w-4xl mx-auto`}
          >
            <div className="mb-8 inline-block p-3 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 rounded-full">
              <img src="/gup.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <AuroraText>Elevate Your Code with OMEX</AuroraText>
            </h1>
            <p
              className={`text-xl md:text-2xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto mb-10`}
            >
              The AI-powered platform for developers to optimize, generate, and
              analyze code with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <InteractiveHoverButton onClick={() => navigate('/code-tools')}>Explore Tools</InteractiveHoverButton>
              <Link
                to="/about"
                className={`${
                  isDark
                    ? "bg-black hover:bg-gray-900 text-white border border-white"
                    : "bg-black hover:bg-gray-900 text-white border border-black"
                } px-8 py-3 rounded-lg font-medium transition-all duration-200`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section
        className={`py-16 px-4 ${
          isDark ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          ></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              Discover our most popular tools that help developers write better
              code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} isDark={isDark} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/code-tools"
              className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold  transition-all duration-200 border-2
            ${
              isDark
                ? "border-white text-white bg-black/30 hover:bg-white hover:text-black"
                : "border-black text-black bg-white hover:bg-black hover:text-white"
            }
            hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 `}
            >
              View All Tools <FaArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section
        className={`py-16 px-4 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-extrabold text-center mb-10 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard2 key={index} {...feature} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Code Tools Section */}
      <section
        className={`py-16 px-4 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FaTools className="text-gray-600 dark:text-gray-400 text-3xl mr-3" />
            <h2 className="text-3xl font-bold text-center">New Code Tools</h2>
          </div>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto text-center mb-12`}
          >
            Explore our latest AI-powered tools to enhance your coding
            experience
          </p>

          <div className="">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {toolsData.map((tool) => (
                <FeatureCard
                  key={tool.id}
                  icon={tool.icon}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  iconColor={tool.iconColor}
                  isDark={isDark}
                />
              ))}
            </div>
          <div className="flex justify-center mt-10">
            <Link
              to="/code-tools"
              className={`
          inline-flex items-center gap-2
          ${isDark ? 'bg-white hover:bg-gray-100 text-black' : 'bg-black hover:bg-gray-900 text-white'}
          px-6 py-3 rounded-lg font-semibold
          shadow-md hover:shadow-xl
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
        `}
              tabIndex={0}
              role="button"
            >
              View All Tools <FaArrowRight size={18} />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-16 px-4 ${isDark ? "" : "bg-white"}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Input Your Code"
              description="Paste your code or write it directly in our editor."
            />
            <StepCard
              number="02"
              title="AI Analysis"
              description="Our AI analyzes your code for optimization opportunities."
            />
            <StepCard
              number="03"
              title="Get Results"
              description="Receive detailed feedback and suggestions for improvement."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-16 px-4 ${
          isDark ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          ></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`${
              isDark ? "glass-dark" : "glass"
            } rounded-2xl py-12 px-6 max-w-4xl mx-auto`}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Elevate Your Code?
            </h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-2xl mx-auto mb-8`}
            >
              Join thousands of developers who are writing better, cleaner, and
              more efficient code with OMEX.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/code-tools"
                className="bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center"
              >
                Explore Our Tools <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className={`${
                  isDark
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                } text-${
                  isDark ? "white" : "gray-800"
                } px-8 py-3 rounded-lg font-medium transition-all duration-200`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </section>
              <FAQSection/>

    </div>
  );
}

// Helper Components
const ServiceCard = ({
  isDark,
  title,
  description,
  img,
  link,
  icon: Icon,
  color,
}) => {
  return (
    <NeonGradientCard className="h-full">
      <div className="w-full h-full">
        <div
          className={`h-3 ${isDark ? `bg-${color}-500` : `bg-${color}-600`}`}
        ></div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <div
              className={`p-3 rounded-full ${
                isDark ? `bg-${color}-500 bg-opacity-20` : `bg-${color}-100`
              }`}
            >
              <Icon className={`text-${color}-500 text-xl`} />
            </div>
            <h3 className="ml-4 text-xl font-bold neon-text">{title}</h3>
          </div>

          <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>

          <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {description}
          </p>

          <Link
            to={link}
            className={`inline-block px-6 py-2 rounded-md font-semibold text-base transition duration-200
              ${
                isDark
                  ? "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  : "bg-gray-100 text-black border border-gray-400 hover:bg-gray-200"
              }
              cursor-pointer select-none`}
            tabIndex={0}
            role="button"
            aria-label={`Try ${title}`}
          >
            <span className="flex items-center gap-2">
              Try {title} <FaArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </NeonGradientCard>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  href,
  iconColor,
  isDark,
}) => {
  return (
    <NeonGradientCard className="h-full">
      <div className="flex flex-col items-center p-8 justify-between h-full">
        <div className="mb-4">
          <Icon className={`text-3xl drop-shadow-lg ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-center mb-2 neon-text">
          {title}
        </h3>
        <p className="text-center mb-6 px-2">
          {description}
        </p>
        <a
          href={href}
          tabIndex={0}
          role="button"
          aria-label={`Learn more about ${title}`}
        >
          <span
            className={`
              inline-flex items-center gap-2
              px-5 py-2 rounded-md font-semibold text-base
              transition-colors duration-200
              ${
                isDark
                  ? "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  : "bg-gray-100 text-black border border-gray-400 hover:bg-gray-200"
              }
              cursor-pointer select-none
            `}
          >
            Learn More <FaArrowRight size={16} />
          </span>
        </a>
      </div>
    </NeonGradientCard>
  );
};

const FeatureCard2 = ({
  icon: Icon,
  title,
  description,
  href,
  iconColor,
  isDark,
}) => {
  return (
    <NeonGradientCard className="h-full">
      <div className="flex flex-col items-center p-8 justify-between h-full">
        <div className="mb-4">
          <Icon className={`text-3xl drop-shadow-lg ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-center mb-2 neon-text">
          {title}
        </h3>
        <p className="text-center mb-6 px-2">
          {description}
        </p>
        <a
          href={href}
          tabIndex={0}
          role="button"
          aria-label={`Learn more about ${title}`}
        >
          <span
            className={`
              inline-flex items-center gap-2
              px-5 py-2 rounded-md font-semibold text-base
              transition-colors duration-200
              ${
                isDark
                  ? "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  : "bg-gray-100 text-black border border-gray-400 hover:bg-gray-200"
              }
              cursor-pointer select-none
            `}
          >
            Learn More <FaArrowRight size={16} />
          </span>
        </a>
      </div>
    </NeonGradientCard>
  );
};

const StepCard = ({ number, title, description }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } rounded-lg p-6 shadow-lg border`}
    >
      <div className="text-5xl font-bold text-gray-400 opacity-50 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  );
};

export default Home;
