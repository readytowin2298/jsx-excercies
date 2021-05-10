function Person(props) {
    let canVote = props.age >= 18 ? "please go vote!" : "you must be 18";
  
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    const { name, age } = props
    let nickname;
    if(name.length >= 8){
        nickname = name.slice(0, 6);
    }
  
    return (
      <div className="person">
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {nickname ? nickname : name}</li>
          <li>Age: {age}</li>
          <ul>
            Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{canVote}</h3>
      </div>
    );
  }