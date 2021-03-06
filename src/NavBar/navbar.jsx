import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    // NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const NavBar =(props)=>{
   

    return(
       
        <>
        
      <Navbar dark={true}  light expand="md" id="NavBar">
          {/* below is where i want to put in the logo for the website */}
         <NavbarBrand tag={Link} to='/' ><img id="navbar-icon" alt="COFAH logo" src="/favicon.ico" /></NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
            {props.user?<NavLink tag={Link} to='/logout' >LogOut</NavLink>:<NavLink tag={Link} to='/login' >LogIn</NavLink>}
            </NavItem>
            <NavItem>
            {props.user?<NavLink tag={Link} to='/main' >Main Page</NavLink>:null}
            </NavItem>
            <NavItem>
            {props.user?null:<NavLink tag={Link} to="/register">Register</NavLink>}
            </NavItem>
            {props.user? (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Quests
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink style={{color: "peru"}} tag={Link} to="/main/quests/new">New Quest</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink style={{color: "peru"}} tag={Link} to="/main/quests/">View All Quests</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            ):null}
             
          </Nav>
          <NavbarText>{props.user? `Welcome ${props.user.name}`:null}</NavbarText>
      </Navbar>
    </>
    )
}

export default NavBar