"use client";
import { styled } from "@mui/material";

export const HeaderWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const LeftWrapper = styled("div")`
  color: #000;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    //background-color: #000;
    color: #000;
    border: 1px solid #000;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const RightWrapper = styled("div")`
  color: #000;
  padding: 2rem;
`;
