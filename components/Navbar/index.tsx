import { TfiMenu } from "react-icons/tfi";
import { Box, Container } from "@mui/material";
import Link from "next/link";
import {
  NavbarWrapper,
  NavbarContainer,
  MobileMenu,
  NavbarMenu,
} from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <h4>DM</h4>
        {/* <MobileMenu>
          <TfiMenu />
        </MobileMenu> */}
        <NavbarMenu>
          <Link href="#" className=" font-light">
            Accueil
          </Link>
          <Link href="#" className=" font-light">
            Services
          </Link>
          <Link href="#" className=" font-light">
            Contact
          </Link>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
