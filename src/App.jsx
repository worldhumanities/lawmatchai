import React, { useState } from 'react';

export default function App() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (!question.trim()) return;
    setChatHistory([...chatHistory, { sender: 'user', text: question }]);
    setChatHistory(prev => [
      ...prev,
      { sender: 'bot', text: '我们正在分析您的问题，请稍候...' }
    ]);
    setQuestion('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          法律智能问答平台
        </h1>

        <p className="text-center text-gray-600 mb-4">
          输入您的法律问题，我们的系统将为您初步分析，并推荐合适的律师。
        </p>

        <div className="mb-6">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="例如：我想离婚，需要怎么办？"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="mt-3 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            发送问题
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
      </div>

      <footer className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LawMatchAI 法律智能平台
      </footer>
    </div>
  );
}

