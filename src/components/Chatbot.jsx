import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import { FaRobot, FaMinus, FaExpand } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const agentId = '691876e534fa533a0e572615';
  const apiKey = 'sk-default-WgWHzpB4GQcKWnKkthMsDWSFHpDoMYwB';
  const userId = 'gupta44000000@gmail.com';
  const sessionId = agentId + '-' + Math.random().toString(36).substr(2, 9);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = { role: 'user', content: input, timestamp };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);
    setIsTyping(true);

    try {
      const response = await axios.post('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        user_id: userId,
        agent_id: agentId,
        session_id: sessionId,
        message: currentInput
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        }
      });

      // Simulate typing delay for better UX
      setTimeout(() => {
        const botTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const botMessage = { role: 'bot', content: response.data.response || 'No response', timestamp: botTimestamp };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      console.error(error);
      setTimeout(() => {
        const errorTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const errorMessage = { role: 'bot', content: 'Sorry, something went wrong.', timestamp: errorTimestamp };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {!isOpen && (
        <div
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full cursor-pointer hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          style={{
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <FaRobot size={28} className="drop-shadow-lg" />
        </div>
      )}

      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-[420px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl flex flex-col z-50 transform transition-all duration-500 ease-out ${
          isMinimized ? 'h-14' : 'h-[600px]'
        }`}>

          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-3xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot size={16} />
              </div>
              <div>
                <span className="font-bold text-lg">OMEX Assistant</span>
                <div className="text-xs opacity-90">Always here to help</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={toggleMinimize}
                className="text-white hover:text-gray-200 transition-colors rounded-full p-2 hover:bg-white/20"
              >
                <FaMinus size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors rounded-full p-2 hover:bg-white/20"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Area */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaRobot size={40} className="text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <p className="text-xl font-semibold mb-2">Hello! I'm your OMEX Assistant</p>
                    <p className="text-sm opacity-75">Ask me anything about OMEX tools and features.</p>
                  </div>
                )}

                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                    <div className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                    }`}>
                      <Markdown className="prose prose-sm dark:prose-invert max-w-none break-words">{msg.content}</Markdown>
                      <div className={`text-xs mt-2 opacity-70 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">OMEX is typing...</span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 rounded-b-3xl">
                <div className="flex space-x-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
                      className="w-full p-4 pr-12 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Type your question here..."
                      disabled={loading}
                    />
                    {input && (
                      <button
                        onClick={() => setInput('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || loading}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.3);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.5);
        }
      `}</style>
    </>
  );
};

export default Chatbot;