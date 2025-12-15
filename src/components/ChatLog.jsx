import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

function ChatLog(props) {
  const {entries, onMessageLike} = props;

  return (
    <div className="chat-log">
      {entries.map((message) => (
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onMessageLike={onMessageLike}
        />
      ))}
    </div>
  );
}

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ChatLog;

