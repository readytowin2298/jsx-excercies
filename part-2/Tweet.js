function Tweet(props) {
    const { name, username, date, message } = props;
    return (
      <div className='tweet'>
        <span >{name}</span>
        <span className="username">@{username}</span>
        <span className="date">{date}</span>
        <p>{message}</p>
      </div>
    );
  }