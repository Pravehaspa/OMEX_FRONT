import React from 'react';
import { FaCode } from 'react-icons/fa';

function CodeExamples({ examples, onSelect, isDark }) {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
      <h3 className="text-lg font-semibold mb-3">Code Examples</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((example, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
              isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => onSelect(example.code)}
          >
            <div className="flex items-center mb-2">
              <FaCode className="text-blue-500 mr-2" />
              <h4 className="font-medium">{example.name}</h4>
            </div>
            <pre className={`text-xs overflow-hidden ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {example.code.substring(0, 100)}...
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeExamples;