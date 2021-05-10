function App() {
    return (
      <div>
        <Tweet
          name="David Ames"
          username="readytowin2298"
          date={new Date().toDateString()}
          message="This is the best brisket I ever ate!"
        />
        <Tweet
          name="Bryan Hale"
          username="bhale123"
          date={new Date().toDateString()}
          message="I've never tasted a better brisket!"
        />
        <Tweet
          name="Kynsingten Guthrie"
          username="guthrie.kynsingten98"
          date={new Date().toDateString()}
          message="Meh, needs some sauce"
        />
      </div>
    );
  }