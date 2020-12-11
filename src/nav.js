import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  './footer.css';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';



class nav extends  React.Component{
  constructor() {
      super();
      this.state = {
        login: false,
      };
    }
    render(){
        return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> MyMov</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/album">Album</Nav.Link>
      <Nav.Link href="/cities">Cities</Nav.Link>
      {this.props.isLoggedIn ? <Nav.Link href="/Logout">Logout</Nav.Link> : <Nav.Link href="/Login">Login</Nav.Link>}
      <NavDropdown title="Types of Films" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
            <ul>
                    <li className="nav-item dropdown"><a href="#">Dump and Dumper</a></li>
                    <li className="nav-item dropdown"><a href="#">Ted</a></li>
                    <li className="nav-item dropdown"><a href="#">Plus One</a></li>
             </ul>
        <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
        <ul>
                   <li className="nav-item dropdown"><a href="#">Harry Potter</a></li>
                   <li className="nav-item dropdown"><a href="#">Game of thrones</a></li>
                   <li className="nav-item dropdown"><a href="#">Lacaca</a></li>
         </ul>
        <NavDropdown.Item href="#action/3.3">Romantic</NavDropdown.Item>
        <ul>
                    <li className="nav-item dropdown"><a href="#">Titanic</a></li>
        </ul>

        <NavDropdown.Divider />

      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>

        )
    }
}
const mapStateToProps = (state) => {
        console.log(state);
        return {
          isLoggedIn :state.loginR.login
        }
  };

export default connect(mapStateToProps)(nav);
