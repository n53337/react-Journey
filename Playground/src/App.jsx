import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";

// //!  Functional Components and Props
/*
const Name = (props) => {
  return (
    <p>
      Hey, I am {props.fn} {props.ln}, am {props.age}
    </p>
  );
};

function App() {
  const name = {
    fn: "usef",
    ln: "u537",
    age: null,
  };

  return <Name {...name}></Name>;
}
*/

// ! Destructring

/*
const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li key={number}>{number}</li>);
  return list;
};

// App component

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};
*/

// ! Components using Classes

/*
class Hi extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return <h1>Hey {this.name}</h1>;
  }
}

class App extends React.Component {
  render() {
    return <Hi name="usef"></Hi>;
  }
}
*/

// ! State introduction !important

/*
class St extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 0,
  };

  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  sub = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <main>
        <h1>React State</h1>
        <button onClick={this.add}>Count +1 </button>
        <p>{this.state.counter}</p>
        <button onClick={this.sub}>Count -1 </button>
      </main>
    );
  }
}

class App extends React.Component {
  render() {
    return <St></St>;
  }
}
*/

// ! Dog/Cat State practice

class Animal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    animal: "cat",
    x: 0,
  };

  trigger = () => {
    const animals = ["cat", "dog"];
    this.setState({ x: this.state.x + 1 });
    this.setState({ animal: animals[this.state.x % 2] });
  };

  render() {
    return <h1 onClick={this.trigger}>{this.state.animal}</h1>;
  }
}

class App extends React.Component {
  render() {
    return <Animal></Animal>;
  }
}

export default App;
