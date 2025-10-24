import { useTheme } from '../context/ThemeContext';

function CodeOptimizer() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Page Coming Soon</h1>
        <p className="text-lg text-black">This feature is under development. Stay tuned!</p>
      </div>
    </div>
  );
}

export default CodeOptimizer;
