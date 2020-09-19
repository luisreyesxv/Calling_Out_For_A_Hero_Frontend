import React from 'react'
import { Link } from 'react-router-dom'
import { Button, NavLink } from 'reactstrap';

const NavBar =()=>{
    


    return(
        <>
            <header>This is the NavBar</header>
            <div>
                <Link to='/' > going home </Link>
                <Link to='/login' > going to Login</Link>
            </div>
        </>
    )
}

export default NavBar