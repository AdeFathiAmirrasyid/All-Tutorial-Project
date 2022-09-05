import React, {useContext} from "react";
import {Navbar,Collapse,NavbarToggler,NavbarText,NavbarBrand,Nav,NavItem, Button} from "reactstrap";
import { CartContext } from "../../CartContext";
import { NavLink } from "react-router-dom";

const NavbarComp = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const {value, setValue} = useContext(CartContext)
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about"  className='nav-link'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/mahasiswa"  className='nav-link'>Mahasiswa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/class"  className='nav-link'>Class</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hooks"  className='nav-link'>Hooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/useEffects"  className='nav-link'>Use Effects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/product"  className='nav-link'>Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/reducer"  className='nav-link'>Reducer</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
              <Button color='danger'>
                  <i className="fa fa-shopping-cart"></i>
                  <span className="badge badge-light">{value}</span>
              </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
