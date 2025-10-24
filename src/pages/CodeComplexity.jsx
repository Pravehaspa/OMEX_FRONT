import { useTheme } from '../context/ThemeContext';

function CodeComplexity() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Coming Soon</h1>
        <p className="text-lg">This feature is under development. Stay tuned!</p>
      </div>
    </div>
  );
}

export default CodeComplexity;