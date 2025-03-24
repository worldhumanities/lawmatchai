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
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>法律智能问答</h1>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="请输入您的法律问题"
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <button onClick={handleSend} style={{ padding: '6px 12px' }}>
        发送问题
      </button>
      <div style={{ marginTop: 20 }}>
        {chatHistory.map((msg, idx) => (
          <div
            key={idx}
            style={{
              background: msg.sender === 'user' ? '#d0ebff' : '#d3f9d8',
              padding: 10,
              margin: '5px 0'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}
