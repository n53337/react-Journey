import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { Component, useState } from "react";

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

/*
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
  e;
  render() {
    return <h1 onClick={this.trigger}>{this.state.animal}</h1>;
  }
}

class App extends React.Component {
  render() {
    return <Animal></Animal>;
  }
}
*/

// ! Conditional Rendering

/*
// A button component
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

// class based component
class Header extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "u53f",
        lastName: "u53f",
      },
      date: "Oct 28, 2022",
    };

    const LoggedIn = () => {
      return <h3>Welcome to your account</h3>;
    };

    const LoggedOut = () => {
      return <h3>Please Login</h3>;
    };

    const text = this.state.loggedIn ? "Logout" : "Log in";

    return (
      <div className="app">
        <Header data={data} />
        {this.state.loggedIn ? <LoggedIn></LoggedIn> : <LoggedOut></LoggedOut>}
        <Button text={text} onClick={this.handleLogin} />
      </div>
    );
  }
}
*/

// ! Forms

// TODO: create a real-time data change app

/*
class App extends Component {
  state = {
    text: "",
  };

  showText = (e) => {
    this.setState({ text: e.target.value });
    console.log(e);
  };

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="Type Something..."
            value={this.state.text}
            onChange={this.showText}
          />
        </form>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}
*/

// TODO Functional Components

// ! useState

const Counter = ({ name }) => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      {name}:{counter}
    </button>
  );
};

const App = () => {
  return (
    <>
      <Counter name={"count"}></Counter>
      <Counter name={"click"}></Counter>
    </>
  );
};
export default App;
