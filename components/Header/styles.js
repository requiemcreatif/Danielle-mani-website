"use client";
import { styled, Typography, Container } from "@mui/material";
import Image from "next/image";
import TrainingCenter from "../../public/images/training_center.svg";
import DarkCenter from "../../public/images/dark_center.png";
import Background from "../../public/images/background.png";

export const MainContentWrapper = styled(Container)``;

export const TopContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
  }
`;

export const TopLeft = styled("div")`
  h4 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 20px;
  }
`;

export const Headerbutton = styled("button")`
  background-color: #7d0323;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
`;

export const TopRight = styled("div")`
  position: relative;
  background-image: url(${TrainingCenter.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  height: 400px;
`;

export const TitleContainer = styled("div")`
  position: absolute;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .danielle {
    margin: 0;
    color: #7d0323;
    font-size: 4.27rem;
    font-weight: 900;
    line-height: 0.8;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
  .mani {
    color: #7d0323;
    font-size: 8.5rem;
    font-weight: 900;
    //letter-spacing: 6px;
    line-height: 0.8;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 6.5rem;
    }
  }
`;

export const ImageContainer = styled("div")`
  border-radius: 10px;
  overflow: hidden;
`;
