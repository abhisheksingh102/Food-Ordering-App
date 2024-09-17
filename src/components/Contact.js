import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Have a question, feedback, or just want to connect? Feel free to reach
          out via any of the following platforms, and I’ll get back to you as
          soon as possible.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h.01M12 16h.01M12 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-lg font-medium text-gray-700">
              Abhishek Singh
            </h2>
          </div>

          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h.01M12 16h.01M12 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-lg font-medium text-gray-700">
              Email:{" "}
              <a
                href="mailto:abhisheksingh10999@gmail.com"
                className="text-blue-600"
              >
                abhisheksingh10999@gmail.com
              </a>
            </h2>
          </div>

          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h.01M12 16h.01M12 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-lg font-medium text-gray-700">
              Instagram:{" "}
              <a
                href="https://instagram.com/abhi.singh10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                @abhi.singh10
              </a>
            </h2>
          </div>

          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h.01M12 16h.01M12 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-lg font-medium text-gray-700">
              Twitter:{" "}
              <a
                href="https://twitter.com/abhi_singh102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                @abhi_singh102
              </a>
            </h2>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-gray-600 text-lg">
            Looking forward to connecting with you!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
