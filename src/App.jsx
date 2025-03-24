import React, { useState } from 'react';
import logo from './logo.png';

export default function App() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (!question.trim()) return;
    setChatHistory([...chatHistory, { sender: 'user', text: question }]);
    setChatHistory(prev => [
      ...prev,
      { sender: 'bot', text: 'We are analyzing your question. Please wait...' }
    ]);
    setQuestion('');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow p-4 flex items-center justify-between px-8">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="LawMatchAI Logo" className="h-10" />
          <span className="text-2xl font-bold text-blue-800">LawMatchAI</span>
        </div>
        <nav className="text-sm space-x-4 text-gray-600">
          <a href="#" className="hover:text-blue-700">How It Works</a>
          <a href="#" className="hover:text-blue-700">For Lawyers</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </nav>
      </header>

      <main className="py-12 px-4 max-w-4xl mx-auto">
        <section className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
            Legal Help Starts Here
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Ask your legal question below and we’ll match you with the right lawyer.
          </p>

          <div className="mb-6">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="e.g. I want a divorce, what should I do?"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="mt-3 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl h-64 overflow-y-auto px-4 py-3 space-y-2">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm p-3 rounded-lg max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 self-end ml-auto text-right'
                    : 'bg-green-100 self-start text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center text-gray-600">
          <img
            src="https://images.unsplash.com/photo-1555375771-999cf99b48e5?auto=format&fit=crop&w=1050&q=80"
            alt="Legal Team"
            className="rounded-xl mx-auto mb-6 shadow-md max-h-64 object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Trusted Lawyers Across the U.S.</h2>
          <p>Our verified attorneys are ready to assist you in every legal matter—from family law to business disputes.</p>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500 py-4 border-t">
        &copy; {new Date().getFullYear()} LawMatchAI. All rights reserved.
      </footer>
    </div>
  );
}
