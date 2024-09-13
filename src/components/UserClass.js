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
    // api call
    const data = await fetch("https://api.github.com/users/abhisheksingh102");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="p-4 m-4 bg-gray-100 rounded-lg">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @abhisheksingh102</h4>
      </div>
    );
  }
}

export default UserClass;
