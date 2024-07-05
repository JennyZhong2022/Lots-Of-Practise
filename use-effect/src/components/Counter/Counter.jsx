import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = "Use Effect Lesson";
    };
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default Counter;
