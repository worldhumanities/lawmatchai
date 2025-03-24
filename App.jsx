import React, { useState } from 'react';

export default function App() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (!question.trim()) return;
    setChatHistory([...chatHistory, { sender: 'user', text: question }]);
    setTimeout(() => {
      setChatHistory(prev => [...prev, { sender: 'bot', text: '我们正在分析您的问题，请稍候...' }]);
    }, 500);
    setQuestion('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>遇到法律问题？让智能助手帮您初步判断</h1>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="请输入您的问题，例如：房东不给退押金怎么办？"
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button onClick={handleSend} style={{ marginTop: '10px', padding: '10px 20px' }}>
        发送问题
      </button>
      <div style={{ marginTop: '20px', maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {chatHistory.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '8px' }}>
            <span style={{ background: msg.sender === 'user' ? '#cce5ff' : '#d4edda', padding: '6px 10px', borderRadius: '6px', display: 'inline-block' }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
