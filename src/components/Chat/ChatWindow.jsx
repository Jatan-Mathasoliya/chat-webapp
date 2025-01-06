import React from 'react';
import Message from './Message.jsx';

function ChatWindow({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
}

export default ChatWindow;