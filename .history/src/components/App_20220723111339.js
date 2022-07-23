import React from "react";
import SignUp from "./SignUp";
import {Container} from "react-bootstrap"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}>

      <div>
      <SignUp/>
      </div>
    </Container>
)
}

export default App;
