import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhisheksingh102");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="flex items-center bg-gray-50 shadow-md rounded-lg p-6 mt-6">
        <img
          className="w-24 h-24 rounded-full mr-6"
          src={avatar_url}
          alt={name}
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Name: {name}</h2>
          <h3 className="text-md text-gray-500">
            Location: {location || "Noida"}
          </h3>
          <h4 className="text-sm text-blue-600 mt-2">
            Contact:{" "}
            <a
              href="https://github.com/abhisheksingh102"
              target="_blank"
              rel="noopener noreferrer"
            >
              @abhisheksingh102
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
