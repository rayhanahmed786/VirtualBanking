import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    NavItem,
    NavLinks,
    MobileIcon,
    NavMenu,
    NavBtn,
    NavBtnLink,

} from './NavbarElements';



const Navbar = ({ toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        
    <FaBars />
   
</MobileIcon>
<NavMenu>
    <NavItem>
        <NavLinks to='about'>About</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='discover'>Discover</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='services'>Services</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='signup'>Sign Up</NavLinks>
    </NavItem>
    <NavBtn>
        <NavBtnLink to='sigin'>Sign In</NavBtnLink>
    </NavBtn>
</NavMenu>

            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
