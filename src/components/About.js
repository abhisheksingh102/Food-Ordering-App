import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="user-card">
      <h1>About Us</h1>
      <h2>This is a food ordering learning app.</h2>
      {/* <User
        name={"Abhishek Singh (Function)"}
        location={"Varanasi (Function)"}
      /> */}
      <UserClass
        name={"Abhishek Singh (Class)"}
        location={"Varanasi (Class)"}
      />
    </div>
  );
};

export default About;
