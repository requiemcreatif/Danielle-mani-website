"use client";
import { styled } from "@mui/material";
import { Container } from "@mui/material";

export const NavbarWrapper = styled("div")`
  background-color: #000;
  padding: 20px 0;

  h4 {
    color: #7d0323;
    font-size: 1.5rem;
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
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  align-items: center;
`;
export const NavbarMenu = styled("nav")`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
