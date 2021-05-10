function App() {
    return (
      <div>
        <Person
          name="Bill"
          age={42}
          hobbies={["bowling", "watching tv", "drinking beer"]}
        />
        <Person name="Carol"
         age={34} 
         hobbies={["painting", "gambling"]} 
         />
        <Person
          name="Joey"
          age={7}
          hobbies={["skateboarding", "making prank calls"]}
        />
        <Person
          name="Isabella"
          age={9}
          hobbies={["reading", "saxophone", "eating vegetables"]}
        />
      </div>
    );
  }