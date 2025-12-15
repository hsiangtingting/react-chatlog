import './App.css';
import initalMessagesData from './data/messages.json';
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
  const [messages, setMessages] = useState(initalMessagesData);

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

    <div className="App">
      <header>
        <h1>Vladimir and Estragon's Chatlog</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <ChatLog
        entries={messages}
        onMessageLike={handleMessageLike}
      />
    </div>
  );
};

export default App;
