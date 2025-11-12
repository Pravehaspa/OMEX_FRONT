import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function FeedbackForm({ isDark }) {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={`mt-8 p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
      <h3 className="text-xl font-semibold mb-4">Share Your Feedback</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us what you think about the Code Optimizer..."
          className={`w-full p-3 rounded-lg resize-none ${
            isDark ? 'bg-gray-600 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-800 placeholder-gray-500'
          }`}
          rows="4"
          required
        />
        <button
          type="submit"
          className="mt-3 flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <FaPaperPlane className="mr-2" />
          Submit Feedback
        </button>
      </form>
      {submitted && (
        <p className="mt-3 text-green-500">Thank you for your feedback!</p>
      )}
    </div>
  );
}

export default FeedbackForm;