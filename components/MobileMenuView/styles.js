"use client";
import { styled, Container } from "@mui/material";

export const MenuWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  position: fixed;

  top: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  background-color: #7d0323;
  color: #fff;
  padding: 10px;

  &.active {
    width: 100%;
    height: 100vh;
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out;
    background-color: #7d0323;
    color: #fff;
    padding: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;

    a {
      font-size: 2.5rem;
      text-transform: uppercase;
    }
  }

  .mobile {
    font-size: 3rem;
    //cursor: pointer;
  }
`;
