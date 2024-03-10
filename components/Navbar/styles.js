"use client";
import { styled } from "@mui/material";
import { Container } from "@mui/material";

export const MobileMenuWrapper = styled("div")`
  .menu-icon {
    font-size: 2rem;
    cursor: pointer;
    color: #000;
  }
`;

export const MobileMenuItems = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: #7d0323;
  #composition-menu {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    a {
      font-size: 2rem;
      text-transform: uppercase;
      color: #fff;
    }
  }
`;

export const NavbarWrapper = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;

  padding: 10px;

  h4 {
    color: #7d0323;
    font-size: 1.7rem;
    font-weight: 800;
  }
`;

export const MobileMenu = styled("div")`
  display: none;
  font-size: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavbarContainer = styled(Container)`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const NavbarMenu = styled("nav")`
  color: #000;
  display: flex;
  gap: 20px;
  font-size: 0.9rem;

  a:hover {
    color: #7d0323;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
