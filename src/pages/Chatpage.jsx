import React, { useEffect, useState } from 'react';
import ChatWindow from '../components/Chat/ChatWindow.jsx';
import { useParams } from 'react-router-dom';
import { getMessages } from '../utils/api.js';

function Chatpage() {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages(userId);
      setMessages(data);
    };
    fetchMessages();
  }, [userId]);

  return (
    <div>
      <h1>Chat with User {userId}</h1>
      <ChatWindow messages={messages} />
    </div>
  );
}

export default Chatpage;