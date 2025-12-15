import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const { sender, body, timeStamp, liked, onMessageLike, id, localSender } = props;
  // console.log('Received TimeStamp:', timeStamp);

  const heartIcon = liked ? '❤️' : '🤍';

  const handleLikeClick = () => {
    onMessageLike(props.id);
  };

  const isLocal = sender === localSender;
  const alignmentClass = isLocal ? 'local' : 'remote';
  const entryClassName = `chat-entry ${alignmentClass}`;

  return (
    <section className={entryClassName}>
    {/* className is dynamically set based on whether the sender is the local user */}
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        <button onClick={handleLikeClick} className='like'>{heartIcon}</button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onMessageLike: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ChatEntry;
