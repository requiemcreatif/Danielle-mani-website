import { TfiMenu } from "react-icons/tfi";
import { Box, Container } from "@mui/material";
import { NavbarWrapper, NavbarContainer, MobileMenu } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <h4>DM</h4>
        <MobileMenu>
          <TfiMenu />
        </MobileMenu>
        <nav>
          <a href="#" className=" font-light">
            Accueil
          </a>
          <a href="#" className=" font-light">
            Services
          </a>
          <a href="#" className=" font-light">
            Contact
          </a>
        </nav>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
