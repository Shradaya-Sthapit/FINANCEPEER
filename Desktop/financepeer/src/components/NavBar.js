import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebaseAPI";
import { useHistory } from "react-router";
const Nav = () => {
  const [state, dispatch] = useStateValue();
  
  const handleAuthentication = () =>{
      console.log("mero turi khau")
    if(state.user){
        auth.signOut();
        
    }
}
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>FINANCEPEER</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {state.user.email}
            </Navbar.Text>
          </Navbar.Collapse>
          
        </Container>
        <button onClick={handleAuthentication}>Logout</button>
      </Navbar>
    </div>
  );
};

export default Nav;