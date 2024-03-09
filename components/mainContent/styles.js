"use client";
import { styled } from "@mui/material";

export const Main = styled("main")`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const Wrapper = styled("div")`
  margin: 50px 0 70px 0;
  //padding: 10px;
  display: grid;
  grid-template-columns: 3.5fr 1.5fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContentWrapper = styled("div")`
  //padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContent = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  overflow: hidden;
  height: auto;
  border-radius: 10px;
  background-color: #000;
`;

export const MainDescription = styled("p")`
  text-align: justify;
  letter-spacing: 1px;
  font-size: 1rem;
  //padding: 1rem 0;
  margin: 0 0 1rem 0;
`;

export const SecondDescription = styled("p")`
  text-align: justify;
  letter-spacing: 1px;
  font-size: 1rem;
  //padding: 1rem 0;
  //margin: 0.5rem 0;
`;
