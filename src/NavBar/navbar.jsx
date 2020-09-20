import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarToggler,
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
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return(
       
        <>
      <Navbar dark={true}  light expand="md" id="NavBar">
          {/* below is where i want to put in the logo for the website */}
         <NavbarBrand tag={Link} to='/' ><img style={{width:"50px"}} src="/favicon.ico" /></NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink tag={Link} to='/login' >LogIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">Register</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tasks
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  New Tasks
                </DropdownItem>
                <DropdownItem>
                  View All Tasks
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>{props.user? `Welcome ${props.user.name}`:null}</NavbarText>
      </Navbar>
    </>
    )
}

export default NavBar