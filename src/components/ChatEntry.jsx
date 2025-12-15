import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const { sender, body, timeStamp, liked, onMessageLike } = props;
  // console.log('Received TimeStamp:', timeStamp);

  const heartIcon = liked ? '❤️' : '🤍';

  const handleLikeClick = () => {
    onMessageLike(props.id);
  };

  return (
    <section className="chat-entry local">
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
