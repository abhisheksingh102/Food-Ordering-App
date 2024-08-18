import React from 'react';
import ReactDOM from 'react-dom';

const AppLayout = () => {
  return (
    <div className="app">
      <h1>Hello Abhishek!</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
