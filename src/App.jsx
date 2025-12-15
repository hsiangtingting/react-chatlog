import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';
// import ChatEntry from './components/ChatEntry.jsx';

const messageLike = message => {
  return {...message, liked: !message.liked};
};

const countTotalLikes = messages => {
  let totalLikes = 0;
  for (const message of messages) {
    if (message.liked) {
      totalLikes += 1;
    }
  }
  return totalLikes;
};

function App () {
  const initialMessages = messages;
  const [messages, setMessages] = useState(initialMessages);

  const handleMessageLike = (messageId) => {
    setMessages((prevMessages) => {
      return prevMessages.map((message) => {
        if (message.id === messageId) {
          return messageLike(message);
        } else {
          return message;
        }
      });
    });
  };

  const totalLikes = countTotalLikes(messages);

  return (

    <div className="chat between Vladimir and Estragon">
      <ChatLog
        entries={messages}
        onMessageLike={handleMessageLike}
      />
    </div>
  );
};

export default App;
