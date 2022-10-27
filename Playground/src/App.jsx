import reactLogo from "./assets/react.svg";
import "./App.css";

// //!  Components and Props
// const Name = (props) => {
//   return (
//     <p>
//       Hey, I am {props.fn} {props.ln}, am {props.age}
//     </p>
//   );
// };

// function App() {
//   const name = {
//     fn: "usef",
//     ln: "u537",
//     age: null,
//   };

//   return <Name {...name}></Name>;
// }

// ! Destructring

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

export default App;
