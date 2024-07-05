import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";
import UserCard from "./components/UserCard/UserCard";
import UserDetailsContainer from "./containers/UserDetailsContainer/UserDetailsContainer";

function App() {
  // const [isCardShown, setIsCardShown] = useState(true);
  // const [isCounterShown, setIsCounterShown] = useState(true);
  // const [isUserCardShown, setIsUserCardShown] = useState(true);

  return (
    <>
      {/* <button onClick={() => setIsCardShown(!isCardShown)}>Toggle Card</button>
      {isCardShown && <Card title="Example" content="Some text goes here" />} */}
      {/* <button onClick={() => setIsCounterShown(!isCounterShown)}>
        Toggle Counter
      </button>
      {isCounterShown && <Counter />} */}
      {/* <button onClick={() => setIsClockShown(!isClockShown)}>
        Toggle Clock
      </button>
      {isClockShown && <Clock />} */}
      {/* <button
        onClick={() => {
          setIsUserCardShown(!isUserCardShown);
        }}
      >
        Toggle UserCard
      </button> */}
      <UserDetailsContainer />
     
    </>
  );
}

export default App;
