import React from "react";
import { Container } from "./Container";
import { Login } from "./Login";

export class App extends React.Component {
  render() {
    return (
      <Container title="Esercizi react">
        <Login />
      </Container>
    );
  }
}
