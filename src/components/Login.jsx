import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";

function Login() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTextSubmit = (e) => {
    setText(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please enter your sign in details: </h2>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            className="input-group"
            onChange={handleTextSubmit}
            type="text"
            placeholder="Enter your username"
            value={text}
          />
          <br />
          <input
            className="input-group"
            onChange={handlePasswordSubmit}
            type="password"
            placeholder="Enter your password"
            value={password}
          />
          <br />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
