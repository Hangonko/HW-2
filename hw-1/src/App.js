import logo from "./logo.svg";
import "./App.css";
import Parrent from "./Parrent";
import Child from "./Child";

function App() {
  return (
    <Parrent>
      <Child></Child>
    </Parrent>
  );
}

export default App;
