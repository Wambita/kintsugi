import React, { useState } from 'react';
import './style.css';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // Logic to show/hide chat could be placed here
  };

  return (
    <div className="chat-button" onClick={toggleChat}>
      <i className="fas fa-comments"></i>
    </div>
  );
};

export default ChatButton;
