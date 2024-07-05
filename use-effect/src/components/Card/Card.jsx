import { useEffect, useState } from "react";

const Card = ({ title, content }) => {
  const [isContentShowing, setIsContentShowing] = useState(false);
  const [count, setCount] = useState(0);

  //useEffect with no depdenency list, this will run every time the component renders
  // this will run **any time** this card renders
  useEffect(() => {
    console.log("Card rendered");
    // we should do an actual side effect here;
  });

  // if we want something to only happen when the component mounts we can call use effect with an empty depedency list
  useEffect(() => {
    // things we only want to run once might be, calling an api
    // an expensive function
    // getting data from a database
    console.log("Card has mounted");
    // sometimes we want to clean up a side effect
    // unsubscribe from things
    // set back some defaults
    // the return value of a use effect can only be a function for cleaning up
    return () => {
      console.log("Card has unmounted - we would clean up here");
    };
  }, []);
  // sometimes we want an effect to run only if a specific thing changes
  useEffect(() => {
    console.log("count has changed");
  }, [count]);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setIsContentShowing(!isContentShowing)}>
        {isContentShowing ? "Hide" : "Show"} Content
      </button>
      {isContentShowing && <p>{content}</p>}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Card;
