import React, { Component } from "react";
import MyPoems from "./MyPoems";
import { styleSheet } from "../styles";

export default class App extends Component {
  render() {
    return (
      <div style={{ background: styleSheet.background }}>
        <h1 style={{ color: styleSheet.color }}>Welcome To My Page</h1>
        <MyPoems />
        <footer
          style={
            ({ color: styleSheet.color, fontSize: styleSheet.fontSize })
          }
        >
          Thank You Visiting My Page!
        </footer>
      </div>
    );
  }
}
