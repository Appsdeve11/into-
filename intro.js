javascript
Copy code
// Part 1
// FirstComponent
const FirstComponent = () => {
  return <h1>My very first component</h1>;
};

// NamedComponent
const NamedComponent = (props) => {
  return <p>My name is {props.name}</p>;
};

// App
const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="John" />
    </div>
  );
};

// Part 2
// Tweet component
const Tweet = (props) => {
  return (
    <div className="tweet">
      <h3>Username: {props.username}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Date: {props.date}</h3>
      <p>{props.message}</p>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <Tweet
        username="john_doe"
        name="John Doe"
        date="2022-01-01"
        message="Hello, Twitter!"
      />
      <Tweet
        username="jane_smith"
        name="Jane Smith"
        date="2022-01-02"
        message="Just had a great day!"
      />
      <Tweet
        username="sam_jones"
        name="Sam Jones"
        date="2022-01-03"
        message="Excited for the weekend!"
      />
    </div>
  );
};

// Part 3
// Person component
const Person = (props) => {
  const { name, age, hobbies } = props;

  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
      {name.length > 8 ? <h3>{name.substring(0, 6)}</h3> : <h3>{name}</h3>}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

// App component
const App = () => {
  const persons = [
    {
      name: "John",
      age: 25,
      hobbies: ["Reading", "Writing", "Painting"],
    },
    {
      name: "Jane",
      age: 17,
      hobbies: ["Playing guitar", "Singing", "Dancing"],
    },
    {
      name: "Sam",
      age: 30,
      hobbies: ["Cooking", "Hiking", "Photography"],
    },
  ];

  return (
    <div>
      {persons.map((person, index) => (
        <Person key={index} {...person} />
      ))}
    </div>
  );
};