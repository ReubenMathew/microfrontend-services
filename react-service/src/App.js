import React from "react";
import Todo from "./templates/todo";
import Weather from "./templates/api_simple";
import Login from "./templates/login";
class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <Weather />
        {/* A JSX comment */}
        <Login />
      </div>
    );
  }
}

export default App;
