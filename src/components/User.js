import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @abhisheksingh102</h4>
    </div>
  );
};

export default User;
