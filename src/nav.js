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




class nav extends  React.Component{
    render(){
        return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> MyMov</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/album">Album</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
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
export default nav ;

// <div>
// <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
//   <a className="navbar-brand mb-0 h1" href="#">
//   <img src={require('./photo/lacasa.jpg')} width="30" height="30" alt="" loading="lazy"/>
//    MyMov
//   </a>
// <button className="navbar-toggler" type="button" data-toggle="collapse"
//  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//  aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarSupportedContent">
//   <ul className="navbar-nav mr-auto">
//     <li className="nav-item active">
//       <a className="nav-link" href="#">
//       <Link className="font"  to="/" >
//         Home
//         </Link> <span className="sr-only">(current)</span></a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#">
//       <Link className="font"  to="/album" >
//         album</Link>
//         </a>
//     </li>
//     <li className="nav-item dropdown">
//       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Types of Films
//       </a>
//       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Comedy</a>

//                         <ul>
//                            <li className="nav-item dropdown"><a href="#">Dump and Dumper</a></li>
//                             <li className="nav-item dropdown"><a href="#">Ted</a></li>
//                             <li className="nav-item dropdown"><a href="#">Plus One</a></li>
//                         </ul>


//             <a className="dropdown-item" href="#">Action</a>
//                             <ul>
//                             <li className="nav-item dropdown"><a href="#">Harry Potter</a></li>
//                             <li className="nav-item dropdown"><a href="#">Game of thrones</a></li>
//                             <li className="nav-item dropdown"><a href="#">Lacaca</a></li>
//                         </ul>

//                     <a className="dropdown-item" href="#">Romantic</a>
//                                 <ul>
//                                     <li className="nav-item dropdown"><a href="#">Titanic</a></li>
//                                 </ul>
//                     <a className="dropdown-item" href="#">Drama</a>
//                                 <ul>
//                                     <li className="nav-item dropdown"><a href="#">Merage</a></li>
//                                     <li className="nav-item dropdown"><a href="#">MyDad</a></li>
//                                 </ul>
//             </div>




//     </li>

//   </ul>

// {/* <form class="form-inline my-2 my-lg-0">
//     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>

//   */}
// </div>
// </nav>



// </div>
