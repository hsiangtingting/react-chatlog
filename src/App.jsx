import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';
// import ChatEntry from './components/ChatEntry.jsx';


function App () {
  const [messages, setMessages] = useState(messages);
  return (
    <div className="App">
      <ChatLog
        entries={messages}
      />
    </div>
  );
};

export default App;
