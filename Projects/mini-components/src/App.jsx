import "./App.css";

// Components

const btn = (bg = "tomato", color = "wheat") => {
  const btnStyle = {
    backgroundColor: bg,
    color: color,
  };
  return (
    <button className="btn" style={btnStyle}>
      Click me
    </button>
  );
};

const App = () => {
  return btn();
};

export default App;
