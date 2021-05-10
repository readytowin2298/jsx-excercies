function Tweet(props) {
    const { name, username, date, message } = props;
    return (
      <div class='tweet'>
        <span >{name}</span>
        <span class="username">@{username}</span>
        <span class="date">{date}</span>
        <p>{message}</p>
      </div>
    );
  }