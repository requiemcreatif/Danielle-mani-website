"use client";
import { styled } from "@mui/material";
import Image from "next/image";

export const HeaderContainer = styled("div")`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  padding-top: 60px;
`;

export const HeaderWrapper = styled("div")`
  //position: relative;
  margin-top: 40px;
  //background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    //color: #fff;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
    width: 30%;
    text-align: center;
    letter-spacing: 1px;
  }

  button {
    margin: 1rem 0;
    padding: 0.8rem 1rem;
    border-radius: 25px;
    color: #7d0323;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    border: #7d0323 1px solid;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;

    h3 {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 700;
    }

    p {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 300;
      padding: 0.8rem 0;
      width: 100%;
      text-align: center;
    }
  }
`;

export const HeaderContent = styled("div")`
  position: relative;
  background-color: #000;
  height: 700px;

  @media (max-width: 768px) {
    height: 85vh;
  }
`;

export const HeaderImage = styled(Image)`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MainTitle = styled("h1")`
  color: #7d0323;
  font-size: 5rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.35rem;
  }
`;

export const RightWrapper = styled("div")`
  color: #000;
  padding: 2rem;
`;

export const TextAnimation = styled("p")`
  color: #7d0323;
  margin: 0;
  padding: 0;
`;
