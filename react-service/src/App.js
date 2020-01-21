import React from "react";
import Todo from "./templates/todo";
import Weather from "./templates/api_simple";
import Login from "./templates/login";
class App extends React.Component {
  render() {
    return (
      <div>
      <a href="0.0.0.0:8080">Click Here Boi!</a>
        <Todo />
        <Weather />
        {/* A JSX comment */}
        <Login />
      </div>
    );
  }
}

export default App;
