import reactLogo from "./assets/react.svg";
import "./App.css";

//  Components and Props
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

export default App;
