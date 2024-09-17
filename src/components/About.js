import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our food ordering app, designed to help users explore and
          order from a variety of restaurants easily. Our goal is to provide a
          smooth and delightful food ordering experience while showcasing best
          practices in modern web development.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Explore top-rated restaurants near you.</li>
          <li>
            Get detailed restaurant information, including ratings and reviews.
          </li>
          <li>Order your favorite meals quickly and easily.</li>
        </ul>
        <UserClass
          name={"Abhishek Singh (Class)"}
          location={"Varanasi (Class)"}
        />
      </div>
    </div>
  );
};

export default About;
