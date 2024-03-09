"use client";
import { styled, Typography } from "@mui/material";
import Image from "next/image";
import TrainingCenter from "../../public/images/training_center.svg";
import DarkCenter from "../../public/images/dark_center.png";
import Background from "../../public/images/background.png";

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
    font-size: 1.6rem;
    font-weight: 500;
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
      width: 80%;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 30px;

    h3 {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 700;
      padding: 20px 0;
    }

    p {
      color: #fff;
      font-size: 1rem;
      font-weight: 300;
      padding: 0.8rem 0;
      width: 100%;
      text-align: center;
    }
  }
`;

export const HeaderContent = styled("div")`
  background-image: url(${Background.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  //opacity: 0.9;
  height: auto;
  //height: 80vh;
  //position: relative;
  border-radius: 10px;
  //background-color: #000;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const HeaderImage = styled(Image)`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  //width: 100%;
  //height: 100%;
`;

export const TitleContainer = styled("div")`
  //margin-top: 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const DanielleTitle = styled("h1")`
  margin: 0;
  color: #7d0323;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 0.8;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Mani = styled("h1")`
  color: #7d0323;
  font-size: 8.5rem;
  font-weight: 900;
  //letter-spacing: 6px;
  line-height: 0.8;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 6.5rem;
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
